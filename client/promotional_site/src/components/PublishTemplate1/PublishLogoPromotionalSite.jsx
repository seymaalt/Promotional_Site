import React, { useContext, useEffect } from "react";
import temp1Logo from '../../assets/google.png'
import PublishContext from '../../context/PublishContext';


export default function PublishLogoPromotionalSite() {
  
  const { response } = useContext(PublishContext)

  return (
    <div style={{ textAlign: 'center' }} >
      <img className="logo" src={response.logo} alt="Logo" />
    </div>
  );
}
