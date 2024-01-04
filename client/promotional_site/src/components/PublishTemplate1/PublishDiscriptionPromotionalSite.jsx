import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
import PublishContext from '../../context/PublishContext';
import Grid from "@mui/material/Grid";

export default function PublishDiscriptionPromotionalSite() {
  const { response } = useContext(PublishContext)


  return (
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show">
      <div className='container'>
        <div>
          <Grid container >
            <div className='discription' style={{ textAlign: `${response.designDescription[0].textAlign}`, fontFamily: response.designDescription[0].font, color: `${response.designDescription[0].color}`, fontSize: `${response.designDescription[0].fontSize}` }}>{response.description}</div>
          </Grid>
        </div>
      </div>
    </motion.nav>
  )
}
