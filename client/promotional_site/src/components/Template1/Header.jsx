import React from "react";
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';

export default function HeaderPromotionalSite({ responseData }) {
    return (
        <motion.nav variants={navVariants}
            initial="hidden"
            whileInView="show">
            <div className="header" >
                <h1>{responseData.header}</h1>
            </div>
        </motion.nav >
    );
}
