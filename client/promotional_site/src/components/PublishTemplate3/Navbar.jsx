import React, { useState, useContext, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import PublishContext from '../../context/PublishContext';


const Template3Navbar = () => {
    const { response } = useContext(PublishContext);

    return (
        <div className='temp3Navbar'>
            <Grid container >
                <Grid item md={2} xs={0}></Grid>
                <Grid item md={8} xs={12}>
                    <Grid container >
                        <Grid item md={3} xs={6} className='companyName' id={1}>
                            <div className=' companyName' backColor="#FAF8F4" fontSize={response.designCompanyNameText.fontSize} selectedFont={response.designCompanyNameText.font} color={response.designCompanyNameText.color} textAlign={response.designCompanyNameText.textAlign} >{response.companyNameText}</div>

                        </Grid>
                        <Grid item md={6} xs={0} className='navigation'>

                            <a href='#' ><div className=' navigationButton' backColor="#FAF8F4" fontSize={response.designNavigationText.fontSize} selectedFont={response.designNavigationText.font} color={response.designNavigationText.color} textAlign={response.designNavigationText.textAlign} >{response.navigationText.navigationText1}</div>
                            </a>
                            <a href='#' ><div className=' navigationButton' backColor="#FAF8F4" fontSize={response.designNavigationText.fontSize} selectedFont={response.designNavigationText.font} color={response.designNavigationText.color} textAlign={response.designNavigationText.textAlign} >{response.navigationText.navigationText2}</div></a>

                            <a href='#'><div className=' navigationButton' backColor='#FAF8F4' fontSize={response.designNavigationText.fontSize} selectedFont={response.designNavigationText.font} color={response.designNavigationText.color} textAlign={response.designNavigationText.textAlign} >{response.navigationText.navigationText3}</div></a>

                        </Grid>
                        <Grid item md={3} xs={6} className='contact'>
                            <a href='#' >
                                <div className=' button-63' backColor="#FAF8F4" fontSize={response.designNavButton.fontSize} selectedFont={response.designNavButton.font} color={response.designNavButton.color} textAlign={response.designNavButton.textAlign} >{response.buttonText}</div>
                            </a>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={2} xs={0}></Grid>
            </Grid>
        </div>
    );
}

export default Template3Navbar;
