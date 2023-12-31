import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "../services/axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Input from "../components/Input";
import Logo from "../components/Logo";
import HomePageImage from "../components/HomePageImage";
import EditPageImage from "../components/EditPageImage.jsx"
import HomePageText from "../components/HomePageText";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from '@mui/material/Menu';
import LoginModal from "../components/Login/LoginModal.jsx";
import RegisterModal from "../components/Register/RegisterModal.jsx";
import AuthContext from "../context/AuthContext.jsx";

import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';

export default function AutoGrid() {
  const { token, setToken, logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [buttonVisible, setButtonVisible] = useState(true);


  const getUser = async () => {
    try {
      const url = `${import.meta.env.VITE_PORT}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
      console.log(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = (event) => {
    setAnchorEl(false)
  };

  const handleCloseFavorites = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    navigate("/favorites");
  };

  const handleProfile = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    navigate("/profile");
  };


  const handleLogout = async () => {
    logout();
    window.open(`${import.meta.env.VITE_PORT}/auth/logout`, "_self");
  };


  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleButtonClick = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    setButtonVisible(false);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_PORT}/user/current`);
        setUser(response.data);
        console.log(user);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          logout();
          setToken(null);
        } else {
          console.error('Error fetching user profile:', error);
        }
      }
    };

    if (token && storedToken === token) {
      fetchUserProfile();
    }
  }, [token, logout, setToken]);

  useEffect(() => {
    console.log(user);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setButtonVisible(false);
      } else {
        setButtonVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box className="background" >
      <div className='navbar' >
        <Logo />
        {user ? (
          <div className="fav">
            <Button
              ref={anchorRef}
              variant="contained"
              className="logged"
              style={{ marginRight: "10px", backgroundColor: "white", color: "#7247AE", fontWeight: "600" }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}

            >
              {user.username || user.name}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleProfile}>Profile</MenuItem>
              <MenuItem onClick={handleCloseFavorites}>Favorites</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <div className="nlNavbar">
            <Box sx={{ display: { xs: "flex", md: "flex" } }}>
              <Button style={{ color: "#7247AE" }}>
                <LoginModal />
              </Button>
              <Button style={{ color: "#7247AE" }}>
                <RegisterModal />
              </Button>
            </Box>
          </div>
        )}
      </div>

      <Grid container spacing={10} className="middle">
        <Grid item xs={10} md={4}>
          <div className="homeText" >
            <HomePageText></HomePageText>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className="homeURL">
                URL
              </p>
              <Input />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={2}></Grid>
        <Grid item xs={9} md={4}>
          <div>
            <HomePageImage></HomePageImage>
          </div>
        </Grid>
      </Grid>

      <div className="middle2" >
        <Grid container spacing={10} className="middle2">
          <Grid item xs={10} md={4}>
            <div className="homeText">
              <span className="homePageText">
                <p className="firstParagraph" >Edit Text Easily with Double Click!</p>
                <p className="secondParagraph">Welcome to our user-friendly platform that makes text editing a breeze. With our intuitive interface, you can now effortlessly update your text content by simply double-clicking on the text you want to modify.</p>
              </span>

            </div>
          </Grid>
          <Grid item xs={12} md={2}></Grid>
          <Grid item xs={9} md={4}>
            <div className="imageHome">
              <EditPageImage></EditPageImage>
            </div>
          </Grid>
        </Grid>
        <div style={{ alignItems: 'flex-start', height: '78vh', marginRight: '3%' }}>
          {buttonVisible && (
            <Button className="scrollButton" style={{ color: 'white' }} onClick={handleButtonClick}>
              <KeyboardDoubleArrowDownRoundedIcon fontSize="large" />
            </Button>
          )}
        </div>
      </div>
    </Box >
  );
}
