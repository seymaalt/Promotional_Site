import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
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
const CustomBox = styled(Box)({
  background: "linear-gradient(to right, #6C46AE, #A84DB0, #D84FB4)",
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  const { token } = useContext(AuthContext);
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
    const storedToken = localStorage.getItem("token");

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/current", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (token && storedToken === token) {
      fetchUserProfile();
    }
  }, [token]);

  return (
    <CustomBox>
      <div style={{ display: "flex" }}>
        <Logo />
        {user ? (
          <div
            style={{ marginTop: "15px", position: "absolute", right: "0px" }}
          >
            <Button
              variant="contained"
              style={{ backgroundColor: "white", width: "20px" }}
              href="#contained-buttons"
              onClick={handleButtonClick}
            >
              {isFavorite ? (
                <FavoriteIcon style={{ color: "#7247AE" }} />
              ) : (
                <FavoriteBorderIcon style={{ color: "#7247AE" }} />
              )} 
            </Button>
            <Button
              style={{ fontWeight: "bold", color: "white" }}
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              Hoşgeldin {user.username}
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
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        ) : (
          <div
            style={{ marginTop: "15px", position: "absolute", right: "0px" }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
      <Grid container spacing={3}>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={5} style={{ marginTop: "100px" }}>
          <HomePageText></HomePageText>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                marginRight: "10px",
                color: "white",
                fontFamily: "Roboto, sans-serif",
                fontSize: "25px",
              }}
            >
              URL
            </p>
            <Input style={{ flex: 1, marginLeft: "8px" }} />
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <Box style={{ marginLeft: "50px" }}>
            <HomePageImage></HomePageImage>
          </Box>
        </Grid>
      </Grid>
    </CustomBox>
  );
}
