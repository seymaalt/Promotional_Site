import React, { useContext, useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
import ChangeText from './ChangeText'
import { Modal, Button, TextareaAutosize } from '@mui/material';
import TextContext from "../../context/TextContext";
import Template1Context from "../../context/Template1Context";

export default function HeaderPromotionalSite({ responseData, changedData, colorData }) {
  const { contextHeader, setContextHeader } = useContext(Template1Context);

  const { header, setHeader } = useContext(TextContext);
  const [metin, setMetin] = useState(responseData.header);
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const [designHeader, setDesignHeader] = useState({
    fontSize: "2rem",
    color: 'white',
    font: "Roboto, sans-serif",
  })

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFontSizeChange = (newFontSize) => {
    setDesignHeader(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, fontSize: newFontSize };
      return updatedNav;
    });
  };

  const handleColorChange = (newColor) => {
    setDesignHeader(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, color: newColor };
      return updatedNav;
    });
  };

  const handleFontChange = (e) => {
    setDesignHeader(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, font: e.target.value };
      return updatedNav;
    });
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


  useEffect(() => {
    setContextHeader({ header: (changedData == null ? responseData.header : changedData), designHeader: designHeader })
    console.log(contextHeader)
  }, [header, designHeader])



  return (
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show">
      <div id="header" onDoubleClick={openModal} >
        {duzenlemeModu ? (
          <TextareaAutosize
            style={{ marginTop: "0%", textTransform: "uppercase", paddingLeft: "10%", paddingRight: "10%", resize: "none", border: "0px", fontSize: `${designHeader.fontSize}px`, fontFamily: designHeader.font, textAlign: "center", color: `${designHeader.color}`, background: (colorData == null ? 'black' : colorData) }}
            id="header"
            name="header"
            multiline
            rows={15}
            defaultValue={responseData.header}
            type="text" value={header} onChange={metniGuncelle} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle} autoFocus />
        ) : (
          <div onClick={duzenlemeModunuToggle}>
            <h1 style={{ fontFamily: designHeader.font, color: `${designHeader.color}`, fontSize: `${designHeader.fontSize}px` }}>{changedData == null ? responseData.header : changedData}</h1>
          </div>
        )}
      </div>
      <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={designHeader.fontSize} selectedFont={designHeader.selectedFont} color={designHeader.color} modalPosition={modalPosition} />
    </motion.nav >
  );
}
