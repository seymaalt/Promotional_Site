import React, { useState, useContext, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import './style/template3.css'
import GlobalContext from '../../context/GlobalContext'
import Template3Context from '../../context/Template3Context';
import EditableText from './EditableText';
import ChangeDesign from './ChangeDesign';
import ChangeImage from './ChangeImage'


const Template3Navbar = () => {
    const { response } = useContext(GlobalContext);
    const { template3Response, setTemplate3Response } = useContext(Template3Context);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [modalPositionImage, setModalPositionImage] = useState({ top: 0, left: 0 });
    const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1619410283995-43d9134e7656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMERldmVsb3BtZW50fGVufDB8MHx8fDE3MDIzNjI3NzR8MA&ixlib=rb-4.0.3&q=80&w=1920")
    const [selectedImage1, setSelectedImage1] = useState("https://images.unsplash.com/photo-1619410283995-43d9134e7656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMERldmVsb3BtZW50fGVufDB8MHx8fDE3MDIzNjI3NzR8MA&ixlib=rb-4.0.3&q=80&w=1920")
    const [selectedImage2, setSelectedImage2] = useState("https://images.unsplash.com/photo-1619410283995-43d9134e7656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMERldmVsb3BtZW50fGVufDB8MHx8fDE3MDIzNjI3NzR8MA&ixlib=rb-4.0.3&q=80&w=1920")

    const [designHead, setDesignHead] = useState({
        isModalOpen: false,
        fontSize: 64,
        color: '#1B1A1A',
        font: "DM Sans",
        textAlign: "left",
    })
    const [designEntranceDisc, setDesignEntranceDisc] = useState({
        isModalOpen: false,
        fontSize: 21.2,
        color: '#7a7a7a',
        font: "DM Sans",
        textAlign: "left",
    })
    const [designEntranceButton, setDesignEntranceButton] = useState({
        isModalOpen: false,
        fontSize: 20,
        color: '#FFFFFF',
        font: "Phantomsans, sans-serif",
        textAlign: "center",
    })
    const [isImageUploaderOpen, setIsImageUploaderOpen] = useState(false);
    const [isImageUploaderOpen1, setIsImageUploaderOpen1] = useState(false);
    const [isImageUploaderOpen2, setIsImageUploaderOpen2] = useState(false);

    const [enteranceHeadText, setEnteranceHeadText] = useState('Transforming Ideas Into Solutions')
    const [enteranceDiscText, setEnteranceDiscText] = useState(response && response.descriptionName ? response.descriptionName : ' We leverage advanced technologies to transform your ideas into functional and innovative software applications.')
    const [enteranceButtonText, setEntereanceButtonText] = useState('Get Started')

    const handleEnteranceHeadTextChange = (e) => {
        setEnteranceHeadText(e);
    };
    const handleEnteranceDiscTextChange = (e) => {
        setEnteranceDiscText(e);
    };
    const handleEnteranceButtonTextChange = (e) => {
        setEntereanceButtonText(e);
    };

    const handleImageClick = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;
        setModalPositionImage(calculateModalPosition(middleX, middleY))
        setIsImageUploaderOpen(true);
    };

    const handleImageClick1 = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;
        setModalPositionImage(calculateModalPosition(middleX, middleY))
        setIsImageUploaderOpen1(true);
    };
    const handleImageClick2 = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;
        setModalPositionImage(calculateModalPosition(middleX, middleY))
        setIsImageUploaderOpen2(true);
    };
    const handleImageChange = (newImage) => {
        setSelectedImage(newImage);
        setIsImageUploaderOpen(false);
    };
    const handleImageChange1 = (newImage) => {
        setSelectedImage1(newImage);
        setIsImageUploaderOpen1(false);
    };
    const handleImageChange2 = (newImage) => {
        setSelectedImage2(newImage);
        setIsImageUploaderOpen2(false);
    };

    const handleImageUploaderClose = () => {
        setIsImageUploaderOpen(false);
        setIsImageUploaderOpen1(false);
        setIsImageUploaderOpen2(false);

    };
    const closeModal = () => {
        setDesignHead(prevdesignNav => {
            const updatedNav = { ...prevdesignNav, isModalOpen: false };
            return updatedNav;
        });
        setDesignEntranceDisc(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: false };
            return updatedNav;
        });
        setDesignEntranceButton(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: false };
            return updatedNav;
        });
    };

    const handleFontSizeChange = (newFontSize) => {
        setDesignHead(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };
    const handleColorChange = (newColor) => {
        setDesignHead(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleFontChange = (e) => {
        setDesignHead(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, font: e };
            return updatedCompanyName;
        });
    };
    const handleTextAlignChange = (e) => {
        setDesignHead(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, textAlign: e };
            return updatedCompanyName;
        });
    };

    const handleFontSizeDiscChange = (newFontSize) => {
        setDesignEntranceDisc(prevdesign => {
            const updatedCompanyName = { ...prevdesign, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };
    const handleColorDiscChange = (newColor) => {
        setDesignEntranceDisc(prevdesign => {
            const updatedCompanyName = { ...prevdesign, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleFontDiscChange = (e) => {
        setDesignEntranceDisc(prevdesign => {
            const updatedCompanyName = { ...prevdesign, font: e };
            return updatedCompanyName;
        });
    };
    const handleTextAlignDiscChange = (e) => {
        setDesignEntranceDisc(prevdesign => {
            const updatedCompanyName = { ...prevdesign, textAlign: e };
            return updatedCompanyName;
        });
    };

    const handleFontSizeButtonChange = (newFontSize) => {
        setDesignEntranceButton(prevdesign => {
            const updatedCompanyName = { ...prevdesign, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };
    const handleColorButtonChange = (newColor) => {
        setDesignEntranceButton(prevdesign => {
            const updatedCompanyName = { ...prevdesign, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleFontButtonChange = (e) => {
        setDesignEntranceButton(prevdesign => {
            const updatedCompanyName = { ...prevdesign, font: e };
            return updatedCompanyName;
        });
    };
    const handleTextAlignButtonChange = (e) => {
        setDesignEntranceButton(prevdesign => {
            const updatedCompanyName = { ...prevdesign, textAlign: e };
            return updatedCompanyName;
        });
    };

    const handleDivClick = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignHead(prevdesignHead => {
            const updatedNav = { ...prevdesignHead, isModalOpen: true };
            return updatedNav;
        });
    };

    const handleDivClickDisc = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignEntranceDisc(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: true };
            return updatedNav;
        });
    };
    const handleDivClickButton = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignEntranceButton(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: true };
            return updatedNav;
        });
    };
    const calculateModalPosition = (x, y) => {
        const modalWidth = 300;
        const modalHeight = 300;
        x = (x + modalWidth) <= window.innerWidth ? x : window.innerWidth - modalWidth;
        y = (y + modalHeight) <= window.innerHeight ? y : window.innerHeight - modalHeight;

        return { top: y, left: x };
    };

    useEffect(() => {
        setTemplate3Response({
            ...template3Response, enteranceHeadText: enteranceHeadText, enteranceDiscText: enteranceDiscText,
            enteranceButtonText: enteranceButtonText, designHead: designHead, designEntranceDisc: designEntranceDisc,
            designEntranceButton: designEntranceButton, selectedImage: selectedImage, selectedImage1: selectedImage1,
            selectedImage2: selectedImage2
        });
        console.log(template3Response)
    }, [enteranceHeadText, enteranceButtonText, enteranceDiscText, designEntranceButton, designEntranceDisc, designHead, selectedImage, selectedImage1, selectedImage2])

    return (
        <div className='part3'>
            <Grid container >
                <Grid item md={6} xs={12}>
                    <div onDoubleClick={handleDivClick}>
                        <EditableText initialValue={enteranceHeadText} handleDefaultTextChange={handleEnteranceHeadTextChange} className='editHover entranceHead' backColor='white' fontSize={designHead.fontSize} selectedFont={designHead.font} color={designHead.color} textAlign={designHead.textAlign} />
                    </div>
                    <ChangeDesign open={designHead.isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={designHead.fontSize} selectedFont={designHead.font} color={designHead.color} textAlign={designHead.textAlign} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
                    <h3 onDoubleClick={handleDivClickDisc}>
                        <EditableText initialValue={enteranceDiscText} handleDefaultTextChange={handleEnteranceDiscTextChange} className='editHover entranceDisc' backColor='white' fontSize={designEntranceDisc.fontSize} selectedFont={designEntranceDisc.font} color={designEntranceDisc.color} textAlign={designEntranceDisc.textAlign} />
                    </h3>
                    <ChangeDesign open={designEntranceDisc.isModalOpen} onClose={closeModal} handleFontChange={handleFontDiscChange} handleFontSizeChange={handleFontSizeDiscChange} handleColorChange={handleColorDiscChange} fontSize={designEntranceDisc.fontSize} selectedFont={designEntranceDisc.font} color={designEntranceDisc.color} textAlign={designEntranceDisc.textAlign} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignDiscChange} />
                    <div className='entranceButtons'>
                        <a href='#' onDoubleClick={handleDivClickButton}>
                            <EditableText className='editHover button-63' initialValue={enteranceButtonText} handleDefaultTextChange={handleEnteranceButtonTextChange} backColor="white" fontSize={designEntranceButton.fontSize} selectedFont={designEntranceButton.font} color={designEntranceButton.color} textAlign={designEntranceButton.textAlign} />
                        </a>
                        <ChangeDesign open={designEntranceButton.isModalOpen} onClose={closeModal} handleFontChange={handleFontButtonChange} handleFontSizeChange={handleFontSizeButtonChange} handleColorChange={handleColorButtonChange} fontSize={designEntranceButton.fontSize} selectedFont={designEntranceButton.font} color={designEntranceButton.color} textAlign={designEntranceButton.textAlign} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignButtonChange} />
                        <div className='entranceButtons'></div>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div>
                        <img
                            src={selectedImage}
                            className="editHover changeImage entranceImage"
                            alt="Image"
                            onClick={handleImageClick}
                        />
                        <ChangeImage isOpen={isImageUploaderOpen} onImageChange={handleImageChange} onClose={handleImageUploaderClose} modalPosition={modalPositionImage} />
                        <img
                            src={selectedImage1}
                            className="editHover changeImage entranceImage2"
                            alt="Image"
                            onClick={handleImageClick1}
                        />
                        <ChangeImage isOpen={isImageUploaderOpen1} onImageChange={handleImageChange1} onClose={handleImageUploaderClose} modalPosition={modalPositionImage} />
                        <img
                            src={selectedImage2}
                            className="editHover changeImage entranceImage3"
                            alt="Image"
                            onClick={handleImageClick2}
                        />
                        <ChangeImage isOpen={isImageUploaderOpen2} onImageChange={handleImageChange2} onClose={handleImageUploaderClose} modalPosition={modalPositionImage} />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Template3Navbar;
