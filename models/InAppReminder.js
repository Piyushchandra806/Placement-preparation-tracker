/**
 * InAppReminder Model
 * Stores in-app notification records, missed-goal summaries, and carry-forward state.
 */
import mongoose from 'mongoose';

const InAppReminderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ['daily_reminder', 'end_of_day_missed', 'goal_completed', 'carry_forward_prompt', 'test_reminder'],
      default: 'daily_reminder',
      index: true,
    },
    date: {
      type: String,
      required: true,
      index: true,
    },
    dayNumber: {
      type: Number,
      default: 1,
    },
    pendingTaskCount: {
      type: Number,
      default: 0,
    },
    pendingTaskIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
      },
    ],
    read: {
      type: Boolean,
      default: false,
      index: true,
    },
    dismissed: {
      type: Boolean,
      default: false,
    },
    carriedForward: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    versionKey: false,
  }
);

InAppReminderSchema.index({ userId: 1, createdAt: -1 });

if (mongoose.models.InAppReminder) {
  delete mongoose.models.InAppReminder;
}

const InAppReminder = mongoose.model('InAppReminder', InAppReminderSchema);

export default InAppReminder;
