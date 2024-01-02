import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import EditableText from './EditableText';
import ChangeDesign from './ChangeDesign';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [addressText, setAddressText] = useState("Address")
    const [addressDiscText, setAddressDiscText] = useState("Kozyatağı Mahallesi, 19 Mayıs Caddesi, Sarıkanarya Sokağı, Bina No 14 Byoffice Plaza (K2 Plaza) Kat 10, İç Kapı No 10, 34736 Kadıköy/İstanbul")
    const [phoneText, setPhoneText] = useState("Phone")
    const [phoneDiscText, setPhoneDiscText] = useState("0 (216) 473 46 74")
    const [mailText, setMailText] = useState("Email")
    const [mailDiscText, setMailDiscText] = useState("info@venhancer.com")
    const [headText, setHeadText] = useState("Send us a message")
    const [headDiscText, setHeadDiscText] = useState("If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you")


    const handleAddressTextChange = (e) => {
        setAddressText(e);
    };
    const handleAddressDiscTextChange = (e) => {
        setAddressDiscText(e);
    };
    const handlePhoneTextChange = (e) => {
        setPhoneText(e);
    };
    const handlePhoneDiscTextChange = (e) => {
        setPhoneDiscText(e);
    };
    const handleMailTextChange = (e) => {
        setMailText(e);
    };
    const handleMailDiscTextChange = (e) => {
        setMailDiscText(e);
    };
    const handleHeadTextChange = (e) => {
        setHeadText(e);
    };
    const handleHeadDiscTextChange = (e) => {
        setHeadDiscText(e);
    };

    const [designTopic, setDesignTopic] = useState({
        isModalOpen: false,
        fontSize: 18,
        color: 'white',
        font: "DM Sans",
        textAlign: "center",
    })
    const [designTopicOne, setDesignTopicOne] = useState({
        isModalOpen: false,
        fontSize: 14,
        color: '#e4e4e4',
        font: "DM Sans",
        textAlign: "center",
    })
    const [designTopicHead, setDesignTopicHead] = useState({
        isModalOpen: false,
        fontSize: 36,
        color: '#ffffff',
        font: "DM Sans",
        textAlign: "left",
    })
    const [designTopicDisc, setDesignTopicDisc] = useState({
        isModalOpen: false,
        fontSize: 20.8,
        color: '#ffffff',
        font: "DM Sans",
        textAlign: "left",
    })

    const handleTopicFontSizeChange = (newFontSize) => {
        setDesignTopic(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };
    const handleTopicColorChange = (newColor) => {
        setDesignTopic(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleTopicFontChange = (e) => {
        setDesignTopic(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, font: e };
            return updatedCompanyName;
        });
    };
    const handleTopicTextAlignChange = (e) => {
        setDesignTopic(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, textAlign: e };
            return updatedCompanyName;
        });
    };

    const handleTopicOneFontSizeChange = (newFontSize) => {
        setDesignTopicOne(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };
    const handleTopicOneColorChange = (newColor) => {
        setDesignTopicOne(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleTopicOneFontChange = (e) => {
        setDesignTopicOne(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, font: e };
            return updatedCompanyName;
        });
    };
    const handleTopicOneTextAlignChange = (e) => {
        setDesignTopicOne(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, textAlign: e };
            return updatedCompanyName;
        });
    };

    const handleTopicHeadFontSizeChange = (newFontSize) => {
        setDesignTopicHead(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };
    const handleTopicHeadColorChange = (newColor) => {
        setDesignTopicHead(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleTopicHeadFontChange = (e) => {
        setDesignTopicHead(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, font: e };
            return updatedCompanyName;
        });
    };
    const handleTopicHeadTextAlignChange = (e) => {
        setDesignTopicHead(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, textAlign: e };
            return updatedCompanyName;
        });
    };

    const handleTopicDiscFontSizeChange = (newFontSize) => {
        setDesignTopicDisc(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, fontSize: newFontSize };
            return updatedCompanyName;
        });
    };
    const handleTopicDiscColorChange = (newColor) => {
        setDesignTopicDisc(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, color: newColor };
            return updatedCompanyName;
        });
    };

    const handleTopicDiscFontChange = (e) => {
        setDesignTopicDisc(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, font: e };
            return updatedCompanyName;
        });
    };
    const handleTopicDiscTextAlignChange = (e) => {
        setDesignTopicDisc(prevdesignHead => {
            const updatedCompanyName = { ...prevdesignHead, textAlign: e };
            return updatedCompanyName;
        });
    };

    const closeModal = () => {
        setDesignTopic(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: false };
            return updatedNav;
        });
        setDesignTopicOne(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: false };
            return updatedNav;
        });
        setDesignTopicHead(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: false };
            return updatedNav;
        });
        setDesignTopicDisc(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: false };
            return updatedNav;
        });
    };
    const handleDivClickTopic = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignTopic(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: true };
            return updatedNav;
        });
    };
    const handleDivClickTopicOne = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignTopicOne(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: true };
            return updatedNav;
        });
    };
    const handleDivClickTopicHead = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignTopicHead(prevdesign => {
            const updatedNav = { ...prevdesign, isModalOpen: true };
            return updatedNav;
        });
    };
    const handleDivClickTopicDisc = (event) => {
        const middleX = event.clientX;
        const middleY = event.clientY;

        setModalPosition(calculateModalPosition(middleX, middleY));
        setDesignTopicDisc(prevdesign => {
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
    return (
        <div className='part3'>
            <div class="contactDiv">
                <div class="content">
                    <div class="left-side">
                        <div class="address details">
                            <LocationOnIcon sx={{ fontSize: '3rem', color: 'white' }} />
                            <div onDoubleClick={handleDivClickTopic}>
                                <EditableText className='editHover topic' initialValue={addressText} fontSize={designTopic.fontSize} selectedFont={designTopic.font} color={designTopic.color} textAlign={designTopic.textAlign} handleDefaultTextChange={handleAddressTextChange} backColor="rgb(30, 64, 175)" />
                            </div>
                            <div onDoubleClick={handleDivClickTopicOne}>
                                <EditableText className='editHover text-one' initialValue={addressDiscText} fontSize={designTopicOne.fontSize} selectedFont={designTopicOne.font} color={designTopicOne.color} textAlign={designTopicOne.textAlign} handleDefaultTextChange={handleAddressDiscTextChange} backColor="rgb(30, 64, 175)" />
                            </div>

                        </div>
                        <div class="phone details">
                            <PhoneIcon sx={{ fontSize: '3rem', color: 'white' }} />

                            <div onDoubleClick={handleDivClickTopic}>
                                <EditableText className='editHover topic' initialValue={phoneText} fontSize={designTopic.fontSize} selectedFont={designTopic.font} color={designTopic.color} textAlign={designTopic.textAlign} handleDefaultTextChange={handleAddressTextChange} backColor="rgb(30, 64, 175)" />
                            </div>

                            <div onDoubleClick={handleDivClickTopicOne}>
                                <EditableText className='editHover text-one' initialValue={phoneDiscText} fontSize={designTopicOne.fontSize} selectedFont={designTopicOne.font} color={designTopicOne.color} textAlign={designTopicOne.textAlign} handleDefaultTextChange={handleAddressDiscTextChange} backColor="rgb(30, 64, 175)" />
                            </div>

                        </div>
                        <div class="email details">
                            <EmailIcon sx={{ fontSize: '3rem', color: 'white' }} />
                            <div onDoubleClick={handleDivClickTopic}>
                                <EditableText className='editHover topic' initialValue={mailText} fontSize={designTopic.fontSize} selectedFont={designTopic.font} color={designTopic.color} textAlign={designTopic.textAlign} handleDefaultTextChange={handleAddressTextChange} backColor="rgb(30, 64, 175)" />
                            </div>
                            <div onDoubleClick={handleDivClickTopicOne}>
                                <EditableText className='editHover text-one' initialValue={mailDiscText} fontSize={designTopicOne.fontSize} selectedFont={designTopicOne.font} color={designTopicOne.color} textAlign={designTopicOne.textAlign} handleDefaultTextChange={handleAddressDiscTextChange} backColor="rgb(30, 64, 175)" />
                            </div>

                        </div>
                        <ChangeDesign open={designTopic.isModalOpen} onClose={closeModal} handleFontChange={handleTopicFontChange} handleFontSizeChange={handleTopicFontSizeChange} handleColorChange={handleTopicColorChange} fontSize={designTopic.fontSize} selectedFont={designTopic.font} color={designTopic.color} textAlign={designTopic.textAlign} modalPosition={modalPosition} handleTextAlignChange={handleTopicTextAlignChange} />
                        <ChangeDesign open={designTopicOne.isModalOpen} onClose={closeModal} handleFontChange={handleTopicOneFontChange} handleFontSizeChange={handleTopicOneFontSizeChange} handleColorChange={handleTopicOneColorChange} fontSize={designTopicOne.fontSize} selectedFont={designTopicOne.font} color={designTopicOne.color} textAlign={designTopicOne.textAlign} modalPosition={modalPosition} handleTextAlignChange={handleTopicOneTextAlignChange} />
                    </div>
                    <div class="right-side">
                        <div onDoubleClick={handleDivClickTopicHead}>
                        <EditableText className='editHover topic-text' initialValue={headText} fontSize={designTopicHead.fontSize} selectedFont={designTopicHead.font} color={designTopicHead.color} textAlign={designTopicHead.textAlign} handleDefaultTextChange={handleHeadTextChange} backColor="rgb(30, 64, 175)" />
                        </div>
                        <div onDoubleClick={handleDivClickTopicDisc}>
                        <EditableText className='editHover topic-desc' initialValue={headDiscText}  fontSize={designTopicDisc.fontSize} selectedFont={designTopicDisc.font} color={designTopicDisc.color} textAlign={designTopicDisc.textAlign} handleDefaultTextChange={handleHeadDiscTextChange} backColor="rgb(30, 64, 175)" />
                        </div>

                        <form action="#">
                            <div class="input-box">
                                <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Enter your email"value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="input-box message-box">
                                <textarea placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                            </div>
                            <div class="button">
                                <input type="button" onClick={handleSubmit} value="Send Now" />
                            </div>
                        </form>
                    </div>
                    <ChangeDesign open={designTopicHead.isModalOpen} onClose={closeModal} handleFontChange={handleTopicHeadFontChange} handleFontSizeChange={handleTopicHeadFontSizeChange} handleColorChange={handleTopicHeadColorChange} fontSize={designTopicHead.fontSize} selectedFont={designTopicHead.font} color={designTopicHead.color} textAlign={designTopicHead.textAlign} modalPosition={modalPosition} handleTextAlignChange={handleTopicHeadTextAlignChange} />
                    <ChangeDesign open={designTopicDisc.isModalOpen} onClose={closeModal} handleFontChange={handleTopicDiscFontChange} handleFontSizeChange={handleTopicDiscFontSizeChange} handleColorChange={handleTopicDiscColorChange} fontSize={designTopicDisc.fontSize} selectedFont={designTopicDisc.font} color={designTopicDisc.color} textAlign={designTopicDisc.textAlign} modalPosition={modalPosition} handleTextAlignChange={handleTopicDiscTextAlignChange} />
                </div>

            </div>
        </div>
    );
};

export default ContactForm;