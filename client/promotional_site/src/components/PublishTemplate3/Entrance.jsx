import React, { useState, useContext, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import PublishContext from '../../context/PublishContext';


const Template3Navbar = () => {
    const { response } = useContext(PublishContext);

    return (
        <div className='part3'>
            <Grid container >
                <Grid item md={6} xs={12}>
                    <div >
                        <div className=' entranceHead' backColor='white' fontSize={response.designHead.fontSize} selectedFont={response.designHead.font} color={response.designHead.color} textAlign={response.designHead.textAlign} >{response.enteranceHeadText}</div>
                    </div>
                    <h3 >
                        <div className=' entranceDisc' backColor='white' fontSize={response.designEntranceDisc.fontSize} selectedFont={response.designEntranceDisc.font} color={response.designEntranceDisc.color} textAlign={response.designEntranceDisc.textAlign} >{response.enteranceDiscText}</div>
                    </h3>
                    <div className='entranceButtons'>
                        <a href='#'>
                            <div className=' button-63' backColor="white" fontSize={response.designEntranceButton.fontSize} selectedFont={response.designEntranceButton.font} color={response.designEntranceButton.color} textAlign={response.designEntranceButton.textAlign} >{response.enteranceButtonText}</div>
                        </a>
                        <div className='entranceButtons'></div>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div>
                        <img
                            src={response.images.selectedImage}
                            className=" changeImage entranceImage"
                            alt="Image"
                        />

                        <img
                            src={response.images.selectedImage1}
                            className="editHover changeImage entranceImage2"
                            alt="Image"
                        />

                        <img
                            src={response.images.selectedImage2}
                            className="editHover changeImage entranceImage3"
                            alt="Image"
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Template3Navbar;
