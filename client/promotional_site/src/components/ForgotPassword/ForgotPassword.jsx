import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
const defaultTheme = createTheme();

const ForgotPassword = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    if (!email) {
      alert("E-posta eksik")
      return; // İşlemi burada sonlandır
    } else {
      axios.post(`${import.meta.env.VITE_PORT}/user/forgotPassword`, {email})
        .then(result => {
          console.log(result)
          const jwtToken = result.data.accessToken;
          localStorage.setItem('token', jwtToken);
          if (result.data == "Success") {
             alert("Başarıyla Gönderildi")
          }

        })
        .catch(err => console.log(err));

    }
  }



  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h1" fontWeight="bold" variant="h5">
            Forgot Password

          </Typography>
          <Typography variant="subtitle2" fontWeight="400" padding="5px" gutterBottom>
            Enter Your Email 
          </Typography>
          <Box component="form" onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#6D46AE', fontWeight: "bold" }}
            >
              Reset My Password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ForgotPassword