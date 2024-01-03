import React, { useState, useContext, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
import Template1Context from '../../context/Template1Context';

export default function GalleryPromotionalSite({ responseData, colorData }) {
    const { template1Response, setTemplate1Response } = useContext(Template1Context);
    const { contextImages, setContextImages } = useContext(Template1Context);

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('')

    const images = responseData.images

    const getImage = (image) => {
        setTempImgSrc(image)
        setModel(true)
    }

    useEffect(() => {
        setContextImages({images: images });
    }, [images])



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