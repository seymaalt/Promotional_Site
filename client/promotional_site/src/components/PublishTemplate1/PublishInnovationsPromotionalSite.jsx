import * as React from 'react';
import { useState, useEffect, useContext } from 'react'
import { Modal, Button, TextareaAutosize } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import '../../styles/global.css'
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/motion';

const InnovationIcon = () => {
  return (
    <div className='dataInvIconDiv'>
      <img
        src="https://i.ibb.co/ggtZGLV/Pngtree-artificial-intelligence-robot-innovation-technology-6447009.png"
        alt="Innovations Icon"
        className='dataInvIcon'
      />
    </div>
  );
};

export default function PublishInnovationsPromotionalSite() {

  return (
    <div>
      <motion.nav variants={slideIn('left', 'spring', 0.8, 1.2)}
        initial="hidden"
        whileInView="show">
        <Grid container>
          <Grid xs={12} md={8} spacing={2}> 
            <div className='innovationsHeader' style={{ color: 'black' }}>Innovation Header</div>
              <div>
                <div className='container' style={{ textAlign: `center`, fontFamily: 'Poppins', color: `black`, fontSize: `20px` }} >Innovation desc</div>
              </div>
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