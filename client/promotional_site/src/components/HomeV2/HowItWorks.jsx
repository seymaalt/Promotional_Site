import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const HowItWorks = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>

          <Grid
            item
            className='asd'
            xs={3}
            style={{
              borderRadius: '30px',
              backgroundColor: '#2F2D30',
              height: '650px',
           
            }}
          ></Grid>

          <Grid item xs={0.5}></Grid>

          <Grid item   className='asd' xs={3} style={{ borderRadius: '30px', backgroundColor: '#2F2D30' }}></Grid>

          <Grid item   xs={0.5}></Grid>

          <Grid item   className='asd' xs={3} style={{ borderRadius: '30px', backgroundColor: '#2F2D30' }}></Grid>

          <Grid item xs={1}></Grid>
        </Grid>
      </Box>

    </div>
  );
};

export default HowItWorks;
