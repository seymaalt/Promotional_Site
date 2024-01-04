import * as React from 'react';
import { useState, useEffect, useContext } from 'react'
import PublishContext from '../../context/PublishContext';
import { Modal, Button, TextareaAutosize } from '@mui/material';
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

export default function PublishDataSecurityPromotionalSite() {
  const { response } = useContext(PublishContext);

  return (
    <div>
      <motion.nav variants={slideIn('left', 'spring', 0.8, 1.2)}
        initial="hidden"
        whileInView="show">
        <Grid container  >
          <Grid xs={12} md={4}>
            <div><LockIconExample></LockIconExample></div>
          </Grid>
          <Grid xs={12} md={8}>
            <div className="innovationsHeader" id="dataSecurity" style={{ color: response.color }}>Data Security</div>
            <div >
              <div className='container' style={{ textAlign: `${response.designInnovations[0].textAlign}`, fontFamily: response.designInnovations[0].font, color: `${response.designInnovations[0].color}`, fontSize: `${response.designInnovations[0].fontSize}` }}>{response.dataSecurity}</div>
            </div>
          </Grid>
        </Grid>
      </motion.nav>
    </div>

  )
}