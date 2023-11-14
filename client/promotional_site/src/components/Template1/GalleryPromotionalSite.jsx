import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './InnovationsSite.css';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Unstable_Grid2';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../../utils/motion';

export default function GalleryPromotionalSite({ responseData, colorData }) {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('')

    const images = responseData.images
    const getImage = (image) => {
        setTempImgSrc(image)
        setModel(true)
    }
    const firstFourImage = []

    for (let i = 0; i < 4; i++) {
        firstFourImage.push(images[i]);
    }


    return (
        <div >
            <motion.nav variants={navVariants}
                initial="hidden"
                whileInView="show"
                className={`${styles.xPaddings}`}>
                <div className={model ? "model open" : "model"}>
                    <img src={tempImgSrc} />
                    <CloseIcon onClick={() => setModel(false)} />
                </div>
                <div className='gallery' style={{ paddingTop: "5%" }}>
                    <img
                        src={images[0]}
                        style={{ width: "250px", height: "auto", display: "block", cursor: "pointer", borderBlockColor: colorData }}
                        alt=''
                        onClick={() => getImage(images[0])}
                    />
                    <img
                        src={images[1]}
                        style={{ width: "250px", height: "auto", display: "block", cursor: "pointer", paddingTop: "50%", borderBlockColor: colorData }}
                        alt=''
                        onClick={() => getImage(images[1])}
                    />
                    <img
                        src={images[2]}
                        style={{ width: "250px", height: "auto", display: "block", cursor: "pointer", borderBlockColor: colorData }}
                        alt=''
                        onClick={() => getImage(images[2])}
                    />
                    <img
                        src={images[3]}
                        style={{ width: "250px", height: "auto", display: "block", cursor: "pointer", paddingTop: "50%", borderBlockColor: colorData }}
                        alt=''
                        onClick={() => getImage(images[3])}
                    />
                    <img
                        src={images[4]}
                        style={{ width: "250px", height: "auto", display: "block", cursor: "pointer", borderBlockColor: colorData }}
                        alt=''
                        onClick={() => getImage(images[3])}
                    />
                    <img
                        src={images[5]}
                        style={{ width: "250px", height: "auto", display: "block", cursor: "pointer", paddingTop: "50%", borderBlockColor: colorData }}
                        alt=''
                        onClick={() => getImage(images[3])}
                    />
                </div>
            </motion.nav>
        </div >
    )
}