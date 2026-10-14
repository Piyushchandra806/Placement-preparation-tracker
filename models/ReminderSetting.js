/**
 * ReminderSetting Model
 * Stores user reminder preferences, local timezone, and Web Push subscriptions.
 */
import mongoose from 'mongoose';

const WebPushSubscriptionSchema = new mongoose.Schema(
  {
    endpoint: {
      type: String,
      required: true,
    },
    keys: {
      p256dh: { type: String, required: true },
      auth: { type: String, required: true },
    },
    device: {
      type: String,
      default: 'Unknown browser',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: true }
);

const ReminderSettingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
      index: true,
    },
    // Master switch to enable or disable daily reminders
    enabled: {
      type: Boolean,
      default: true,
    },
    // Daily reminder time (HH:MM in 24h format, default 20:30 = 8:30 PM)
    reminderTime: {
      type: String,
      default: '20:30',
      match: [/^([01]\d|2[0-3]):[0-5]\d$/, 'Reminder time must be formatted as HH:MM in 24-hour time'],
    },
    // End-of-day incomplete tasks reminder switch
    endOfDayEnabled: {
      type: Boolean,
      default: true,
    },
    // End-of-day reminder time (default 23:30 = 11:30 PM)
    endOfDayTime: {
      type: String,
      default: '23:30',
      match: [/^([01]\d|2[0-3]):[0-5]\d$/, 'End-of-day time must be formatted as HH:MM in 24-hour time'],
    },
    // User local timezone (e.g. Asia/Kolkata, America/New_York)
    timezone: {
      type: String,
      default: 'Asia/Kolkata',
    },
    // Web Push subscriptions for this user's devices
    webPushSubscriptions: {
      type: [WebPushSubscriptionSchema],
      default: [],
    },
    // Prevent duplicate reminders for the same calendar date
    lastDailyReminderSentDate: {
      type: String,
      default: null,
    },
    lastEndOfDaySentDate: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

if (mongoose.models.ReminderSetting) {
  delete mongoose.models.ReminderSetting;
}

const ReminderSetting = mongoose.model('ReminderSetting', ReminderSettingSchema);

export default ReminderSetting;
