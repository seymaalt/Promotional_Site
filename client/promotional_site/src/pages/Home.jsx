import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "../services/axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Input from "../components/Input";
import Logo from "../components/Logo";
import HomePageImage from "../components/HomePageImage";
import HomePageText from "../components/HomePageText";
import Button from "@mui/material/Button";
import LoginModal from "../components/Login/LoginModal.jsx";
import RegisterModal from "../components/Register/RegisterModal.jsx";
import AuthContext from "../context/AuthContext.jsx";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Navigate, useNavigate } from "react-router-dom";

export default function AutoGrid() {
  const { token, setToken, logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleButtonClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleLogout = async () => {
    logout();
    setOpen(false);
    window.location.href = "/";

  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

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
            <div
              href="#contained-buttons"
              onClick={handleButtonClick}
            >
              {isFavorite ? (
                <FavoriteIcon style={{ color: "#7247AE" }} />
              ) : (
                <FavoriteBorderIcon style={{ color: "#7247AE" }} />
              )}
            </div>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              Welcome {user.username}
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        style={{ position: 'relative' }}
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
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
