import React, { useState, useContext, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import CircleIcon from '@mui/icons-material/Circle';
import PublishContext from '../../context/PublishContext';



const Services = () => {
    const { response } = useContext(PublishContext)

    return (
        <div className='part3'>
            <Grid container spacing={2}>
                <Grid item xs={6} >
                    <div className=' servicesHeader' backColor='white' fontSize={response.designServiceHeader.fontSize} selectedFont={response.designServiceHeader.font} color={response.designServiceHeader.color} textAlign={response.designServiceHeader.textAlign} >{response.serviceHeaderText}</div>
                </Grid>
                <Grid item xs={6} >
                    <div className=' servicesDisc' backColor='white' fontSize={response.designServiceDisc.fontSize} selectedFont={response.designServiceDisc.font} color={response.designServiceDisc.color} textAlign={response.designServiceDisc.textAlign} >{response.serviceDiscText}</div>
                </Grid>
                <Grid item md={4} xs={10} >
                    <Grid
                        className='servicesBox'
                        container
                        direction="column"
                        alignItems="center"
                    >
                        <img src={response.serviceBoxImages.selectedImage}
                            className=' servicesImage'
                        ></img>

                        <div ><div className=' servicesBoxHeader' backColor='#E5E7EB' fontSize={response.designServiceBoxHeader.fontSize} selectedFont={response.designServiceBoxHeader.font} color={response.designServiceBoxHeader.color} textAlign={response.designServiceBoxHeader.textAlign} >{response.serviceBoxHeader.serviceBoxHeaderText1}</div></div>

                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={8} >
                            <div className=' servicesBoxDisc' backColor='#E5E7EB' fontSize={response.designServiceDisc.fontSize} selectedFont={response.designServiceDisc.font} color={response.designServiceDisc.color} textAlign={response.designServiceDisc.textAlign} >{response.serviceBoxDisc.serviceBoxDiscText1} </div>

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
                    <img className=' servicesImage' src={response.serviceBoxImages.selectedImage1}></img>


                    <div ><div className='editHover servicesBoxHeader' backColor='#E5E7EB' fontSize={response.designServiceBoxHeader.fontSize} selectedFont={response.designServiceBoxHeader.font} color={response.designServiceBoxHeader.color} textAlign={response.designServiceBoxHeader.textAlign} >{response.serviceBoxDisc.serviceBoxHeaderText2} </div></div>

                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={8} >
                            <div className=' servicesBoxDisc' backColor='#E5E7EB' fontSize={response.designServiceDisc.fontSize} selectedFont={response.designServiceDisc.font} color={response.designServiceDisc.color} textAlign={response.designServiceDisc.textAlign} >{response.serviceBoxDisc.serviceBoxDiscText2} </div>
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
                    <img className=' servicesImage' src={response.serviceBoxImages.selectedImage2}></img>

                    <div ><div className=' servicesBoxHeader' backColor='#E5E7EB' fontSize={response.designServiceBoxHeader.fontSize} selectedFont={response.designServiceBoxHeader.font} color={response.designServiceBoxHeader.color} textAlign={response.designServiceBoxHeader.textAlign} >{response.serviceBoxHeader.serviceBoxHeaderText3}</div></div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={8} >
                            <div className=' servicesBoxDisc' backColor='#E5E7EB' fontSize={response.designServiceDisc.fontSize} selectedFont={response.designServiceDisc.font} color={response.designServiceDisc.color} textAlign={response.designServiceDisc.textAlign} >{response.serviceBoxDisc.serviceBoxDiscText3}</div>
                        </Grid>
                        <Grid item xs={4}>
                            <CircleIcon id='servicesWhiteCircle'></CircleIcon>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
        </div >
    );
};

export default Services;