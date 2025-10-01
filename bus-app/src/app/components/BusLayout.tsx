'use client';

import { useState } from 'react';
import VertBus from './VertBus'

export default function BusLayout() {
    return (
        <div className="flex-col gap-2 md:mr-18 w-full md:w-1/2"
            style={{
                height: '75vh',
                color: 'white',
                display: 'flex',
                background: 'gray',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid red' 
            }}>
            <div className="justify-center flex gap-2 w-full">
                <div className=""
                    style={{
                    width: '50%',
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
                <div className = "flex flex-col w-1/20 gap-2">
                    <VertBus>1</VertBus>
                    <VertBus>2</VertBus>
                </div>
            </div>
            <div className = "justify-center flex gap-2 w-full h-[7.5%]">
                <div className=""
                    style={{
                    width: '40%',
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
                    Building 2
                </div>
                <div className = "flex flex-col w-1/20 gap-2">
                    <VertBus>3</VertBus>
                </div>
            </div>
        </div>
    );
}
