// src/pages/api/bus.ts (or /app/api/bus/route.ts for app router)
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../lib/supabaseClient';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const bus = searchParams.get('bus');

    if (!bus) {
      return NextResponse.json(
        { error: 'Bus name is required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('buses')
      .select('id')
      .eq('bus_name', bus)
      .single();

    if (error) {
      if (error.code === 'PGRST116') { // no rows found
        return NextResponse.json(
          { bus, message: 'Bus has not arrived yet' },
          { status: 404 }
        );
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ bus, number: data.id });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 500 });
  }
}