import React from "react";
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';

export default function LogoPromotionalSite({ responseData }) {
  return (
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}>
      <div style={{ textAlign: 'center' }} >
        <img src={responseData.logo} alt="Logo" style={{ borderRadius: '10%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} />
      </div>
    </motion.nav >
  );
}
