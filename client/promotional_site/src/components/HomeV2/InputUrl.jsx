import { useState, useContext } from 'react';
import axios from 'axios';
import GlobalContext from '../../context/GlobalContext.jsx';
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import TextContext from '../../context/TextContext.jsx'
import '../../styles/global.css'



export default function InputUrl() {
  const { response, setResponse } = useContext(GlobalContext);
  const { setHeader, setDiscription, setInnovations, setDataSecurity } = useContext(TextContext);
  const [typedText, setTypedText] = useState('');
  const [loading, setLoading] = useState(false);
  const initialText = 'Enter the URL...';
  const [inputValue, setInputValue] = useState('');
  const [renderDetail, setRenderDetail] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_PORT}/content/`, {
        data: inputValue,
      });

      setHeader(null)
      setDiscription(null)
      setInnovations(null)
      setDataSecurity(null)
      setRenderDetail(true);
      setResponse(res.data);
      navigate('/ChooseTemplate2');
    } catch (error) {
      console.error('Error fetching data from the server!', error);
    } finally {
      setLoading(false);
    }
  };


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ position: 'relative', width: '600px', display: 'flex', alignItems: 'center' }}>
       <p  style={{
            backgroundImage: "linear-gradient(45deg, #7040e2, #906ad7, #ad92cb)",
            backgroundClip: "text",
            color: "transparent",
            fontSize:"24px",
            padding:"15px"
          }}>URL</p>
        
      <input
        type="text"
        onChange={handleInputChange}
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
      onClick={handleGenerate}
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


      {loading && (
        <Backdrop open={true} className='loading'>
          <CircularProgress style={{ width: '10dvh', height: '10dvh' }} className='circular' />
        </Backdrop>
      )}


    </div>
  );
}
