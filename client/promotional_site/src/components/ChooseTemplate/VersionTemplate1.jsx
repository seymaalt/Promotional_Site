import React from "react";
import Template1 from "../../assets/temp1.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/home2.css";
export default function Template1Component() {

  const navigate = useNavigate();

  const handleGenerate = async () => {

    navigate('/promotional-site1');

  };

  return (
    <div className="chooseTemp1" >
      <div className="chooseShadow">
        <div className="chooseBox" >
          <div className="chooseScroll" style={{ overflowY: "auto", overflowX: 'hidden' }}>
            <img
              src={Template1}
              className="chooseImage"
              alt="Template1"
            />
          </div>
        </div>
        <div className="chooseBox2">
          <div >
            <button  className="chooseButton" onClick={handleGenerate} >
              Choose Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
