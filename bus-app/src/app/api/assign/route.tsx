// src/pages/api/bus.ts (or /app/api/bus/route.ts for app router)
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../lib/supabaseClient';

export async function POST(request: NextRequest) {
  try {
    const { bus, number } = await request.json();

    if (!bus || !number) {
      return NextResponse.json(
        { error: 'Missing bus or number' },
        { status: 400 }
      );
    }

    const { error } = await supabase
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