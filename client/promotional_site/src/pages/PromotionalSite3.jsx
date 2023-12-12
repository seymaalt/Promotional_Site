import GlobalContext from "../context/GlobalContext.jsx";
import TextContext from '../context/TextContext.jsx';
import { useContext, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Navbar from "../components/Template3/Navbar.jsx";
import Entrance from "../components/Template3/Entrance.jsx";


export default function PromotionalSite3() {
    const { response } = useContext(GlobalContext);
    const { header, discription, innovations, dataSecurity } = useContext(TextContext);

    return (
        <div>
            <Navbar></Navbar>
            <Grid container >
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Entrance></Entrance>
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
