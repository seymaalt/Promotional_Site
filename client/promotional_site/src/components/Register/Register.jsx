import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
import  { useState } from "react";
import axios from 'axios'
import LoginGoogle from '../../assets/google.png'

const defaultTheme = createTheme();

export default function SignUp() {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const googleAuth = ( )=> {
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

      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });


      axios.post(`${import.meta.env.VITE_PORT}/user/register`, { name, email, password })

        .then(result => {
          console.log(result)
          if (result.data == "Bu Email Zaten Mevcut!!!") {
            alert("Bu E-Posta Zaten Mevcut!")
          } else {
            alert("Form başarıyla gönderildi")
          }
        })
        .catch(err => console.log(err))


    }
  };



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
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
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
                  />
                </FormControl>
                {errors.username && <span>{errors.username}</span>}
              </Grid>

              <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
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
                  />
                </FormControl>
                {errors.email && <span>{errors.email}</span>}
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                   Password
                  </InputLabel>
                  <OutlinedInput
                    required
                    fullWidth
                    onChange={handleChange}
                    id="outlined-adornment-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
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
                    label="Password"
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
              style={{ backgroundColor:'#6D46AE',fontWeight:"bold"}}
             
            >
              Register
            </Button>
            <p style={{textAlign:"center"}}> or </p>
            <Button
              onClick={googleAuth}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background:'white',fontWeight:"bold",color:"gray"}}
              startIcon={<img src={LoginGoogle} alt="Google Logo" style={{ width: '24px', marginRight: '8px' }} />}

             
            >
                Signed in with Google
            </Button>
         
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}