import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/User';
import { hashPassword, signToken } from '@/lib/auth';
import { successResponse, errorResponse, handleApiError } from '@/lib/api-helpers';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // 1. Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return errorResponse('Name must be at least 2 characters long', 400);
    }

    if (!email || typeof email !== 'string') {
      return errorResponse('Please provide a valid email address', 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanEmail = email.trim().toLowerCase();
    if (!emailRegex.test(cleanEmail)) {
      return errorResponse('Please provide a valid email format', 400);
    }

    if (!password || typeof password !== 'string' || password.length < 6) {
      return errorResponse('Password must be at least 6 characters long', 400);
    }

    await connectToDatabase();

    // 2. Check for duplicate email
    const existingUser = await User.findOne({ email: cleanEmail });
    if (existingUser) {
      return errorResponse('An account with this email already exists', 409);
    }

    // 3. Hash password and save user
    const passwordHash = await hashPassword(password);
    const user = await User.create({
      name: name.trim(),
      email: cleanEmail,
      passwordHash,
    });

    const userIdStr = user._id.toString();

    // 4. Generate JWT
    const token = signToken({
      userId: userIdStr,
      email: user.email,
    });

    const userResponse = {
      id: userIdStr,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };

    const response = successResponse(
      {
        message: 'Account registered successfully',
        user: userResponse,
        token,
      },
      201
    );

    // Set secure HTTP-only cookie for server-validated auth
    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    return handleApiError(error, 'Failed to register account');
  }
}
