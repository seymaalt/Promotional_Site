import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import './style/template3.css'
import { TextareaAutosize } from '@mui/material';
import EditableText from './EditableText';
import ChangeDesign from './ChangeDesign';


const Template3Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });


    const [fontSize, setFontSize] = useState(34,4);
    const [color, setColor] = useState('(225, 73%, 43%)');
    const [selectedFont, setSelectedFont] = useState('DM Sans');
    const [textAlign, setTextAlign] = useState("left");

    const [isModalOpenNav1, setIsModalOpenNav1] = useState(false);
    const [fontSizeNav1, setFontSizeNav1] = useState(20);
    const [colorNav1, setColorNav1] = useState('#7a7a7a');
    const [selectedFontNav1, setSelectedFontNav1] = useState('');
    const [textAlignNav1, setTextAlignNav1] = useState("left");

    const [fontSizeNav2, setFontSizeNav2] = useState(20);
    const [colorNav2, setColorNav2] = useState('#7a7a7a');
    const [selectedFontNav2, setSelectedFontNav2] = useState('DM Sans');
    const [textAlignNav2, setTextAlignNav2] = useState("left");

    const [fontSizeNav3, setFontSizeNav3] = useState(20);
    const [colorNav3, setColorNav3] = useState('#7a7a7a');
    const [selectedFontNav3, setSelectedFontNav3] = useState('DM Sans');
    const [textAlignNav3, setTextAlignNav3] = useState("left");

    const [fontSizeButton, setFontSizeButton] = useState(20);
    const [colorButton, setColorButton] = useState('#FFFFFF');
    const [selectedFontButton, setSelectedFontButton] = useState('DM Sans');
    const [textAlignButton, setTextAlignButton] = useState("left");

    const openModal = () => {
        setIsModalOpen(true);

    };
    const closeModal = () => {
        setIsModalOpen(false);
        setIsModalOpenNav1(false);
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
    const handleTextAlignChange = (e) => {
        setTextAlign(e);
    };

    const handleFontSizeNav1Change = (newFontSize) => {
        setFontSizeNav1(newFontSize);
    };

    const handleColorNav1Change = (newColor) => {
        setColorNav1(newColor);
    };

    const handleFontNav1Change = (e) => {
        setSelectedFontNav1(e.target.value);
    };
    const handleTextAlignNav1Change = (e) => {
        setTextAlignNav1(e);
    };

    const handleDivClick = (event) => {
        const rect = event.target.getBoundingClientRect();

        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setIsModalOpen(true);
    };
    const handleDivClickNav1 = (event) => {
        const rect = event.target.getBoundingClientRect();

        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setIsModalOpenNav1(true);
    };
    const calculateModalPosition = (x, y) => {
        const modalWidth = 300;
        const modalHeight = 300;
        x = (x + modalWidth) <= window.innerWidth ? x : window.innerWidth - modalWidth;
        y = (y + modalHeight) <= window.innerHeight ? y : window.innerHeight - modalHeight;

        return { top: y, left: x };

    };

    return (
        <div className='navbar'>
            <Grid container >
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Grid container >
                        <Grid item xs={3} className='companyName' id={1} onDoubleClick={handleDivClick}>
                            <EditableText className='companyName' initialValue='Company Name' backColor="#FAF8F4" fontSize={fontSize} selectedFont={selectedFont} color={color} textAlign={textAlign} />
                            <ChangeDesign open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={fontSize} selectedFont={selectedFont} color={color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
                        </Grid>
                        <Grid item xs={6} className='navigation'>

                            <a href='#' onDoubleClick={handleDivClickNav1} ><EditableText className='navigationButton' initialValue='Services' backColor="#FAF8F4" fontSize={fontSizeNav1} selectedFont={selectedFontNav1} color={colorNav1} textAlign={textAlignNav1} /></a>
                            <ChangeDesign open={isModalOpenNav1} onClose={closeModal} handleFontChange={handleFontNav1Change} handleFontSizeChange={handleFontSizeNav1Change} handleColorChange={handleColorNav1Change} fontSize={fontSizeNav1} selectedFont={selectedFontNav1} color={colorNav1} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignNav1Change} />

                            <a href='#' ><EditableText className='navigationButton' initialValue='Section 2' backColor="#FAF8F4" /></a>

                            <a href='#'><EditableText className='navigationButton' initialValue='Contact' backColor='#FAF8F4' /></a>

                        </Grid>
                        <Grid item xs={3} className='contact'>
                            <a href='#'>
                                <EditableText className='button-63' initialValue='Get Started' backColor="#FAF8F4" />
                                {/* Get Started */}
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    );
}

export default Template3Navbar;
