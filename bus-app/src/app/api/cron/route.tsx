import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function DELETE(req: Request) {
  // Perform safety check w/auth Header
  const authHeader = req.headers.get('authorization');
  const expectedToken = process.env.CRON_SECRET_TOKEN;

  if (authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({error: 'Unauthorized' }, { status: 401 });
  }
  
  const { error } = await supabaseAdmin.from('buses').delete().neq('bus_name', '');

  if (error) {
    return NextResponse.json({ error: error.message }, {status: 500});
  }
  return NextResponse.json({ success: true, message: 'All buses have been cleared' });
}
