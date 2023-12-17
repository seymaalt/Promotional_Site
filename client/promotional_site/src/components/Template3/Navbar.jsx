import React, { useState,useContext } from 'react';
import Grid from "@mui/material/Grid";
import './style/template3.css'
import GlobalContext from '../../context/GlobalContext'; 


const Template3Navbar = () => {
   
    const { response } = useContext(GlobalContext);

    return (
        <div className='temp3Navbar'>
            <Grid container >
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Grid container >
                        <Grid item xs={3} className='companyName'>
                        {response && response.businessName ? response.businessName : 'COMPANY NAME'}
                        </Grid>
                        <Grid item xs={6} className='navigation'>
                            <a href='#' className='navigationButton'>Services</a>
                            <a href='#' className='navigationButton'>Section 2</a>
                            <a href='#' className='navigationButton'>Contact</a>
                        </Grid>
                        <Grid item xs={3} className='contact'>
                            <a href='#' className='button-63'>
                                Get Started
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    );
}

export default Template3Navbar;
