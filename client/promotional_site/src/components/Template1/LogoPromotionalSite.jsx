import React, { useContext, useEffect } from "react";
import Template1Context from "../../context/Template1Context";

export default function LogoPromotionalSite({ responseData }) {
  const { template1Response, setTemplate1Response } = useContext(Template1Context);
  const { contextLogo, setContextLogo } = useContext(Template1Context);

  var temp1Logo = responseData.logo

  useEffect(() => {
    setContextLogo({ temp1Logo: temp1Logo });
  }, [temp1Logo])

  return (
    <div style={{ textAlign: 'center' }} >
      <img className="logo" src={temp1Logo} alt="Logo" />
    </div>
  );
}
