import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import '../../styles/global.css'
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/motion';

const InnovationIcon = () => {
  return (
    <div>
      <img
        src="https://i.ibb.co/ggtZGLV/Pngtree-artificial-intelligence-robot-innovation-technology-6447009.png"
        alt="Innovations Icon"
        style={{ width: '400px', marginRight: '20%' }}
      />
    </div>
  );
};

export default function InnovationsPromotionalSite({ responseData, colorData }) {

  return (
    <div>
      <motion.nav variants={slideIn('right', 'spring', 0.8, 1)}
        initial="hidden"
        whileInView="show">
        <Grid container>
          <Grid xs={12} md={8} spacing={2}>
            <div className='innovationsHeader' style={{ color: colorData }}>Innovations</div>
            <div className='container' >{responseData.innovations}</div>
          </Grid>
          <Grid xs={12} md={4}>
            <div>
              <div><InnovationIcon></InnovationIcon></div>
            </div>
          </Grid>
        </Grid>
      </motion.nav>
    </div>
  )
};