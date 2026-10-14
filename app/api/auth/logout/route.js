import { successResponse } from '@/lib/api-helpers';

export async function POST() {
  const response = successResponse({
    message: 'Logged out successfully',
  });

  response.cookies.set('auth_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  return response;
}
