import React from 'react'
import { motion } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../../utils/motion';
import Grid from "@mui/material/Grid";
import './InnovationsSite.css'



export default function DiscriptionPromotionalSite({ responseData }) {
  return (
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show">
      <div className='container2'>
        <Grid container style={{ justifyContent: "center" }}>
          <p className='discription'>{responseData.description}</p>
        </Grid>
      </div>
    </motion.nav>
  )
}
