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
    const middleX = rect.left + rect.width / 2;
    const middleY = rect.top + rect.height / 2;


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
          style={{  marginTop: "0%",textTransform:"uppercase", resize: "none", border: "0px", fontSize: `${fontSize}px`, fontFamily: selectedFont, textAlign: "center", color: `${color}`, background: (colorData == null ? 'black' : colorData) }}
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
      <Modal open={isModalOpen} onClose={closeModal} BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0)' } }}>
        <div style={{ position: 'absolute', top: modalPosition.top, left: modalPosition.left, backgroundColor: "#1F2937", color: "white" }}>
          <div style={{ border: '1px', margin: "7px", padding: '5px', fontSize: "15px" }}>
            <label style={{ display: 'block', fontSize: "15px", textAlign: "left", margin: "9px" }} >
              <b>Size:</b>
              <input type="number" value={fontSize} style={{
                backgroundColor: "#9CA3AF",
                width: '100%',
                boxSizing: 'border-box',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }} onChange={(e) => handleFontSizeChange(e.target.value)} />
            </label >
            <label style={{ display: 'block', fontSize: "15px", textAlign: "left", margin: "9px" }}>
              <b>Color:</b>
              <input type="color" value={color}
                style={{
                  backgroundColor: "#9CA3AF",
                  width: '100%',
                  height: "50px",
                  boxSizing: 'border-box',
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }} onChange={(e) => handleColorChange(e.target.value)} />
            </label>
            <label style={{ display: 'block', fontSize: "15px", textAlign: "left", margin: "9px" }} >
              <b>Font:</b>
              <select value={selectedFont}
                style={{
                  backgroundColor: "#9CA3AF",
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }} onChange={handleFontChange}>
                <option value="'Roboto, sans-serif'">Roboto</option>
                <option value="Dosis, sans-serif">Dosis</option>
                <option value="Nova Square, sans-serif">Nova Square</option>
              </select>
            </label>
          </div>
        </div>
      </Modal>
    </motion.nav >
  );
}
