import React, { useContext, useState } from "react";
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
import ChangeText from './ChangeText'
import { Modal, Button, TextareaAutosize } from '@mui/material';
import TextContext from "../../context/TextContext";

export default function HeaderPromotionalSite({ responseData, changedData, colorData}) {
  const { header,setHeader } = useContext(TextContext);
  const [metin, setMetin] = useState(responseData.header);
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [fontSize, setFontSize] = useState(48);
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
    setHeader(e.target.value);
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
      <div className="header" onDoubleClick={openModal} >
      {duzenlemeModu ? (
        <TextareaAutosize
          style={{  marginTop: "0%",textTransform:"uppercase",paddingLeft:"10%",paddingRight:"10%", resize: "none", border: "0px", fontSize: `${fontSize}px`, fontFamily: selectedFont, textAlign: "center", color: `${color}`, background: (colorData == null ? 'black' : colorData) }}
          id="header"
          name="header"
          multiline
          rows={15}
          defaultValue={responseData.header}
          type="text" value={header} onChange={metniGuncelle} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle} autoFocus />
        ) : (
        <div onClick={duzenlemeModunuToggle}>
          <h1 style={{ fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px` }}>{changedData == null ? responseData.header : changedData}</h1>
        </div>
        )}
      </div>
      <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={fontSize} selectedFont={selectedFont} color={color} modalPosition={modalPosition}/>
    </motion.nav >
  );
}
