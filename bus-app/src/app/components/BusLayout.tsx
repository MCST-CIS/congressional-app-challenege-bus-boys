'use client';

import { useState } from 'react';
import Bus from './Bus'

export default function BusLayout() {
    return (
        <div className="md:mr-18 w-full md:w-1/2"
            style={{
                height: '70vh',
                color: 'white',
                display: 'flex',
                background: 'gray',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid red' 
            }}>
            <div className="justify-center flex gap-2 w-full">
                <div className=""
                    style={{
                    width: '50%',
                    height: '15%',
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
                <div className = "flex flex-col w-1/10 gap-2">
                    <Bus>1</Bus>
                    <Bus>2</Bus>
                </div>
            </div>
        </div>
  );
}
