import Logo from '../../assets/logo.png';
import Grid from "@mui/material/Grid";

export default function Navbar2({ onClick }) {
  return (
    <div style={{ height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", backgroundColor: "#161417" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} style={{ width: "250px", marginRight: "10px" }} alt="Logo" />
      </div>
      
    </div>

  );
}
