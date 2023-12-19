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
    <div className="chooseTemp1" >
      <div className="chooseShadow">
        <div className="chooseBox" >
          <div style={{ overflowY: "auto", overflowX: 'hidden' }}>
            <img
              src={Template1}
              className="chooseImage"
              alt="Template1"
            />
          </div>
        </div>
        <div className="chooseBox2">
          <div >
            <Button variant="contained" id="chooseButton" onClick={handleGenerate} disableElevation>
              Choose Template
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
