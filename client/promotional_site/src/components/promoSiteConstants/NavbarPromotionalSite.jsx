import * as React from 'react';
import { useState, useEffect, useContext } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';
import Logo from '../../assets/logosiyah.png'
import axios from "axios";
import AuthContext from '../../context/AuthContext';
import PublishContext from '../../context/PublishContext';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from "react-router-dom";
import Template1Context from '../../context/Template1Context';
import GlobalContext from '../../context/GlobalContext';
import Swal from 'sweetalert2'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ButtonAppBar = ({ responseData }) => {
  const { token, setToken, logout } = useContext(AuthContext);
  const { response } = useContext(PublishContext);
  const [tokenLink, setTokenLink] = useState();
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { contextHeader,
    designHeader,
    contextLogo,
    color,
    contextDescription,
    designDescription,
    contextDownloadLinks,
    contextImages,
    contextInnovations,
    designInnovations,
    contextDataSecurity,
    designDataSecurity} = useContext(Template1Context);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const handleDownload = async () => {
    try {
      const userResponse = await axios.get(`${import.meta.env.VITE_PORT}/user/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userId = userResponse.data.id;
      console.log(userId);

      await axios.post(`${import.meta.env.VITE_PORT}/content/TempData`, {
        data: {
          userId,
          contextHeader,
          designHeader,
          contextLogo,
          color,
          contextDescription,
          designDescription,
          contextDownloadLinks,
          contextImages,
          contextInnovations,
          designInnovations,
          contextDataSecurity,
          designDataSecurity
        }
      }).then(result => {
        console.log(result.data.publishToken)
        setTokenLink("http://localhost:5173/1/" + result.data.publishToken)
         Swal.fire({
        title: "Your Page is Ready!",
        html:
         `
        Your link: 
       <a href="${("http://localhost:5173/1/" + result.data.publishToken)}" target='_blank'>${("http://localhost:5173/1/" + result.data.publishToken)}</a>`,
        imageUrl: "https://i.hizliresim.com/o23f2f4.png",
        imageWidth: 130,
        imageAlt: "Custom image"
      });
      });

     
    } catch (error) {
      console.error('Error fetching data from the server!', error);
    }
  };

  return (
    <Box >
      <div className='appbar' style={{ backgroundColor: 'white', height: 70, width: '100%', top: 0 }}>       <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
          <Button onClick={() => navigate('/')}>
            <img src={Logo} className='navbarLogo'></img>
          </Button>
        </Typography>
        <div className='icons'>
          <div className='icon'>

            <Button id='iconButton' onClick={handleDownload} ><PublishIcon sx={{ marginRight: '5%' }} /><b>Publish</b></Button>

          </div>


        </div>

      </Toolbar>
      </div>
    </Box>
  );
}

export default ButtonAppBar;
