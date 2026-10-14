import mongoose from 'mongoose';

const StudyPlanSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required for a study plan'],
      index: true,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    duration: {
      type: Number,
      default: 90,
      min: [1, 'Duration must be at least 1 day'],
      max: [365, 'Duration cannot exceed 365 days'],
    },
    dailyStudyTarget: {
      type: Number,
      default: 4, // target hours per day
      min: [1, 'Daily target must be at least 1 hour'],
      max: [24, 'Daily target cannot exceed 24 hours'],
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

// Prevent duplicate active study plans for the same user
StudyPlanSchema.index({ userId: 1, createdAt: -1 });

const StudyPlan =
  mongoose.models.StudyPlan || mongoose.model('StudyPlan', StudyPlanSchema);

export default StudyPlan;
