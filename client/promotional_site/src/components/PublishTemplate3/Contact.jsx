import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

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
    const [addressText, setAddressText] = useState("Address")
    const [addressDiscText, setAddressDiscText] = useState("Kozyatağı Mahallesi, 19 Mayıs Caddesi, Sarıkanarya Sokağı, Bina No 14 Byoffice Plaza (K2 Plaza) Kat 10, İç Kapı No 10, 34736 Kadıköy/İstanbul")
    const [phoneText, setPhoneText] = useState("Phone")
    const [phoneDiscText, setPhoneDiscText] = useState("0 (216) 473 46 74")
    const [mailText, setMailText] = useState("Email")
    const [mailDiscText, setMailDiscText] = useState("info@venhancer.com")
    const [headText, setHeadText] = useState("Send us a message")
    const [headDiscText, setHeadDiscText] = useState("If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you")

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

    return (
        <div className='part3'>
            <div class="contactDiv">
                <div class="content">
                    <div class="left-side">
                        <div class="address details">
                            <LocationOnIcon sx={{ fontSize: '3rem', color: 'white' }} />
                            <div >
                                <div className=' topic' fontSize={designTopic.fontSize} selectedFont={designTopic.font} color={designTopic.color} textAlign={designTopic.textAlign} backColor="rgb(30, 64, 175)" >{addressText}</div>
                            </div>
                            <div>
                                <div className=' text-one' fontSize={designTopicOne.fontSize} selectedFont={designTopicOne.font} color={designTopicOne.color} textAlign={designTopicOne.textAlign} backColor="rgb(30, 64, 175)" >{addressDiscText}</div>
                            </div>

                        </div>
                        <div class="phone details">
                            <PhoneIcon sx={{ fontSize: '3rem', color: 'white' }} />

                            <div >
                                <div className=' topic' fontSize={designTopic.fontSize} selectedFont={designTopic.font} color={designTopic.color} textAlign={designTopic.textAlign} backColor="rgb(30, 64, 175)" >{phoneText}</div>
                            </div>

                            <div >
                                <div className=' text-one' fontSize={designTopicOne.fontSize} selectedFont={designTopicOne.font} color={designTopicOne.color} textAlign={designTopicOne.textAlign} backColor="rgb(30, 64, 175)" >{phoneDiscText}</div>
                            </div>

                        </div>
                        <div class="email details">
                            <EmailIcon sx={{ fontSize: '3rem', color: 'white' }} />
                            <div>
                                <div className=' topic' fontSize={designTopic.fontSize} selectedFont={designTopic.font} color={designTopic.color} textAlign={designTopic.textAlign} backColor="rgb(30, 64, 175)" >{mailText}</div>
                            </div>
                            <div >
                                <div className=' text-one' fontSize={designTopicOne.fontSize} selectedFont={designTopicOne.font} color={designTopicOne.color} textAlign={designTopicOne.textAlign} backColor="rgb(30, 64, 175)" >{mailDiscText}</div>
                            </div>

                        </div>
                    </div>
                    <div class="right-side">
                        <div >
                            <div className=' topic-text' fontSize={designTopicHead.fontSize} selectedFont={designTopicHead.font} color={designTopicHead.color} textAlign={designTopicHead.textAlign} backColor="rgb(30, 64, 175)" >{headText}</div>
                        </div>
                        <div>
                            <div className=' topic-desc' fontSize={designTopicDisc.fontSize} selectedFont={designTopicDisc.font} color={designTopicDisc.color} textAlign={designTopicDisc.textAlign} backColor="rgb(30, 64, 175)" >{headDiscText}</div>
                        </div>

                        <form action="#">
                            <div class="input-box">
                                <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="input-box message-box">
                                <textarea placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                            </div>
                            <div class="button">
                                <input type="button" onClick={handleSubmit} value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactForm;