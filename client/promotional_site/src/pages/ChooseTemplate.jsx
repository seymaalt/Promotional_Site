import React from "react";
import Header from '../components/ChooseTemplate/Header'
import Grid from '@mui/material/Grid';
import Template1 from '../components/ChooseTemplate/Template1'
import Template2 from '../components/ChooseTemplate/Template2'

export default function ChooseTemplate() {
  return (
    <div className="backgroundtemp">
      <Header></Header>
      <div>
        <Grid container spacing={8}>
          <Grid item xs={10} md={6}>
            <Template1></Template1>
          </Grid>
          <Grid item xs={10} md={6}>
            <Template2></Template2>
          </Grid>
        </Grid>
      </div>
    </div >
  );
}
