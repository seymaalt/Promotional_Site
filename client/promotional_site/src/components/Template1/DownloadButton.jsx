import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
import Grid from "@mui/material/Grid";
import './InnovationsSite.css'

export default function DiscriptionPromotionalSite({ responseData }) {
    const url = responseData.url;
    var appStoreLink = '#'
    var googleStoreLink = '#'

    url.split("/", 5)[2] == 'play.google.com' ? googleStoreLink = url : appStoreLink = url

    return (
        <motion.nav variants={navVariants}
            initial="hidden"
            whileInView="show">
            <div className='downloadbutton' >
                <Grid container  >
                    <Grid item xs={6} className="grid">
                        <a href={appStoreLink} style={{ marginBottom: "10%" }}>
                            <img src="https://i.ibb.co/T1kqnWp/App-Store-hemen-indir-button-logo-icon-transparan-PNG-gorseli-1.png" alt="Logo" style={{ borderRadius: '30px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', height: "85px", border: "solid 3px white" }} />
                        </a>
                    </Grid>
                    <Grid item xs={6} className="grid" >
                        <a href={googleStoreLink} style={{ marginBottom: "10%" }}>
                            <img src="https://i.ibb.co/xMJKQ5j/Google-Play-hemen-indir-button-logo-icon-transparan-PNG-gorseli-1.png" alt="Logo" style={{ borderRadius: '30px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', height: "85px", border: "solid 3px white" }} />
                        </a>
                    </Grid>
                </Grid>
            </div>
        </motion.nav>
    )
}
