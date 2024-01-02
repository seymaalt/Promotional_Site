import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { Modal, Button, TextareaAutosize } from '@mui/material';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../../utils/motion';
import Grid from "@mui/material/Grid";
import TextContext from '../../context/TextContext';
import Template1Context from '../../context/Template1Context';
import GlobalContext from '../../context/GlobalContext';
import ChangeText from './ChangeText'


export default function DiscriptionPromotionalSite({ responseData, changedData, colorData }) {

  const { discription, setDiscription } = useContext(TextContext);
  const { color1 } = useContext(GlobalContext);
  const { template1Response, setTemplate1Response } = useContext(Template1Context);
  const { color, setColor } = useContext(Template1Context);
  const { contextDescription, setContextDescription } = useContext(Template1Context);
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const [designDiscription, setDesignDiscription] = useState({
    fontSize: "1.4rem",
    color: 'white',
    font: "Roboto, sans-serif",
    textAlign: 'center',
    backgroundColor: (colorData == null ? 'black' : colorData),
  })

  const openModal = () => {
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFontSizeChange = (newFontSize) => {
    setDesignDiscription(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, fontSize: newFontSize };
      return updatedNav;
    });
  };

  const handleTextAlignChange = (e) => {
    setDesignDiscription(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, textAlign: e };
      return updatedNav;
    });
  };

  const handleColorChange = (newColor) => {
    setDesignDiscription(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, color: newColor };
      return updatedNav;
    });
  };

  const handleFontChange = (e) => {
    setDesignDiscription(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, font: e.target.value };
      return updatedNav;
    });
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

  useEffect(() => {
    setColor({ backgroundColor: color1 })
    setContextDescription({ discription: (changedData == null ? responseData.description : changedData), designDiscription: designDiscription })

  }, [discription, designDiscription])

  useEffect(() => {
    console.log(contextDescription)
    console.log(color)
  })

  return (
    <motion.nav variants={navVariants}
      initial="hidden"
      whileInView="show">
      <div className='container'>
        {duzenlemeModu ? (
          <TextareaAutosize
            style={{ width: '100%', justifyContent: "center", padding: "0px", resize: "none", border: "0px", fontSize: `${designDiscription.fontSize}px`, fontFamily: designDiscription.font, textAlign: `${designDiscription.textAlign}`, fontWeight: "75px", color: `${designDiscription.color}`, background: (colorData == null ? 'black' : colorData) }}
            id="header"
            name="header"
            multiline
            rows={15}
            defaultValue={responseData.description}
            type="text" value={discription} onChange={metniGuncelle} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle} autoFocus />
        ) : (
          <div onClick={duzenlemeModunuToggle}>
            <Grid container style={{ justifyContent: "center", color: `${designDiscription.color}`, fontSize: `${designDiscription.fontSize}px`, font: `${designDiscription.font}` }}>
              <div className='discription' style={{ textAlign: `${designDiscription.textAlign}`, color: `${designDiscription.color}`, fontSize: `${designDiscription.fontSize}px`, fontFamily: designDiscription.font }}>{changedData == null ? responseData.description : changedData}</div>
            </Grid>
          </div>
        )}
      </div>
      <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={designDiscription.fontSize} selectedFont={designDiscription.font} color={designDiscription.color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
    </motion.nav>
  )
}
