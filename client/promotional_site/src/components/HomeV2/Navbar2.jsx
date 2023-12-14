import Logo from '../../assets/logo.png';
import Grid from "@mui/material/Grid";

export default function Navbar2({ onClick }) {
  return (
    <div style={{ height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", backgroundColor: "#161417" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} style={{ width: "250px", marginRight: "10px" }} alt="Logo" />
      </div>
      <div>
        <a href="#" style={{ color: "white", fontSize: "20px", margin: "0 30px 0 0", textDecoration: "none", fontWeight: "30px" }}>Login</a>
        <button href="#" style={{ color: "#161417", fontSize: "20px", margin: "0 0px 0 0", textDecoration: "none", padding: "8px 15px", borderRadius: "30px", fontWeight: "20px" }}>Register</button>
      </div>
    </div>

  );
}
