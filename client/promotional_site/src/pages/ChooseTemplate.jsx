import React from "react";
import Header from '../components/ChooseTemplate/Header'
import Grid from '@mui/material/Grid';
import Template1 from '../components/ChooseTemplate/Template1'
import Template2 from '../components/ChooseTemplate/Template2'

export default function ChooseTemplate() {
  return (
    <div className="backgroundtemp">
      <Header></Header>
      <div style={{ display: "flex", gap: "50px" }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Template1></Template1>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Template2></Template2>
          </Grid>
        </Grid>
      </div>
    </div >
  );
}
