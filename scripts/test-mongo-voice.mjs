import { connectToDatabase } from "../lib/mongodb.js";
import VoiceRecording from "../models/VoiceRecording.js";
import User from "../models/User.js";

async function testMongo() {
  console.log("Testing MongoDB connection and VoiceRecording model...");
  try {
    await connectToDatabase();
    console.log("✓ Connected to MongoDB successfully!");

    const userCount = await User.countDocuments();
    console.log(`✓ Users in DB: ${userCount}`);

    const recordingCount = await VoiceRecording.countDocuments();
    console.log(`✓ Voice recordings currently in MongoDB: ${recordingCount}`);

    const latest = await VoiceRecording.find().sort({ updatedAt: -1 }).limit(3).lean();
    console.log("✓ Latest voice recordings:", latest.map(r => ({
      id: r._id,
      day: r.dayNumber,
      subject: r.subject,
      transcript: r.transcript?.slice(0, 30),
      duration: r.duration,
      updatedAt: r.updatedAt
    })));
  } catch (err) {
    console.error("MongoDB test error:", err.message);
  }
  process.exit(0);
}

testMongo();
