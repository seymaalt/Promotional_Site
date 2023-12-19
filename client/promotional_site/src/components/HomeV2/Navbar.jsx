import { useState } from 'react'
import Logo from '../../assets/logo.png';
import Grid from "@mui/material/Grid";

export default function Navbar({ onClick }) {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <div className='homeNavbar'>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} className='homeNavbarLogo' alt="Logo" />
      </div>
      <div className='homeNavbarP2'>
        <a href="#" onClick={onClick} className='homeNavbarNavigate'>How it Works</a>
        <a href="#" className='homeNavbarNavigate'>Pricing</a>
      </div>
      <div className='homeLoginRegister'>
        <a href='/LoginPage' className='homeLoginButton'>Login </a>
        <button href="#" className='homeRegisterButton'>Register</button>
      </div>
    </div>

  );
}
