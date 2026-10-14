import { connectToDatabase } from '@/lib/mongodb';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';
import InAppReminder from '@/models/InAppReminder';

/**
 * GET /api/reminders
 * Retrieves user's in-app notifications and unread count.
 */
export async function GET(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const { searchParams } = new URL(request.url);
    const limit = Math.min(Math.max(parseInt(searchParams.get('limit') || '30', 10), 1), 100);

    await connectToDatabase();

    const [reminders, unreadCount] = await Promise.all([
      InAppReminder.find({ userId: auth.user.id, dismissed: false })
        .sort({ createdAt: -1 })
        .limit(limit)
        .lean(),
      InAppReminder.countDocuments({ userId: auth.user.id, read: false, dismissed: false }),
    ]);

    const formattedReminders = reminders.map((r) => ({
      ...r,
      id: r._id.toString(),
      userId: r.userId.toString(),
    }));

    return successResponse({
      reminders: formattedReminders,
      unreadCount,
    });
  } catch (error) {
    return handleApiError(error, 'Failed to fetch in-app reminders');
  }
}

/**
 * PATCH /api/reminders
 * Bulk mark all reminders as read.
 */
export async function PATCH(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    await connectToDatabase();

    await InAppReminder.updateMany(
      { userId: auth.user.id, read: false },
      { $set: { read: true } }
    );

    return successResponse({ message: 'All reminders marked as read' });
  } catch (error) {
    return handleApiError(error, 'Failed to update reminders');
  }
}
