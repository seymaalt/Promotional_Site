import Login from "../components/LoginV2/Login";
import Grid from "@mui/material/Grid";
import image from '../assets/3443.jpg';

export default function BasicGrid() {
  return (
    <div className="loginPageDiv" style={{
      backgroundColor: "#161417",
      minHeight: "100vh",
    }}>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid xs={2}></Grid>
        <Grid xs={8}>
          <Grid container sx={{ flexGrow: 1 }}>
            <Grid md={6} xs={12}>
              <div className="loginPageDivBox"><Login /></div>
            </Grid>
            <Grid md={6} xs={12} >
              <img
                src={image}
                alt="Background"
                className="loginPageImage"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </div>
  );
}
