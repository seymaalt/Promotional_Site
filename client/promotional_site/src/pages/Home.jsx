import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "../services/axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Input from "../components/Input";
import Logo from "../components/Logo";
import HomePageImage from "../components/HomePageImage";
import HomePageText from "../components/HomePageText";
import Button from "@mui/material/Button";
import LoginModal from "../components/Login/LoginModal.jsx";
import RegisterModal from "../components/Register/RegisterModal.jsx";
import AuthContext from "../context/AuthContext.jsx";
import MenuItem from "@mui/material/MenuItem";
import Menu from '@mui/material/Menu';

export default function AutoGrid() {
  const { token, setToken, logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);
 // const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

  };

  const handleLogout = async () => {
    logout();
    window.location.href = "/";

  };


  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_PORT}/user/current`);
        setUser(response.data);
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

  return (
    <Box className="background" >
      <div className='navbar' >
        <Logo />
        {user ? (
          <div className="fav">
        
            <Button
              ref={anchorRef}
              variant="contained"
              style={{marginRight:"10px",backgroundColor:"white",color:"#7247AE",height:"40px",fontWeight:"600"}}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
               {user.username}
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Favorites</MenuItem>
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
        <Grid item xs={10} md={4}>
          <div>
            <HomePageImage></HomePageImage>
          </div>
        </Grid>
      </Grid>
    </Box >
  );
}
