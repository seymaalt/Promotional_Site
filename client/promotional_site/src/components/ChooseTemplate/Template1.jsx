import React from "react";
import Template1 from "../../assets/temp1.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Template1Component() {

    const navigate = useNavigate();

    const handleGenerate = async () => {
       
          navigate('/promotional-site');
      
      };

  return (
    <div style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
      <div style={{ display: "flex", height: "500px" }}>
        <div style={{ marginRight: "auto", overflowY: "auto" }}>
          <img
            src={Template1}
            style={{
              height: "900px",
              width: "450px",
              borderTopLeftRadius: "8px", // Sağ üst köşe için
            }}
            alt="Template1"
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          height: "80px",
          width: "450px",
          borderRadius: "8px",
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
      
        <div>
          <Button variant="contained" style={{ backgroundColor: "black", width: " 350px" }} onClick={handleGenerate} disableElevation>
            Choose Template
          </Button>
        </div>
      </div>
    </div>
  );
}
