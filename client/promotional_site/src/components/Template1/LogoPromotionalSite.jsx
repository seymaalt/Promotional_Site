import React from "react";

export default function LogoPromotionalSite({ responseData }) {
  return (
    <div style={{ textAlign: 'center' }} >
      <img className="logo" src={responseData.logo} alt="Logo" />
    </div>
  );
}
