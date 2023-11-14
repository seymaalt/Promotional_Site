import '../Template1/InnovationsSite.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import './InnovationsSite.css'
import { motion } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../../utils/motion';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display: 'grid',
  flex: 1,

  margin: 50,
  fontSize: 25,
  color: theme.palette.text.secondary,
}));

const LockIconExample = () => {
  return (

    <div>
      <img
        src="https://pouch.jumpshare.com/preview/jl6Y16CAXHa0N5wUvikBkrMRprqKM-8IJOCBoPTdK26G74yJSnEzdZQNKBYanNcHi8lytStUURG7jA4RH_WbyHN_vqubL_oNIbBfT7gwaSY"
        alt="Sample GIF"
        style={{ width: '200px', height: 'auto' }}
      />
    </div>
  );
};

export default function DataSecurityPromotionalSite({ responseData }) {
  return (
    <div>
      <motion.nav variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings}`}>
        <Grid container>
          <Grid xs={4}>
            <div className='container'><LockIconExample></LockIconExample></div>
          </Grid>
          <Grid xs={8}>
            <div style={{ textAlign: 'center', fontSize: 50 }}>Data Security</div>
            <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{responseData.dataSecurity}</div>
          </Grid>
        </Grid>
      </motion.nav>
    </div>

  )
}