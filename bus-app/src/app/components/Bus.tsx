'use client';

import { propagateServerField } from 'next/dist/server/lib/render-server';
import { useState } from 'react';
import { ReactNode } from 'react';

type MyBoxProps = {
  children: ReactNode;
};

export default function Bus({ children }: MyBoxProps) {
    return (
        <div className=""
            style={{
            width: '100%',
            height: '7.5%',
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
        {children}
        </div>
    );
}
