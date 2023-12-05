import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Logo from '../../components/Logo'
import { useNavigate, useParams } from 'react-router';
const defaultTheme = createTheme();


const ResetPassword = () => {


    // const [password, setPassword] = useState()
    const navigate = useNavigate()
    const { id, token } = useParams()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const password = data.get('password')

        axios.post(`${import.meta.env.VITE_PORT}/user/resetPassword/${id}/${token}`, { password })
            .then(result => {
                console.log(result)
                if (result.data == "Success") {
                    navigate("/")
                }
            })
            .catch(err => console.log(err));


    }



    return (
        <div className='background'>
            <div className='navbar' >
                <Logo />
            </div>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs" >

                    <CssBaseline  />
                    <Box
                    style={{backgroundColor:'white', padding:'30px', borderRadius:'16px'}}
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
                            Enter Your New Password
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
        </div>
    );
}

export default ResetPassword