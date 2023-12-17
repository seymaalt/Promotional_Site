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
    <div className="chooseTemp1" >
      <div className="chooseShadow">
        <div className="chooseBox">
          <div style={{ overflowY: "auto", overflowX: 'hidden' }}>
            <img
              src={Template2}
              className="chooseImage"
              alt="Template1"
            />
          </div>
        </div>
        <div className="chooseBox2">
          <div>
            <Button variant="contained" id='chooseButton' onClick={handleGenerate} disableElevation>
              Choose Template
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
}
