import GlobalContext from "../context/GlobalContext.jsx";
import TextContext from '../context/TextContext.jsx';
import NavbarPromotionalSite from "../components/promoSiteConstants/NavbarPromotionalSite.jsx";
import FooterPromotionalSite from "../components/Template1/FooterPromotionalSite.jsx";
import RatingPromotionalSite from "../components/Template2/RatingPromotionalSite.jsx";
import CommentsPromotionalSite from "../components/Template2/CommentsPromotionalSite.jsx";
import GalleryPromotionalSite from "../components/Template2/GalleryPromotionalSite.jsx";
import Grid from '@mui/material/Grid';
import { useContext, useRef, useEffect } from "react";

export default function PromotionalSite2() {
  const { response } = useContext(GlobalContext);
  const { header, discription, innovations, dataSecurity } = useContext(TextContext);

  return (
    <div>
      <Grid container >
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <div className="part" >
            <div style={{ height: 70 }}>
              <NavbarPromotionalSite responseData={response} />
            </div>
          </div>
          <div className="part"></div>
          <div className="part" >
            <RatingPromotionalSite responseData={response}></RatingPromotionalSite>
          </div>
          <div className="part"></div>
          <div className="part">
            <GalleryPromotionalSite responseData={response}></GalleryPromotionalSite>
          </div>
          <div className="part">
            <CommentsPromotionalSite responseData={response}></CommentsPromotionalSite>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <FooterPromotionalSite responseData={response} />
    </div>
  );
}
