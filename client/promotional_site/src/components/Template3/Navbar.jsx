import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import './style/template3.css'


const Template3Navbar = () => {


    return (
        <div className='temp3Navbar'>
            <Grid container >
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Grid container >
                        <Grid item xs={3} className='companyName'>
                            COMPANY NAME
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
