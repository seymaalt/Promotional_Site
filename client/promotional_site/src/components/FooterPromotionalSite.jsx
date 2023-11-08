import React from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation
import { Typography, Toolbar, Container } from "@mui/material";

const FooterPromotionalSite = () => {
  const footerStyle = {
    marginTop: "auto",
    backgroundColor: "#fff",
    borderTop: "1px solid #ddd",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#000",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
    color: "linear-gradient(to right, #6C46AE, #A84DB0, #D84FB4)",
    backgroundClip: "text",
    textFillColor: "transparent",
    transition: "all 0.3s ease",
  };

  return (
    <footer style={footerStyle}>
      <div >
        <Toolbar style={{ textAlign: "left" }}>
          <Typography variant="body2" >
            <Link
              to="/"
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style = linkHoverStyle)}
              onMouseLeave={(e) => (e.target.style = linkStyle)}
            >
              Showcaseify
            </Link>{" "}
            © {new Date().getFullYear()}
          </Typography>
        </Toolbar>
      </div>
    </footer>
  );
};

export default FooterPromotionalSite;