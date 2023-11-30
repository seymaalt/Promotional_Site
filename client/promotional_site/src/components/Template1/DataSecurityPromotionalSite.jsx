import * as React from 'react';
import { useState, useEffect } from 'react'
import { Modal, Button, TextareaAutosize } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/motion';

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

  const [metin, setMetin] = useState(responseData.dataSecurity);
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [fontSize, setFontSize] = useState(30);
  const [color, setColor] = useState('black');
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
    setMetin(e.target.value);
    responseData.dataSecurity = metin;
  };

  const duzenlemeModunuToggle = () => {
    setDuzenlemeModu(!duzenlemeModu);
  };

  const handleDivClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const middleX = rect.left + rect.width / 2;
    const middleY = rect.top + rect.height / 20;

    // Modal'ı açarken modalın yerini belirleme fonksiyonunu çağır
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
                style={{ width: '100%', padding: "0px", resize: "none", border: "0px",  textAlign: "center",fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px` }}
                multiline
                rows={15}
                defaultValue={metin}
                type="text" value={metin} onChange={metniGuncelle} onDoubleClick={handleDivClick}  onBlur={duzenlemeModunuToggle} autoFocus /></div>
            ) : (
              <div onClick={duzenlemeModunuToggle} >
                <div className='container'  style={{fontFamily: selectedFont , color: `${color}`, fontSize: `${fontSize}px`}}>{changedData == null ? responseData.dataSecurity : changedData}</div>
              </div>
            )}
          </Grid>
        </Grid>


        <Modal open={isModalOpen} onClose={closeModal} BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0)' } }} >
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
                    borderRadius: '5px', // Köşeleri yuvarlak yapmak için
                    border: '1px solid #ccc', // Kenarlık rengi
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
                    borderRadius: '5px', // Köşeleri yuvarlak yapmak için
                    border: '1px solid #ccc', // Kenarlık rengi
                  }} onChange={handleFontChange}>
                  <option value="'Roboto, sans-serif'">Roboto</option>
                  <option value="Dosis, sans-serif">Dosis</option>
                  <option value="Nova Square, sans-serif">Nova Square</option>
                  {/* İhtiyacınıza göre fontları ekleyebilirsiniz */}
                </select>
              </label>
            </div>
          </div>
        </Modal>

      </motion.nav>
    </div>

  )
}