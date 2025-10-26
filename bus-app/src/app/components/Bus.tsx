'use client';

import { ReactNode } from 'react';

type BusProps = {
  children: ReactNode;
  highlighted?: boolean;
};

export default function Bus({ children, highlighted = false }: BusProps) {
  return (
    <div
      className={highlighted ? 'animate-bus-blink' : ''}
      style={{
        width: '100%',
        height: '100%',
        color: highlighted ? 'black' : 'white',
        background: highlighted ? 'yellow' : 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '.9rem',
        border: '1px solid red',
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
    >
      {children}
    </div>
  );
}
