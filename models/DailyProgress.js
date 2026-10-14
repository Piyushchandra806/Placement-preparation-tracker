import mongoose from 'mongoose';

const DailyProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required for daily progress'],
      index: true,
    },
    studyPlanId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudyPlan',
      required: [true, 'Study Plan ID is required for daily progress'],
      index: true,
    },
    date: {
      type: String,
      required: [true, 'Date is required (YYYY-MM-DD)'],
      match: [/^\d{4}-\d{2}-\d{2}$/, 'Date must be formatted as YYYY-MM-DD'],
      index: true,
    },
    completedTasks: {
      type: Number,
      default: 0,
      min: [0, 'Completed tasks cannot be negative'],
    },
    totalTasks: {
      type: Number,
      default: 0,
      min: [0, 'Total tasks cannot be negative'],
    },
    dailyScore: {
      type: Number,
      default: 0,
      min: [0, 'Daily score cannot be negative'],
      max: [100, 'Daily score cannot exceed 100'],
    },
    actualStudyMinutes: {
      type: Number,
      default: 0,
      min: [0, 'Study minutes cannot be negative'],
      max: [1440, 'Study minutes cannot exceed 1440 minutes in a day'],
    },
  },
  {
    timestamps: true, // provides createdAt and updatedAt
    versionKey: false,
  }
);

// Compound unique index ensuring only one progress entry per user, plan, and date
DailyProgressSchema.index(
  { userId: 1, studyPlanId: 1, date: 1 },
  { unique: true }
);

// Index for chronological progress queries
DailyProgressSchema.index({ userId: 1, date: -1 });

const DailyProgress =
  mongoose.models.DailyProgress ||
  mongoose.model('DailyProgress', DailyProgressSchema);

export default DailyProgress;
