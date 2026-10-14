import { NextResponse } from 'next/server';

/**
 * Standardized JSON success response helper.
 */
export function successResponse(data, status = 200) {
  return NextResponse.json(
    {
      success: true,
      ...data,
    },
    { status }
  );
}

/**
 * Standardized JSON error response helper.
 */
export function errorResponse(message, status = 400, details = null) {
  const payload = {
    success: false,
    error: message,
  };
  if (details) {
    payload.details = details;
  }
  return NextResponse.json(payload, { status });
}

/**
 * Centralized error handler for MongoDB and Mongoose errors.
 */
export function handleApiError(error, customMessage = 'An unexpected server error occurred') {
  // Allow Next.js prerendering bailouts to bubble up
  if (error?.digest === 'NEXT_PRERENDER_INTERRUPTED') {
    throw error;
  }

  console.error('[API Error]:', error);

  // Mongoose Validation Error
  if (error.name === 'ValidationError') {
    const details = Object.values(error.errors).map((err) => err.message);
    return errorResponse('Validation failed', 400, details);
  }

  // Duplicate Key Error (E11000)
  if (error.code === 11000) {
    const field = Object.keys(error.keyPattern || {})[0] || 'field';
    return errorResponse(`A record with this ${field} already exists.`, 409);
  }

  // CastError (e.g. invalid MongoDB ObjectId)
  if (error.name === 'CastError') {
    return errorResponse(`Invalid ID format provided for ${error.path}`, 400);
  }

  // JSON parsing error
  if (error instanceof SyntaxError && error.message.includes('JSON')) {
    return errorResponse('Invalid JSON body in request', 400);
  }

  return errorResponse(customMessage, 500, process.env.NODE_ENV === 'development' ? error.message : null);
}
