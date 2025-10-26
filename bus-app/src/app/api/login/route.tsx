import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const storedHash = process.env.ADMIN_PASS;
    if (!storedHash) {
      return NextResponse.json(
        { success: false, error: 'Server not configured' },
        { status: 500 }
      );
    }
    const match = await bcrypt.compare(password, storedHash);
    if (match) {
      const sessionId = crypto.randomBytes(32).toString('hex'); 
      await supabaseAdmin.from('admin_sessions').insert({
        session_id: sessionId,
        exp_date: new Date(Date.now() + 60 * 60 * 1000).toISOString() 
      });
      const response = NextResponse.json({ success: true });
      response.cookies.set('admin_auth', sessionId, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60,
      });

      return response;
    }
    return NextResponse.json({ success: false }, { status: 401 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
