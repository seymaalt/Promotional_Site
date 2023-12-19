import React from 'react';
import Logo from '../../assets/logo.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Footer({ howItWorks }) {
    return (
        <Grid container className='footerDiv' >
            <Grid md={4}>
            </Grid>
            <Grid md={4} sx={{ display: 'grid', textAlign: 'center' }}>
                <Grid container >
                    <Grid md={12} xs={12}>
                        <img src={Logo} className='footerLogo' alt="Logo" />
                    </Grid>
                    <Grid md={4} xs={4}>
                        <a href="#" className='footerNavigate'>Build Website</a>
                    </Grid>
                    <Grid md={4} xs={4}>
                        <a href="#" onClick={howItWorks} className='footerNavigate'>How It Works</a>
                    </Grid>
                    <Grid md={4} xs={4}>
                        <a href="#" className='footerNavigate'>Pricing</a>
                    </Grid>
                    <Grid md={12} xs={12}>
                        <div className='footerCopyright'>© 2023 Showcaseify, LLC. All rights reserved.</div>
                    </Grid>
                </Grid>
            </Grid >
            <Grid md={4}>
            </Grid>
        </Grid>
    );
}
