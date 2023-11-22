import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';

export default function GalleryPromotionalSite({ responseData, colorData }) {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('')

    const images = responseData.images
    const getImage = (image) => {
        setTempImgSrc(image)
        setModel(true)
    }
    return (
        <div >
            <motion.nav variants={navVariants}
                initial="hidden"
                whileInView="show">
                <div className={model ? "model open" : "model"}>
                    <img src={tempImgSrc} />
                    <CloseIcon onClick={() => setModel(false)} />
                </div>
                <div className={images.length < 4 ? 'galleryth' : images.length == 4 ? 'galleryfr' : images.length == 5 ? 'galleryfv' : 'gallery'}>
                    {images.map((image, i) => {
                        if (i < 6)
                            return (
                                image == null ? <></> : <img
                                    src={images[i]}
                                    className={i % 2 == 0 ? 'image' : 'singImage'}
                                    style={{ borderBlockColor: colorData }}
                                    alt=''
                                    onClick={() => getImage(images[i])}
                                />
                            )
                    })}
                </div>
            </motion.nav >
        </div >
    )
}