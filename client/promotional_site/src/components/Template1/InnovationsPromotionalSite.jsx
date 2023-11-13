import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../../utils/motion';
import Typography from '@mui/material/Typography';

import './InnovationsSite.css'

const AnimatedText = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Sadece bir kez animasyonu çalıştır
    threshold: 0.0, // Element %10 görünürse animasyonu başlat
  });

  return (
    <div
      className={`animated-text ${inView ? 'slide-in' : ''}`}
      ref={ref}
    >
      {text}
    </div>
  );
};

export default function InnovationsPromotionalSite({ responseData }) {

  return (
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}>
      <div className="container">
        <div className="scroll-container">
          <div className="text-box">
            <Typography variant="h2" fontWeight="fontWeightBold" fontSize="30px" lineHeight="30.24px" color="black" sx={{ margin: 'auto' }} className='text-box' >
              YENILIKLER
            </Typography>
            <AnimatedText text={responseData.innovations} />
          </div>
        </div>
      </div>
    </motion.nav>
  )
};