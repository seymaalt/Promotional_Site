import React, { useContext, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
import Grid from "@mui/material/Grid";
import PublishContext from '../../context/PublishContext';


export default function PublishDownloadButtonPromotionalSite() {
    const { response } = useContext(PublishContext)

    return (
        <motion.nav variants={navVariants}
            initial="hidden"
            whileInView="show">
            <div className='downloadbutton' >
                <Grid container  >
                    <Grid item xs={6} className="grid">
                        <a href='#' style={{ marginBottom: "10%" }}>
                            <img src="https://i.ibb.co/T1kqnWp/App-Store-hemen-indir-button-logo-icon-transparan-PNG-gorseli-1.png" alt="Logo" />
                        </a>
                    </Grid>
                    <Grid item xs={6} className="grid" >
                        <a href='#' style={{ marginBottom: "10%" }}>
                            <img src="https://i.ibb.co/xMJKQ5j/Google-Play-hemen-indir-button-logo-icon-transparan-PNG-gorseli-1.png" alt="Logo" />
                        </a>
                    </Grid>
                </Grid>
            </div>
        </motion.nav>
    )
}
