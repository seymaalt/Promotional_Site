import React, { useContext, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './style/template2.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Template2Context from '../../context/Template2Context';

export default function GalleryPromotionalSite({ responseData }) {
    const { setTemp2Images } = useContext(Template2Context);

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('')

    const images = responseData.images

    const getImage = (image) => {
        setTempImgSrc(image)
        setModel(true)
    }

    useEffect(() => {
        setTemp2Images({ images: images });
    }, [images])
    useEffect(() => {
        console.log(images)
    },)

    return (
        <div className='swiperSlide'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={3}>
                < div className={model ? "model open" : "model"} >
                    <img src={tempImgSrc} />
                    <CloseIcon onClick={() => setModel(false)} />
                </div >
                <div className='temp2Gallery'>
                    {images.map((image, i) => {
                        if (i > 0)
                            return (
                                <SwiperSlide>{
                                    image == null ? <></> : <img
                                        src={images[i]}
                                        className='temp2Image'
                                        alt=''
                                        onClick={() => getImage(images[i])}
                                    />}
                                </SwiperSlide>
                            )
                    })}
                </div>
            </Swiper>
        </div >
    )
}