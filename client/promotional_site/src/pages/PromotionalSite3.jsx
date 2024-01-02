import GlobalContext from "../context/GlobalContext.jsx";
import TextContext from '../context/TextContext.jsx';
import { useContext, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import NavbarPromotionalSite from "../components/promoSiteConstants/NavbarPromotionalSite.jsx";
import Navbar from "../components/Template3/Navbar.jsx";
import Entrance from "../components/Template3/Entrance.jsx";
import Services from "../components/Template3/Services.jsx";
import Contact from "../components/Template3/Contact.jsx";
import Footer from "../components/Template3/Footer.jsx";


export default function PromotionalSite3() {
    const { response } = useContext(GlobalContext);
    const { header, discription, innovations, dataSecurity } = useContext(TextContext);

    return (
        <div>
            <div><NavbarPromotionalSite responseData={response} /></div>
            <Navbar></Navbar>
            <Grid container >
                <Grid item md={2}></Grid>
                <Grid item md={8}>
                    <Entrance></Entrance>
                    <Services></Services>
                    <Contact></Contact>
                </Grid>
                <Grid item md={2}></Grid>
            </Grid>
            <Footer></Footer>
        </div>
    );
}
