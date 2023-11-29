import React from "react";
import Header from '../components/ChooseTemplate/Header'
import Template1 from '../components/ChooseTemplate/Template1'
import Template2 from '../components/ChooseTemplate/Template2'

export default function ChooseTemplate() {
  return (
    <div className="backgroundtemp">
      <Header></Header>
      <div style={{ display: "flex", gap: "50px" }}> 
        <Template1></Template1>
        <Template2></Template2>
      </div>
    </div>
  );
}
