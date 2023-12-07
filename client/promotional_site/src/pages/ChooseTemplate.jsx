import React from "react";
import Header from '../components/ChooseTemplate/Header'
import Grid from '@mui/material/Grid';
import Template1 from '../components/ChooseTemplate/Template1'
import Template2 from '../components/ChooseTemplate/Template2'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../assets/logosiyah.png'
import { useNavigate } from "react-router-dom";

export default function ChooseTemplate() {
  const navigate = useNavigate();

  return (
    <div className="backgroundtemp">
       <Box style={{ innerWidth: '40px' }} >
      <AppBar className='appbar' position='fixed' style={{ backgroundColor: 'white', height: 70, width: '100 %'}}>        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
          <Button onClick={() => navigate('/')}>
            <img src={Logo} className='navbarLogo'></img>
          </Button>
        </Typography>
      </Toolbar>
      </AppBar>
    </Box>
      <Header></Header>
      <div>
        <Grid container spacing={8}>
          <Grid item xs={10} md={6}>
            <Template1></Template1>
          </Grid>
          <Grid item xs={10} md={6}>
            <Template2></Template2>
          </Grid>
        </Grid>
      </div>
    </div >
  );
}
