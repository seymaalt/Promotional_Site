import * as React from 'react';
import { useState, useEffect, useContext } from 'react'
import { Modal, Button, TextareaAutosize } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import '../../styles/global.css'
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/motion';
import TextContext from '../../context/TextContext';
import Template1Context from '../../context/Template1Context';
import ChangeText from './ChangeText'

const InnovationIcon = () => {
  return (
    <div className='dataInvIconDiv'>
      <img
        src="https://i.ibb.co/ggtZGLV/Pngtree-artificial-intelligence-robot-innovation-technology-6447009.png"
        alt="Innovations Icon"
        className='dataInvIcon'
      />
    </div>
  );
};

export default function InnovationsPromotionalSite({ responseData, changedData, colorData }) {
  const { innovations, setInnovations } = useContext(TextContext);
  const { template1Response, setTemplate1Response } = useContext(Template1Context);
  const { contextInnovations, setContextInnovations } = useContext(Template1Context);

  const [metin, setMetin] = useState(responseData.innovations);
  const [metinHeader, setMetinHeader] = useState("INNOVATIONS");
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const [designInnovations, setDesignInnovations] = useState({
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
    setDesignInnovations(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, fontSize: newFontSize };
      return updatedNav;
    });
  };

  const handleColorChange = (newColor) => {
    setDesignInnovations(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, color: newColor };
      return updatedNav;
    });
  };

  const handleTextAlignChange = (e) => {
    setDesignInnovations(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, textAlign: e };
      return updatedNav;
    });
  }

  const handleFontChange = (e) => {
    setDesignInnovations(prevdesignNav => {
      const updatedNav = { ...prevdesignNav, font: e.target.value };
      return updatedNav;
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
  const duzenlemeModunuToggle1 = () => {
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
    setContextInnovations({ innovations: (changedData == null ? responseData.innovations : changedData), designInnovations: designInnovations })
  }, [innovations, designInnovations])

  return (
    <div>
      <motion.nav variants={slideIn('left', 'spring', 0.8, 1.2)}
        initial="hidden"
        whileInView="show">
        <Grid container>
          <Grid xs={12} md={8} spacing={2}>
            {/* <div>
              {duzenlemeModu ? (
                <div className='container'><TextareaAutosize
                  style={{ width: '100%', padding: "0px", resize: "none", border: "0px", fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px`, textAlign: "center" }}
                  multiline
                  rows={15}
                  defaultValue={metinHeader}
                  type="text" value={metinHeader} onChange={metniGuncelleHeader} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle1} autoFocus /></div>
              ) : (
                <div onClick={duzenlemeModunuToggle1}> */}
            <div className='innovationsHeader' style={{ color: colorData }}>{metinHeader}</div>
            {/* </div>
              )}
            </div> */}
            {duzenlemeModu ? (
              <div className='container'><TextareaAutosize
                style={{ width: '100%', padding: "0px", resize: "none", border: "0px", fontFamily: designInnovations.font, color: `${designInnovations.color}`, fontSize: `${designInnovations.fontSize}px`, textAlign: `${designInnovations.textAlign}` }}
                multiline
                rows={15}
                defaultValue={responseData.innovations}
                type="text" value={innovations} onChange={metniGuncelle} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle} autoFocus /></div>
            ) : (
              <div onClick={duzenlemeModunuToggle}>
                <div className='container' style={{ textAlign: `${designInnovations.textAlign}`, fontFamily: designInnovations.font, color: `${designInnovations.color}`, fontSize: `${designInnovations.fontSize}px` }} >{changedData == null ? responseData.innovations : changedData}</div>
              </div>
            )}
          </Grid>
          <Grid xs={12} md={4}>
            <div>
              <div><InnovationIcon></InnovationIcon></div>
            </div>
          </Grid>
        </Grid>
        <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={designInnovations.fontSize} selectedFont={designInnovations.font} color={designInnovations.color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
      </motion.nav>
    </div>
  )
};