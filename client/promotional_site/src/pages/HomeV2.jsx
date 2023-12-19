import Spline from "@splinetool/react-spline";
import { useRef} from 'react';

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
import BuildText from "../components/HomeV2/BuildText";
import HowItWorksText from '../components/HomeV2/HowItWorksText';
import HowItWorks from '../components/HomeV2/HowItWorks';


export default function HomeV2() {

  const div2Ref = useRef(null);
  const div3Ref = useRef(null);


  const handleBuildButtonClick = () => {
    if (div2Ref.current) {
      div2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }

  };

  const handleClick = () => {
    if (div3Ref.current) {
      div3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="homePage">
      <div className="part2">
        <NavBar onClick={handleClick} />
        <div style={{ marginTop: "75px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item md={0.5} xs={0}></Grid>
              <Grid item md={6} xs={12}>
                <div style={{ marginTop: "150px" }}>
                  {" "}
                  <Text></Text>
                  <div style={{ padding: "20px" }}>
                    <BuildButton onClick={handleBuildButtonClick} />
                  </div>
                </div>
              </Grid>
              <Grid item md={5.5} xs={12}>
                <div
                  style={{
                    width: "800px",
                    height: "630px",
                    marginRight: "50px",
                  }}
                >
                  <Spline scene="https://prod.spline.design/eiDBaP-xGcRYBWVk/scene.splinecode" />
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>

      <div ref={div2Ref} className="part2">
        <BuildText></BuildText>
        <Box sx={{ flexGrow: 1 }} style={{ marginTop: "100px", display: "flex" }}>
          <Grid container spacing={2}>
            <Grid item xs={0.5}></Grid>
            <Grid item xs={5.5}>
              <div className="url">
                <TextUrl></TextUrl>
                <InputUrl></InputUrl>
              </div>
            </Grid>
            <Grid item xs={0.5} >
            </Grid>
            <Grid item xs={5.5}>
              <div className="new">
                <TextNewWebsite></TextNewWebsite>
                <InputNewWebsite></InputNewWebsite>
              </div>
            </Grid>
            <Grid item xs={0.5}></Grid>
          </Grid>
        </Box>
      </div>

      <div ref={div3Ref} className='part2'>
        <HowItWorksText></HowItWorksText>
        <HowItWorks></HowItWorks>
      </div>

    </div>
  );
}
