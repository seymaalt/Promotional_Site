import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import { useState } from "react";
import axios from 'axios'
import LoginGoogle from '../../assets/google.png'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
const defaultTheme = createTheme();

export default function SignUp() {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const googleAuth = () => {
    window.open(
      `${import.meta.env.VITE_PORT}/auth/google/callback`,
      "_self"
    );
  };

  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name')
    const email = data.get('email')
    const password = data.get('password')

    const validationErrors = {}
    if (!name.trim()) {
      validationErrors.username = "Kullanıcı adı gerekli"
    }

    if (!email.trim()) {
      validationErrors.email = "E-posta gereklidir"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "E-posta geçerli değil"
    }

    if (!password.trim()) {
      validationErrors.password = "Şifre alanı boş bırakılamaz!"
    } else if (!/^(?=.*[A-Z])(?=.*[a-z])/.test(password)) {
      validationErrors.password = "Şifre Bir büyük bir küçük harf içermeli"
    } else if (!/^(?=.*\d)/.test(password)) {
      validationErrors.password = "Şifre sayi içermeli"
    } else if (!/^(?=.*[.,;@$!%*?&])/.test(password)) {
      validationErrors.password = "Şifre özel karaktere içermeli"
    } else if (!/^.{8,12}$/.test(password)) {
      validationErrors.password = "Şifre en az 8 en çok 12 karakter içermeli"
    }

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      const name = formData.name
      const email = formData.email
      const password = formData.password

      axios.post(`${import.meta.env.VITE_PORT}/user/register`, { name, email, password })

        .then(result => {
          if (result.data == "User already registered") {
            Swal.fire({
              position: "top",
              icon: "error",
              title: "User already exists with Email!",
              showConfirmButton: false,
              timer: 1500
            });
          }
          else {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Success! check your email ",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        .catch(err => console.log(err))
    }
  };



  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className='loginPageDiv'>
          <Typography fontWeight="bold" id='loginPageHeader'>
            Welcome !
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Name
                  </InputLabel>
                  <OutlinedInput
                    required
                    fullWidth
                    id="Name"
                    onChange={handleChange}
                    name="name"
                    type="text"
                    label="Password"
                    sx={{ backgroundColor: 'white', borderRadius: '4px' }}
                  />
                </FormControl>
                {errors.username && <span>{errors.username}</span>}
              </Grid>

              <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Email
                  </InputLabel>
                  <OutlinedInput
                    required
                    fullWidth
                    onChange={handleChange}
                    id="email"
                    type="text"
                    name="email"
                    label="email"
                    sx={{ backgroundColor: 'white', borderRadius: '4px' }}
                  />
                </FormControl>
                {errors.email && <span>{errors.email}</span>}
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    required
                    fullWidth
                    onChange={handleChange}
                    id="password"
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    sx={{ backgroundColor: 'white', borderRadius: '4px' }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {errors.password && <span>{errors.password}</span>}
              </Grid>
              <Grid item xs={12}>

              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundImage: "linear-gradient(45deg, #7040e2, #906ad7, #ad92cb)", borderRadius: "30px", fontFamily: "poppins", fontWeight: "500" }}
            >
              Register
            </Button>
            <p style={{ textAlign: "center", fontFamily: "poppins", fontSize: "20px", color: "white" }}> or </p>
            <Button
              onClick={googleAuth}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: 'white', fontWeight: "bold", color: "gray", borderRadius: "30px" }}
              startIcon={<img src={LoginGoogle} alt="Google Logo" style={{ width: '24px', marginRight: '8px' }} />}
            >
              Signed in with Google
            </Button>
            <Button href="/LoginPage" variant="body2" underline="none" style={{ fontFamily: "poppins", fontSize: "1.1rem", color: "white", textTransform: 'none', padding: '0px', marginTop: '3%' }}>
              Already have an account? Log In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}