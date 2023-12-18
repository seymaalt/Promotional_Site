import React, { useState,useContext } from 'react';
import Grid from "@mui/material/Grid";
import './style/template3.css'
import GlobalContext from '../../context/GlobalContext'; 


const Template3Navbar = () => {
   
    const { response } = useContext(GlobalContext);

    return (
        <div className='temp3Navbar'>
            <Grid container >
                <Grid item md={2} xs={0}></Grid>
                <Grid item md={8}>
                    <Grid container >
                        <Grid item md={3} xs={6}className='companyName'>
                        {response && response.businessName ? response.businessName : 'COMPANY NAME'}
                        </Grid>
                        <Grid item md={6} xs={0} className='navigation'>
                            <a href='#' className='navigationButton'>Services</a>
                            <a href='#' className='navigationButton'>Section 2</a>
                            <a href='#' className='navigationButton'>Contact</a>
                        </Grid>
                        <Grid item md={3} xs={6}className='contact'>
                            <a href='#' className='button-63'>
                                Get Started
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={2} xs={0}></Grid>
            </Grid>
        </div>
    );
}

export default Template3Navbar;
