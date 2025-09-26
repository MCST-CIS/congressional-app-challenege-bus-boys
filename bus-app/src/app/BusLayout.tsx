'use client';

import { useState } from 'react';

export default function BusLayout() {
    return (
        <div className="mr-4 md:mr-16 lg:mr-48"
            style={{
                width: '50%',               
                height: '70vh',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                background: 'gray',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid red' 
            }}>
            <div className=""
                style={{
                width: '20%',               
                height: '20%',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                background: 'black',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid red' 
            }}>
                Building 1
            </div>
        </div>
  );
}