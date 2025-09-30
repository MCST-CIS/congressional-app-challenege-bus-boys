'use client';

import { useState } from 'react';

export default function DragDropBox() {
  const [dropped, setDropped] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', 'box');
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow a drop
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    if (data === 'box') {
      setDropped(true);
    }
  };

  return (
    <div className="container">
      <div
        className="dropzone"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {dropped ? (
          <div className="draggable dropped">Dropped!</div>
        ) : (
          <span>Drop here</span>
        )}
      </div>

      {!dropped && (
        <div
          className="draggable"
          draggable
          onDragStart={handleDragStart}
        >
          Drag me
        </div>
      )}

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          margin-top: 50px;
        }

        .dropzone {
          width: 200px;
          height: 200px;
          border: 2px dashed #ccc;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f9f9f9;
        }

        .draggable {
          width: 100px;
          height: 100px;
          background-color: #0070f3;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          border-radius: 8px;
        }

        .draggable.dropped {
          background-color: #00c853;
        }
      `}</style>
    </div>
  );
}
