import '../Template1/InnovationsSite.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import './InnovationsSite.css'
import { motion } from 'framer-motion';
import styles from '../../styles';
import { navVariants, slideIn } from '../../utils/motion';

const LockIconExample = () => {
  return (
    //https://play.google.com/store/apps/details?id=com.readermobile&hl=tr&gl=US
    //"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjhkaWNlYWl6aTlyaTlibmR3bzU2MTBiaWdxbGJ0cHJ4YTZpYnpuMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/K33m4VQrYC3fQwCkfH/giphy.gif"
    //https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTNpaGEzN2hmOW9xM2ZoZThlY2h5MDl3ZXhtdDBibHppcndmbDl6cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/M8tZRmqgGUxfdCizH8/giphy.gif
    <div>
      <img
        src="https://i.ibb.co/qyr4Ts8/Pngtree-cartoon-hand-drawn-network-information-5049321.png"
        alt="Sample GIF"
        style={{ width: '400px', height: 'auto' }}
      />
    </div>
  );
};

export default function DataSecurityPromotionalSite({ responseData, colorData }) {
  return (
    <div>
      <motion.nav variants={slideIn('left', 'spring', 0.8, 1)}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings}`}>
        <Grid container>
          <Grid xs={4}>
            <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LockIconExample></LockIconExample></div>
          </Grid>
          <Grid xs={8}>
            <div class="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: 70, color: colorData }}>Data Security</div>
            <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{responseData.dataSecurity}</div>
          </Grid>
        </Grid>
      </motion.nav>
    </div>

  )
}