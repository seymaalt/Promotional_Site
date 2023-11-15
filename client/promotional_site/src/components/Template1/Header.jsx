import React from "react";
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
import styles from '../../styles';
import './InnovationsSite.css'

export default function HeaderPromotionalSite({ responseData }) {
    return (
        <motion.nav variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} py-8 relative`}>
            <div style={{ textAlign: 'center', marginTop: '1%', color: "white" }} >
                <h1 style={{ textTransform: "uppercase" }}>{responseData.header}</h1>
            </div>
        </motion.nav >
    );
}
