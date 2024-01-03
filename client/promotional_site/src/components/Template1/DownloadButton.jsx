import React, { useContext, useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
import Grid from "@mui/material/Grid";
import Template1Context from "../../context/Template1Context";


export default function DiscriptionPromotionalSite({ responseData }) {
    const { template1Response, setTemplate1Response } = useContext(Template1Context);
    const { contextDownloadLinks, setContextDownloadLinks } = useContext(Template1Context);
    const [appStoreLink, setAppStoreLink] = useState('#');
    const [googleStoreLink, setGoogleStoreLink] = useState('#');

    const url = responseData.url;

    useEffect(() => {
        if (url.split("/", 5)[2] === 'play.google.com') {
            setGoogleStoreLink(url);
        } else {
            setAppStoreLink(url);
        }
    }, [url]);

    useEffect(() => {
        setContextDownloadLinks({
            appStoreLink: appStoreLink,
            googleStoreLink: googleStoreLink
        });
    }, [appStoreLink, googleStoreLink, setContextDownloadLinks]);





    return (
        <motion.nav variants={navVariants}
            initial="hidden"
            whileInView="show">
            <div className='downloadbutton' >
                <Grid container  >
                    <Grid item xs={6} className="grid">
                        <a href={appStoreLink} style={{ marginBottom: "10%" }}>
                            <img src="https://i.ibb.co/T1kqnWp/App-Store-hemen-indir-button-logo-icon-transparan-PNG-gorseli-1.png" alt="Logo" />
                        </a>
                    </Grid>
                    <Grid item xs={6} className="grid" >
                        <a href={googleStoreLink} style={{ marginBottom: "10%" }}>
                            <img src="https://i.ibb.co/xMJKQ5j/Google-Play-hemen-indir-button-logo-icon-transparan-PNG-gorseli-1.png" alt="Logo" />
                        </a>
                    </Grid>
                </Grid>
            </div>
        </motion.nav>
    )
}
