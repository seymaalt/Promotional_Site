import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './style/template2.css'


export default function RatingPromotionalSite({ responseData }) {

    return (
        <div className="ratingDiv">
            <h1>Bize Katılın!</h1>
            <Box sx={{ flexGrow: 1, marginInline: 3 }} >
                <Grid container spacing={{ xs: 2, md: 12 }}>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className="ratingCard">
                            <div className="star">
                                <svg xmlns="http://www.w3.org/2000/svg" width="57%" height="54" viewBox="0 0 57 54" fill="none">
                                    <path d="M28.422 0L38.0829 16.4715L56.8433 20.5057L44.0537 34.7199L45.9873 53.6846L28.422 45.998L10.8567 53.6846L12.7903 34.7199L0.000732422 20.5057L18.7611 16.4715L28.422 0Z" fill="#FFCB45" />
                                </svg>
                            </div>
                            <div className="starRating"> {responseData.star} Yıldız</div>
                            <div className="starText"> Ortalama Puan</div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className="ratingCard">
                            <div className="vector">
                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="73" viewBox="0 0 82 73" fill="none">
                                    <path d="M5.19797 72.8337C4.95134 72.8328 4.7137 72.741 4.53057 72.5758C4.34745 72.4106 4.23172 72.1836 4.20557 71.9384L0.503035 34.4002L0.5 34.3061C0.5 33.7537 0.946125 33.3076 1.49847 33.3076H26.4845V72.8367L5.19797 72.8337ZM35.6376 67.1372C35.1028 66.9566 34.5976 66.6979 34.1384 66.3694L34.1566 66.3816L33.8531 66.1904C33.1462 65.7469 32.448 65.2895 31.7591 64.8186L31.4526 64.6031C31.052 64.3148 30.8638 64.1873 30.6574 64.1995C29.9291 64.2147 29.2007 64.2207 28.4723 64.2298V36.4457L28.4329 34.1088C29.8016 33.2378 31.0641 32.4093 31.4435 32.0937C31.9594 31.0557 32.4692 30.1878 33.0337 29.3562L32.9821 29.4382C33.2401 29.0345 33.4981 28.6339 33.7348 28.2364L38.9669 19.4535C39.2097 19.0407 39.4737 18.628 39.7377 18.2152C40.1778 17.5597 40.6452 16.7767 41.0731 15.9694L41.1459 15.8207C41.3857 15.3306 41.4693 14.7787 41.3857 14.2396L41.3887 14.2547L41.3705 4.78598C41.5617 3.40815 42.3386 2.24276 43.4342 1.53261L43.4524 1.52047C44.4291 0.640731 45.6686 0.107412 46.9789 0.00303486H47.0002L47.1914 0C48.2263 0 49.2035 0.245824 50.0714 0.679809L50.035 0.6616C50.6147 0.940807 51.1094 1.23822 51.5737 1.57206L51.5434 1.55081L51.8651 1.76326C52.5965 2.14868 53.1427 2.79814 53.3855 3.58417L53.3916 3.60542C53.9591 5.71768 54.4781 7.63875 54.9606 9.56589L55.1609 10.3519C55.4674 11.3838 55.7315 12.6311 55.9014 13.9088L55.9166 14.0362C55.3976 18.8131 54.3992 23.1712 52.9546 27.3229L53.082 26.9041L76.4292 26.8707H76.5142C77.2215 26.8707 77.9207 27.0213 78.5653 27.3123C79.21 27.6033 79.7853 28.0281 80.2532 28.5586C80.7211 29.089 81.0707 29.7129 81.279 30.3889C81.4872 31.0648 81.5493 31.7773 81.461 32.4791L81.4641 32.4548C81.5294 33.5151 81.3127 34.5738 80.8362 35.5231C80.3596 36.4725 79.6401 37.2788 78.7509 37.8599L78.7266 37.8751C79.5783 39.1203 79.9768 40.6201 79.8556 42.1239V42.1026C79.9619 43.2943 79.6844 44.4887 79.0636 45.5114C78.4427 46.534 77.5112 47.3314 76.405 47.7869L76.3685 47.7991C77.0474 49.0093 77.3625 50.3898 77.276 51.7748V51.7565C77.342 52.794 77.1271 53.83 76.6539 54.7556C76.1807 55.6811 75.4667 56.462 74.5871 57.016L74.5628 57.0311C75.1827 58.4193 75.4175 59.9488 75.2426 61.459L75.2456 61.4196V61.9901C75.2021 62.7376 75.0083 63.4686 74.6757 64.1394C74.343 64.8102 73.8785 65.4071 73.3098 65.8941C72.7411 66.3812 72.08 66.7485 71.3661 66.9741C70.6521 67.1997 69.9 67.2789 69.1547 67.207L69.1759 67.2101H55.7345L55.689 67.2131L55.6404 67.2101H55.6435H37.7074C37.5526 67.2101 37.3918 67.2101 37.2218 67.2343C37.0155 67.2465 36.797 67.2647 36.5724 67.2647H36.5269C36.2203 67.265 35.9151 67.2241 35.6194 67.1433L35.6437 67.1494L35.6376 67.1372Z" fill="#FFCB45" />
                                </svg>
                            </div>
                            <div className="starRating"> {responseData.rating} <br />Değerlendirme</div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className="ratingCard">
                            <div className="vector">
                                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2997 0.918617C27.4851 -0.417517 32.9389 -0.294004 38.0585 1.27551C43.1782 2.84502 47.7642 5.79943 51.3101 9.81229C54.856 13.8252 57.2236 18.7403 58.1513 24.0145C59.079 29.2888 58.5307 34.7169 56.567 39.699L75.6463 55.8509C77.0933 57.0739 78.2708 58.5839 79.1042 60.2854C79.9376 61.9869 80.4088 63.8429 80.488 65.7359C80.5673 67.6289 80.2527 69.5178 79.5644 71.283C78.8761 73.0482 77.8289 74.6513 76.4892 75.9909C75.1494 77.3305 73.5462 78.3774 71.781 79.0654C70.0159 79.7534 68.1271 80.0675 66.2343 79.9879C64.3414 79.9083 62.4857 79.4366 60.7846 78.6028C59.0834 77.7689 57.5738 76.591 56.3513 75.1436L40.2092 56.0708C35.2269 58.0379 29.7977 58.5887 24.5219 57.6624C19.2461 56.7361 14.3292 54.3687 10.3148 50.822C6.30048 47.2753 3.34503 42.6874 1.77524 37.5656C0.205453 32.4438 0.0824877 26.9877 1.41994 21.8004C1.60852 21.0715 1.98996 20.4069 2.52416 19.8764C3.05836 19.346 3.7256 18.9693 4.45572 18.7859C5.18585 18.6025 5.95189 18.6192 6.67332 18.8342C7.39476 19.0493 8.04493 19.4548 8.5555 20.008L21.1879 33.7286L30.7172 30.2228L34.2311 20.6801L20.5034 8.06729C19.9469 7.55684 19.5387 6.90547 19.3219 6.18206C19.1051 5.45866 19.0878 4.69011 19.2718 3.95769C19.4559 3.22526 19.8344 2.5562 20.3674 2.02123C20.9004 1.48627 21.5681 1.1053 22.2997 0.918617Z" fill="#FFCB45" />
                                </svg>
                            </div>
                            <div className="starRating">  Geliştirici <br />{responseData.developer}</div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
