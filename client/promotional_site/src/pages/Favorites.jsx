import { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Logo from "../components/Logo";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FavText from "../components/Favorites/Text";
import FavList from "../components/Favorites/List";
import AuthContext from "../context/AuthContext.jsx";
import axios from "axios";
import Logo2 from '../../src/assets/logo.png';
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const { token } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          `${import.meta.env.VITE_PORT}/user/current`,
          config
        ).then(data => setFavorites(data.data.favorities));
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Error fetching user profile");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);
  useEffect(() => (console.log(favorites)));

  return (
    <div>
      <Box className="favBackground">
        <Button onClick={() => navigate('/')}>
          <img src={Logo2} className='favoriteHomeLogo'></img>
        </Button>
        <div style={{ width: "%100", padding: "0 20px" }}>
          <FavText />
          <div style={{ width: "%100", marginTop: "40px" }}>
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error}</div>
            ) : (
              <FavList favorites={favorites}></FavList>
            )}
          </div>
        </div>
      </Box>
    </div>
  );
}
