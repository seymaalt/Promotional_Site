import Logo from '../../assets/logo.png';
import Grid from "@mui/material/Grid";

export default function Navbar({ onClick }) {
  return (
    <div  style={{ height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", backgroundColor: "#161417" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} style={{ width: "250px", marginRight: "10px" }} alt="Logo" />
      </div>
      <div style={{ display: "flex", flexGrow: 1, marginLeft: "550px" }}>
        <a href="#" onClick={onClick} style={{ color: "white", fontSize: "20px", margin: "0 40px 0 0", textDecoration: "none" }}>How it Works</a>
        <a href="#" style={{ color: "white", fontSize: "20px", margin: "0 40px 0 0", textDecoration: "none" }}>Pricing</a>
      </div>
      <div>
        <a href='/LoginPage' style={{ color: "white",fontSize:"20px", margin: "0 30px 0 0", textDecoration: "none" }}>Login </a>
        <button href="#"  style={{ color: "#161417",fontSize:"20px", margin: "0 0px 0 0", textDecoration: "none",padding:"8px 15px",borderRadius:"30px"}}>Register</button>
      </div>
    </div>

  );
}
