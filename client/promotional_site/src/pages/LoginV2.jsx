import Login from "../components/LoginV2/Login";
import Grid from "@mui/material/Grid";
import image from '../assets/3443.jpg';

export default function BasicGrid() {
  return (
    <div style={{
      backgroundColor: "#161417",
      height: "100vh",
    }}>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid xs={2}></Grid>
        <Grid xs={8}>
          <div style={{
            borderRadius: '30px',
            backgroundColor: '#2F2D30',
            height: "100%",
            display: "flex",
            marginTop: "5%"
          }}>
            <Grid container sx={{ flexGrow: 1 }}>
              <Grid xs={6}>
                <div><Login /></div>
              </Grid>
              <Grid xs={6} className="loginPageImage">      
                  <img
                    src={image}
                    alt="Background"
                    className="loginPageImage"
                  /> 
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </div>
  );
}
