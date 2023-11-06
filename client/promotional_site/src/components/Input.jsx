import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Container = styled('div')({
  display: 'flex',
  width: 'fit-content',
  position: 'relative',
});

const MyTextField = styled(TextField)({
    backgroundColor:  '#fff',
  borderRadius: '10px', // Tüm köşelere border radius uygula
  height: '40px',
  width: '680px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px', // Input alanındaki köşelere de border radius uygula
    height: '100%',
  },
});

const MyButton = styled(Button)({
    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
    borderRadius: '0 10px 10px 0',
    height: '40px', // Yüksekliği sabit bir değere ayarla
    position: 'absolute',
    right: 0,
    transition: 'background 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
    },
  });
const MyComponent = () => {
  const handleGenerate = () => {
    console.log('Generate button clicked');
  };

  return (
    <Container>
      <MyTextField variant="outlined" />
      <MyButton variant="contained" color="primary" onClick={handleGenerate}>
        Generate
      </MyButton>
    </Container>
  );
};

export default MyComponent;
