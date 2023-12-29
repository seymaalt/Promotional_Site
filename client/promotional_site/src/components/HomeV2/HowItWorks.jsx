import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Business from '../../assets/business.gif';
import Design from '../../assets/design.gif';
import UrlBusiness from '../../assets/urlbusiness.gif';

const HowItWorks = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>

          <Grid md={3} xs={12}>
            <div className='howItWork'>
              <img src={UrlBusiness} className='howItWorkImage' />
              <div className='howItWorkBusinessText'>
                Enter your app's Google Play or App Store URL, choose the template you want and enjoy your demo page.
              </div>
            </div>
          </Grid>

          <Grid item md={0.5}></Grid>

          <Grid md={3} xs={12} >
            <div className='howItWork'>
              <img src={Business} className='howItWorkImage' />
              <div className='howItWorkBusinessText'>
                Enter your company name and brief introduction, choose the template you want and enjoy your introduction page.
              </div>
            </div>
          </Grid>

          <Grid item md={0.5}></Grid>

          <Grid md={3} xs={12}>
            <div className='howItWork'>
              <img src={Design} className='howItWorkImage' />
              <div className='howItWorkBusinessText'>
                Design the texts and photos created for you on your page as you wish.
              </div>
            </div>
          </Grid>

          <Grid item md={1}></Grid>
        </Grid>
      </Box>

    </div>
  );
};

export default HowItWorks;
