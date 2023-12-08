import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { Modal, Button, TextareaAutosize } from '@mui/material';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../../utils/motion';
import Grid from "@mui/material/Grid";
import TextContext from '../../context/TextContext';
import ChangeText from './ChangeText'


export default function DiscriptionPromotionalSite({ responseData, changedData, colorData }) {
  const { discription, setDiscription } = useContext(TextContext);
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [fontSize, setFontSize] = useState();
  const [color, setColor] = useState('white');
  const [selectedFont, setSelectedFont] = useState('Roboto, sans-serif');
  const [textAlign, setTextAlign] = useState("center");


  const openModal = () => {
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFontSizeChange = (newFontSize) => {
    setFontSize(newFontSize);
  };

  const handleTextAlignChange = (e) => {
    setTextAlign(e);
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
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show">
      <div className='container'>
        {duzenlemeModu ? (
          <TextareaAutosize
            style={{ width: '100%', justifyContent: "center", padding: "0px", resize: "none", border: "0px", fontSize: `${fontSize}px`, fontFamily: selectedFont, textAlign: `${textAlign}`, fontWeight: "75px", color: `${color}`, background: (colorData == null ? 'black' : colorData) }}
            id="header"
            name="header"
            multiline
            rows={15}
            defaultValue={responseData.description}
            type="text" value={discription} onChange={metniGuncelle} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle} autoFocus />
        ) : (
          <div onClick={duzenlemeModunuToggle}>
            <Grid container style={{ justifyContent: "center", color: `${color}`, fontSize: `${fontSize}px`, font: `${selectedFont}` }}>
              <div className='discription' style={{ textAlign:`${textAlign}`, color: `${color}`, fontSize: `${fontSize}px`, fontFamily: selectedFont }}>{changedData == null ? responseData.description : changedData}</div>
            </Grid>
          </div>
        )}
      </div>
      <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={fontSize} selectedFont={selectedFont} color={color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
    </motion.nav>
  )
}
