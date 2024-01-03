import { useContext, useRef, useEffect, useState } from 'react';
import Color from 'color-thief-react';
import GlobalContext from '../context/GlobalContext.jsx';
import TextContext from '../context/TextContext.jsx';
import NavbarPromotionalSite from '../components/promoSiteConstants/NavbarPromotionalSite.jsx';
import LogoPromotionalSite from '../components/Template1/LogoPromotionalSite.jsx';
import HeaderPromotionalSite from '../components/Template1/Header.jsx';
import DiscriptionPromotionalSite from '../components/Template1/DiscriptionPromotionalSite.jsx';
import DownloadButton from '../components/Template1/DownloadButton.jsx';
import GalleryPromotionalSite from '../components/Template1/GalleryPromotionalSite.jsx';
import InnovationsPromotionalSite from '../components/Template1/InnovationsPromotionalSite.jsx';
import DataSecurityPromotionalSite from '../components/Template1/DataSecurityPromotionalSite.jsx';
import FooterPromotionalSite from '../components/Template1/FooterPromotionalSite.jsx';

export default function PromotionalSite() {
  const { response, setColor } = useContext(GlobalContext);

  const { header, discription, innovations, dataSecurity } = useContext(TextContext);





  return (
    <div>
      <div><NavbarPromotionalSite responseData={response} /></div>
      <Color src={response.logo} crossOrigin="anonymous" format="hex">
        {({ data }) => {
          setColor(data)
          return (
            <div>
              <div className='part' style={{ backgroundColor: (data == null ? 'black' : data) }}>
                <LogoPromotionalSite responseData={response} />
                <HeaderPromotionalSite responseData={response} changedData={header} colorData={data} ></HeaderPromotionalSite>
                <div className='disc' >
                  <DiscriptionPromotionalSite responseData={response} changedData={discription} colorData={data} />
                </div>
                <div className='downloadButtons'>
                  <DownloadButton responseData={response}></DownloadButton>
                </div>
              </div>
              <div className='part'>
                <GalleryPromotionalSite responseData={response} colorData={data} />
              </div>
              <div className='part'>
                <InnovationsPromotionalSite responseData={response} changedData={innovations} colorData={data == null ? 'black' : data} />
                <DataSecurityPromotionalSite responseData={response} changedData={dataSecurity} colorData={data == null ? 'black' : data} />
              </div>
              <FooterPromotionalSite responseData={response} />
            </div>
          )
        }}
      </Color>
    </div>
  );
}