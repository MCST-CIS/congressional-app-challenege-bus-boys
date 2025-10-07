import { assignments } from '../_data/assignments';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { bus, number } = body;

    if (!bus || !number) {
      return new Response(JSON.stringify({ error: 'Missing bus or number' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    assignments[bus] = number;
    console.log(assignments);

    return new Response(JSON.stringify({ success: true, assignments }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Optional GET to check assignments manually (for testing)
export async function GET() {
  return new Response(JSON.stringify(assignments), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
