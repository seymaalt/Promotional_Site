import GlobalContext from "../context/GlobalContext.jsx";
import TextContext from '../context/TextContext.jsx';
import NavbarPromotionalSite from "../components/promoSiteConstants/NavbarPromotionalSite.jsx";
import FooterPromotionalSite from "../components/Template1/FooterPromotionalSite.jsx";
import GalleryPromotionalSite from "../components/Template2/GalleryPromotionalSite.jsx";
import RatingPromotionalSite from "../components/Template2/RatingPromotionalSite.jsx";
import CommentsPromotionalSite from "../components/Template2/CommentsPromotionalSite.jsx";
import DataSecInn from "../components/Template2/DataSecInn.jsx";

import Head from "../components/Template2/Head.jsx";
import { useContext, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";

export default function PromotionalSite3() {
    const { response } = useContext(GlobalContext);
    const { header, discription, innovations, dataSecurity } = useContext(TextContext);

    return (
        <div>
            <div style={{ height: 135, backgroundColor: 'red', border: '1px solid black' }}>
                <Grid container >
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Grid container >
                            <Grid item xs={4}>
                                SIRKET ISMI
                            </Grid>
                            <Grid item xs={4}>
                                YONLENDIRME BUTONLARI
                            </Grid>
                            <Grid item xs={4}>
                                MAIL BUTONU
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>
            <Grid container >
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <div style={{ height: '100dvh', backgroundColor: 'blue' }}>Slogan ve resimler</div>
                    <div style={{ height: '100dvh', backgroundColor: 'green' }}>Hizmetlerimiz 3 adet </div>
                    <div style={{ height: '100dvh', backgroundColor: 'yellow' }}>Mail gönderme</div>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            <div style={{ height: '60dvh', backgroundColor: 'grey' }}>
                <Grid container >
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Grid container >
                            <Grid item xs={4}>
                                ADI , SOSYAL MEDYA
                            </Grid>
                            <Grid item xs={4}>
                                YONLENDIRME BUTONLARI
                            </Grid>
                            <Grid item xs={4}>
                                MAIL ADRES
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>

        </div>
    );
}
