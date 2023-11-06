import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
  const [url, setUrl] = useState('');
  const [typedText, setTypedText] = useState('');
  const initialText = 'Enter the URL...';

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

  const handleGenerate = () => {
    console.log('Girilen URL:', url);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <Container>
      <MyTextField variant="outlined" onChange={handleUrlChange} placeholder={typedText} />
      <MyButton variant="contained" color="primary" onClick={handleGenerate}>
        Generate
      </MyButton>
    </Container>
  );
};

export default MyComponent;
