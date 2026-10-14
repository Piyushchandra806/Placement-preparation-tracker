import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from './mongodb';
import User from '@/models/User';

const JWT_SECRET =
  process.env.JWT_SECRET || 'mission90_default_dev_secret_change_in_production';

/**
 * Hash a plain text password with bcrypt.
 * @param {string} password
 * @returns {Promise<string>}
 */
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * Compare plain text password against hashed password.
 * @param {string} password
 * @param {string} hash
 * @returns {Promise<boolean>}
 */
export async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

/**
 * Sign a JWT token with user payload.
 * @param {object} payload
 * @param {string} [expiresIn='7d']
 * @returns {string}
 */
export function signToken(payload, expiresIn = '7d') {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

/**
 * Verify and decode a JWT token.
 * @param {string} token
 * @returns {object|null}
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

/**
 * Extract token from Authorization header or Cookie.
 * @param {Request} request
 * @returns {string|null}
 */
export function extractToken(request) {
  // 1. Check Authorization header: Bearer <token>
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7).trim();
  }

  // 2. Check cookies
  const cookieHeader = request.headers.get('cookie') || '';
  const match = cookieHeader.match(/(?:^|;\s*)auth_token=([^;]+)/);
  if (match) {
    return decodeURIComponent(match[1]);
  }

  return null;
}

/**
 * Authenticate incoming Next.js Request.
 * Returns { authenticated: true, user } or { authenticated: false, status, error }.
 *
 * @param {Request} request
 * @returns {Promise<{ authenticated: boolean, user?: object, error?: string, status?: number }>}
 */
export async function getAuthUser(request) {
  const token = extractToken(request);

  if (!token) {
    return {
      authenticated: false,
      status: 401,
      error: 'Authentication token is missing. Please log in.',
    };
  }

  const decoded = verifyToken(token);
  if (!decoded || !decoded.userId) {
    return {
      authenticated: false,
      status: 401,
      error: 'Invalid or expired session token. Please log in again.',
    };
  }

  await connectToDatabase();
  const user = await User.findById(decoded.userId).select('-passwordHash').lean();

  if (!user) {
    return {
      authenticated: false,
      status: 401,
      error: 'User account not found or has been deactivated.',
    };
  }

  return {
    authenticated: true,
    user: {
      ...user,
      id: user._id.toString(),
    },
  };
}
