import React, { useState, useEffect, useContext } from 'react';
import ChangeText from '../Template1/ChangeText'
import TextContext from '../../context/TextContext';
import { TextareaAutosize } from '@mui/material';
import { Modal } from '@mui/base';
import './style/template2.css'
import Template2Context from '../../context/Template2Context';


const Innovation = ({ responseData }) => {
  const { innovations, setInnovations } = React.useContext(TextContext);
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const { setTemp2Innovations2 } = useContext(Template2Context);

  const [designInnovation, setDesignInnovation] = useState({
    fontSize: 25,
    color: "black",
    font: "Roboto, sans-serif",
    textAlign: "center",
  })

  const openModal = () => {
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFontSizeChange = (newFontSize) => {
    setDesignInnovation(prevdesign => {
      const updated = { ...prevdesign, fontSize: newFontSize };
      return updated;
    });
  };

  const handleTextAlignChange = (e) => {
    setDesignInnovation(prevdesign => {
      const updated = { ...prevdesign, textAlign: e };
      return updated;
    });
  }

  const handleColorChange = (newColor) => {
    setDesignInnovation(prevdesign => {
      const updated = { ...prevdesign, color: newColor };
      return updated;
    });
  };

  const handleFontChange = (e) => {
    setDesignInnovation(prevdesign => {
      const updated = { ...prevdesign, font: e.target.value };
      return updated;
    });
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
    setTemp2Innovations2({ innovations: (innovations == null ? responseData.innovations : innovations), designInnovation: designInnovation, });
  }, [innovations, designInnovation])

  return (
    <div>
      <div className='divStyle'>
        <div className='titleStyle'>Yenilikler</div>
        {duzenlemeModu ? (
          <div className='container'>
            <TextareaAutosize
              style={{ width: '150%', placeItems: "center", whiteSpace: "pre-wrap", display: "flex", fontWeight: "400", resize: "none", backgroundColor: "#F1F1F1", border: "0px", fontFamily: designInnovation.font, color: `${designInnovation.color}`, fontSize: `${designInnovation.fontSize}px`, textAlign: `${designInnovation.textAlign}` }}
              defaultValue={responseData.innovations}
              type="text" value={innovations} onChange={metniGuncelle} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle} autoFocus />
          </div>
        ) : (
          <div onClick={duzenlemeModunuToggle} >
            <p className='DataSecP' style={{ fontFamily: designInnovation.font, color: `${designInnovation.color}`, fontSize: `${designInnovation.fontSize}px`, textAlign: `${designInnovation.textAlign}` }} > {innovations == null ? responseData.innovations : innovations}</p>
          </div>
        )}

      </div>
      <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={designInnovation.fontSize} selectedFont={designInnovation.font} color={designInnovation.color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
    </div>
  );
}

export default Innovation;
