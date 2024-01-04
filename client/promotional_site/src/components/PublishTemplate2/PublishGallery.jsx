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
import PublishContext from '../../context/PublishContext';


export default function GalleryPromotionalSite() {
    const { response } = useContext(PublishContext)
    const { template2Response, setTemplate2Response } = useContext(Template2Context);

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('')

    // const images = responseData.images

    const getImage = (image) => {
        setTempImgSrc(image)
        setModel(true)
    }


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
                    {response.images.map((image, i) => {
                        if (i > 0)
                            return (
                                <SwiperSlide>{
                                    image == null ? <></> : <img
                                        src={response.images[i]}
                                        className='temp2Image'
                                        alt=''
                                        onClick={() => getImage(response.images[i])}
                                    />}
                                </SwiperSlide>
                            )
                    })}
                </div>
            </Swiper>
        </div >
    )
}