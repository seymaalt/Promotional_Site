import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import backgroundImage from "../assets/bkd.jpg"; // Resminizin yolunu doğru bir şekilde belirtin
import Grid from "@mui/material/Grid";
import Input from "../components/Input";
import Logo from '../components/Logo'
const CustomBox = styled(Box)({
  background: "linear-gradient(to right, #192a56, #5c258d, #192a56)", // İstediğiniz renk geçişini burada tanımlayın
  backgroundSize: "cover", // Arka planın kaplamasını ayarlar
  height: "103vh", // Box'un boyutunu ekran yüksekliği kadar yapılandırır
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
    <CustomBox>
      <Logo></Logo>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6} style={{marginTop:"180px"}}>
          <Item>
           
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "10px",  fontWeight: "bold" , color:"black"}}>URL </p>
              <Input style={{ flex: 1, marginLeft: "8px" }} />
            </div>
          </Item>
        </Grid>
        <Grid item xs></Grid>
      </Grid>{" "}
    </CustomBox>
  );
}
