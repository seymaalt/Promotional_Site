import React, { useState } from 'react';
import TextContext from '../../context/TextContext';
import ChangeText from '../Template1/ChangeText'
import { TextareaAutosize } from '@mui/material';
import { Modal } from '@mui/base';

const DataSecurity = ({ responseData }) => {
  const { dataSecurity, setDataSecurity } = React.useContext(TextContext);
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [fontSize, setFontSize] = useState(30);
  const [color, setColor] = useState('black');
  const [selectedFont, setSelectedFont] = useState('Roboto, sans-serif');
  const [textAlign, setTextAlign] = useState("center");


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

  const metniGuncelle = (e) => {
    setDataSecurity(e.target.value);
  };

  const metniGuncelleHeader = (e) => {
    setMetinHeader(e.target.value);
  };

  const duzenlemeModunuToggle = () => {
    setDuzenlemeModu(!duzenlemeModu);
  };

  const handleDivClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const middleX = event.clientX;
    const middleY = event.clientY;



    setIsModalOpen(true);
    setModalPosition(calculateModalPosition(middleX, middleY));
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
    <div className='divStyle'>
      <div className='titleStyle'>Veri Güvenliği</div>
      {duzenlemeModu ? (
        <div className='container'><TextareaAutosize
          style={{width: '100%',placeItems:"center",margin:"0px",display:"flex", padding: "0px",lineHeight:"31px",fontWeight:"400", resize: "none",backgroundColor:"#F1F1F1", border: "0px", fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px`, textAlign:`${textAlign}` }}
          multiline
          rows={15}
          defaultValue={responseData.dataSecurity}
          type="text" value={dataSecurity} onChange={metniGuncelle} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle} autoFocus /></div>
      ) : (
        <div onClick={duzenlemeModunuToggle} >
          <div className='DataSecP' style={{ fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px`, textAlign:`${textAlign}` }} > {dataSecurity == null ? responseData.dataSecurity : dataSecurity}</div>
        </div>
      )}
      <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={fontSize} selectedFont={selectedFont} color={color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
    </div>
  );
}

export default DataSecurity;
