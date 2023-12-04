import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button, TextareaAutosize } from '@mui/material';
import EditPageContext from '../../context/EditPageContext';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
const EditableText = ({ open, onClose, handleColorChange, handleFontChange, handleFontSizeChange, fontSize, selectedFont, color, modalPosition,handleTextAlignChange }) => {

  return (
    <Modal open={open} onClose={onClose} BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0)' } }} >
      <div style={{ position: 'absolute', borderRadius: '15px', top: modalPosition.top, left: modalPosition.left, backgroundColor: "#1F2937", color: "white" }}>
        <div style={{ border: '1px', margin: "7px", padding: '5px', fontSize: "15px" }}>
          <button style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px',
          }} onClick={onClose}>X</button>
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
            <br></br>
            <input type="color" value={color}
              style={{
                backgroundColor: "#9CA3AF",
                width: '20%',
                height: "40px",
                boxSizing: 'border-box',
                padding: '1px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }} onChange={(e) => handleColorChange(e.target.value)} />

          </label>
          <label style={{ display: 'block', fontSize: "15px", textAlign: "left", margin: "9px" }}>
            <b>TextAlign:</b>
            <br></br>
            <Button onClick={() => handleTextAlignChange("center")} style={{ color: "white" }}><FormatAlignCenterIcon /></Button>
            <Button onClick={() => handleTextAlignChange("justify")} style={{ color: "white" }}><FormatAlignJustifyIcon /></Button>
            <Button onClick={() => handleTextAlignChange("left")} style={{ color: "white" }}><FormatAlignLeftIcon /></Button>
            <Button onClick={() => handleTextAlignChange("right")} style={{ color: "white" }}><FormatAlignRightIcon /></Button>
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
