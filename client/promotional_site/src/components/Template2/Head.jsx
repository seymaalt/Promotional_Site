import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ChangeText from '../Template1/ChangeText'
import { useContext, useState } from "react";
import { Modal, Button, TextareaAutosize } from '@mui/material';
import TextContext from "../../context/TextContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Head({ responseData, changedData }) {
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const { discription, setDiscription } = useContext(TextContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [fontSize, setFontSize] = useState(24);
  const [color, setColor] = useState('black');
  const [selectedFont, setSelectedFont] = useState('DM Sans');
  const [textAlign, setTextAlign] = useState("left");


  const metniGuncelle = (e) => {
    setDiscription(e.target.value)
  };
  const duzenlemeModunuToggle = () => {
    setDuzenlemeModu(!duzenlemeModu);
  };
  const openModal = () => {
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleTextAlignChange = (e) => {
    setTextAlign(e);
  }

  const handleFontSizeChange = (newFontSize) => {
    setFontSize(newFontSize);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };


  const url = responseData.url;
  var appStoreLink = "#";
  var googleStoreLink = "#";

  url.split("/", 5)[2] == "play.google.com"
    ? (googleStoreLink = url)
    : (appStoreLink = url);

    const handleDivClick = (event) => {
      const rect = event.target.getBoundingClientRect();
      const middleX = event.clientX;
      const middleY = event.clientY;
  
      setModalPosition(calculateModalPosition(middleX, middleY));
      setIsModalOpen(true);
    };
    const calculateModalPosition = (x, y) => {
      const modalWidth = 300;
      const modalHeight = 200; 
  
      if (x + modalWidth <= window.innerWidth) {
        return { top: y, left: x };
      } else {
  
        return { top: y, left: x - modalWidth };
      }
    };
  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <div className="left">
            <div className="header">
              <h1 className="headerHead" style={{ color: "black" }}>
                {" "}
                Bu Uygulama Hakkında
              </h1>
            </div>
            <div className="headDisDiv">
              {duzenlemeModu ? (
                <TextareaAutosize
                  style={{
                    width: '100%', padding: "40px", maxwidth: "717px", maxHeight: "580px", marginTop: "20px", height: "500px",maxHeight:"580px", justifyContent: "center", padding: "0px", resize: "none", border: "0px",lineHeight:"31px",letterSpacing:"0em",overflow:"hidden", overflow:"auto", fontSize: `${fontSize}px`, fontFamily: selectedFont, textAlign: `${textAlign}`, fontWeight: "400", color: `${color}`, background: "white"
                  }}
                  multiline
                  rows={15}
                  defaultValue={responseData.description}
                  type="text" value={discription} onChange={metniGuncelle} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle} autoFocus />
              ) : (
                <div onClick={duzenlemeModunuToggle}>
                  <div
                    className="headDis "
                    style={{
                     textAlign: `${textAlign}`,
                      fontSize: `${fontSize}px`,
                      color: `${color}`,
                      fontFamily: selectedFont,
                      padding: "40px",
                      maxwidth: "717px",
                      maxHeight: "580px",
                      marginTop: "20px",
                    }}
                  >
                    {discription== null ? responseData.description : discription}
                  </div>
                </div>
              )}
            </div>
            <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={fontSize} selectedFont={selectedFont} color={color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
            <div className="buton">
              <div className="downloadbutton">
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    className="grid"
                    style={{ marginBottom: 0 }}
                  >
                    <a href={appStoreLink}>
                      <img
                        src="https://i.ibb.co/T1kqnWp/App-Store-hemen-indir-button-logo-icon-transparan-PNG-gorseli-1.png"
                        alt="Logo"
                      />
                    </a>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    className="grid"
                    style={{ marginBottom: 0 }}
                  >
                    <a href={googleStoreLink}>
                      <img
                        src="https://i.ibb.co/xMJKQ5j/Google-Play-hemen-indir-button-logo-icon-transparan-PNG-gorseli-1.png"
                        alt="Logo"
                      />
                    </a>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div
            className="right"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="logoo"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <img className="logo" src={responseData.logo} alt="Logo" />
            </div>
            <div className="Image">
              <img
                src={responseData.images[0]}
                style={{
                  width: "486px",
                  height: "783px",
                  borderRadius: "16px",

                }}
                alt="Image"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
