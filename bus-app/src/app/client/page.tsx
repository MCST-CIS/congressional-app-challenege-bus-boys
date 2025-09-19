'use client'; 
import React, { useState } from 'react';

export default function Home() {
    const [inputValue, setInputValue] = useState(''); // State to hold the input value

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value); // Update state on text change
    };

    return (
      <div className="font-sans grid min-h-screen p-8 mt-30">
        <main className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Simple Text Field Example</h1>

          {/* Text input field */}
          <div className="mt-8">
            <label htmlFor="simple-input" className="block text-lg mb-2">
              Enter some text:
            </label>
            <input
              id="simple-input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Type here..."
            />
          </div>

          {/* Display the input value */}
          <p className="mt-4">You typed: {inputValue}</p>
        </main>
      </div>
    );
}