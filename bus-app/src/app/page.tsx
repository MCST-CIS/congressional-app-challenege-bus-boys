import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-red-400 to-black px-4">
      <h1 className="text-3xl text-white font-bold mb-8">MCST Bus Tracking App</h1>
      <p className="mb-6 text-white font-bold">Choose where you want to go:</p>

      <div className="flex gap-4">
        <Link href="/admin">
          <button className="bg-red-600 text-white font-bold px-4 py-2 rounded-md hover:bg-red-800 transition">
            Go to Admin Panel
          </button>
        </Link>

        <Link href="/client">
          <button className="bg-gray-800 text-white font-bold px-4 py-2 rounded-md hover:bg-gray-900 transition">
            Go to Client Panel
          </button>
        </Link>
      </div>

      <div className="absolute bottom-4 font-bold left-4 text-xl text-white opacity-75">
        MCST Class of 2027
      </div>

      <div className="absolute bottom-4 font-bold right-4 text-xl text-white opacity-75">
        Raymond, Tyler, Ansh, AJ
      </div>

    </main>
  );
}
