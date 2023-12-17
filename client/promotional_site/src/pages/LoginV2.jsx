import Login from "../components/LoginV2/Login"
import Grid from "@mui/material/Grid";



export default function BasicGrid() {
  return (
    <div  style={{
        backgroundColor: "#161417",
        height: "100vh",
      }}>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={2}>
       
      </Grid>
      <Grid xs={8}>
        <div  style={{
              borderRadius: '30px',
              backgroundColor: '#2F2D30',
              height:"110%",
              display:"flex",
              marginTop:"5%"
            }}>
                <div></div>
                <div>  <Login/></div>
      
        
        </div>
      </Grid>
    <Grid xs={2}>
       
      </Grid>
    </Grid>
    </div>
  );
}