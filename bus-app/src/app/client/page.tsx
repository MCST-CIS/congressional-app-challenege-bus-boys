'use client';
import React, { useState } from 'react';
import BusLayout from '../components/BusLayout'

const items = [
  'Boonton', 'Bloom', 'Butler', 'Chatham',
  'Dover', 'Hanover Park', 'Mendham',
  'Mount Olive', 'Parsippany'
];

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value === '') {
      setFilteredItems([]);
      setShowDropdown(false);
      return;
    }

    const filtered = items.filter(item =>
      item.toLowerCase().startsWith(value.toLowerCase())
    );

    setFilteredItems(filtered);
    setShowDropdown(true);
  };

  const handleSelect = (item: string) => {
    setInputValue(item);
    setShowDropdown(false);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-red-400 to-black px-4">
      <BusLayout></BusLayout>
      <div className = "border-8 border-black bg-gray-700 h-[75%] w-full md:w-1/3 flex flex-col justify-center">
        <div className = "w-full text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-white to-red-600 animate-gradient px-2" 
            style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '2.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}>
          Bus Panel for Students
        </div>
        <div className="h-full w-full flex flex-col items-center">
          {/* relative wrapper so the dropdown can be absolutely positioned under the input */}
          <div className="relative w-full">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="w-full p-2 text-white placeholder-gray-400 bg-gray-800 border border-white rounded-md"
              placeholder="Enter your bus name..."
            />

            {/* absolute dropdown: will NOT affect layout flow or page height */}
            {showDropdown && filteredItems.length > 0 && (
              <ul className="absolute left-0 top-full z-20 w-full mt-2 text-black bg-red-500 border border-gray-300 rounded-md shadow-md max-h-60 overflow-y-auto">
                {filteredItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(item)}
                    className="p-2 font-bold hover:bg-red-600 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}