import React, { useState } from 'react';
import ChangeText from '../Template1/ChangeText'
import TextContext from '../../context/TextContext';
import { TextareaAutosize } from '@mui/material';
import { Modal } from '@mui/base';

const Innovation = ({ responseData }) => {
  const { innovations, setInnovations } = React.useContext(TextContext);
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [fontSize, setFontSize] = useState(24);
  const [color, setColor] = useState('black');
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
  }

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const metniGuncelle = (e) => {
    setInnovations(e.target.value);
  };

  const metniGuncelleHeader = (e) => {
    setMetinHeader(e.target.value);
  };

  const duzenlemeModunuToggle = () => {
    setDuzenlemeModu(!duzenlemeModu);
  };
  const handleDivClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const middleX =event.clientX;
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
    <div>
      <div className='divStyle'>
        <div className='titleStyle'>Yenilikler</div>
        {duzenlemeModu ? (
          <div className='container'><TextareaAutosize
            style={{ width: '150%',placeItems:"center",whiteSpace:"pre-wrap",marginTop:"0px",display:"flex", padding: "0px",fontWeight:"400", resize: "none",backgroundColor:"#F1F1F1", border: "0px", fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px`, textAlign: `${textAlign}` }}
            defaultValue={responseData.innovations}
            type="text" value={innovations} onChange={metniGuncelle} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle} autoFocus /></div>
        ) : (
          <div onClick={duzenlemeModunuToggle} >
            <p className='DataSecP' style={{ fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px`, textAlign: `${textAlign}` }} > {innovations == null ? responseData.innovations : innovations}</p>
          </div>
        )}

      </div>
      <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={fontSize} selectedFont={selectedFont} color={color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange}  />
    </div>
  );
}

export default Innovation;
