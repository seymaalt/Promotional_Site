import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import './style/template3.css'


const Template3Footer = () => {


    return (
        <div className='temp3Footer'>
            <Grid container style={{ paddingTop: '5dvh' }}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Grid container >
                        <Grid item xs={3}>
                            <div className='footerName'>COMPANY NAME</div>
                            <div className='footerleft'>Tel: 0 (216) 473 46 74</div>
                            <div className='footerleft'>info@venhancer.com</div>
                            <div className='footerleft'>Kozyatağı Mahallesi, 19 Mayıs Caddesi, Sarıkanarya Sokağı, Bina No 14 Byoffice Plaza (K2 Plaza) Kat 10, İç Kapı No 10, 34736 Kadıköy/İstanbul</div>

                        </Grid>
                        <Grid item xs={6} className='footerNavigate'>
                            <Grid container >
                                <Grid item xs={12}>
                                    <a href='#' className='footerNavigation'>Services</a>
                                    <a href='#' className='footerNavigation'>Section 2</a>
                                    <a href='#' className='footerNavigation'>Contact</a>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={3}>
                            <div className='socialMedia'>
                                <a href='#' className='socialMediaIcon'>
                                    <InstagramIcon sx={{ fontSize: '3rem' }} />
                                </a>
                                <a href='#' className='socialMediaIcon'>
                                    <WhatsAppIcon sx={{ fontSize: '3rem' }} />
                                </a>
                                <a href='#' className='socialMediaIcon'>
                                    <TwitterIcon sx={{ fontSize: '3rem' }} />
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    );
}

export default Template3Footer;
