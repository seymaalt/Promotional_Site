import { useContext } from 'react';
import NavbarPromotionalSite from '../components/NavbarPromotionalSite.jsx';
import LogoPromotionalSite from '../components/LogoPromotionalSite.jsx';
import DiscriptionPromotionalSite from '../components/DiscriptionPromotionalSite.jsx';
import SliderPromotionalSite from '../components/SliderPromotionalSite.jsx';
import InnovationsPromotionalSite from '../components/InnovationsPromotionalSite.jsx';
import DataSecurityPromotionalSite from '../components/DataSecurityPromotionalSite.jsx';
import FooterPromotionalSite from '../components/FooterPromotionalSite.jsx';
import  GlobalContext  from '../context/GlobalContext.jsx';

export default function PromotionalSite() {
  const { response } = useContext(GlobalContext);
  
  return (
    <div >
     {console.log(response)}
   <NavbarPromotionalSite responseData={response} />
    <LogoPromotionalSite responseData={response} />
    <DiscriptionPromotionalSite responseData={response} />
    <SliderPromotionalSite responseData={response} />
    <InnovationsPromotionalSite responseData={response} />
    <DataSecurityPromotionalSite responseData={response} />
    <FooterPromotionalSite responseData={response} />
   
   </div>
  );
}

