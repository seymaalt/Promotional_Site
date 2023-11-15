import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import './InnovationsSite.css'
import { motion } from 'framer-motion';
import styles from '../../styles';
import { slideIn } from '../../utils/motion';

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
        src="https://i.ibb.co/ggtZGLV/Pngtree-artificial-intelligence-robot-innovation-technology-6447009.png"
        alt="Sample GIF"
        style={{ width: '400px', display: 'flex', position: 'absolute', color: 'white' }}
      />
    </div>
  );
};

export default function InnovationsPromotionalSite({ responseData, colorData }) {

  return (
    <div>
      <motion.nav variants={slideIn('right', 'spring', 0.8, 1)}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings}`}>
        <Grid container className='bordercontainer'>
          <Grid xs={8} spacing={2}>
            <div className='header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: 70, color: colorData }}>Innovations</div>
            <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{responseData.innovations}</div>
          </Grid>
          <Grid xs={1}>
            <div>
              <div className='container' style={{ margin: 'auto' }}><InnovationIcon></InnovationIcon></div>
            </div>
          </Grid>
        </Grid>
      </motion.nav>
    </div>
  )
};