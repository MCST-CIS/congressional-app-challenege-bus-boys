import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  if (url.pathname.startsWith('/admin/panel')) {
    const adminCookie = req.cookies.get('admin_auth');
    if (!adminCookie) {
      const loginUrl = new URL('/admin', req.url);
      return NextResponse.redirect(loginUrl);
    }
    const sessionId = adminCookie.value;
  
    const { data } = await supabaseAdmin
      .from('admin_sessions')
      .select('*')
      .eq('session_id', sessionId)
      .single();
  
    if (!data || new Date(data.exp_date) < new Date()) {
      const loginUrl = new URL('/admin', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/panel/:path*'],
};
