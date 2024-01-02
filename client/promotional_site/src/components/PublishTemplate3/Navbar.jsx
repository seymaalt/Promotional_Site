import React, { useState, useContext, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import './style/template3.css'
import GlobalContext from '../../context/GlobalContext';
import Template3Context from '../../context/Template3Context';


const Template3Navbar = () => {
    const { response } = useContext(GlobalContext);
    const { template3Response, setTemplate3Response } = useContext(Template3Context);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    
    const [companyNameText, setCompanyNameText] = useState(response && response.businessName ? response.businessName : 'COMPANY NAME')
    const [navigationText1, setNavigationText1] = useState('Services')
    const [navigationText2, setNavigationText2] = useState('Section 2')
    const [navigationText3, setNavigationText3] = useState('Contact')
    const [buttonText, setButtonText] = useState('Get Started')


    return (
        <div className='temp3Navbar'>
            <Grid container >
                <Grid item md={2} xs={0}></Grid>
                <Grid item md={8} xs={12}>
                    <Grid container >
                        <Grid item md={3} xs={6} className='companyName' id={1}>
                            <div className='editHover companyName' initialValue={companyNameText} backColor="#FAF8F4" fontSize={designCompanyName.fontSize} selectedFont={designCompanyName.font} color={designCompanyName.color} textAlign={designCompanyName.textAlign} />
                            
                        </Grid>
                        <Grid item md={6} xs={0} className='navigation'>

                            <a href='#' ><div className='editHover navigationButton' initialValue={navigationText1} backColor="#FAF8F4" fontSize={designNav.fontSize} selectedFont={designNav.font} color={designNav.color} textAlign={designNav.textAlign} />
                            </a>

                     

                            <a href='#' ><div className='editHover navigationButton' initialValue={navigationText2}  backColor="#FAF8F4" fontSize={designNav.fontSize} selectedFont={designNav.font} color={designNav.color} textAlign={designNav.textAlign} /></a>

                            <a href='#'><div className='editHover navigationButton' initialValue={navigationText3}  backColor='#FAF8F4' fontSize={designNav.fontSize} selectedFont={designNav.font} color={designNav.color} textAlign={designNav.textAlign} /></a>

                        </Grid>
                        <Grid item md={3} xs={6} className='contact'>
                            <a href='#' >
                                <div className='editHover button-63' initialValue={buttonText} backColor="#FAF8F4" fontSize={designNavButton.fontSize} selectedFont={designNavButton.font} color={designNavButton.color} textAlign={designNavButton.textAlign} />
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
