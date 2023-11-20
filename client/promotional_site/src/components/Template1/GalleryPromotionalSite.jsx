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
                <div className='gallery' style={{ paddingTop: "5%" }}>
                    <img
                        src={images[0]}
                        className='image'
                        style={{ borderBlockColor: colorData }}
                        alt=''
                        onClick={() => getImage(images[0])}
                    />
                    <img
                        src={images[1]}
                        className='singImage'
                        style={{ borderBlockColor: colorData }}
                        alt=''
                        onClick={() => getImage(images[1])}
                    />
                    <img
                        src={images[2]}
                        className='image'
                        style={{ borderBlockColor: colorData }}
                        alt=''
                        onClick={() => getImage(images[2])}
                    />
                    <img
                        src={images[3]}
                        className='singImage'
                        style={{ borderBlockColor: colorData }}
                        alt=''
                        onClick={() => getImage(images[3])}
                    />
                    <img
                        src={images[4]}
                        className='image'
                        style={{ borderBlockColor: colorData }}
                        alt=''
                        onClick={() => getImage(images[4])}
                    />
                    <img
                        src={images[5]}
                        className='singImage'
                        style={{ borderBlockColor: colorData }}
                        alt=''
                        onClick={() => getImage(images[5])}
                    />
                </div>
            </motion.nav>
        </div >
    )
}