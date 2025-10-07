import { assignments } from '../_data/assignments';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const bus = searchParams.get("bus");

  if (!bus) {
    return new Response(JSON.stringify({ error: "Bus name is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const number = assignments[bus];
  console.log(assignments);

  if (number) {
    return new Response(JSON.stringify({ bus, number }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ bus, message: "Bus has not arrived yet" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}