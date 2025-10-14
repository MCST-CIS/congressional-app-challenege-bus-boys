'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTimedClear } from '../hooks/useTimedClear';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useTimedClear('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Password Checking
    if (password === 'MCSTstaffONLY') {
      router.push('/admin/panel');
    } else {
      setError('Incorrect password. Try again.');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-black px-4 p-6">
      <div className="bg-black p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="password"
            className="block mb-2 font-bold text-white"
          >
            Enter Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full border p-2 rounded-md mb-4 placeholder-gray-400 text-black bg-white outline-none
              ${
                error
                  ? 'border-red-700 ring-4 ring-red-500'
                  : 'border-gray-300 focus:border-gray-500'
              }`}
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>
              
        {error && (
          <p className="text-red-600 mt-4 text-center font-semibold text-lg">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}
