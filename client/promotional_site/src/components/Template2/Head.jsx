import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ChangeText from '../Template1/ChangeText'
import { useContext, useState, useEffect } from "react";
import { Modal, Button, TextareaAutosize } from '@mui/material';
import TextContext from "../../context/TextContext";
import './style/template2.css'
import Template2Context from "../../context/Template2Context";



export default function Head({ responseData, changedData }) {
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const { discription, setDiscription } = useContext(TextContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [logo, setLogo] = useState()
  const [image1, setImage1] = useState()
  const { template2Response, setTemplate2Response } = useContext(Template2Context);

  const [designHeadDiscriprion, setDesignHeadDiscription] = useState({
    fontSize: 25,
    color: "black",
    font: "DM Sans",
    textAlign: "left",
  })

  const metniGuncelle = (e) => {
    setDiscription(e.target.value)
  };
  const duzenlemeModunuToggle = () => {
    setDuzenlemeModu(!duzenlemeModu);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleTextAlignChange = (e) => {
    setDesignHeadDiscription(prevdesign => {
      const updatedDesign = { ...prevdesign, textAlign: e };
      return updatedDesign;
    });
  }

  const handleFontSizeChange = (newFontSize) => {
    setDesignHeadDiscription(prevdesign => {
      const updatedDesign = { ...prevdesign, fontSize: newFontSize };
      return updatedDesign;
    });
  };

  const handleColorChange = (newColor) => {
    setDesignHeadDiscription(prevdesign => {
      const updatedDesign = { ...prevdesign, color: newColor };
      return updatedDesign;
    });
  };

  const handleFontChange = (e) => {
    setDesignHeadDiscription(prevdesign => {
      const updatedDesign = { ...prevdesign, font: e.target.value };
      return updatedDesign;
    });
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
  useEffect(() => {
    setLogo(responseData.logo)
    setImage1(responseData.images[0])
    setTemplate2Response({ ...template2Response, designHeadDiscriprion: designHeadDiscriprion, discription: (discription == null ? responseData.description : discription), logo: responseData.logo, image1: responseData.images[0],url:url });
    console.log(template2Response)
  },[designHeadDiscriprion, discription, logo, image1,url], []);
  // useEffect(() => {
  //  setImage1(responseData.images[0])
  //  setLogo(responseData.logo)
  //  console.log(template2Response)
  // }, [designHeadDiscriprion, discription, logo, image1,url])
  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <div className="temp2Header">
            <h1 className="headerHead">
              Bu Uygulama Hakkında
            </h1>
          </div>
          <div className="headDisDiv">
            {duzenlemeModu ? (
              <TextareaAutosize
                style={{
                  width: '100%', padding: "4%", maxwidth: "717px", maxHeight: "60dvh", justifyContent: "center", resize: "none", border: "0px", overflow: "hidden", fontSize: `${designHeadDiscriprion.fontSize}px`, fontFamily: designHeadDiscriprion.font, textAlign: `${designHeadDiscriprion.textAlign}`, fontWeight: "400", color: `${designHeadDiscriprion.color}`, background: "white"
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
                    textAlign: `${designHeadDiscriprion.textAlign}`,
                    fontSize: `${designHeadDiscriprion.fontSize}px`,
                    color: `${designHeadDiscriprion.color}`,
                    fontFamily: designHeadDiscriprion.font,

                  }}
                >
                  {discription == null ? responseData.description : discription}
                </div>
              </div>
            )}
          </div>
          <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={designHeadDiscriprion.fontSize} selectedFont={designHeadDiscriprion.font} color={designHeadDiscriprion.color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
          <div>
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
        </Grid>
        <Grid item xs={5}>
          <div
            className="right"
          >
            <div
              className="logoo"
            >
              <img className="temp2Logo" src={responseData.logo} alt="Logo" />
            </div>
            <div className="temp2ImageDiv">
              <img
                src={responseData.images[0]}
                className="temp2Image0"
                alt="Image"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}