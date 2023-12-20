import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import CircleIcon from '@mui/icons-material/Circle';
import EditableText from './EditableText';
import ChangeImage from './ChangeImage'


const Services = () => {
    const [modalPositionImage, setModalPositionImage] = useState({ top: 0, left: 0 });

    const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxNnx8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfDB8fHwxNzAyMzYyNzc0fDA&ixlib=rb-4.0.3&q=80&w=1920")
    const [selectedImage1, setSelectedImage1] = useState('https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxN3x8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfDB8fHwxNzAyMzYyNzc0fDA&ixlib=rb-4.0.3&q=80&w=1920')

    const [selectedImage2, setSelectedImage2] = useState('https://images.unsplash.com/photo-1580894908361-967195033215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxOHx8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfDB8fHwxNzAyMzYyNzc0fDA&ixlib=rb-4.0.3&q=80&w=1920')

    const [isImageUploaderOpen, setIsImageUploaderOpen] = useState(false);
    const [isImageUploaderOpen1, setIsImageUploaderOpen1] = useState(false);
    const [isImageUploaderOpen2, setIsImageUploaderOpen2] = useState(false);

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
        setModalPositionImage(calculateModalPosition(x,y))
        setIsImageUploaderOpen(true);
    };
    const handleImageClick1 = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        setModalPositionImage(calculateModalPosition(x,y))
        setIsImageUploaderOpen1(true);
    };    
    const handleImageClick2 = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        setModalPositionImage(calculateModalPosition(x,y))
        setIsImageUploaderOpen2(true);
    };

    const calculateModalPosition = (x,y) => {

        const modalWidth = 300;
        const modalHeight = 300;
        x = (x + modalWidth) <= window.innerWidth ? x : window.innerWidth - modalWidth;
        y = (y + modalHeight) <= window.innerHeight ? y : window.innerHeight - modalHeight;

        return { top: y, left: x };
    };

    return (
        <div className='part3'>
            <Grid container spacing={2}>
                <Grid item xs={6} >
                    <EditableText initialValue='A Glance at Our Services' className='editHover servicesHeader' backColor='white' />
                </Grid>
                <Grid item xs={6} >
                    <EditableText initialValue='We offer a broad spectrum of custom software development services ranging from enterprise software solutions to mobile applications, with a proven track record for success.' className='editHover servicesDisc' backColor='white' />

                </Grid>
                <Grid item xs={4} >
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

                        <EditableText initialValue='Custom Software Solutions' className='editHover servicesBoxHeader' backColor='#E5E7EB' />

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={8}>

                                <EditableText initialValue='Tailored to your specific needs.' className='editHover servicesBoxDisc' backColor='#E5E7EB' />

                            </Grid>
                            <Grid item xs={4}>
                                <CircleIcon sx={{ padding: '2rem', float: 'right', fontSize: '4rem', color: 'white' }}></CircleIcon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} >
                    <Grid
                        className='servicesBox'
                        container
                        direction="column"
                        alignItems="center"
                    >
                        <img className='editHover servicesImage' src={selectedImage1} onClick={handleImageClick1}></img>
                        <ChangeImage isOpen={isImageUploaderOpen1} onImageChange={handleImageChange1} onClose={handleImageUploaderClose} modalPosition={modalPositionImage} />
                        <EditableText initialValue='Mobile Application Development' className='editHover servicesBoxHeader' backColor='#E5E7EB' />

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={8}>
                                <EditableText initialValue='Reach your customers on the go.' className='editHover servicesBoxDisc' backColor='#E5E7EB' />

                            </Grid>
                            <Grid item xs={4}>
                                <CircleIcon sx={{ padding: '2rem', float: 'right', fontSize: '4rem', color: 'white' }}></CircleIcon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} >
                    <Grid
                        className='servicesBox'
                        container
                        direction="column"
                        alignItems="center"
                    >
                        <img className='editHover servicesImage' src={selectedImage2} onClick={handleImageClick2}></img>
                        <ChangeImage isOpen={isImageUploaderOpen2} onImageChange={handleImageChange2} onClose={handleImageUploaderClose} modalPosition={modalPositionImage} />

                        <EditableText initialValue='Enterprise Software Solutions' className='editHover servicesBoxHeader' backColor='#E5E7EB' />
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={8}>
                                <EditableText initialValue='Streamline your business operations.' className='editHover servicesBoxDisc' backColor='#E5E7EB' />
                            </Grid>
                            <Grid item xs={4}>
                                <CircleIcon sx={{ padding: '2rem', float: 'right', fontSize: '4rem', color: 'white' }}></CircleIcon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Services;