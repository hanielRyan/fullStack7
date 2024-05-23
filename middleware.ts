import { NextRequest, NextResponse } from 'next/server';
import nextAuthMiddleware, { NextRequestWithAuth } from 'next-auth/middleware';

export async function middleware(req: NextRequest) {
  const emailCookie = req.cookies.get('email');

  if (emailCookie) {
    return NextResponse.redirect(new URL('/otp', req.nextUrl.origin));
  }

  // Typecast req to NextRequestWithAuth before passing it to nextAuthMiddleware
  return nextAuthMiddleware(req as NextRequestWithAuth);
}

export const config = {
  matcher: ['/home/', '/home/done', '/home/pending'],
};

// Make sure to export default as the custom middleware function
export { middleware as default };
