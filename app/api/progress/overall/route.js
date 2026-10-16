import { connectToDatabase } from '@/lib/mongodb';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';
import { getComprehensiveProgressMetrics } from '@/lib/activity-tracker';

/**
 * GET /api/progress/overall
 * Calculates and returns comprehensive progress metrics for the authenticated user,
 * including real task-based activity heatmap history, streaks, and subject mastery.
 */
export async function GET(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    await connectToDatabase();

    // Check for client-supplied timezone in query or headers
    const url = new URL(request.url);
    const queryTz = url.searchParams.get('timezone');
    const headerTz = request.headers.get('x-timezone');
    const timeZone = queryTz || headerTz || null;

    const metrics = await getComprehensiveProgressMetrics(auth.user.id, timeZone);

    return successResponse({
      stats: metrics,
    });
  } catch (error) {
    return handleApiError(error, 'Failed to fetch overall progress');
  }
}
