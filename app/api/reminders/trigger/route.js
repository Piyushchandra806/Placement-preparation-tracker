import { connectToDatabase } from '@/lib/mongodb';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';
import ReminderSetting from '@/models/ReminderSetting';
import { evaluateUserReminder } from '@/lib/reminder-engine';

/**
 * POST /api/reminders/trigger
 * Triggers or simulates reminder evaluation for the authenticated user (or all users if triggered by cron).
 */
export async function POST(request) {
  try {
    const auth = await getAuthUser(request);
    const body = await request.json().catch(() => ({}));
    const { force = true, simulateTime, type = 'daily' } = body;

    // Check if user is authenticated
    if (auth.authenticated) {
      await connectToDatabase();
      const result = await evaluateUserReminder(auth.user.id, {
        force,
        simulateTime,
        type,
      });

      return successResponse({
        message: 'Reminder evaluation completed',
        result,
      });
    }

    // Support cron trigger with system secret header if unauthenticated
    const cronSecretHeader = request.headers.get('x-cron-secret');
    const expectedSecret = process.env.JWT_SECRET || 'mission90_super_secret_jwt_key_2026_placement_tracker_auth_secure';

    if (cronSecretHeader && cronSecretHeader === expectedSecret) {
      await connectToDatabase();
      const settings = await ReminderSetting.find({ enabled: true }).select('userId').lean();
      const results = [];

      for (const s of settings) {
        try {
          const res = await evaluateUserReminder(s.userId.toString(), {
            force: false,
            simulateTime: null,
          });
          results.push({ userId: s.userId.toString(), ...res });
        } catch (uErr) {
          results.push({ userId: s.userId.toString(), error: uErr.message });
        }
      }

      return successResponse({
        message: `Cron reminder tick processed for ${settings.length} users`,
        evaluatedCount: settings.length,
        results,
      });
    }

    return errorResponse('Unauthorized: please log in or provide valid cron secret', 401);
  } catch (error) {
    return handleApiError(error, 'Failed to trigger reminder evaluation');
  }
}
