import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import LoginGoogle from '../../assets/google.png'
import ForgotPasswordModal from '../ForgotPassword/ForgotPasswordModal';
import { Navigate } from 'react-router';
import { useNavigate } from "react-router-dom";



const defaultTheme = createTheme();

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [rememberMe, setRememberMe] = useState(false);
  const [location, setLocation] = useState("/");
  const { token, setToken, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const googleAuth = () => {
    window.open(
      `${import.meta.env.VITE_PORT}/auth/google/callback`,
      "_self"
    );
  };


  useEffect(() => {
    // Sayfa yüklendiğinde LocalStorage'dan verileri kontrol et
    const storedemail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (storedemail && storedPassword && storedRememberMe) {
      setEmail(storedemail);
      setPassword(storedPassword);
      setRememberMe(storedRememberMe);
    }

  }, []);


  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    const savedPassword = localStorage.getItem(value);
    if (savedPassword) {
      setPassword(savedPassword);
    }
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')
    if (!email || !password) {
      alert("Email or password is missing")
      return;
    }
    else {
      axios.post(`${import.meta.env.VITE_PORT}/user/login`, { email, password })
        .then(result => {
          const jwtToken = result.data.accessToken;
          localStorage.setItem('token', jwtToken);
          if (result.data == "Success") {
            console.log({
              email: data.get('email'),
              password: data.get('password'),
            });

            if (rememberMe) {
              localStorage.setItem('email', email);
              localStorage.setItem('password', password);
              localStorage.setItem('rememberMe', true);
            } else {
              localStorage.removeItem('email');
              localStorage.removeItem('password');
              localStorage.removeItem('rememberMe');
            }

          }
          else if (result.data == "Password is incorrect") {
            alert("Incorrect Password")
          }
          else if (result.data == "Wrong Email") {
            alert("Wrong Email")
          }
          else if (result.data == "Email not verified")
          {
            alert("Email Not Verified")
          }
          else {       
            navigate("/");
          }

          setToken(result.data.accessToken);

          console.log("result: " + result.data.accessToken);
        })
        .catch(err => console.log(err));

    }
  }

  useEffect(() => {
    console.log("token: " + token);
  }, [token]);


  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography fontWeight="bold"  style={{fontFamily:"poppins",color:"white",fontSize:"40px"}}>
            Welcome back !

          </Typography>
         
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }}>
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              style={{ marginTop: "3%",fontFamily:"poppins",fontSize:"24px",color:"white" }}
              control={<Checkbox value="remember" style={{ color: "#906ad7",fontFamily:"poppins",fontSize:"24px" }} type="checkbox" checked={rememberMe} onChange={handleCheckboxChange} />}
              label="
              Remember me"
            />


            <Button

              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{  backgroundImage: "linear-gradient(45deg, #7040e2, #906ad7, #ad92cb)", borderRadius:"30px",fontFamily:"poppins",fontWeight:"500" }}
              >
              Login
            </Button>
            <p style={{ textAlign: "center" ,fontFamily:"poppins",fontSize:"20px",color:"white"}}> or </p>
            <Button
              onClick={googleAuth}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: 'white', fontWeight: "bold", color: "gray", borderRadius:"30px" }}
              startIcon={<img src={LoginGoogle} alt="Google Logo" style={{ width: '24px', marginRight: '8px' }} />}
            >
              Login with Google
            </Button>
          </Box>
          <Button href="#" variant="body2" underline="none" style={{ marginLeft: "17px", fontWeight: "bold" , fontFamily:"poppins",fontSize:"20px",color:"white"}}>
            <ForgotPasswordModal />
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login