import { connectToDatabase } from '@/lib/mongodb';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';
import ReminderSetting from '@/models/ReminderSetting';
import { getOrCreateReminderSetting } from '@/lib/reminder-engine';

/**
 * POST /api/reminders/subscribe
 * Registers or updates a browser Web Push subscription for the authenticated user.
 */
export async function POST(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const body = await request.json();
    const { subscription, device } = body;

    if (!subscription || !subscription.endpoint || !subscription.keys) {
      return errorResponse('Invalid subscription object. Missing endpoint or encryption keys.', 400);
    }

    await connectToDatabase();

    const setting = await getOrCreateReminderSetting(auth.user.id);

    // Remove any existing subscription with the same endpoint to avoid duplicates
    setting.webPushSubscriptions = (setting.webPushSubscriptions || []).filter(
      (sub) => sub.endpoint !== subscription.endpoint
    );

    // Add new subscription
    setting.webPushSubscriptions.push({
      endpoint: subscription.endpoint,
      keys: {
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth,
      },
      device: device || request.headers.get('user-agent') || 'Browser Client',
      createdAt: new Date(),
    });

    await setting.save();

    return successResponse({
      message: 'Web Push subscription registered successfully',
      subscriptionCount: setting.webPushSubscriptions.length,
    });
  } catch (error) {
    return handleApiError(error, 'Failed to register push subscription');
  }
}

/**
 * DELETE /api/reminders/subscribe
 * Unregisters a browser Web Push subscription.
 */
export async function DELETE(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const body = await request.json().catch(() => ({}));
    const { endpoint } = body;

    await connectToDatabase();

    const setting = await ReminderSetting.findOne({ userId: auth.user.id });
    if (!setting) {
      return successResponse({ message: 'No subscription found to remove' });
    }

    if (endpoint) {
      setting.webPushSubscriptions = setting.webPushSubscriptions.filter(
        (sub) => sub.endpoint !== endpoint
      );
    } else {
      // Clear all subscriptions if none specified
      setting.webPushSubscriptions = [];
    }

    await setting.save();

    return successResponse({
      message: 'Push subscription removed successfully',
      subscriptionCount: setting.webPushSubscriptions.length,
    });
  } catch (error) {
    return handleApiError(error, 'Failed to unregister push subscription');
  }
}
