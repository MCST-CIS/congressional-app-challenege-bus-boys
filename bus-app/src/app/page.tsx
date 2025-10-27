import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-8 px-4 fade-bg">
      <div className="w-full flex justify-center">
       <h1 className="text-3xl text-white font-bold mb-8 typewriter">MCST Bus Tracking App</h1>
      </div>
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

     <div className="absolute bottom-4 w-full px-4 flex flex-col sm:flex-row justify-between text-white text-xl font-bold opacity-75">
       <span className="mb-1 sm:mb-0">MCST Class of 2027</span>
       <span className="sm:text-right">Raymond, Tyler, Ansh, AJ</span>
     </div>


    </main>
  );
}
