import { Grid } from "@mui/material";
import React from "react";
import Innovation from "./Innovation";
import DataSecurity from "./DataSecurity";

export default function DataSecInn({ responseData }) {
  return (
    <div>
      <Grid container spacing={2}>
      <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Innovation responseData={responseData}></Innovation>
        </Grid>
        <Grid item xs={5}>
          <DataSecurity responseData={responseData}></DataSecurity>
        </Grid>
        <Grid item xs={1}></Grid>

      </Grid>
    </div>
  );
}
