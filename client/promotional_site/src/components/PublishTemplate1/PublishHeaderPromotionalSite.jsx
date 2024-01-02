import React, { useContext, useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';

export default function PublishHeaderPromotionalSite() {
  return (
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show">
      <div id="header">   
          <div>
            <h1 style={{ fontFamily: 'Poppins', color: `white`, fontSize: `48px` }}>HEADER</h1>
          </div>
      </div>
    </motion.nav >
  );
}
