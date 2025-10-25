import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

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
      const response = NextResponse.json({ success: true });
      response.cookies.set('admin_auth', 'true', {
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
