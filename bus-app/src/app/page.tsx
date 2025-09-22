import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">MCST Bus Tracking App</h1>
      <p className="mb-6">Choose where you want to go:</p>

      <div className="flex gap-4">
        <Link href="/admin">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
            Go to Admin Panel
          </button>
        </Link>

        <Link href="/client">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
            Go to Client Panel
          </button>
        </Link>
      </div>
    </main>
  );
}
