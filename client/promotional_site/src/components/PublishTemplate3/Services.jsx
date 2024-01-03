import React, { useState, useContext, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import CircleIcon from '@mui/icons-material/Circle';
import Template3Context from '../../context/Template3Context';



const Services = () => {
    const { template3Response, setTemplate3Response } = useContext(Template3Context);

    const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxNnx8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfDB8fHwxNzAyMzYyNzc0fDA&ixlib=rb-4.0.3&q=80&w=1920")
    const [selectedImage1, setSelectedImage1] = useState('https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxN3x8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfDB8fHwxNzAyMzYyNzc0fDA&ixlib=rb-4.0.3&q=80&w=1920')

    const [selectedImage2, setSelectedImage2] = useState('https://images.unsplash.com/photo-1580894908361-967195033215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxOHx8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfDB8fHwxNzAyMzYyNzc0fDA&ixlib=rb-4.0.3&q=80&w=1920')


  
    const [serviceHeaderText, setServiceHeaderText] = useState('A Glance at Our Services')
    const [serviceDiscText, setServiceDiscText] = useState('We offer a broad spectrum of custom software development services ranging from enterprise software solutions to mobile applications, with a proven track record for success.')
    const [serviceBoxHeaderText1, setServiceBoxHeaderText1] = useState('Custom Software Solutions')
    const [serviceBoxHeaderText2, setServiceBoxHeaderText2] = useState('Mobile Application Development')
    const [serviceBoxHeaderText3, setServiceBoxHeaderText3] = useState('Enterprise Software Solutions')
    const [serviceBoxDiscText1, setServiceBoxDiscText1] = useState('Tailored to your specific needs.')
    const [serviceBoxDiscText2, setServiceBoxDiscText2] = useState('Reach your customers on the go.')
    const [serviceBoxDiscText3, setServiceBoxDiscText3] = useState('Streamline your business operations.')


    return (
        <div className='part3'>
            <Grid container spacing={2}>
                <Grid item xs={6} >
                    <div initialValue={serviceHeaderText} className='editHover servicesHeader' backColor='white' fontSize={designServiceHeader.fontSize} selectedFont={designServiceHeader.font} color={designServiceHeader.color} textAlign={designServiceHeader.textAlign} />
                </Grid>
                <Grid item xs={6} >
                    <div initialValue={serviceDiscText} className='editHover servicesDisc' backColor='white' fontSize={designServiceDisc.fontSize} selectedFont={designServiceDisc.font} color={designServiceDisc.color} textAlign={designServiceDisc.textAlign} />
                </Grid>
                <Grid item md={4} xs={10} >
                    <Grid
                        className='servicesBox'
                        container
                        direction="column"
                        alignItems="center"
                    >
                        <img src={selectedImage}
                            className='editHover servicesImage'
                        ></img>

                        <div ><div initialValue={serviceBoxHeaderText1}className='editHover servicesBoxHeader' backColor='#E5E7EB' fontSize={designServiceBoxHeader.fontSize} selectedFont={designServiceBoxHeader.font} color={designServiceBoxHeader.color} textAlign={designServiceBoxHeader.textAlign} /></div>

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={8} >
                                <div initialValue={serviceBoxDiscText1} className='editHover servicesBoxDisc' backColor='#E5E7EB' fontSize={designServiceBoxDisc.fontSize} selectedFont={designServiceBoxDisc.font} color={designServiceBoxDisc.color} textAlign={designServiceBoxDisc.textAlign} />

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
                        <img className='editHover servicesImage' src={selectedImage1}></img>
                      

                        <div ><div initialValue={serviceBoxHeaderText2} className='editHover servicesBoxHeader' backColor='#E5E7EB' fontSize={designServiceBoxHeader.fontSize} selectedFont={designServiceBoxHeader.font} color={designServiceBoxHeader.color} textAlign={designServiceBoxHeader.textAlign} /></div>

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={8} >
                                <div initialValue={serviceBoxDiscText2} className='editHover servicesBoxDisc' backColor='#E5E7EB' fontSize={designServiceBoxDisc.fontSize} selectedFont={designServiceBoxDisc.font} color={designServiceBoxDisc.color} textAlign={designServiceBoxDisc.textAlign} />

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
                        <img className='editHover servicesImage' src={selectedImage2}></img>

                        <div ><div initialValue={serviceBoxHeaderText3} className='editHover servicesBoxHeader' backColor='#E5E7EB' fontSize={designServiceBoxHeader.fontSize} selectedFont={designServiceBoxHeader.font} color={designServiceBoxHeader.color} textAlign={designServiceBoxHeader.textAlign} /></div>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={8} >
                                <div initialValue={serviceBoxDiscText3} className='editHover servicesBoxDisc' backColor='#E5E7EB' fontSize={designServiceBoxDisc.fontSize} selectedFont={designServiceBoxDisc.font} color={designServiceBoxDisc.color} textAlign={designServiceBoxDisc.textAlign} />
                            </Grid>
                            <Grid item xs={4}>
                                <CircleIcon id='servicesWhiteCircle'></CircleIcon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Services;