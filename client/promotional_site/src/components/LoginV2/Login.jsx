import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import LoginGoogle from '../../assets/google.png'
import ForgotPasswordModal from '../ForgotPassword/ForgotPasswordModal';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


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
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Email or password is missing",
        showConfirmButton: false,
        timer: 1500
      });
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
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Incorrect Password",
              showConfirmButton: false,
              timer: 1500
            });
          }
          else if (result.data == "Wrong Email") {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Wrong Email",
              showConfirmButton: false,
              timer: 1500
            });
          }
          else if (result.data == "Email not verified") {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "Email Not Verified",
              showConfirmButton: false,
              timer: 1500
            });
          }
          else {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Success",
              showConfirmButton: false,
              timer: 1500
            });
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
        <Box className='loginPageDiv'>
          <Typography fontWeight="bold" id='loginPageHeader' >
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
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
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
              sx={{ backgroundColor: 'white', borderRadius: '4px' }}
            />
            <Grid container sx={{ justifyContent: 'space-between',alignItems:'center' }}>
              <Grid item xs={6}>
                <FormControlLabel
                  style={{ marginTop: "3%", fontFamily: "poppins", fontSize: "24px", color: "white" }}
                  control={<Checkbox value="remember" style={{ color: "#906ad7", fontFamily: "poppins", fontSize: "24px" }} type="checkbox" checked={rememberMe} onChange={handleCheckboxChange} />}
                  label="
              Remember me"
                />
              </Grid>
              <Grid item xs={6} style={{textAlign:'right'}}>
                <Button href="#" variant="body2" style={{ padding: '0px' }}>
                  <ForgotPasswordModal />
                </Button>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              id='loginPageButton'
            >
              Login
            </Button>
            <p className='loginPageOr'> or </p>
            <Button
              onClick={googleAuth}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              id='loginPageGoogle'
              startIcon={<img src={LoginGoogle} alt="Google Logo" className='loginPageGoogleLogo' />}
            >
              Login with Google
            </Button>
          </Box>

          <Button href="/RegisterPage" variant="body2" underline="none" style={{ fontFamily: "poppins", fontSize: "1.15rem", color: "white", textTransform: 'none', float: 'left', padding: '0px', marginBottom: '4%',marginTop:'4%' }}>
            Create Account
          </Button>
        </Box>
      </Container>
    </ThemeProvider >
  );
}

export default Login