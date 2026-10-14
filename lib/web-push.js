/**
 * Web Push Notification Utility for Mission 90
 * Handles VAPID configuration, message payload formatting, and secure delivery.
 */
import webpush from 'web-push';

const publicKey =
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ||
  'BEBYNTJ7-c6vtSN6MGgOfAw_abPopS2jqgSPnTcv6cmLRclOxGry6tV7TFIOp0XfNfejx7t0gl2D81fngQHEe9w';

const privateKey =
  process.env.VAPID_PRIVATE_KEY ||
  'RXJpvi_GdR1-Wqw-d78dPLVk3wsRv_N06962-NhBfww';

const subject = process.env.VAPID_SUBJECT || 'mailto:support@mission90.com';

try {
  webpush.setVapidDetails(subject, publicKey, privateKey);
} catch (err) {
  console.warn('VAPID initialization warning:', err.message);
}

export function getVapidPublicKey() {
  return publicKey;
}

/**
 * Sends a push notification to a specific Web Push Subscription.
 *
 * @param {object} subscription - { endpoint, keys: { p256dh, auth } }
 * @param {object} payload - { title, body, icon, url, data }
 * @returns {Promise<{ success: boolean, expired?: boolean, error?: string }>}
 */
export async function sendWebPushNotification(subscription, payload) {
  if (!subscription || !subscription.endpoint) {
    return { success: false, error: 'Invalid subscription object' };
  }

  const stringifiedPayload = JSON.stringify({
    title: payload.title || 'Mission 90 Reminder',
    body: payload.body || 'You have pending placement preparation tasks.',
    icon: payload.icon || '/favicon.ico',
    badge: payload.badge || '/favicon.ico',
    data: {
      url: payload.url || '/',
      timestamp: Date.now(),
      ...payload.data,
    },
    actions: [
      { action: 'open_tasks', title: "Open Today's Tasks" },
      { action: 'dismiss', title: 'Dismiss' },
    ],
  });

  try {
    const result = await webpush.sendNotification(subscription, stringifiedPayload, {
      TTL: 60 * 60 * 24, // 24 hours
    });
    return { success: true, statusCode: result.statusCode };
  } catch (error) {
    // 404 or 410 indicates the subscription has expired or unsubscribed
    if (error.statusCode === 410 || error.statusCode === 404) {
      return { success: false, expired: true, error: 'Subscription expired or unregistered' };
    }
    return { success: false, error: error.message || 'Push failed' };
  }
}

const webPushUtils = {
  getVapidPublicKey,
  sendWebPushNotification,
};

export default webPushUtils;
