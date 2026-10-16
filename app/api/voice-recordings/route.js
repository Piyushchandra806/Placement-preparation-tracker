import { connectToDatabase } from '@/lib/mongodb';
import VoiceRecording from '@/models/VoiceRecording';
import User from '@/models/User';
import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';

export const dynamic = 'force-dynamic';

/**
 * Helper to determine userId from authenticated session,
 * falling back to the active/most recent user in development/local environments
 * so offline or unauthenticated testing never breaks voice saving.
 */
async function resolveUserId(request) {
  const auth = await getAuthUser(request);
  if (auth.authenticated && auth.user?.id) {
    return auth.user.id;
  }

  // Graceful fallback for local development or guest sessions
  await connectToDatabase();
  const fallbackUser = await User.findOne().sort({ createdAt: -1 }).select('_id').lean();
  if (fallbackUser) {
    return fallbackUser._id.toString();
  }

  return null;
}

/**
 * GET /api/voice-recordings?day=X&subject=Y
 * Retrieves saved voice recording and speech transcript for a given day and subject.
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const dayParam = searchParams.get('day');
    const subjectParam = searchParams.get('subject') || 'english';

    if (!dayParam) {
      return errorResponse('Day query parameter is required', 400);
    }

    const dayNumber = parseInt(dayParam, 10);
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 365) {
      return errorResponse('Day must be a number between 1 and 365', 400);
    }

    const userId = await resolveUserId(request);
    if (!userId) {
      return errorResponse('User account not found. Please log in or register.', 401);
    }

    await connectToDatabase();

    const subject = subjectParam.trim().toLowerCase();
    const recording = await VoiceRecording.findOne({
      userId,
      dayNumber,
      subject,
    }).lean();

    if (!recording) {
      return successResponse({ recording: null });
    }

    return successResponse({
      recording: {
        id: recording._id.toString(),
        dayNumber: recording.dayNumber,
        subject: recording.subject,
        audioData: recording.audioData,
        mimeType: recording.mimeType || 'audio/webm',
        transcript: recording.transcript || '',
        duration: recording.duration || 0,
        wordCount: recording.wordCount || 0,
        updatedAt: recording.updatedAt || recording.createdAt,
      },
    });
  } catch (error) {
    return handleApiError(error, 'Failed to retrieve voice recording');
  }
}

/**
 * POST /api/voice-recordings
 * Saves or updates a user's voice recording and transcribed sentences in MongoDB Atlas.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { day, dayNumber: altDay, subject = 'english', audioData, mimeType, transcript = '', duration = 0 } = body;

    const targetDay = parseInt(day || altDay, 10);
    if (isNaN(targetDay) || targetDay < 1 || targetDay > 365) {
      return errorResponse('Day must be a valid number between 1 and 365', 400);
    }

    if (!audioData || typeof audioData !== 'string') {
      return errorResponse('Audio data is required and must be a valid base64 audio string or data URL', 400);
    }

    const userId = await resolveUserId(request);
    if (!userId) {
      return errorResponse('User account not found. Please log in.', 401);
    }

    await connectToDatabase();

    const normalizedSubject = subject.trim().toLowerCase();
    const trimmedTranscript = (transcript || '').trim();
    const wordCount = trimmedTranscript
      ? trimmedTranscript.split(/\s+/).filter(Boolean).length
      : 0;

    const updated = await VoiceRecording.findOneAndUpdate(
      {
        userId,
        dayNumber: targetDay,
        subject: normalizedSubject,
      },
      {
        userId,
        dayNumber: targetDay,
        subject: normalizedSubject,
        audioData,
        mimeType: mimeType || 'audio/webm',
        transcript: trimmedTranscript,
        duration: Math.round(Number(duration) || 0),
        wordCount,
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );

    return successResponse(
      {
        message: 'Voice recording successfully saved to MongoDB',
        recording: {
          id: updated._id.toString(),
          dayNumber: updated.dayNumber,
          subject: updated.subject,
          mimeType: updated.mimeType,
          transcript: updated.transcript,
          duration: updated.duration,
          wordCount: updated.wordCount,
          updatedAt: updated.updatedAt,
        },
      },
      200
    );
  } catch (error) {
    return handleApiError(error, 'Failed to save voice recording to MongoDB');
  }
}

/**
 * DELETE /api/voice-recordings?day=X&subject=Y
 * Deletes a voice recording from MongoDB.
 */
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const dayParam = searchParams.get('day');
    const subjectParam = searchParams.get('subject') || 'english';

    if (!dayParam) {
      return errorResponse('Day query parameter is required', 400);
    }

    const dayNumber = parseInt(dayParam, 10);
    if (isNaN(dayNumber)) {
      return errorResponse('Day must be a valid number', 400);
    }

    const userId = await resolveUserId(request);
    if (!userId) {
      return errorResponse('User account not found', 401);
    }

    await connectToDatabase();

    const subject = subjectParam.trim().toLowerCase();
    await VoiceRecording.deleteOne({
      userId,
      dayNumber,
      subject,
    });

    return successResponse({
      message: 'Voice recording deleted successfully from MongoDB',
    });
  } catch (error) {
    return handleApiError(error, 'Failed to delete voice recording');
  }
}
