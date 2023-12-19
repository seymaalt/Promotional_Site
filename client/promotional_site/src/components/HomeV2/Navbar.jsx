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
    <div className='homeNavbar'>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} className='homeNavbarLogo' alt="Logo" />
      </div>
      <div className='homeNavbarP2'>
        <a href="#" onClick={onClick} className='homeNavbarNavigate'>How it Works</a>
        <a href="#" className='homeNavbarNavigate'>Pricing</a>
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
          <a href='/LoginPage' className='homeLoginButton'>Login </a>
          <button onClick={handleRegisterClick}  className='homeRegisterButton' >
           Register
        </button>
        </div>
        )}


      </div>
    </div>

  );
}
