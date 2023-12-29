import React, { useContext, useEffect, useState } from 'react';
import TextContext from '../../context/TextContext';
import ChangeText from '../Template1/ChangeText'
import { TextareaAutosize } from '@mui/material';
import { Modal } from '@mui/base';
import './style/template2.css'
import Template2Context from '../../context/Template2Context';



const DataSecurity = ({ responseData }) => {
  const { dataSecurity, setDataSecurity } = React.useContext(TextContext);
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const { template2Response, setTemplate2Response } = useContext(Template2Context);


  const [designDataSecurity,setDesignDataSecurity] = useState({
    fontSize: 25,
    color:"black",
    font :"Roboto, sans-serif",
    textAlign:"center",
  })

  const openModal = () => {
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTextAlignChange = (e) => {
    setDesignDataSecurity(prevdesign => {
      const updated = { ...prevdesign, textAlign: e };
      return updated;
    });
  }

  const handleFontSizeChange = (newFontSize) => {
    setDesignDataSecurity(prevdesign => {
      const updated = { ...prevdesign, fontSize: newFontSize };
      return updated;
    });
  };

  const handleColorChange = (newColor) => {
    setDesignDataSecurity(prevdesign => {
      const updated = { ...prevdesign, color: newColor };
      return updated;
    });
  };

  const handleFontChange = (e) => {
    setDesignDataSecurity(prevdesign => {
      const updated = { ...prevdesign, font: e.target.value };
      return updated;
    });
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
  useEffect(() => {
    setTemplate2Response({ ...template2Response, dataSecurity:(dataSecurity == null ? responseData.dataSecurity : dataSecurity),designDataSecurity:designDataSecurity});
    console.log(template2Response)
  }, [, , , dataSecurity,designDataSecurity])

  return (
    <div className='divStyle'>
      <div className='titleStyle'>Veri Güvenliği</div>
      {duzenlemeModu ? (
        <div className='container'><TextareaAutosize
          style={{ width: '100%', placeItems: "center", margin: "0px", display: "flex", padding: "0px", lineHeight: "31px", fontWeight: "400", resize: "none", backgroundColor: "#F1F1F1", border: "0px", fontFamily: designDataSecurity.font, color: `${designDataSecurity.color}`, fontSize: `${designDataSecurity.fontSize}px`, textAlign: `${designDataSecurity.textAlign}` }}
          multiline
          rows={15}
          defaultValue={responseData.dataSecurity}
          type="text" value={dataSecurity} onChange={metniGuncelle} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle} autoFocus /></div>
      ) : (
        <div onClick={duzenlemeModunuToggle} >
          <div className='DataSecP' style={{ fontFamily: designDataSecurity.font, color: `${designDataSecurity.color}`, fontSize: `${designDataSecurity.fontSize}px`, textAlign: `${designDataSecurity.textAlign}` }} > {dataSecurity == null ? responseData.dataSecurity : dataSecurity}</div>
        </div>
      )}
      <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={designDataSecurity.fontSize} selectedFont={designDataSecurity.font} color={designDataSecurity.color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
    </div>
  );
}

export default DataSecurity;
