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
    <div className="min-h-screen flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-center bg-gradient-to-r from-red-400 to-black px-4">
      <BusLayout></BusLayout>
      <div className="w-full md:w-1/2">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="w-full p-2 text-white placeholder-gray-400 bg-gray-800 border border-white rounded-md"
          placeholder="Enter your bus name..."
        />
        {showDropdown && filteredItems.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 text-black bg-white border border-gray-300 rounded-md shadow-md max-h-60 overflow-y-auto">
            {filteredItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelect(item)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
