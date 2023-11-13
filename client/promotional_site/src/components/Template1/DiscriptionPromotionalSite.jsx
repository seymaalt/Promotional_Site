import React from 'react'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { motion } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../../utils/motion';
import Grid from "@mui/material/Grid";
import './DiscriptionPromotionalSite.css';



export default function DiscriptionPromotionalSite({ responseData }) {
  const CustomBox = styled(Box)({
    background: "linear-gradient(to right, #6C46AE, #A84DB0, #D84FB4)",
    backgroundSize: "cover",
    height: "50vh",
    width: "10 vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25px",
    marginInline: "5%",
    paddingBlock: "2%"
  });

  return (
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}>
      <div className='container'>
        <Grid container >
          <Grid item xs={5} >
            <div className='stardownload'>{responseData.download} DOWNLOAD</div>
            <br />
            <br />
            <br />
            <div className='stardownload' >{responseData.star} ★</div>
          </Grid>
          <Grid item xs={7}>
            <p className='discription'>{responseData.description}</p>
          </Grid>
        </Grid>
      </div>
    </motion.nav>
  )
}
