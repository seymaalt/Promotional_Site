import * as React from 'react';
import { useState, useEffect, useContext } from 'react'
import { Modal, Button, TextareaAutosize } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/motion';
import TextContext from '../../context/TextContext';
import Template1Context from '../../context/Template1Context';
import ChangeText from './ChangeText'
import './style/template1.css'

const LockIconExample = () => {
  return (
    <div className='dataInvIconDiv'>
      <img
        src="https://i.ibb.co/qyr4Ts8/Pngtree-cartoon-hand-drawn-network-information-5049321.png"
        alt="Sample GIF"
        className='dataInvIcon'
      />
    </div>
  );
};

export default function DataSecurityPromotionalSite({ responseData, changedData, colorData }) {
  const { dataSecurity, setDataSecurity } = useContext(TextContext);
  const { template1Response, setTemplate1Response } = useContext(Template1Context);
  const { contextDataSecurity, setContextDataSecurity } = useContext(Template1Context);

  const [metin, setMetin] = useState(responseData.dataSecurity);
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const [designDataSecurity, setDesignDataSecurity] = useState({
    fontSize: "2rem",
    color: 'black',
    font: "Roboto, sans-serif",
    textAlign: 'center',
  })


  const openModal = () => {
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFontSizeChange = (newFontSize) => {
    setDesignDataSecurity(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, fontSize: newFontSize };
      return updatedNav;
    });
  };

  const handleTextAlignChange = (e) => {
    setDesignDataSecurity(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, textAlign: e };
      return updatedNav;
    });
  }

  const handleColorChange = (newColor) => {
    setDesignDataSecurity(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, color: newColor };
      return updatedNav;
    });
  };

  const handleFontChange = (e) => {
    setDesignDataSecurity(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, font: e.target.value };
      return updatedNav;
    });
  };

  const metniGuncelle = (e) => {
    setDataSecurity(e.target.value);
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
    const modalHeight = 300;

    x = (x + modalWidth) <= window.innerWidth ? x : window.innerWidth - modalWidth;
    y = (y + modalHeight) <= window.innerHeight ? y : window.innerHeight - modalHeight;

    return { top: y, left: x };
  };

  useEffect(() => {
    setContextDataSecurity({dataSecurity:(changedData == null ? responseData.dataSecurity : changedData), designDataSecurity:designDataSecurity})
  }, [dataSecurity,designDataSecurity])

  return (
    <div>
      <motion.nav variants={slideIn('left', 'spring', 0.8, 1.2)}
        initial="hidden"
        whileInView="show">
        <Grid container  >
          <Grid xs={12} md={4}>
            <div><LockIconExample></LockIconExample></div>
          </Grid>
          <Grid xs={12} md={8}>
            <div className="innovationsHeader" id="dataSecurity" style={{ color: colorData }}>Data Security</div>

            {duzenlemeModu ? (
              <div className='container'><TextareaAutosize
                style={{ width: '100%', padding: "0px", resize: "none", border: "0px", textAlign: `${designDataSecurity.textAlign}`, fontFamily: designDataSecurity.font, color: `${designDataSecurity.color}`, fontSize: `${designDataSecurity.fontSize}px` }}
                multiline
                rows={15}
                defaultValue={responseData.dataSecurity}
                type="text" value={dataSecurity} onChange={metniGuncelle} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle} autoFocus /></div>
            ) : (
              <div onClick={duzenlemeModunuToggle} >
                <div className='container' style={{ textAlign: `${designDataSecurity.textAlign}`, fontFamily: designDataSecurity.font, color: `${designDataSecurity.color}`, fontSize: `${designDataSecurity.fontSize}px` }}>{changedData == null ? responseData.dataSecurity : changedData}</div>
              </div>
            )}
          </Grid>
        </Grid>
        <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={designDataSecurity.fontSize} selectedFont={designDataSecurity.font} color={designDataSecurity.color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
      </motion.nav>
    </div>

  )
}