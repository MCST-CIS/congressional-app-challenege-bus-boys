// src/pages/api/bus.ts (or /app/api/bus/route.ts for app router)
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get('admin_auth');

  // Check if cookie exists and is valid
  if (!adminCookie) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
  const sessionId = adminCookie.value;

  const { data } = await supabaseAdmin
    .from('admin_sessions')
    .select('*')
    .eq('session_id', sessionId)
    .single();

  if (!data || new Date(data.exp_date) < new Date()) {
    return NextResponse.json({ success: false, status: 401 });
  }

  try {
    const { bus, number } = await request.json();

    if (!bus || !number) {
      return NextResponse.json(
        { error: 'Missing bus or number' },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin
      .from('buses')
      .upsert({ bus_name: bus, id: number }, { onConflict: 'bus_name' });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 500 });
  }
}