import { useState } from 'react'
import Logo from '../../assets/logo.png';
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onClick }) {


  const navigate = useNavigate();

  
  const handleRegisterClick = () => {
    navigate("/RegisterPage");
  };



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
        <a href='/LoginPage' className='homeLoginButton' >Login </a>
        <button onClick={handleRegisterClick} className='homeRegisterButton' >
           Register
        </button>

      </div>
    </div>

  );
}
