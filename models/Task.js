import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required for a task'],
      index: true,
    },
    studyPlanId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudyPlan',
      required: [true, 'Study Plan ID is required for a task'],
      index: true,
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      enum: {
        values: ['dsa', 'quant', 'reasoning', 'english', 'revision'],
        message: '{VALUE} is not a supported subject',
      },
      lowercase: true,
      trim: true,
      index: true,
    },
    dayNumber: {
      type: Number,
      required: [true, 'Day number is required'],
      min: [1, 'Day number must be at least 1'],
      max: [365, 'Day number cannot exceed 365'],
      index: true,
    },
    topic: {
      type: String,
      required: [true, 'Topic is required'],
      trim: true,
      maxlength: [200, 'Topic cannot exceed 200 characters'],
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [300, 'Title cannot exceed 300 characters'],
    },
    description: {
      type: String,
      default: '',
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    estimatedMinutes: {
      type: Number,
      default: 60,
      min: [5, 'Estimated minutes must be at least 5'],
      max: [720, 'Estimated minutes cannot exceed 720'],
    },
    learningObjectives: {
      type: [String],
      default: [],
    },
    practiceQuestions: [
      {
        title: { type: String, required: true },
        url: { type: String, required: true },
        platform: { type: String, default: 'LeetCode' },
        difficulty: { type: String, default: 'Medium' },
      },
    ],
    exercise: {
      prompt: { type: String, default: '' },
      question: { type: String, default: '' },
      options: { type: [String], default: [] },
      answerKey: { type: String, default: '' },
      explanation: { type: String, default: '' },
    },
    completed: {
      type: Boolean,
      default: false,
      index: true,
    },
    completedAt: {
      type: Date,
      default: null,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

// 1. Unique compound index preventing duplicate task initialization within a study plan
TaskSchema.index(
  { studyPlanId: 1, dayNumber: 1, subject: 1, title: 1 },
  { unique: true }
);

// 2. Query index for fast filtering by user, day, and subject
TaskSchema.index({ userId: 1, dayNumber: 1, subject: 1 });

// Force re-compilation in development to pick up schema updates
if (mongoose.models.Task) {
  delete mongoose.models.Task;
}

const Task = mongoose.model('Task', TaskSchema);

export default Task;
