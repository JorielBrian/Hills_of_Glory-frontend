import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = ['/', '/about', '/services', '/leadership', '/ministries', '/plan-your-visit', '/sermons', '/events', '/lifeguides', '/giving', '/contact', '/announcements', '/login', '/register', '/registration-pending', '/access-denied'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get('authToken')?.value;

  if (pathname.startsWith('/dashboard')) {
    if (!authToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (pathname === '/login' || pathname === '/register') {
    if (authToken) {
      return NextResponse.redirect(new URL('/dashboard/overview', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register']
};
