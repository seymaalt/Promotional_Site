import { useContext } from 'react';
import LogoPromotionalSite from '../components/Template1/LogoPromotionalSite.jsx';
import DiscriptionPromotionalSite from '../components/Template1/DiscriptionPromotionalSite.jsx';
import InnovationsPromotionalSite from '../components/Template1/InnovationsPromotionalSite.jsx';
import DataSecurityPromotionalSite from '../components/Template1/DataSecurityPromotionalSite.jsx';
import FooterPromotionalSite from '../components/Template1/FooterPromotionalSite.jsx';
import SliderPromotionalSite from '../components/Template1/SliderPromotionalSite.jsx';
import GalleryPromotionalSite from '../components/Template1/GalleryPromotionalSite.jsx';
import GlobalContext from '../context/GlobalContext.jsx';
import HeaderPromotionalSite from '../components/Template1/Header.jsx';
import DownloadButton from '../components/Template1/DownloadButton.jsx';
import Color from "color-thief-react";

export default function PromotionalSite() {
  const { response } = useContext(GlobalContext);
  return (
    <div>
      <Color src={response.logo} crossOrigin="anonymous" format="hex">
        {({ data }) => {
          return (
            <div style={{ backgroundColor: data, height: "100vh" }}>
              <LogoPromotionalSite responseData={response} />
              <HeaderPromotionalSite responseData={response}></HeaderPromotionalSite>
              <div style={{ marginTop: '1%', marginInlineStart: "20%", marginInlineEnd: "20%", justifyContent: "center" }}>
                <DiscriptionPromotionalSite responseData={response} />
              </div>
              <div style={{ marginTop: '2%', marginInlineEnd: "30%", marginInlineStart: "30%" }}>
                <DownloadButton responseData={response}></DownloadButton>
              </div>
            </div>
          );
        }}
      </Color>
      <div style={{ height: "100vh" }}>
        <GalleryPromotionalSite responseData={response} />
      </div>
      <div style={{ height: "100vh" }}>
        <InnovationsPromotionalSite responseData={response} />
        <DataSecurityPromotionalSite responseData={response} />
      </div>
      <FooterPromotionalSite responseData={response} />

    </div>
  );
}

