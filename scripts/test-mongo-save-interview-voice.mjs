import { connectToDatabase } from "../lib/mongodb.js";
import VoiceRecording from "../models/VoiceRecording.js";
import User from "../models/User.js";

async function verifyMongoVoiceSave() {
  console.log("=== TESTING MONGODB VOICE RECORDING STORAGE ===\n");

  await connectToDatabase();
  console.log("✓ Connected to MongoDB Atlas.");

  // Get active or first user
  const user = await User.findOne().sort({ createdAt: -1 });
  if (!user) {
    console.error("No user found in database!");
    process.exit(1);
  }
  console.log(`✓ Active User ID: ${user._id}`);

  // Test data: dummy base64 webm audio data URL
  const testAudioData = "data:audio/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAAHTEU2bmVoVQF9gX6DAkOCQyBCU2Snp6nkW1VZtdXBpbmc=";
  const testTranscript = "I am a student and I want to become a software engineer.";
  const testDay = 2; // test on Day 2
  const testSubject = "english";

  console.log(`\nUpserting test voice recording for Day ${testDay}, Subject: ${testSubject}...`);
  const savedDoc = await VoiceRecording.findOneAndUpdate(
    {
      userId: user._id,
      dayNumber: testDay,
      subject: testSubject,
    },
    {
      userId: user._id,
      dayNumber: testDay,
      subject: testSubject,
      audioData: testAudioData,
      mimeType: "audio/webm",
      transcript: testTranscript,
      duration: 8,
      wordCount: testTranscript.split(" ").length,
    },
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    }
  );

  console.log("✓ Document successfully saved in MongoDB Atlas!");
  console.log(`  - Document ID: ${savedDoc._id}`);
  console.log(`  - Day: ${savedDoc.dayNumber}`);
  console.log(`  - Subject: ${savedDoc.subject}`);
  console.log(`  - Transcript: "${savedDoc.transcript}"`);
  console.log(`  - Duration: ${savedDoc.duration}s`);
  console.log(`  - Updated At: ${savedDoc.updatedAt}`);

  // Verify retrieval
  const retrieved = await VoiceRecording.findOne({
    userId: user._id,
    dayNumber: testDay,
    subject: testSubject,
  }).lean();

  if (
    retrieved &&
    retrieved.dayNumber === testDay &&
    retrieved.subject === testSubject &&
    retrieved.transcript === testTranscript
  ) {
    console.log("\n✓ VERIFICATION SUCCESSFUL: Recording verified in MongoDB Atlas!");
  } else {
    console.error("FAILED to retrieve correct recording from MongoDB!");
    process.exit(1);
  }

  process.exit(0);
}

verifyMongoVoiceSave();
