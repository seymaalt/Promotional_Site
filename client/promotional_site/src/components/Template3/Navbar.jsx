import React, { useState, useContext, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import './style/template3.css'
import GlobalContext from '../../context/GlobalContext';
import Template3Context from '../../context/Template3Context';
import { TextareaAutosize } from '@mui/material';
import EditableText from './EditableText';
import ChangeDesign from './ChangeDesign';


const Template3Navbar = () => {
    const { response } = useContext(GlobalContext);
    const { CompanyNameContext3, setCompanyNameContext3, NavigationText3, setNavigationTextContext3, ButtonTextContext3, setButtonTextContext3 } = useContext(Template3Context);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const [designCompanyName, setDesignCompanyName] = useState({
        isModalOpen: false,
        fontSize: 34.4,
        color: '(225, 73%, 43%)',
        font: "DM Sans",
        textAlign: "left",
    })
    const [designNav, setDesignNav] = useState({
        isModalOpen: false,
        fontSize: 20,
        color: '#7a7a7a',
        font: "DM Sans",
        textAlign: "left",
    })
    const [designNavButton, setDesignNavButton] = useState({
        isModalOpen: false,
        fontSize: 20,
        color: '#FFFFFF',
        font: "Phantomsans, sans-serif",
        textAlign: "left",
    })
    const closeModal = () => {
        setDesignCompanyName(prevdesignCompanyName => {
            const updatedCompanyName = { ...prevdesignCompanyName, isModalOpen: false };
            return updatedCompanyName;
        });

        setDesignNav(prevdesignNav => {
            const updatedNav = { ...prevdesignNav, isModalOpen: false };
            return updatedNav;
        });

        setDesignNavButton(prevdesignNavButton => {
            const updatedNav = { ...prevdesignNavButton, isModalOpen: false };
            return updatedNav;
        });
    };

    const handleFontSizeChange = (newFontSize) => {
        setDesignCompanyName(prevdesignCompanyName => {
            const updatedCompanyName = { ...prevdesignCompanyName, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };

    const handleColorChange = (newColor) => {
        setDesignCompanyName(prevdesignCompanyName => {
            const updatedCompanyName = { ...prevdesignCompanyName, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleFontChange = (e) => {
        setDesignCompanyName(prevdesignCompanyName => {
            const updatedCompanyName = { ...prevdesignCompanyName, font: e };
            return updatedCompanyName;
        });
    };
    const handleTextAlignChange = (e) => {
        setDesignCompanyName(prevdesignCompanyName => {
            const updatedCompanyName = { ...prevdesignCompanyName, textAlign: e };
            return updatedCompanyName;
        });
    };

    const handleFontSizeNav1Change = (newFontSize) => {
        setDesignNav(prevdesignNav => {
            const updatedNav = { ...prevdesignNav, fontSize: newFontSize };
            return updatedNav;
        });
    };

    const handleColorNav1Change = (newColor) => {
        setDesignNav(prevdesignNav => {
            const updatedNav = { ...prevdesignNav, color: newColor };
            return updatedNav;
        });
    };

    const handleFontNav1Change = (e) => {
        setDesignNav(prevdesignNav => {
            const updatedNav = { ...prevdesignNav, font: e };
            return updatedNav;
        });
    };
    const handleTextAlignNav1Change = (e) => {
        setDesignNav(prevdesignNav => {
            const updatedNav = { ...prevdesignNav, textAlign: e };
            return updatedNav;
        });
    };

    const handleFontSizeButtonChange = (newFontSize) => {
        setDesignNavButton(prevdesignNavButton => {
            const updatedCompanyName = { ...prevdesignNavButton, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };

    const handleColorButtonChange = (newColor) => {
        setDesignNavButton(prevdesignNavButton => {
            const updatedCompanyName = { ...prevdesignNavButton, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleFontButtonChange = (e) => {
        setDesignNavButton(prevdesignNavButton => {
            const updatedCompanyName = { ...prevdesignNavButton, font: e };
            return updatedCompanyName;
        });
    };
    const handleTextAlignButtonChange = (e) => {
        setDesignNavButton(prevdesignNavButton => {
            const updatedCompanyName = { ...prevdesignNavButton, textAlign: e };
            return updatedCompanyName;
        });
    };

    const handleDivClick = (event) => {
        const updatedCompanyName = { ...designCompanyName };

        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        updatedCompanyName.isModalOpen = true;
        setDesignCompanyName(updatedCompanyName)
    };
    const handleDivClickNav1 = (event) => {

        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignNav(prevdesignNav => {
            const updatedNav = { ...prevdesignNav, isModalOpen: true };
            return updatedNav;
        });
    };
    const handleDivClickNavButton = (event) => {

        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignNavButton(prevdesignNav => {
            const updatedNav = { ...prevdesignNav, isModalOpen: true };
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

    const [companyNameText, setCompanyNameText] = useState(response && response.businessName ? response.businessName : 'COMPANY NAME')
    const [navigationText1, setNavigationText1] = useState('Services')
    const [navigationText2, setNavigationText2] = useState('Section 2')
    const [navigationText3, setNavigationText3] = useState('Contact')
    const [buttonText, setButtonText] = useState('Get Started')

    const handleCompanyNameTextChange = (e) => {
        setCompanyNameText(e);
    };
    const handleNavigationText1Change = (e) => {
        setNavigationText1(e);
    };
    const handleNavigationText2Change = (e) => {
        setNavigationText2(e);
    };
    const handleNavigationText3Change = (e) => {
        setNavigationText3(e);
    };
    const handleButtonTextChange = (e) => {
        setButtonText(e);
    };

    useEffect(() => {
        setNavigationTextContext3({ NavigationText3: { navigationText1, navigationText2, navigationText3, designNav } });
        setCompanyNameContext3({ CompanyNameContext3: { companyNameText, designCompanyName } });
        setButtonTextContext3({ ButtonTextContext3: { buttonText, designNavButton } })
    }, [navigationText1, navigationText2, navigationText3, designNav, companyNameText, designCompanyName, buttonText, designNavButton]);
    useEffect(() => {
        console.log(NavigationText3)
        console.log(CompanyNameContext3)
        console.log(ButtonTextContext3)
    },)

    return (
        <div className='temp3Navbar'>
            <Grid container >
                <Grid item md={2} xs={0}></Grid>
                <Grid item md={8} xs={12}>
                    <Grid container >
                        <Grid item md={3} xs={6} className='companyName' id={1} onDoubleClick={handleDivClick}>
                            <EditableText className='editHover companyName' initialValue={companyNameText} handleDefaultTextChange={handleCompanyNameTextChange} backColor="#FAF8F4" fontSize={designCompanyName.fontSize} selectedFont={designCompanyName.font} color={designCompanyName.color} textAlign={designCompanyName.textAlign} />
                            <ChangeDesign open={designCompanyName.isModalOpen} onClose={closeModal} handleFontChange={handleFontChange} handleFontSizeChange={handleFontSizeChange} handleColorChange={handleColorChange} fontSize={designCompanyName.fontSize} selectedFont={designCompanyName.font} color={designCompanyName.color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignChange} textAlign={designCompanyName.textAlign} />
                        </Grid>
                        <Grid item md={6} xs={0} className='navigation'>

                            <a href='#' onDoubleClick={handleDivClickNav1} ><EditableText className='editHover navigationButton' initialValue={navigationText1} handleDefaultTextChange={handleNavigationText1Change} backColor="#FAF8F4" fontSize={designNav.fontSize} selectedFont={designNav.font} color={designNav.color} textAlign={designNav.textAlign} />
                            </a>

                            <ChangeDesign open={designNav.isModalOpen} onClose={closeModal} handleFontChange={handleFontNav1Change} handleFontSizeChange={handleFontSizeNav1Change} handleColorChange={handleColorNav1Change} fontSize={designNav.fontSize} selectedFont={designNav.font} color={designNav.color} modalPosition={modalPosition} handleTextAlignChange={handleTextAlignNav1Change} />

                            <a href='#' onDoubleClick={handleDivClickNav1} ><EditableText className='editHover navigationButton' initialValue={navigationText2} handleDefaultTextChange={handleNavigationText2Change} backColor="#FAF8F4" fontSize={designNav.fontSize} selectedFont={designNav.font} color={designNav.color} textAlign={designNav.textAlign} /></a>

                            <a href='#' onDoubleClick={handleDivClickNav1}><EditableText className='editHover navigationButton' initialValue={navigationText3} handleDefaultTextChange={handleNavigationText3Change} backColor='#FAF8F4' fontSize={designNav.fontSize} selectedFont={designNav.font} color={designNav.color} textAlign={designNav.textAlign} /></a>

                        </Grid>
                        <Grid item md={3} xs={6} className='contact'>
                            <a href='#' onDoubleClick={handleDivClickNavButton}>
                                <EditableText className='editHover button-63' initialValue={buttonText} handleDefaultTextChange={handleButtonTextChange} backColor="#FAF8F4" fontSize={designNavButton.fontSize} selectedFont={designNavButton.font} color={designNavButton.color} textAlign={designNavButton.textAlign} />
                            </a>
                            <ChangeDesign open={designNavButton.isModalOpen} onClose={closeModal} handleFontChange={handleFontButtonChange} handleFontSizeChange={handleFontSizeButtonChange} handleColorChange={handleColorButtonChange} fontSize={designNavButton.fontSize} selectedFont={designNavButton.font} color={designNavButton.color} modalPosition={modalPosition} textAlign={designNavButton.textAlign} handleTextAlignChange={handleTextAlignButtonChange} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={2} xs={0}></Grid>
            </Grid>
        </div>
    );
}

export default Template3Navbar;
