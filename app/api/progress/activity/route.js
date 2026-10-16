import { connectToDatabase } from '@/lib/mongodb';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';
import { getComprehensiveProgressMetrics } from '@/lib/activity-tracker';

/**
 * GET /api/progress/activity
 * Returns detailed task completion heatmap activity and streak statistics
 * strictly computed from real MongoDB task records.
 */
export async function GET(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    await connectToDatabase();

    const url = new URL(request.url);
    const queryTz = url.searchParams.get('timezone');
    const headerTz = request.headers.get('x-timezone');
    const timeZone = queryTz || headerTz || null;

    const metrics = await getComprehensiveProgressMetrics(auth.user.id, timeZone);

    return successResponse({
      startDate: metrics.startDate,
      currentDate: metrics.currentDate,
      currentDay: metrics.currentDay,
      totalActiveDays: metrics.totalActiveDays,
      fullyCompletedDays: metrics.fullyCompletedDays,
      currentStreak: metrics.currentStreak,
      maxStreak: metrics.maxStreak,
      activity: metrics.dailyActivity,
    });
  } catch (error) {
    return handleApiError(error, 'Failed to fetch activity heatmap data');
  }
}
