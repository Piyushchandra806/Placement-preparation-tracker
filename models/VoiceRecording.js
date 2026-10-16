import mongoose from 'mongoose';

const VoiceRecordingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
      index: true,
    },
    dayNumber: {
      type: Number,
      required: [true, 'Day number is required'],
      min: [1, 'Day number must be at least 1'],
      max: [365, 'Day number cannot exceed 365'],
      index: true,
    },
    subject: {
      type: String,
      default: 'english',
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    audioData: {
      type: String,
      required: [true, 'Audio data is required'],
    },
    mimeType: {
      type: String,
      default: 'audio/webm',
    },
    transcript: {
      type: String,
      default: '',
      trim: true,
    },
    duration: {
      type: Number,
      default: 0,
    },
    wordCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Compound unique index ensuring only one voice recording entry per user, subject, and day
VoiceRecordingSchema.index(
  { userId: 1, subject: 1, dayNumber: 1 },
  { unique: true }
);

const VoiceRecording =
  mongoose.models.VoiceRecording ||
  mongoose.model('VoiceRecording', VoiceRecordingSchema);

export default VoiceRecording;
