import React from "react";

export default function LogoPromotionalSite({ responseData }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={responseData.logo} alt="Logo" style={{ borderRadius: '10%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} />
    </div>
  );
}
