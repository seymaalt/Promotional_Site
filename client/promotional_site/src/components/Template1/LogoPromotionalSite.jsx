import React from "react";

export default function LogoPromotionalSite({ responseData, color }) {
  return (
    <div style={{ textAlign: 'center' }} >
      <img src={responseData.logo} alt="Logo" style={{ borderRadius: '30%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', height: "185px", marginTop: "1%", border: "solid 3px white" }} />
    </div>
  );
}
