import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Business from '../../assets/business.gif';
import Design from '../../assets/design.gif';
import UrlBusiness from '../../assets/urlbusiness.gif';

const Card = ({ imageSrc, text }) => (
  <Grid item md={3} xs={12}>
    <div className='howItWork'>
      <img src={imageSrc} className='howItWorkImage' />
      <div className='howItWorkBusinessText'>{text}</div>
    </div>
  </Grid>
);

const HowItWorks = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={1}></Grid>

          <Card
            imageSrc={UrlBusiness}
            text="Enter your app's Google Play or App Store URL, choose the template you want and enjoy your demo page."
          />

          <Grid item md={0.5}></Grid>

          <Card
            imageSrc={Business}
            text="Enter your company name and brief introduction, choose the template you want and enjoy your introduction page."
          />

          <Grid item md={0.5}></Grid>

          <Card
            imageSrc={Design}
            text="Design the texts and photos created for you on your page as you wish."
          />
        </Grid>
        <Grid item md={1}></Grid>

      </Box>
    </div>
  );
};

export default HowItWorks;
