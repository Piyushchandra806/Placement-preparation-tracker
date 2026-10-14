import { getAuthUser } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';

export async function GET(request) {
  try {
    const auth = await getAuthUser(request);
    if (!auth.authenticated) {
      return errorResponse(auth.error || 'Unauthorized', auth.status || 401);
    }

    return successResponse({
      user: auth.user,
    });
  } catch (error) {
    return handleApiError(error, 'Failed to fetch user session');
  }
}
