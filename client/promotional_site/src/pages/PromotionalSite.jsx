import React from 'react';
import NavbarPromotionalSite from '../components/NavbarPromotionalSite.jsx';
import LogoPromotionalSite from '../components/LogoPromotionalSite.jsx';
import DiscriptionPromotionalSite from '../components/DiscriptionPromotionalSite.jsx';
import SliderPromotionalSite from '../components/SliderPromotionalSite.jsx';
import InnovationsPromotionalSite from '../components/InnovationsPromotionalSite.jsx';
import DataSecurityPromotionalSite from '../components/DataSecurityPromotionalSite.jsx';
import FooterPromotionalSite from '../components/FooterPromotionalSite.jsx';

export default function PromotionalSite(responseData) {
  return (
    <div >
    <NavbarPromotionalSite responseData={responseData} />
    <LogoPromotionalSite responseData={responseData} />
    <DiscriptionPromotionalSite responseData={responseData} />
    <SliderPromotionalSite responseData={responseData} />
    <InnovationsPromotionalSite responseData={responseData} />
    <DataSecurityPromotionalSite responseData={responseData} />
    <FooterPromotionalSite responseData={responseData} />
    </div>
  );
}

