import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const HowItWorks = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>

          <Grid md={3} xs={12}>
            <div className='howItWork'></div>
          </Grid>

          <Grid item md={0.5}></Grid>

          <Grid md={3} xs={12} >
            <div className='howItWork'></div>
          </Grid>

          <Grid item md={0.5}></Grid>

          <Grid md={3} xs={12}>
            <div className='howItWork'></div>
          </Grid>

          <Grid item md={1}></Grid>
        </Grid>
      </Box>

    </div>
  );
};

export default HowItWorks;
