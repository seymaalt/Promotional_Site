import { useContext } from 'react';
import LogoPromotionalSite from '../components/Template1/LogoPromotionalSite.jsx';
import DiscriptionPromotionalSite from '../components/Template1/DiscriptionPromotionalSite.jsx';
import InnovationsPromotionalSite from '../components/Template1/InnovationsPromotionalSite.jsx';
import DataSecurityPromotionalSite from '../components/Template1/DataSecurityPromotionalSite.jsx';
import FooterPromotionalSite from '../components/Template1/FooterPromotionalSite.jsx';
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
            <div>
              <div style={{ backgroundColor: data, minHeight: "100vh" }}>
                <LogoPromotionalSite responseData={response} />
                <HeaderPromotionalSite responseData={response}></HeaderPromotionalSite>
                <div style={{ marginTop: '1%', marginInlineStart: "20%", marginInlineEnd: "20%", justifyContent: "center" }}>
                  <DiscriptionPromotionalSite responseData={response} />
                </div>
                <div style={{ marginTop: '2%', marginInlineEnd: "30%", marginInlineStart: "30%" }}>
                  <DownloadButton responseData={response}></DownloadButton>
                </div>
              </div>
              <div style={{ minHeight: "100vh" }}>
                <GalleryPromotionalSite responseData={response} colorData={data} />
              </div>
              <div style={{ minHeight: "100vh" }}>
                <InnovationsPromotionalSite responseData={response} colorData={data} />
                <div style={{ height: "60px" }}></div>
                <DataSecurityPromotionalSite responseData={response} colorData={data} />
              </div>
              <FooterPromotionalSite responseData={response} />
            </div>
          );
        }}
      </Color>
    </div>
  );
}

