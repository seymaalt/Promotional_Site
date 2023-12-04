import React, { useState } from "react";
import Box from '@mui/material/Box';
import ChangeText from '../Template1/ChangeText'
import Grid from '@mui/material/Grid';
import { TextareaAutosize } from "@mui/material";
import { Modal } from "@mui/base";

export default function CommentsPromotionalSite({ responseData }) {
    const [duzenlemeModu, setDuzenlemeModu] = useState(false);
    const [duzenlemeModuu, setDuzenlemeModuu] = useState(false);
    const [duzenlemeModuuu, setDuzenlemeModuuu] = useState(false);
    const [metin, setMetin] = useState()
    const [metinn, setMetinn] = useState()
    const [metinnn, setMetinnn] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [fontSize, setFontSize] = useState();
    const [color, setColor] = useState('#1B1A1A');
    const [selectedFont, setSelectedFont] = useState('DM Sans');
    const [textAlign, setTextAlign] = useState("left");


    const metniGuncelle = (e) => {
        setMetin(e.target.value)
    };
    const duzenlemeModunuToggle = () => {
        setDuzenlemeModu(!duzenlemeModu);
    };
    const handleTextAlignChange = (e) => {
        setTextAlign(e);
    };
    const metniGuncelle1 = (e) => {
        setMetinn(e.target.value)
    };
    const duzenlemeModunuToggle1 = () => {
        setDuzenlemeModuu(!duzenlemeModuu);
    };
    const metniGuncelle2 = (e) => {
        setMetinnn(e.target.value)
    };
    const duzenlemeModunuToggle2 = () => {
        setDuzenlemeModuuu(!duzenlemeModuuu);
    };
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
    return (
        <div className="ratingDiv">
            <h1>Deneyimleyenler</h1>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={{ xs: 4, md: 12 }}>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className="commentCard">
                            <div className="commentDiv">
                                <div className="nail">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" fill="none">
                                        <path d="M4.41771 12.4298C5.75875 11.5347 7.35449 11.1 8.96422 11.1912C10.5739 11.2825 12.1104 11.8947 13.3417 12.9355C14.573 13.9763 15.4325 15.3894 15.7905 16.9614C16.1485 18.5335 15.9855 20.1794 15.3262 21.6507C14.6669 23.1221 13.547 24.3391 12.1355 25.1183C10.724 25.8975 9.09734 26.1965 7.50098 25.9703C5.90462 25.7441 4.4251 25.0049 3.28562 23.8643C2.14613 22.7236 1.40847 21.2433 1.18391 19.6467C0.484626 16.3214 0.195404 12.3191 1.49906 8.68565C2.89769 4.79336 6.03243 1.5887 11.6733 0.0738938C12.1435 -0.0372831 12.6384 0.0390391 13.0533 0.286676C13.4681 0.534314 13.7702 0.933794 13.8954 1.4004C14.0207 1.86701 13.9592 2.36406 13.7242 2.78614C13.4891 3.20822 13.0989 3.52215 12.6363 3.66135C8.07309 4.8869 5.95151 7.28986 4.99653 9.94185C4.71354 10.7333 4.52374 11.5688 4.41772 12.4317" fill="black" />
                                    </svg>&ensp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" fill="none">
                                        <path d="M4.41771 12.4298C5.75875 11.5347 7.35449 11.1 8.96422 11.1912C10.5739 11.2825 12.1104 11.8947 13.3417 12.9355C14.573 13.9763 15.4325 15.3894 15.7905 16.9614C16.1485 18.5335 15.9855 20.1794 15.3262 21.6507C14.6669 23.1221 13.547 24.3391 12.1355 25.1183C10.724 25.8975 9.09734 26.1965 7.50098 25.9703C5.90462 25.7441 4.4251 25.0049 3.28562 23.8643C2.14613 22.7236 1.40847 21.2433 1.18391 19.6467C0.484626 16.3214 0.195404 12.3191 1.49906 8.68565C2.89769 4.79336 6.03243 1.5887 11.6733 0.0738938C12.1435 -0.0372831 12.6384 0.0390391 13.0533 0.286676C13.4681 0.534314 13.7702 0.933794 13.8954 1.4004C14.0207 1.86701 13.9592 2.36406 13.7242 2.78614C13.4891 3.20822 13.0989 3.52215 12.6363 3.66135C8.07309 4.8869 5.95151 7.28986 4.99653 9.94185C4.71354 10.7333 4.52374 11.5688 4.41772 12.4317" fill="black" />
                                    </svg>
                                </div>
                                <div className="comment">
                                    {duzenlemeModu ? (
                                        <TextareaAutosize
                                            style={{
                                                width: '100%', background: "#EBEBEB", padding: "40px", marginTop: "0px", maxHeight: "580px", justifyContent: "center", resize: "none", border: "0px", letterSpacing: "0em", fontSize: `${fontSize}px`, fontFamily: selectedFont, textAlign: `${textAlign}`, fontWeight: "400", color: `${color}`,
                                            }}
                                            multiline
                                            rows={15}
                                            defaultValue={responseData.comments[0]}
                                            type="text" value={metin} onChange={metniGuncelle} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle} autoFocus />
                                    ) : (
                                        <div onClick={duzenlemeModunuToggle} style={{ textAlign: `${textAlign}`, fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px` }}>
                                            {metin == null ? responseData.comments[0] : metin}
                                        </div>
                                    )}
                                </div>
                                <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={fontSize} selectedFont={selectedFont} color={color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <div className="commentCard">
                            <div className="commentDiv">
                                <div className="nail">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" fill="none">
                                        <path d="M4.41771 12.4298C5.75875 11.5347 7.35449 11.1 8.96422 11.1912C10.5739 11.2825 12.1104 11.8947 13.3417 12.9355C14.573 13.9763 15.4325 15.3894 15.7905 16.9614C16.1485 18.5335 15.9855 20.1794 15.3262 21.6507C14.6669 23.1221 13.547 24.3391 12.1355 25.1183C10.724 25.8975 9.09734 26.1965 7.50098 25.9703C5.90462 25.7441 4.4251 25.0049 3.28562 23.8643C2.14613 22.7236 1.40847 21.2433 1.18391 19.6467C0.484626 16.3214 0.195404 12.3191 1.49906 8.68565C2.89769 4.79336 6.03243 1.5887 11.6733 0.0738938C12.1435 -0.0372831 12.6384 0.0390391 13.0533 0.286676C13.4681 0.534314 13.7702 0.933794 13.8954 1.4004C14.0207 1.86701 13.9592 2.36406 13.7242 2.78614C13.4891 3.20822 13.0989 3.52215 12.6363 3.66135C8.07309 4.8869 5.95151 7.28986 4.99653 9.94185C4.71354 10.7333 4.52374 11.5688 4.41772 12.4317" fill="black" />
                                    </svg>&ensp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" fill="none">
                                        <path d="M4.41771 12.4298C5.75875 11.5347 7.35449 11.1 8.96422 11.1912C10.5739 11.2825 12.1104 11.8947 13.3417 12.9355C14.573 13.9763 15.4325 15.3894 15.7905 16.9614C16.1485 18.5335 15.9855 20.1794 15.3262 21.6507C14.6669 23.1221 13.547 24.3391 12.1355 25.1183C10.724 25.8975 9.09734 26.1965 7.50098 25.9703C5.90462 25.7441 4.4251 25.0049 3.28562 23.8643C2.14613 22.7236 1.40847 21.2433 1.18391 19.6467C0.484626 16.3214 0.195404 12.3191 1.49906 8.68565C2.89769 4.79336 6.03243 1.5887 11.6733 0.0738938C12.1435 -0.0372831 12.6384 0.0390391 13.0533 0.286676C13.4681 0.534314 13.7702 0.933794 13.8954 1.4004C14.0207 1.86701 13.9592 2.36406 13.7242 2.78614C13.4891 3.20822 13.0989 3.52215 12.6363 3.66135C8.07309 4.8869 5.95151 7.28986 4.99653 9.94185C4.71354 10.7333 4.52374 11.5688 4.41772 12.4317" fill="black" />
                                    </svg>
                                </div>
                                <div className="comment">
                                    {duzenlemeModuu ? (
                                        <TextareaAutosize
                                            style={{
                                                width: '100%', background: "#EBEBEB", padding: "40px", marginTop: "0px", maxHeight: "580px", justifyContent: "center", padding: "0px", resize: "none", border: "0px", letterSpacing: "0em", fontSize: `${fontSize}px`, fontFamily: selectedFont, textAlign: `${textAlign}`, fontWeight: "400", color: `${color}`,
                                            }}
                                            multiline
                                            rows={15}
                                            defaultValue={responseData.comments[1]}
                                            type="text" value={metinn} onChange={metniGuncelle1} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle1} autoFocus />
                                    ) : (
                                        <div onClick={duzenlemeModunuToggle1} style={{ textAlign: `${textAlign}`, fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px` }} >
                                            {metinn == null ? responseData.comments[1] : metinn}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <div className="commentCard">
                            <div className="commentDiv">
                                <div className="nail">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" fill="none">
                                        <path d="M4.41771 12.4298C5.75875 11.5347 7.35449 11.1 8.96422 11.1912C10.5739 11.2825 12.1104 11.8947 13.3417 12.9355C14.573 13.9763 15.4325 15.3894 15.7905 16.9614C16.1485 18.5335 15.9855 20.1794 15.3262 21.6507C14.6669 23.1221 13.547 24.3391 12.1355 25.1183C10.724 25.8975 9.09734 26.1965 7.50098 25.9703C5.90462 25.7441 4.4251 25.0049 3.28562 23.8643C2.14613 22.7236 1.40847 21.2433 1.18391 19.6467C0.484626 16.3214 0.195404 12.3191 1.49906 8.68565C2.89769 4.79336 6.03243 1.5887 11.6733 0.0738938C12.1435 -0.0372831 12.6384 0.0390391 13.0533 0.286676C13.4681 0.534314 13.7702 0.933794 13.8954 1.4004C14.0207 1.86701 13.9592 2.36406 13.7242 2.78614C13.4891 3.20822 13.0989 3.52215 12.6363 3.66135C8.07309 4.8869 5.95151 7.28986 4.99653 9.94185C4.71354 10.7333 4.52374 11.5688 4.41772 12.4317" fill="black" />
                                    </svg>&ensp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" fill="none">
                                        <path d="M4.41771 12.4298C5.75875 11.5347 7.35449 11.1 8.96422 11.1912C10.5739 11.2825 12.1104 11.8947 13.3417 12.9355C14.573 13.9763 15.4325 15.3894 15.7905 16.9614C16.1485 18.5335 15.9855 20.1794 15.3262 21.6507C14.6669 23.1221 13.547 24.3391 12.1355 25.1183C10.724 25.8975 9.09734 26.1965 7.50098 25.9703C5.90462 25.7441 4.4251 25.0049 3.28562 23.8643C2.14613 22.7236 1.40847 21.2433 1.18391 19.6467C0.484626 16.3214 0.195404 12.3191 1.49906 8.68565C2.89769 4.79336 6.03243 1.5887 11.6733 0.0738938C12.1435 -0.0372831 12.6384 0.0390391 13.0533 0.286676C13.4681 0.534314 13.7702 0.933794 13.8954 1.4004C14.0207 1.86701 13.9592 2.36406 13.7242 2.78614C13.4891 3.20822 13.0989 3.52215 12.6363 3.66135C8.07309 4.8869 5.95151 7.28986 4.99653 9.94185C4.71354 10.7333 4.52374 11.5688 4.41772 12.4317" fill="black" />
                                    </svg>
                                </div>
                                <div className="comment">
                                    {duzenlemeModuuu ? (
                                        <TextareaAutosize
                                            style={{
                                                width: '100%', background: "#EBEBEB", padding: "40px", marginTop: "0px", maxHeight: "580px", justifyContent: "center", padding: "0px", resize: "none", border: "0px", letterSpacing: "0em", fontSize: `${fontSize}px`, fontFamily: selectedFont, textAlign: `${textAlign}`, fontWeight: "400", color: `${color}`,
                                            }}
                                            multiline
                                            rows={15}
                                            defaultValue={responseData.comments[2]}
                                            type="text" value={metinnn} onChange={metniGuncelle2} onDoubleClick={handleDivClick} onBlur={duzenlemeModunuToggle2} autoFocus />
                                    ) : (
                                        <div onClick={duzenlemeModunuToggle2} style={{ textAlign: `${textAlign}`, fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px` }} >
                                            {metinnn == null ? responseData.comments[2] : metinnn}
                                        </div>
                                    )}
                                </div>
                                <ChangeText open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={fontSize} selectedFont={selectedFont} color={color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
}