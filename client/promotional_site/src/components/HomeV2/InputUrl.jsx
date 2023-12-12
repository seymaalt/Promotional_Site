import React from 'react';

export default function InputUrl() {
  return (
    <div style={{ position: 'relative', width: '600px', display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        style={{
          borderRadius: '30px',
          padding: '15px',
          border: '1px solid #ccc',
          outline: 'none',
          fontSize: '16px',
          width: '100%',
          height: '25px',
        }}
        placeholder="https://apps.apple.com/tr/app/example/id324684580"
      />
      <button
        style={{
          position: 'absolute',
          right: '10px', // Adjust the right distance
          borderRadius: '30px',
          padding: '10px 20px',
          backgroundImage: "linear-gradient(45deg, #7040e2, #906ad7, #ad92cb)",
          color: 'white',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          height: '50px',
          
          top: '50%', // Center vertically
          transform: 'translateY(-50%)',
        }}
      >
        Generate
      </button>

    </div>
  );
}
