import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import GlobalContext from '../../context/GlobalContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function InputUrl() {
  const { response, setResponse } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [descriptionName, setDescriptionName] = useState('');

  const navigate = useNavigate();

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // Assuming you want to set the businessName and descriptionName in the context
      setResponse({
        businessName,
        descriptionName,
      });

      // Navigate to the desired route
      navigate('/promotional-site3');
    } catch (error) {
      console.error('Error fetching data from the server!', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative', width: '400px', alignItems: 'center' }}>
      <div>
        <p
          style={{
            backgroundImage: 'linear-gradient(45deg, #7040e2, #906ad7, #ad92cb)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: '24px',
          }}
        >
          BUSINESS NAME
        </p>
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
          placeholder="Your business name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>
      <div>
        <p
          style={{
            backgroundImage: 'linear-gradient(45deg, #7040e2, #906ad7, #ad92cb)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: '24px',
          }}
        >
          DESCRIPTION
        </p>
        <textarea
          type="text"
          style={{
            borderRadius: '30px',
            padding: '15px',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '16px',
            width: '100%',
            height: '125px',
          }}
          placeholder=""
          value={descriptionName}
          onChange={(e) => setDescriptionName(e.target.value)}
        />
        <button
          style={{
            borderRadius: '30px',
            padding: '10px 60px',
            backgroundImage: 'linear-gradient(45deg, #7040e2, #906ad7, #ad92cb)',
            color: 'white',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            height: '50px',
            top: '50%',
            marginTop: '20px',
          }}
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
