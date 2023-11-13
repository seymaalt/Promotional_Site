import { useContext } from 'react';
import LogoPromotionalSite from '../components/Template1/LogoPromotionalSite.jsx';
import DiscriptionPromotionalSite from '../components/Template1/DiscriptionPromotionalSite.jsx';
import InnovationsPromotionalSite from '../components/Template1/InnovationsPromotionalSite.jsx';
import DataSecurityPromotionalSite from '../components/Template1/DataSecurityPromotionalSite.jsx';
import FooterPromotionalSite from '../components/Template1/FooterPromotionalSite.jsx';
import GlobalContext from '../context/GlobalContext.jsx';

export default function PromotionalSite() {
  const { response } = useContext(GlobalContext);

  return (
    <div >

      <LogoPromotionalSite responseData={response} />
      <DiscriptionPromotionalSite responseData={response} />
      <InnovationsPromotionalSite responseData={response} />
      <DataSecurityPromotionalSite responseData={response} />
      <FooterPromotionalSite responseData={response} />

    </div>
  );
}

