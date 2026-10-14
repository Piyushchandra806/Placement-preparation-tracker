import { connectToDatabase } from '@/lib/mongodb';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';
import InAppReminder from '@/models/InAppReminder';
import mongoose from 'mongoose';

/**
 * PATCH /api/reminders/[id]
 * Updates read / dismissed status of a specific reminder.
 */
export async function PATCH(request, { params }) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return errorResponse('Invalid reminder ID format', 400);
    }

    const body = await request.json().catch(() => ({}));
    const { read, dismissed } = body;

    await connectToDatabase();

    const updateFields = {};
    if (typeof read === 'boolean') updateFields.read = read;
    if (typeof dismissed === 'boolean') updateFields.dismissed = dismissed;

    const reminder = await InAppReminder.findOneAndUpdate(
      { _id: id, userId: auth.user.id },
      { $set: updateFields },
      { returnDocument: 'after' }
    );

    if (!reminder) {
      return errorResponse('Reminder not found or access denied', 404);
    }

    return successResponse({
      message: 'Reminder updated successfully',
      reminder: {
        ...reminder.toObject(),
        id: reminder._id.toString(),
      },
    });
  } catch (error) {
    return handleApiError(error, 'Failed to update reminder');
  }
}

/**
 * DELETE /api/reminders/[id]
 * Deletes a reminder.
 */
export async function DELETE(request, { params }) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return errorResponse('Invalid reminder ID format', 400);
    }

    await connectToDatabase();

    const result = await InAppReminder.findOneAndDelete({ _id: id, userId: auth.user.id });
    if (!result) {
      return errorResponse('Reminder not found or access denied', 404);
    }

    return successResponse({ message: 'Reminder deleted successfully' });
  } catch (error) {
    return handleApiError(error, 'Failed to delete reminder');
  }
}
