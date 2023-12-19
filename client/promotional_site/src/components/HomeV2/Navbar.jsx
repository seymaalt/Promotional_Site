import Logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { useRef,useEffect,useState,useContext } from 'react';
import axios from "../../services/axios";
import AuthContext from '../../context/AuthContext';
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from '@mui/material/Menu';

export default function Navbar({ onClick }) {

  const { token, setToken, logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const anchorRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [buttonVisible, setButtonVisible] = useState(true);
  const navigate = useNavigate();

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


  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleButtonClick = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    setButtonVisible(false);
  };
  
  const handleRegisterClick = () => {
    navigate("/RegisterPage");
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
    <div  style={{ height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", backgroundColor: "#161417" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} style={{ width: "250px", marginRight: "10px" }} alt="Logo" />
      </div>
      <div style={{ display: "flex", flexGrow: 1, marginLeft: "550px" }}>
        <a href="#" onClick={onClick} style={{ color: "white", fontSize: "20px", margin: "0 40px 0 0", textDecoration: "none" }}>How it Works</a>
        <a href="#" style={{ color: "white", fontSize: "20px", margin: "0 40px 0 0", textDecoration: "none" }}>Pricing</a>
      </div>
      <div>
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
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <div>
          <a href='/LoginPage' style={{ color: "white",fontSize:"20px", margin: "0 30px 0 0", textDecoration: "none" }}>Login </a>
          <button onClick={handleRegisterClick} style={{ color: "#161417", fontSize: "20px", margin: "0 0px 0 0", textDecoration: "none", padding: "8px 15px", borderRadius: "30px" }}>
           Register
        </button>
        </div>
        )}

        
      </div>
    </div>

  );
}
