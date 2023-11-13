import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Input from "../components/Input";
import Logo from "../components/Logo";
import HomePageImage from "../components/HomePageImage";
import HomePageText from "../components/HomePageText";

const CustomBox = styled(Box)({
  background: "linear-gradient(to right, #6C46AE, #A84DB0, #D84FB4)",
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <CustomBox >
      <Logo />
      <Grid container spacing={3}>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={5} style={{ marginTop: "100px" }}>
          <HomePageText></HomePageText>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "10px", color: "white", fontFamily: 'Roboto, sans-serif', fontSize: "25px" }}>
              URL
            </p>
            <Input style={{ flex: 1, marginLeft: "8px" }} />
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <Box style={{ marginLeft: "50px" }}>
            <HomePageImage></HomePageImage>
          </Box>
        </Grid>
      </Grid>
    </CustomBox>
  );
}
