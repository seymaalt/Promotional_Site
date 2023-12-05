import React from "react";
import Template2 from "../../assets/temp2.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Template2Component() {
  const navigate = useNavigate();

  const handleGenerate = async () => {

    navigate('/promotional-site2');

  };
  return (
    <div className="chooseTemp1">
      <div style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
        <div style={{ display: "flex", height: "52dvh" }}>
          <div style={{ marginRight: "auto", overflowY: "auto" }}>
            <img
              src={Template2}
              style={{
                height: "1500px",
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
            borderRadius: "8px",
            padding: "2rem",
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
    </div>

  );
}
