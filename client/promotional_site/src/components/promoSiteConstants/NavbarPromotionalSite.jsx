import * as React from 'react';
import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Logo from '../../assets/logosiyah.png'
import axios from "axios";
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = useState({
    left: false
  });

  const [isNavbarVisible, setNavbarVisibility] = useState(true);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleAddFavorite = async () => {
    try {
      const data = {
        url: responseData.url,
        template: 'temp1',
      };

      const response = await axios.post(`${import.meta.env.VITE_PORT}/user/addFavorite`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      handleClickOpen();
      console.log(response.data);

    } catch (error) {
      console.error('Favori eklerken hata oluştu:', error);
    }
  };
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setNavbarVisibility(!isScrollingDown || currentScrollPos < 50);

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box style={{ innerWidth: '40px' }} >
      <AppBar className='appbar' position='fixed' style={{ backgroundColor: 'white', height: 70, width: '100 %', display: isNavbarVisible ? 'block' : 'none' }}>        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
          <img src={Logo} className='navbarLogo'></img>
        </Typography>
        <div className='icons'>
          <div className='icon'>
            <Button color="inherit" ><DownloadIcon /><b>Download</b></Button>
          </div>
          <div className='icon'>
            <Button color="inherit" onClick={handleAddFavorite}><FavoriteIcon /></Button>
          </div>

        </div>

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 4, p: 2 }} id="customized-dialog-title">
            Added to favorites
          </DialogTitle>
          <IconButton
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </BootstrapDialog>
      </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
