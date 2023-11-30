import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { Modal, Button, TextareaAutosize } from '@mui/material';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../../utils/motion';
import Grid from "@mui/material/Grid";
import TextContext from '../../context/TextContext';


export default function DiscriptionPromotionalSite({ responseData, changedData, colorData }) {
  const { discription,setDiscription } = useContext(TextContext);
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [fontSize, setFontSize] = useState(25);
  const [color, setColor] = useState('white');
  const [selectedFont, setSelectedFont] = useState('Roboto, sans-serif');

  const openModal = () => {
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFontSizeChange = (newFontSize) => {
    setFontSize(newFontSize);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const metniGuncelle = (e) => {
    setDiscription(e.target.value)
  };

  const duzenlemeModunuToggle = () => {
    setDuzenlemeModu(!duzenlemeModu);
  };


  useEffect(() => {
    const calculateModalPosition = () => {
      const textElement = document.getElementById('header');

      if (textElement) {
        const rect = textElement.getBoundingClientRect();
        setModalPosition({ top: rect.top - (window.scrollY / 1000), left: rect.right + window.scrollX });
      }
    };

    calculateModalPosition();
    window.addEventListener('scroll', calculateModalPosition);

    return () => {
      window.removeEventListener('scroll', calculateModalPosition);
    };
  }, [isModalOpen]);


  return (
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show">
      <div className='container'>
        {duzenlemeModu ? (
          <TextareaAutosize
            style={{ width: '100%', margin: "7%", justifyContent: "center", padding: "0px", resize: "none", border: "0px", fontSize: `${fontSize}px`, fontFamily: selectedFont, textAlign: "center", fontWeight: "75px", color: `${color}`, background: (colorData == null ? 'black' : colorData) }}
            id="header"
            name="header"
            multiline
            rows={15}
            defaultValue={responseData.description}
            type="text" value={discription} onChange={metniGuncelle} onDoubleClick={openModal} onBlur={duzenlemeModunuToggle} autoFocus />
        ) : (
          <div onClick={duzenlemeModunuToggle}>
            <Grid container style={{ justifyContent: "center", color: `${color}`, fontSize: `${fontSize}px`, font: `${selectedFont}` }}>
              <p className='discription' style={{ justifyContent: "center", color: `${color}`, fontSize: `${fontSize}px`, fontFamily: selectedFont }}>{changedData == null ? responseData.description : changedData}</p>
            </Grid>
          </div>
        )}
        <Modal open={isModalOpen} onClose={closeModal} BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0)' } }} >
          <div style={{ position: 'absolute', top: modalPosition.top, left: modalPosition.left, backgroundColor: "#1F2937", color: "white" }}>
            <div style={{ border: '1px',margin:"7px", padding: '5px', fontSize: "15px"}}>
              <label style={{ display: 'block', fontSize: "15px", textAlign:"left",margin:"9px"}} >
                <b>Size:</b>
                <input type="number" value={fontSize}  style={{
                  backgroundColor:"#9CA3AF",
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '8px',
                  borderRadius: '5px', // Köşeleri yuvarlak yapmak için
                  border: '1px solid #ccc', // Kenarlık rengi
                }} onChange={(e) => handleFontSizeChange(e.target.value)} />
              </label >
              <label  style={{ display: 'block', fontSize: "15px", textAlign:"left",margin:"9px" }}>
                <b>Color:</b>
                <input type="color" value={color} 
                 style={{
                  backgroundColor:"#9CA3AF",
                  width: '100%',
                  height:"50px",
                  boxSizing: 'border-box',
                  padding: '8px',
                  borderRadius: '5px', // Köşeleri yuvarlak yapmak için
                  border: '1px solid #ccc', // Kenarlık rengi
                }} onChange={(e) => handleColorChange(e.target.value)} />
              </label>
              <label style={{ display: 'block', fontSize: "15px", textAlign:"left",margin:"9px"}} >
                <b>Font:</b>
                <select value={selectedFont} 
                style={{
                  backgroundColor:"#9CA3AF",
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '8px',
                  borderRadius: '5px', // Köşeleri yuvarlak yapmak için
                  border: '1px solid #ccc', // Kenarlık rengi
                }} onChange={handleFontChange}>
                  <option value="'Roboto, sans-serif'">Roboto</option>
                  <option value="Dosis, sans-serif">Dosis</option>
                  <option value="Nova Square, sans-serif">Nova Square</option>
                  {/* İhtiyacınıza göre fontları ekleyebilirsiniz */}
                </select>
              </label>
            </div>
          </div>
        </Modal>
      </div>
    </motion.nav>
  )
}
