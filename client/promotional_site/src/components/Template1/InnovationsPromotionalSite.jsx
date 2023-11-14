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
  margin: 50,
  fontSize: 25,
  color: theme.palette.text.secondary,
}));

const InnovationIcon = () => {
  return (
    <div>
      <img
        src="https://pouch.jumpshare.com/preview/SMIHyBAOQCPE8Dw8_zdT0BhtJ21M3lop2pYubwG9EQiNvr1wfg15_ReMnG1U9ivx3n_947ESvQWx1CXnlINYQ-mykHBRDbJ6EIm1Wt8Saxk"
        alt="Sample GIF"
        style={{ width: '250px', height: 'auto', display: 'flex' }}
      />
    </div>
  );
};

export default function InnovationsPromotionalSite({ responseData }) {

  return (
    <div>
      <motion.nav variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings}`}>
        <Grid container>
          <Grid xs={8}>
            <div style={{ textAlign: 'center', fontSize: 50 }}>Innovations</div>
            <div className='container'>{responseData.innovations}</div>

          </Grid>
          <Grid xs={4}>
            <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><InnovationIcon></InnovationIcon></div>
          </Grid>
        </Grid>
      </motion.nav>
    </div>
  )
};