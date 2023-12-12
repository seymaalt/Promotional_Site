import Spline from "@splinetool/react-spline";
import "../styles/home2.css";
import NavBar from "../components/HomeV2/Navbar";
import Text from "../components/HomeV2/Text";
import TextUrl from "../components/HomeV2/TextUrl";
import InputUrl from "../components/HomeV2/InputUrl";
import TextNewWebsite from "../components/HomeV2/TextNewWebsite";
import InputNewWebsite from "../components/HomeV2/InputNewWebsite";
import BuildButton from "../components/HomeV2/BuildButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function HomeV2() {
  return (
    <div>
    <div
      style={{
        backgroundColor: "#161417",
        height: "100vh",
      }}
    >
      <NavBar />
      <div style={{ marginTop: "75px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={0.5}></Grid>
            <Grid item xs={6}>
              <div style={{ marginTop: "150px" }}>
                {" "}
                <Text></Text>
                <div style={{ padding: "20px" }}>
                  <BuildButton></BuildButton>
                </div>
              </div>
            </Grid>
            <Grid item xs={5.5}>
              <div
                style={{ width: "800px", height: "630px", marginRight: "50px" }}
              >
                <Spline scene="https://prod.spline.design/eiDBaP-xGcRYBWVk/scene.splinecode" />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>


    </div>
    <div style={{
        backgroundColor: "#161417",
        height: "100vh",
      }}>
        
      </div>
    </div>
  );
}
