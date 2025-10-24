import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Protect the admin panel route
  if (url.pathname.startsWith('/admin/panel')) {
    const authCookie = req.cookies.get('admin_auth');
    if (!authCookie || authCookie.value !== 'true') {
      // redirect to /admin (login page)
      const loginUrl = new URL('/admin', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/panel/:path*'],
};
