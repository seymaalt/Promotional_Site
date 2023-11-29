import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CommentsPromotionalSite({ responseData }) {
    return (
        <div className="ratingDiv">
            <h1>Deneyimleyenler</h1>
            <Box sx={{ flexGrow: 1 }} >
                {/* <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={3}
                > */}
                <Grid container spacing={{ xs: 4, md: 12 }}>
                    {responseData.comments.map((comment) =>
                        // <SwiperSlide>
                        <Grid item xs={12} sm={12} md={4}>
                            <div className="commentCard">
                                <div className="commentDiv">
                                    <div className="nail">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" fill="none">
                                            <path d="M4.41771 12.4298C5.75875 11.5347 7.35449 11.1 8.96422 11.1912C10.5739 11.2825 12.1104 11.8947 13.3417 12.9355C14.573 13.9763 15.4325 15.3894 15.7905 16.9614C16.1485 18.5335 15.9855 20.1794 15.3262 21.6507C14.6669 23.1221 13.547 24.3391 12.1355 25.1183C10.724 25.8975 9.09734 26.1965 7.50098 25.9703C5.90462 25.7441 4.4251 25.0049 3.28562 23.8643C2.14613 22.7236 1.40847 21.2433 1.18391 19.6467C0.484626 16.3214 0.195404 12.3191 1.49906 8.68565C2.89769 4.79336 6.03243 1.5887 11.6733 0.0738938C12.1435 -0.0372831 12.6384 0.0390391 13.0533 0.286676C13.4681 0.534314 13.7702 0.933794 13.8954 1.4004C14.0207 1.86701 13.9592 2.36406 13.7242 2.78614C13.4891 3.20822 13.0989 3.52215 12.6363 3.66135C8.07309 4.8869 5.95151 7.28986 4.99653 9.94185C4.71354 10.7333 4.52374 11.5688 4.41772 12.4317" fill="black" />
                                        </svg>&ensp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" fill="none">
                                            <path d="M4.41771 12.4298C5.75875 11.5347 7.35449 11.1 8.96422 11.1912C10.5739 11.2825 12.1104 11.8947 13.3417 12.9355C14.573 13.9763 15.4325 15.3894 15.7905 16.9614C16.1485 18.5335 15.9855 20.1794 15.3262 21.6507C14.6669 23.1221 13.547 24.3391 12.1355 25.1183C10.724 25.8975 9.09734 26.1965 7.50098 25.9703C5.90462 25.7441 4.4251 25.0049 3.28562 23.8643C2.14613 22.7236 1.40847 21.2433 1.18391 19.6467C0.484626 16.3214 0.195404 12.3191 1.49906 8.68565C2.89769 4.79336 6.03243 1.5887 11.6733 0.0738938C12.1435 -0.0372831 12.6384 0.0390391 13.0533 0.286676C13.4681 0.534314 13.7702 0.933794 13.8954 1.4004C14.0207 1.86701 13.9592 2.36406 13.7242 2.78614C13.4891 3.20822 13.0989 3.52215 12.6363 3.66135C8.07309 4.8869 5.95151 7.28986 4.99653 9.94185C4.71354 10.7333 4.52374 11.5688 4.41772 12.4317" fill="black" />
                                        </svg>
                                    </div>
                                    <div className="comment">
                                        {comment}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        // </SwiperSlide>
                    )}

                </Grid>
                {/* </Swiper> */}
            </Box>
        </div>
    );
}
