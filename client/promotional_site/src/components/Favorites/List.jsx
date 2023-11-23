import  { useEffect, useState ,useContext} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import axios from "axios";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import GlobalContext from '../../context/GlobalContext.jsx';
import TextContext from '../../context/TextContext.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import '../../styles/global.css';

const MyButton = styled(Button)({
    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
    borderRadius: '10px',
    height: '40px',
    position: 'absolute',
    right: 0,
    transition: 'background 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
    },
  });

  export default function FavList({ favorites }) {
    const [processedData, setProcessedData] = useState([]);
    const { setHeader, setDiscription, setInnovations, setDataSecurity } = useContext(TextContext);
    const [loading, setLoading] = useState(false);
    const [loadinglist, setLoadinglist] = useState(false);
    const { response, setResponse } = useContext(GlobalContext);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
  
    const handleGenerate = async (url) => {
      setLoading(true);
      try {
        const res = await axios.post(`${import.meta.env.VITE_PORT}/content/`, {
          data: url,
        });
  
        setHeader(null)
        setDiscription(null)
        setInnovations(null)
        setDataSecurity(null)
        setResponse(res.data);
        navigate('/promotional-site');
      } catch (error) {
        console.error('Error fetching data from the server!', error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      if (favorites && favorites.length > 0) {
        const fetchData = async () => {
          setLoadinglist(true);
          try {
            const processed = await Promise.all(
              favorites.map(async (item) => {
                try {
                  const response = await axios.post(
                    `${import.meta.env.VITE_PORT}/content/favorites`,
                    { data: item.url }
                  );
  
                  const newData = {
                    _id: item._id,
                    template: item.template,
                    url: item.url,
                    logo: response.data.logo,
                    header: response.data.header,
                    newUrl: item.url,
                  };
  
                  // Log the newData to console (optional, for debugging)
                  console.log("New Data:", newData);
  
                  return newData;
                } catch (error) {
                  console.error("Error fetching data for", item.url, ":", error);
                  return null; // or handle the error in a way that suits your application
                }
              })
            );
  
            // Filter out null values (in case of errors)
            const filteredProcessedData = processed.filter((data) => data !== null);
  
            setProcessedData(filteredProcessedData);
          } finally {
            setLoadinglist(false);
          }
        };
  
        fetchData();
      }
    }, [favorites]);
  
    return (
      <div style={{ width: "1800px" }}>
        <List sx={{ width: "1800px", color: "white" }}>
          {loadinglist && (
            <Backdrop open={true} className='loading'>
              <CircularProgress className='circular' />
            </Backdrop>
          )}
          {processedData.map((item) => (
            <ListItem key={item._id} disableGutters>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Logo */}
                {item.logo && <img src={item.logo} alt="Logo" style={{ marginRight: "10px", width: "50px", borderRadius: "10px" }} />}
  
                {/* Header */}
                <p
                  style={{
                    color: "white",
                    fontFamily: "", // You can specify the font family here
                    fontSize: "30px",
                  }}
                >
                  {item.header}
                </p>
  
                {/* Button */}
                <MyButton variant="contained" color="primary" onClick={() => handleGenerate(item.url)}>
                  Generate
                </MyButton>

                {loading && (
            <Backdrop open={true} className='loading'>
              <CircularProgress className='circular' />
            </Backdrop>
          )}
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }