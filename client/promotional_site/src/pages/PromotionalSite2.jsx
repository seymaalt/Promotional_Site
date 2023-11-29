import GlobalContext from "../context/GlobalContext.jsx";
import DownloadButton from "../components/Template1/DownloadButton.jsx";
import NavbarPromotionalSite from "../components/promoSiteConstants/NavbarPromotionalSite.jsx";
import FooterPromotionalSite from "../components/Template1/FooterPromotionalSite.jsx";
import Head from "../components/Template2/Head.jsx";
import { useContext, useRef, useEffect } from "react";
import TextContext from "../context/TextContext.jsx";
import Innovation from "../components/Template2/Innovation.jsx";
import Grid from "@mui/material/Grid";
import DataSecurity from "../components/Template2/DataSecurity.jsx";
import DataSecInn from "../components/Template2/DataSecInn.jsx";

export default function PromotionalSite2() {
  const { response } = useContext(GlobalContext);
  const { header, discription, innovations, dataSecurity } = useContext(TextContext);

  return (
    <div>
      <Grid container >
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <div className="part">
            <div style={{ height: "70px" }}>
              <NavbarPromotionalSite responseData={response} />
              <div className="part" style={{ marginTop: "70px" }}>
                <Head responseData={response} />
              </div>
            </div>
          </div>

          <div className="part"></div>
          <div className="part">
            <DataSecInn responseData={response}></DataSecInn>
       
          </div>
          <div className="part"></div>
          <div className="part"></div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <FooterPromotionalSite responseData={response} />
    </div>
  );
}
