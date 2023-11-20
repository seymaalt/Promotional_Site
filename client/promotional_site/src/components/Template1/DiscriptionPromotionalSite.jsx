import React from 'react'
import { motion } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../../utils/motion';
import Grid from "@mui/material/Grid";



export default function DiscriptionPromotionalSite({ responseData }) {
  return (
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show">
      <div className='container'>
        <Grid container style={{ justifyContent: "center" }}>
          <p className='discription'>{responseData.description}</p>
        </Grid>
      </div>
    </motion.nav>
  )
}
