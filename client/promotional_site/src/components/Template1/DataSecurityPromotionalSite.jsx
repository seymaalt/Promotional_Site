import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/motion';

const LockIconExample = () => {
  return (
    <div className='dataInvIconDiv'>
      <img
        src="https://i.ibb.co/qyr4Ts8/Pngtree-cartoon-hand-drawn-network-information-5049321.png"
        alt="Sample GIF"
        className='dataInvIcon'
      />
    </div>
  );
};

export default function DataSecurityPromotionalSite({ responseData, changedData, colorData }) {
  return (
    <div>
      <motion.nav variants={slideIn('left', 'spring', 0.8, 1.2)}
        initial="hidden"
        whileInView="show">
        <Grid container>
          <Grid xs={12} md={4}>
            <div><LockIconExample></LockIconExample></div>
          </Grid>
          <Grid xs={12} md={8}>
            <div class="innovationsHeader" style={{ color: colorData }}>Data Security</div>
            <div className='container'>{changedData == null ? responseData.dataSecurity : changedData}</div>
          </Grid>
        </Grid>
      </motion.nav>
    </div>

  )
}