import React, { useState } from 'react'
import { motion } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../../utils/motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderPromotionalSite.css';
import Masonry from "react-responsive-masonry"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './DiscriptionPromotionalSite.css';

export default function SliderPromotionalSite({ responseData }) {
  const images = responseData.images

  const [data, setData] = useState({ img: '', i: 0 })
  const viewImage = (img, i) => {
    setData({ img, i })
  }
  return (
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings}`}>
      <div className='container'>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='swiper-container'
        >
          <div>
            <Masonry columnsCount={3} gutter="10px">
              {data.img &&
                <div style={{
                  width: '100%',
                  height: '100vh',
                  background: 'black',
                  position: 'fixed',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                  <img src={data.img} style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%' }} />
                </div>
              }
              {images.map((image, i) => (
                <SwiperSlide>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block", cursor: "pointer" }}
                    alt='image not found...'
                    onClick={() => viewImage(image, i)}
                  />
                </SwiperSlide>
              ))}
            </Masonry>
          </div>

        </Swiper>
      </div>

    </motion.nav >


  )
}