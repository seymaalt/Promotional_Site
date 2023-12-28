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
    const { template2Response, setTemplate2Response } = useContext(Template2Context);

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('')

    const images = responseData.images
    
    const[galleryImage1, setGalleryImage1] =useState(images[0])
    const[galleryImage2, setGalleryImage2] =useState(images[1])
    const[galleryImage3, setGalleryImage3] =useState(images[2])

    const getImage = (image) => {
        setTempImgSrc(image)
        setModel(true)
        setGalleryImage1(images[0])
        setGalleryImage2(images[1])
        setGalleryImage3(images[2])
    }

    useEffect(() => {
        setTemplate2Response({ ...template2Response, galleryImage1:galleryImage1, galleryImage2:galleryImage2, galleryImage3:galleryImage3 });
        console.log(template2Response)
      }, [, ,galleryImage1,galleryImage2,galleryImage3] )

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