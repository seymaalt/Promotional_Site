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
              <img src={UrlBusiness} style={{width:'90%', objectFit:'cover', padding:'5%', borderRadius:'36px'}}/>
              <div className='howItWorkBusinessText'>
                Enter your apps URL on Google Play or App Store and see the result.
              </div>
            </div>
          </Grid>

          <Grid item md={0.5}></Grid>

          <Grid md={3} xs={12} >
            <div className='howItWork'>
            <img src={Business} style={{width:'90%', objectFit:'cover', padding:'5%', borderRadius:'36px',}}/>
            <div className='howItWorkBusinessText'>
                Enter your apps URL on Google Play or App Store and see the result.
              </div>
            </div>
          </Grid>

          <Grid item md={0.5}></Grid>

          <Grid md={3} xs={12}>
              <div className='howItWork'>
              <img src={Design} style={{width:'90%', objectFit:'cover', padding:'5%', borderRadius:'36px'}}/>
              <div className='howItWorkBusinessText'>
                Enter your apps URL on Google Play or App Store and see the result.
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
