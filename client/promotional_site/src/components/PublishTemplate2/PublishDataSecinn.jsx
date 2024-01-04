import { Grid } from "@mui/material";
import React from "react";
import Innovation from "./PublishInnovation";
import DataSecurity from "./PublishDataSecurity";
import './style/template2.css'


export default function DataSecInn({ responseData }) {
  return (
    <div className="dataSecInn">
      <Grid container spacing={2}>
        <Grid item xs={12} md={0.15}></Grid>
        <Grid item xs={11} md={5}>
          <div className='dataSecBox'>
            <Innovation responseData={responseData}></Innovation>
          </div>
        </Grid>
        <Grid item xs={12} md={1.7}></Grid>
        <Grid item xs={11} md={5}>
          <div className='dataSecBox'>
            <DataSecurity responseData={responseData}></DataSecurity>
          </div>
        </Grid>
        <Grid item md={0.15}></Grid>

      </Grid>
    </div>
  );
}
