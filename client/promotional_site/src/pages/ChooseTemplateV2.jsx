import React from "react";
import VersionHeader2 from '../components/ChooseTemplate/VersionHeader2'
import Grid from '@mui/material/Grid';
import VersionTemplate1 from '../components/ChooseTemplate/VersionTemplate1'
import VersionTemplate2 from '../components/ChooseTemplate/VersionTemplate2'
import NavBar2 from "../components/HomeV2/Navbar2";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

export default function ChooseTemplate2() {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar2></NavBar2>
      <div className="backgroundtemp2">
        <Box style={{ innerWidth: '40px' }} >
        </Box>
        <VersionHeader2></VersionHeader2>
        <div>
          <Grid container spacing={8}>
            <Grid item xs={10} md={6}>
              <VersionTemplate1></VersionTemplate1>
            </Grid>
            <Grid item xs={10} md={6}>
              <VersionTemplate2></VersionTemplate2>
            </Grid>
          </Grid>
        </div>
      </div>
    </div >
  );
}
