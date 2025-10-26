'use client';
// CHATGPT TEMPLATE FOR NOW
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import BusLayout from '../../components/BusLayout';
import { supabase } from '@/app/lib/supabaseClient';

const items = [
  'Boonton', 'Butler/Bloom', 'Chatham', 'Dover', 'Hanover Park',
  'Jefferson-Hop', 'Jefferson-Oak', 'Lincoln Park', 'Long Hill', 'Madison',
  'Mendham', 'Montville 1', 'Montville 2', 'Montville 3', 'Morristown',
  'MH1', 'MH2', 'MH3', 'MH4', 'Mount Olive',
  'Mountain Lakes', 'Parsippany 101', 'Parsippany 102', 'Parsippany 103', 'Parsippany 104',
  'Pequannock', 'Randolph', 'Riverside/Kinnelon', 'Roxbury', 'West Morris Central',
];

export default function AdminPanel() {
  const router = useRouter();

  const handleLogout = () => {
    // For now just send them back to the login screen
    router.push('/admin');
  };

  const [inputValue, setInputValue] = useState('');
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [numberValue, setNumberValue] = useState('');

  // get our newly assigned buses from Supabase
  const [assignedBuses, setAssignedBuses] = useState<{ bus_name: string; id: string }[]>([]);

  useEffect(() => {
    const fetchAssigned = async () => {
      const { data, error } = await supabase
        .from('buses')
        .select('bus_name, id');

      console.log("Raw response:", {data, error});
      if (error) {
        console.error('Error fetching assigned buses:', error);
        return;
      }

      if (data) {
        setAssignedBuses(data);
      }
    };

    fetchAssigned(); 
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value === '') {
      setFilteredItems([]);
      setShowDropdown(false);
      return;
    }

    const filtered = items.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredItems(filtered);
    setShowDropdown(true);
  };

  const handleSelect = (item: string) => {
    setInputValue(item);
    setShowDropdown(false);
  };

  const [rotation, setRotation] = useState(0);

  const rotateBus = () => {
    setRotation(prev => prev + 90);
  };

  const handleSubmit = async () => {
    if (!inputValue || !numberValue) {
      alert('Please enter both a bus name and number.');
      return;
    }
    if (isNaN(Number(numberValue)) || Number(numberValue) < 0 || Number(numberValue) > 29) {
      alert('Bus number must be a valid number (no letters).');
      return;
    }
    if (!items.includes(inputValue)) {
      alert('That bus name is not valid.');
      return;
    }

    try {
      const res = await fetch('/api/assign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bus: inputValue, number: numberValue }),
      });

      if (res.ok) {
        const data = await res.json();
        // refresh buses in UI
        setAssignedBuses(prev => [...prev, { bus_name: inputValue, id: numberValue }]);

	 // Optionally clear fields
        setInputValue('');
        setNumberValue('');
        setShowDropdown(false);
      } else {
        const error = await res.json();
        alert(`Error: ${error.error || 'Something went wrong'}`);
      }
    } catch (err) {
      alert('Request failed. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-red-400 to-black px-4">
      <BusLayout style1={{ transform: `rotate(${rotation}deg)` }} />
      <div className="border-8 border-black bg-gray-700 h-[75%] w-full md:w-1/3 flex flex-col justify-center">
        <div
          className="w-full text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-white to-red-600 animate-gradient px-2"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '2.1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          Bus Panel for Staff
        </div>

        <div className="w-full flex flex-col items-center">
	   {/* relative wrapper so the dropdown can be absolutely positioned under the input */}
          <div className="rounded-full relative w-2/3">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="w-full p-2 text-white placeholder-gray-400 bg-gray-800 border border-white rounded-md"
              placeholder="Enter the bus name..."
            />

            {/* absolute dropdown: will NOT affect layout flow or page height */}
            {showDropdown && filteredItems.length > 0 && (
              <ul className="absolute left-0 top-full z-20 w-full mt-2 text-black bg-red-500 border border-gray-300 rounded-md shadow-md max-h-60 overflow-y-auto">
                {filteredItems.map((item, index) => {
                  const assignment = assignedBuses.find(b => b.bus_name === item);
                  const isAssigned = Boolean(assignment);
                  const slot = assignment?.id;

                  return (
                    <li
                      key={index}
                      onClick={() => handleSelect(item)}
                      className={`p-2 font-bold hover:bg-red-600 cursor-pointer ${isAssigned ? 'text-gray-300 italic' : 'text-black'}`}
                    >
                      {item}
                      {isAssigned && (
                        <span className="text-sm text-white ml-1">(Slot {slot})</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="rounded-full relative w-2/3 mt-4">
            <input
              type="text"
              value={numberValue}
              onChange={e => setNumberValue(e.target.value)}
              className="w-full p-2 text-white placeholder-gray-400 bg-gray-800 border border-white rounded-md"
              placeholder="Enter assigned number..."
            />
          </div>
        </div>

        <div className="h-9/10 flex flex-row items-center justify-center gap-4">
          <button
            onClick={rotateBus}
            className="text-sm sm:text-base md:text-lg w-2/5 h-4/9 border-8 border-black bg-red-600 rounded-full text-black"
            style={{ fontWeight: 'bold' }}
          >
            ROTATE
          </button>
          <button
            onClick={handleSubmit}
            className="text-sm sm:text-base md:text-lg w-2/5 h-4/9 border-8 border-black bg-red-600 rounded-full text-black"
            style={{ fontWeight: 'bold' }}
          >
            ASSIGN
          </button>
        </div>
      </div>
    </div>
  );
}
