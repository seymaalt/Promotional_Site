import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import CircleIcon from '@mui/icons-material/Circle';
import EditableText from './EditableText';
import ChangeImage from './ChangeImage'
import ChangeDesign from './ChangeDesign';


const Services = () => {
    const [modalPositionImage, setModalPositionImage] = useState({ top: 0, left: 0 });
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxNnx8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfDB8fHwxNzAyMzYyNzc0fDA&ixlib=rb-4.0.3&q=80&w=1920")
    const [selectedImage1, setSelectedImage1] = useState('https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxN3x8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfDB8fHwxNzAyMzYyNzc0fDA&ixlib=rb-4.0.3&q=80&w=1920')

    const [selectedImage2, setSelectedImage2] = useState('https://images.unsplash.com/photo-1580894908361-967195033215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxOHx8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfDB8fHwxNzAyMzYyNzc0fDA&ixlib=rb-4.0.3&q=80&w=1920')

    const [isImageUploaderOpen, setIsImageUploaderOpen] = useState(false);
    const [isImageUploaderOpen1, setIsImageUploaderOpen1] = useState(false);
    const [isImageUploaderOpen2, setIsImageUploaderOpen2] = useState(false);

    const [designServiceHeader, setDesignServiceHeader] = useState({
        isModalOpen: false,
        fontSize: 64,
        color: 'black',
        font: "Phantomsans, sans-serif",
        textAlign: "left",
    })
    const [designServiceDisc, setDesignServiceDisc] = useState({
        isModalOpen: false,
        fontSize: 18.4,
        color: '#6b7280',
        font: "Phantomsans, sans-serif",
        textAlign: "left",
    })
    const [designServiceBoxHeader, setDesignServiceBoxHeader] = useState({
        isModalOpen: false,
        fontSize: 23.2,
        color: 'black',
        font: "Phantomsans, sans-serif",
        textAlign: "left",
    })
    const [designServiceBoxDisc, setDesignServiceBoxDisc] = useState({
        isModalOpen: false,
        fontSize: 18.4,
        color: 'black',
        font: "Phantomsans, sans-serif",
        textAlign: "left",
    })
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

    const handleImageClick = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        setModalPositionImage(calculateModalPosition(x, y))
        setIsImageUploaderOpen(true);
    };
    const handleImageClick1 = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        setModalPositionImage(calculateModalPosition(x, y))
        setIsImageUploaderOpen1(true);
    };
    const handleImageClick2 = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        setModalPositionImage(calculateModalPosition(x, y))
        setIsImageUploaderOpen2(true);
    };

    const closeModal = () => {
        setDesignServiceHeader(prevdesignNav => {
            const updatedNav = { ...prevdesignNav, isModalOpen: false };
            return updatedNav;
        });
        setDesignServiceDisc(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: false };
            return updatedNav;
        });
        setDesignServiceBoxHeader(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: false };
            return updatedNav;
        });
        setDesignServiceBoxDisc(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: false };
            return updatedNav;
        });
    };

    const handleFontSizeServiceHeaderChange = (newFontSize) => {
        setDesignServiceHeader(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };
    const handleColorServiceHeaderChange = (newColor) => {
        setDesignServiceHeader(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleFontServiceHeaderChange = (e) => {
        setDesignServiceHeader(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, font: e };
            return updatedCompanyName;
        });
    };
    const handleTextAlignServiceHeaderChange = (e) => {
        setDesignServiceHeader(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, textAlign: e };
            return updatedCompanyName;
        });
    };
    const handleFontSizeServiceDiscChange = (newFontSize) => {
        setDesignServiceDisc(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };
    const handleColorServiceDiscChange = (newColor) => {
        setDesignServiceDisc(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleFontServiceDiscChange = (e) => {
        setDesignServiceDisc(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, font: e };
            return updatedCompanyName;
        });
    };
    const handleTextAlignServiceDiscChange = (e) => {
        setDesignServiceDisc(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, textAlign: e };
            return updatedCompanyName;
        });
    };

    const handleFontSizeServiceBoxHeaderChange = (newFontSize) => {
        setDesignServiceBoxHeader(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };
    const handleColorServiceBoxHeaderChange = (newColor) => {
        setDesignServiceBoxHeader(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleFontServiceBoxHeaderChange = (e) => {
        setDesignServiceBoxHeader(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, font: e };
            return updatedCompanyName;
        });
    };
    const handleTextAlignServiceBoxHeaderChange = (e) => {
        setDesignServiceBoxHeader(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, textAlign: e };
            return updatedCompanyName;
        });
    };

    const handleFontSizeServiceBoxDiscChange = (newFontSize) => {
        setDesignServiceBoxDisc(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };
    const handleColorServiceBoxDiscChange = (newColor) => {
        setDesignServiceBoxDisc(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleFontServiceBoxDiscChange = (e) => {
        setDesignServiceBoxDisc(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, font: e };
            return updatedCompanyName;
        });
    };
    const handleTextAlignServiceBoxDiscChange = (e) => {
        setDesignServiceBoxDisc(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, textAlign: e };
            return updatedCompanyName;
        });
    };
    const handleDivClickServiceHeader = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignServiceHeader(prevdesignHead => {
            const updatedNav = { ...prevdesignHead, isModalOpen: true };
            return updatedNav;
        });
    };
    const handleDivClickServiceDisc = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignServiceDisc(prevdesignHead => {
            const updatedNav = { ...prevdesignHead, isModalOpen: true };
            return updatedNav;
        });
    };
    const handleDivClickServiceBoxHeader = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignServiceBoxHeader(prevdesignHead => {
            const updatedNav = { ...prevdesignHead, isModalOpen: true };
            return updatedNav;
        });
    };
    const handleDivClickServiceBoxDisc = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignServiceBoxDisc(prevdesignHead => {
            const updatedNav = { ...prevdesignHead, isModalOpen: true };
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
    const [serviceHeaderText, setServiceHeaderText] = useState('A Glance at Our Services')
    const [serviceDiscText, setServiceDiscText] = useState('We offer a broad spectrum of custom software development services ranging from enterprise software solutions to mobile applications, with a proven track record for success.')
    const [serviceBoxHeaderText1, setServiceBoxHeaderText1] = useState('Custom Software Solutions')
    const [serviceBoxHeaderText2, setServiceBoxHeaderText2] = useState('Mobile Application Development')
    const [serviceBoxHeaderText3, setServiceBoxHeaderText3] = useState('Enterprise Software Solutions')
    const [serviceBoxDiscText1, setServiceBoxDiscText1] = useState('Tailored to your specific needs.')
    const [serviceBoxDiscText2, setServiceBoxDiscText2] = useState('Reach your customers on the go.')
    const [serviceBoxDiscText3, setServiceBoxDiscText3] = useState('Streamline your business operations.')
    const handleServiceBoxHeaderTextChange1 = (e) => {
        setServiceBoxHeaderText1(e);
    };
    const handleServiceBoxHeaderTextChange2 = (e) => {
        setServiceBoxHeaderText2(e);
    };
    const handleServiceBoxHeaderTextChange3 = (e) => {
        setServiceBoxHeaderText3(e);
    };
    const handleServiceBoxDiscTextChange1 = (e) => {
        setServiceBoxDiscText1(e);
    };
    const handleServiceBoxDiscTextChange2 = (e) => {
        setServiceBoxDiscText2(e);
    };    
    const handleServiceBoxDiscTextChange3 = (e) => {
        setServiceBoxDiscText3(e);
    };
    const handleServiceHeaderTextChange = (e) => {
        setServiceHeaderText(e);
    };
    const handleServiceDiscTextChange = (e) => {
        setServiceDiscText(e);
    };

    return (
        <div className='part3'>
            <Grid container spacing={2}>
                <Grid item xs={6} onDoubleClick={handleDivClickServiceHeader}>
                    <EditableText initialValue={serviceHeaderText} handleDefaultTextChange={handleServiceHeaderTextChange} className='editHover servicesHeader' backColor='white' fontSize={designServiceHeader.fontSize} selectedFont={designServiceHeader.font} color={designServiceHeader.color} textAlign={designServiceHeader.textAlign} />
                </Grid>
                <ChangeDesign open={designServiceHeader.isModalOpen} onClose={closeModal} handleFontChange={handleFontServiceHeaderChange} handleFontSizeChange={handleFontSizeServiceHeaderChange} handleColorChange={handleColorServiceHeaderChange} fontSize={designServiceHeader.fontSize} selectedFont={designServiceHeader.font} color={designServiceHeader.color} textAlign={designServiceHeader.textAlign} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignServiceHeaderChange} />
                <Grid item xs={6} onDoubleClick={handleDivClickServiceDisc} >
                    <EditableText initialValue={serviceDiscText}  handleDefaultTextChange={handleServiceDiscTextChange} className='editHover servicesDisc' backColor='white' fontSize={designServiceDisc.fontSize} selectedFont={designServiceDisc.font} color={designServiceDisc.color} textAlign={designServiceDisc.textAlign} />
                </Grid>
                <ChangeDesign open={designServiceDisc.isModalOpen} onClose={closeModal} handleFontChange={handleFontServiceDiscChange} handleFontSizeChange={handleFontSizeServiceDiscChange} handleColorChange={handleColorServiceDiscChange} fontSize={designServiceDisc.fontSize} selectedFont={designServiceDisc.font} color={designServiceDisc.color} textAlign={designServiceDisc.textAlign} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignServiceDiscChange} />
                <Grid item md={4} xs={10} >
                    <Grid
                        className='servicesBox'
                        container
                        direction="column"
                        alignItems="center"
                    >
                        <img src={selectedImage}
                            className='editHover servicesImage'
                            onClick={handleImageClick}
                        ></img>
                        <ChangeImage isOpen={isImageUploaderOpen} onImageChange={handleImageChange} onClose={handleImageUploaderClose} modalPosition={modalPositionImage} />

                        <div onDoubleClick={handleDivClickServiceBoxHeader}><EditableText initialValue={serviceBoxHeaderText1} handleDefaultTextChange={handleServiceBoxHeaderTextChange1} className='editHover servicesBoxHeader' backColor='#E5E7EB' fontSize={designServiceBoxHeader.fontSize} selectedFont={designServiceBoxHeader.font} color={designServiceBoxHeader.color} textAlign={designServiceBoxHeader.textAlign} /></div>

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={8} onDoubleClick={handleDivClickServiceBoxDisc}>
                                <EditableText initialValue={serviceBoxDiscText1}  handleDefaultTextChange={handleServiceBoxDiscTextChange1} className='editHover servicesBoxDisc' backColor='#E5E7EB' fontSize={designServiceBoxDisc.fontSize} selectedFont={designServiceBoxDisc.font} color={designServiceBoxDisc.color} textAlign={designServiceBoxDisc.textAlign} />

                            </Grid>
                            <Grid item xs={4}>
                                <CircleIcon id='servicesWhiteCircle'></CircleIcon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} xs={10} >
                    <Grid
                        className='servicesBox'
                        container
                        direction="column"
                        alignItems="center"
                    >
                        <img className='editHover servicesImage' src={selectedImage1} onClick={handleImageClick1}></img>
                        <ChangeImage isOpen={isImageUploaderOpen1} onImageChange={handleImageChange1} onClose={handleImageUploaderClose} modalPosition={modalPositionImage} />

                        <div onDoubleClick={handleDivClickServiceBoxHeader}><EditableText initialValue={serviceBoxHeaderText2} handleDefaultTextChange={handleServiceBoxHeaderTextChange2} className='editHover servicesBoxHeader' backColor='#E5E7EB' fontSize={designServiceBoxHeader.fontSize} selectedFont={designServiceBoxHeader.font} color={designServiceBoxHeader.color} textAlign={designServiceBoxHeader.textAlign}  /></div>

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={8} onDoubleClick={handleDivClickServiceBoxDisc}>
                                <EditableText initialValue={serviceBoxDiscText2} handleDefaultTextChange={handleServiceBoxDiscTextChange2} className='editHover servicesBoxDisc' backColor='#E5E7EB' fontSize={designServiceBoxDisc.fontSize} selectedFont={designServiceBoxDisc.font} color={designServiceBoxDisc.color} textAlign={designServiceBoxDisc.textAlign} />

                            </Grid>
                            <Grid item xs={4}>
                                <CircleIcon id='servicesWhiteCircle'></CircleIcon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} xs={10} >
                    <Grid
                        className='servicesBox'
                        container
                        direction="column"
                        alignItems="center"
                    >
                        <img className='editHover servicesImage' src={selectedImage2} onClick={handleImageClick2}></img>
                        <ChangeImage isOpen={isImageUploaderOpen2} onImageChange={handleImageChange2} onClose={handleImageUploaderClose} modalPosition={modalPositionImage} />

                        <div onDoubleClick={handleDivClickServiceBoxHeader}><EditableText initialValue={serviceBoxHeaderText3} handleDefaultTextChange={handleServiceBoxHeaderTextChange3} className='editHover servicesBoxHeader' backColor='#E5E7EB' fontSize={designServiceBoxHeader.fontSize} selectedFont={designServiceBoxHeader.font} color={designServiceBoxHeader.color} textAlign={designServiceBoxHeader.textAlign}  /></div>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={8} onDoubleClick={handleDivClickServiceBoxDisc}>
                                <EditableText initialValue={serviceBoxDiscText3} handleDefaultTextChange={handleServiceBoxDiscTextChange3} className='editHover servicesBoxDisc' backColor='#E5E7EB' fontSize={designServiceBoxDisc.fontSize} selectedFont={designServiceBoxDisc.font} color={designServiceBoxDisc.color} textAlign={designServiceBoxDisc.textAlign} />
                            </Grid>
                            <Grid item xs={4}>
                                <CircleIcon id='servicesWhiteCircle'></CircleIcon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <ChangeDesign open={designServiceBoxHeader.isModalOpen} onClose={closeModal} handleFontChange={handleFontServiceBoxHeaderChange} handleFontSizeChange={handleFontSizeServiceBoxHeaderChange} handleColorChange={handleColorServiceBoxHeaderChange} fontSize={designServiceBoxHeader.fontSize} selectedFont={designServiceBoxHeader.font} color={designServiceBoxHeader.color} textAlign={designServiceBoxHeader.textAlign} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignServiceBoxHeaderChange} />

                <ChangeDesign open={designServiceBoxDisc.isModalOpen} onClose={closeModal} handleFontChange={handleFontServiceBoxDiscChange} handleFontSizeChange={handleFontSizeServiceBoxDiscChange} handleColorChange={handleColorServiceBoxDiscChange} fontSize={designServiceBoxDisc.fontSize} selectedFont={designServiceBoxDisc.font} color={designServiceBoxDisc.color} textAlign={designServiceBoxDisc.textAlign} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignServiceBoxDiscChange} />
            </Grid>
        </div>
    );
};

export default Services;