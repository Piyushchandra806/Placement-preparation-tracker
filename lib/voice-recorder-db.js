/**
 * Dual Storage Utility for Daily Voice Recordings & Spoken Transcripts:
 * 1. MongoDB Atlas: Cloud database persistence across devices (laptops, phones, tablets).
 * 2. IndexedDB: Local browser cache for 0ms instantaneous loading and offline playback.
 */

const DB_NAME = "mission90_voice_db";
const DB_VERSION = 1;
const STORE_NAME = "recordings";

function openDB() {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      return reject(new Error("IndexedDB is not supported"));
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Convert an Audio Blob to Base64 Data URL.
 */
export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Convert a Base64 Data URL back to an Audio Blob.
 */
export function dataUrlToBlob(dataUrl) {
  try {
    const parts = dataUrl.split(",");
    const mimeMatch = parts[0].match(/:(.*?);/);
    const mimeType = mimeMatch ? mimeMatch[1] : "audio/webm";
    const byteCharacters = atob(parts[1]);
    const byteArrays = [];

    const sliceSize = 512;
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      byteArrays.push(new Uint8Array(byteNumbers));
    }

    return new Blob(byteArrays, { type: mimeType });
  } catch (err) {
    console.error("Failed to convert dataUrl to Blob:", err);
    return null;
  }
}

/**
 * Save audio blob, transcript, and metadata to IndexedDB.
 */
export async function saveVoiceToIndexedDB({ day, subject, audioBlob, transcript, duration }) {
  try {
    const db = await openDB();
    const id = `${subject}_day_${day}`;
    const record = {
      id,
      day,
      subject,
      audioBlob,
      transcript: transcript || "",
      duration: duration || 0,
      updatedAt: new Date().toISOString(),
    };

    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(record);

      req.onsuccess = () => resolve(record);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error("Failed to save to IndexedDB:", err);
    return null;
  }
}

/**
 * Retrieve saved voice recording from IndexedDB.
 */
export async function getVoiceFromIndexedDB(day, subject) {
  try {
    const db = await openDB();
    const id = `${subject}_day_${day}`;

    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(id);

      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error("Failed to load from IndexedDB:", err);
    return null;
  }
}

/**
 * Delete voice recording from IndexedDB.
 */
export async function deleteVoiceFromIndexedDB(day, subject) {
  try {
    const db = await openDB();
    const id = `${subject}_day_${day}`;

    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(id);

      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error("Failed to delete from IndexedDB:", err);
    return false;
  }
}

/**
 * Save to both MongoDB Atlas and IndexedDB.
 */
export async function saveVoiceRecording({ day, subject, audioBlob, transcript, duration }) {
  // 1. Immediately save to local IndexedDB for instant UI response
  const localRecord = await saveVoiceToIndexedDB({
    day,
    subject,
    audioBlob,
    transcript,
    duration,
  });

  // 2. Concurrently save to MongoDB Atlas in the cloud
  let mongoSaved = false;
  try {
    const audioData = await blobToBase64(audioBlob);
    const mimeType = audioBlob.type || "audio/webm";

    const token = typeof window !== "undefined" ? localStorage.getItem("mission90_token") : null;
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await fetch("/api/voice-recordings", {
      method: "POST",
      headers,
      credentials: "same-origin",
      body: JSON.stringify({
        day,
        subject,
        audioData,
        mimeType,
        transcript,
        duration,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      mongoSaved = !!data.success;
    } else {
      console.warn("MongoDB voice save failed with status:", res.status);
    }
  } catch (err) {
    console.error("Failed to sync voice recording to MongoDB:", err);
  }

  return {
    ...localRecord,
    mongoSaved,
  };
}

/**
 * Fetch from MongoDB Atlas and cache into IndexedDB if found.
 */
export async function fetchVoiceRecordingFromMongoDB(day, subject) {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("mission90_token") : null;
    const headers = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await fetch(`/api/voice-recordings?day=${day}&subject=${encodeURIComponent(subject)}`, {
      headers,
      credentials: "same-origin",
    });

    if (!res.ok) return null;
    const data = await res.json();

    if (data.success && data.recording && data.recording.audioData) {
      const { audioData, mimeType, transcript, duration, updatedAt } = data.recording;
      const audioBlob = dataUrlToBlob(audioData);

      if (audioBlob) {
        // Cache to IndexedDB for instant subsequent loads
        await saveVoiceToIndexedDB({
          day,
          subject,
          audioBlob,
          transcript,
          duration,
        });

        return {
          day,
          subject,
          audioBlob,
          transcript,
          duration,
          updatedAt,
          fromMongo: true,
        };
      }
    }
    return null;
  } catch (err) {
    console.warn("Could not fetch recording from MongoDB:", err);
    return null;
  }
}

/**
 * Load recording: checks IndexedDB first, then MongoDB in the background.
 */
export async function getVoiceRecording(day, subject) {
  const local = await getVoiceFromIndexedDB(day, subject);
  if (local && local.audioBlob) {
    return { ...local, source: "cache" };
  }

  // Not in local cache, check MongoDB
  const remote = await fetchVoiceRecordingFromMongoDB(day, subject);
  if (remote) {
    return { ...remote, source: "mongodb" };
  }

  return null;
}

/**
 * Delete voice recording from both IndexedDB and MongoDB.
 */
export async function deleteVoiceRecording(day, subject) {
  // Delete from IndexedDB
  await deleteVoiceFromIndexedDB(day, subject);

  // Delete from MongoDB Atlas
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("mission90_token") : null;
    const headers = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;

    await fetch(`/api/voice-recordings?day=${day}&subject=${encodeURIComponent(subject)}`, {
      method: "DELETE",
      headers,
      credentials: "same-origin",
    });
    return true;
  } catch (err) {
    console.error("Failed to delete voice recording from MongoDB:", err);
    return false;
  }
}
