import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button, TextareaAutosize } from '@mui/material';
import EditPageContext from '../../context/EditPageContext';

const EditableText = ({open, onClose}) => {
  const{fontSize, setFontSize,color,setColor,selectedFont,setSelectedFont} = useContext(EditPageContext)
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });


  function handleFontSizeChange (newFontSize) {
    setFontSize(newFontSize);
  };

  function handleColorChange  (newColor)  {
    setColor(newColor);
  };

  function handleFontChange  (e)  {
    setSelectedFont(e.target.value);
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
    <Modal open={open} onClose={onClose}   BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0)' } }} >
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
            <option value="Roboto, sans-serif">Roboto</option>
            <option value="Dosis, sans-serif">Dosis</option>
            <option value="Nova Square, sans-serif">Nova Square</option>

          </select>
        </label>
      </div>
    </div>
  </Modal>
  )
};

export default EditableText;
