'use client';
// CHATGPT TEMPLATE FOR NOW
import { useRouter } from 'next/navigation';

export default function AdminPanel() {
  const router = useRouter();

  const handleLogout = () => {
    // For now just send them back to the login screen
    router.push('/admin');
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition"
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r p-4">
          <nav className="flex flex-col gap-2">
            <button className="text-left p-2 rounded hover:bg-gray-200 transition">
              Dashboard
            </button>
            <button className="text-left p-2 rounded hover:bg-gray-200 transition">
              Bus Management
            </button>
            <button className="text-left p-2 rounded hover:bg-gray-200 transition">
              User Logs
            </button>
            <button className="text-left p-2 rounded hover:bg-gray-200 transition">
              Settings
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <section className="flex-1 p-6">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Cards */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Total Buses</h3>
              <p className="text-2xl font-semibold text-blue-600">12</p>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Active Users</h3>
              <p className="text-2xl font-semibold text-green-600">54</p>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Alerts</h3>
              <p className="text-2xl font-semibold text-red-600">3</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
