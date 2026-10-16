import { connectToDatabase } from '../lib/mongodb.js';
import User from '../models/User.js';
import { getComprehensiveProgressMetrics } from '../lib/activity-tracker.js';

await connectToDatabase();

const user = await User.findOne({ email: 'piyushchandr806@gmail.com' });
console.log('Testing activity tracker for user:', user.email, 'ID:', user._id);

const metrics = await getComprehensiveProgressMetrics(user._id);

console.log('=== CALCULATED METRICS ===');
console.log('Start Date:', metrics.startDate);
console.log('Current Date (Today):', metrics.currentDate);
console.log('Current Day Number:', metrics.currentDay);
console.log('Total Active Days:', metrics.totalActiveDays);
console.log('Fully Completed Days:', metrics.fullyCompletedDays);
console.log('Current Streak:', metrics.currentStreak);
console.log('Max Streak:', metrics.maxStreak);
console.log('Total Tasks:', metrics.totalTasks, 'Completed Tasks:', metrics.completedTasks);

console.log('=== DAYS 1 to 4 ACTIVITY ===');
for (let d = 1; d <= 4; d++) {
  const dateKey = Object.keys(metrics.dailyActivity).find(k => metrics.dailyActivity[k].dayNumber === d);
  console.log(`Day ${d} (${dateKey}):`, metrics.dailyActivity[dateKey]);
}

process.exit(0);
