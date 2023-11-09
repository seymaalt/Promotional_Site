import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PromotionalSite from '../pages/PromotionalSite.jsx';
import GlobalContext from '../context/GlobalContext.jsx';
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

const Container = styled('div')({
  display: 'flex',
  width: 'fit-content',
  position: 'relative',
});

const MyTextField = styled(TextField)({
  backgroundColor: '#fff',
  borderRadius: '10px',
  height: '40px',
  width: '550px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    height: '100%',
  },
});

const MyButton = styled(Button)({
  background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
  borderRadius: '0 10px 10px 0',
  height: '40px',
  position: 'absolute',
  right: 0,
  transition: 'background 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
  },
});

const MyComponent = () => {
  const { response, setResponse } = useContext(GlobalContext);
  const [typedText, setTypedText] = useState('');
  const [loading, setLoading] = useState(false);
  const initialText = 'Enter the URL...';
  const [inputValue, setInputValue] = useState('');
  const [renderDetail, setRenderDetail] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/content/`, {
        data: inputValue,
      });

      setRenderDetail(true);
      setResponse(res.data);
      navigate('/promotional-site');
    } catch (error) {
      console.error('Error fetching data from the server!', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let index = 0;
    const textInterval = setInterval(() => {
      if (index <= initialText.length) {
        setTypedText(initialText.substring(0, index));
        index++;
      } else {
        clearInterval(textInterval);
      }
    }, 100);
    return () => clearInterval(textInterval);
  }, []);

  return (
    <div>
      <Container>
        <MyTextField
          variant="outlined"
          onChange={handleInputChange}
          placeholder={typedText}
          autoComplete="off"
          InputProps={{ autoCapitalize: 'none' }}
        />
        <MyButton variant="contained" color="primary" onClick={handleGenerate}>
          Generate
        </MyButton>
      </Container>

      {loading && (
        <Backdrop open={true} style={{ zIndex: 1, color: '#fff', backdropFilter: 'blur(4px)' }}>
          <CircularProgress style={{ color: '#fff', width: '100px', height: '100px' }} />
        </Backdrop>
      )}

      {renderDetail && <PromotionalSite responseData={response} />}
    </div>
  );
};

export default MyComponent;
