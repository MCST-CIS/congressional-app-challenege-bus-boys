import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  const { password } = await req.json();

  // hash the password entered by the user
  const enteredHash = crypto.createHash('sha512').update(password).digest('hex');

  // compare with your stored environment hash
  if (enteredHash === process.env.ADMIN_PASSWORD_HASH) {
    const response = NextResponse.json({ success: true });

    // set a secure, short-lived session cookie
    response.cookies.set('admin_auth', 'true', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60, // 1 hour
    });

    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
