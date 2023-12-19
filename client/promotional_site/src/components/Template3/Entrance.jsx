
import React, { useState ,useContext} from 'react';
import Grid from "@mui/material/Grid";
import './style/template3.css'
import GlobalContext from '../../context/GlobalContext'
import EditableText from './EditableText';
import ChangeDesign from './ChangeDesign';
import ChangeImage from './ChangeImage'


const Template3Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [modalPositionImage, setModalPositionImage] = useState({ top: 0, left: 0 });
    const [fontSize, setFontSize] = useState(64);
    const [color, setColor] = useState('#1B1A1A');
    const [selectedFont, setSelectedFont] = useState('DM Sans');
    const [textAlign, setTextAlign] = useState("left");
    const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1619410283995-43d9134e7656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMERldmVsb3BtZW50fGVufDB8MHx8fDE3MDIzNjI3NzR8MA&ixlib=rb-4.0.3&q=80&w=1920")
    const [selectedImage1, setSelectedImage1] = useState("https://images.unsplash.com/photo-1619410283995-43d9134e7656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMERldmVsb3BtZW50fGVufDB8MHx8fDE3MDIzNjI3NzR8MA&ixlib=rb-4.0.3&q=80&w=1920")
    const [selectedImage2, setSelectedImage2] = useState("https://images.unsplash.com/photo-1619410283995-43d9134e7656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMERldmVsb3BtZW50fGVufDB8MHx8fDE3MDIzNjI3NzR8MA&ixlib=rb-4.0.3&q=80&w=1920")


    const [isImageUploaderOpen, setIsImageUploaderOpen] = useState(false);
    const [isImageUploaderOpen1, setIsImageUploaderOpen1] = useState(false);
    const [isImageUploaderOpen2, setIsImageUploaderOpen2] = useState(false);


    const handleImageClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        const middleX = event.clientX;
        const middleY = event.clientY;
        setModalPositionImage(calculateModalPosition(middleX,middleY))
        setIsImageUploaderOpen(true);
    };

    const handleImageClick1 = (event) => {
        const rect = event.target.getBoundingClientRect();
        const middleX = event.clientX;
        const middleY = event.clientY;
        setModalPositionImage(calculateModalPosition(middleX,middleY))
        setIsImageUploaderOpen1(true);
    };
    const handleImageClick2 = (event) => {
        const rect = event.target.getBoundingClientRect();
        const middleX = event.clientX;
        const middleY = event.clientY;
        setModalPositionImage(calculateModalPosition(middleX,middleY))
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

    const openModal = () => {
        setIsModalOpen(true);

    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFontSizeChange = (newFontSize) => {
        setFontSize(newFontSize);
    };


    const { response } = useContext(GlobalContext);

    const handleColorChange = (newColor) => {
        setColor(newColor);
    };

    const handleFontChange = (e) => {
        setSelectedFont(e.target.value);
    };
    const handleTextAlignChange = (e) => {
        setTextAlign(e);
    };

    const handleDivClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        const middleX = event.clientX ;
        const middleY = event.clientY ;

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
        <div className='part'>
            <Grid container >
                <Grid item xs={6}>
                    <div onDoubleClick={handleDivClick}>
                        <EditableText initialValue='Transforming Ideas Into Solutions' className='editHover entranceHead' backColor='white'  fontSize={fontSize} selectedFont={selectedFont} color={color} textAlign={textAlign}   />
                    </div>
                    <ChangeDesign open={isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={fontSize} selectedFont={selectedFont} color={color} textAlign={textAlign} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} />
                    <h3>
                        {/* We leverage advanced technologies to transform your ideas into functional and innovative software applications. */}
                        <EditableText initialValue={response && response.descriptionName ? response.descriptionName : ' We leverage advanced technologies to transform your ideas into functional and innovative software applications.'} className='editHover entranceDisc' backColor='white' />

                    </h3>
                    <div className='entranceButtons'>
                        <a href='#'>

                            <EditableText className='editHover button-63' initialValue='Get Started' backColor="white" />
                        </a>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <img
                            src={selectedImage}
                            className="editHover changeImage entranceImage"
                            alt="Image"
                            onClick={handleImageClick}
                        />
                        <ChangeImage isOpen={isImageUploaderOpen} onImageChange={handleImageChange} onClose={handleImageUploaderClose} modalPosition={modalPositionImage}/>
                        <img
                            src={selectedImage1}
                            className="editHover changeImage entranceImage2"
                            alt="Image"
                            onClick={handleImageClick1}  
                        />
                        <ChangeImage isOpen={isImageUploaderOpen1} onImageChange={handleImageChange1} onClose={handleImageUploaderClose} modalPosition={modalPositionImage}/>
                        <img
                            src={selectedImage2}
                            className="editHover changeImage entranceImage3"
                            alt="Image"
                            onClick={handleImageClick2}
                        />
                        <ChangeImage isOpen={isImageUploaderOpen2} onImageChange={handleImageChange2} onClose={handleImageUploaderClose} modalPosition={modalPositionImage}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Template3Navbar;
