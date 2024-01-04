import React, { useContext, useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
import PublishContext from '../../context/PublishContext';

export default function PublishHeaderPromotionalSite() {
  const { response } = useContext(PublishContext)

  return (
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show">
      <div id="header">
        <div>
          <h1 style={{ fontFamily: response.designHeader[0].font, color: `${response.designHeader[0].color}`, fontSize: `${response.designHeader[0].fontSize}` }}>{response.header}</h1>
        </div>
      </div>
    </motion.nav >
  );
}
