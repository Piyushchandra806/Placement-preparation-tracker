import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';
import { carryForwardIncompleteTasks } from '@/lib/reminder-engine';
import mongoose from 'mongoose';

/**
 * POST /api/reminders/carry-forward
 * Carries forward unfinished tasks from a missed goal into the pending backlog.
 */
export async function POST(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const body = await request.json().catch(() => ({}));
    const { reminderId } = body;

    if (!reminderId || !mongoose.Types.ObjectId.isValid(reminderId)) {
      return errorResponse('Valid reminderId is required', 400);
    }

    const result = await carryForwardIncompleteTasks(auth.user.id, reminderId);

    return successResponse(result);
  } catch (error) {
    return handleApiError(error, 'Failed to carry forward unfinished tasks');
  }
}
