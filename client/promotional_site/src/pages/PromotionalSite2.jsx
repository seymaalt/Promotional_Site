import GlobalContext from "../context/GlobalContext.jsx";
import DownloadButton from "../components/Template1/DownloadButton.jsx";
import NavbarPromotionalSite from "../components/promoSiteConstants/NavbarPromotionalSite.jsx";
import FooterPromotionalSite from "../components/Template1/FooterPromotionalSite.jsx";
import GlobalContext from "../context/GlobalContext.jsx";
import { useContext, useRef, useEffect } from "react";
import TextContext from "../context/TextContext.jsx";

export default function PromotionalSite2() {
  const { response } = useContext(GlobalContext);
  const { header, discription, innovations, dataSecurity } = useContext(TextContext);

  return (
    <div>
      <div className="part" >
        <div style={{ height: 70 }}>
          <NavbarPromotionalSite responseData={response} />
        </div>
      </div>
      <div className="part"></div>
      <div className="part"></div>
      <div className="part"></div>
      <div className="part"></div>
      <div className="part"></div>

      <FooterPromotionalSite responseData={response} />
    </div>
  );
}
