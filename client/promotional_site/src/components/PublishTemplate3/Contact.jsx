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

    return (
        <div className='part3'>
            <div class="contactDiv">
                <div class="content">
                    <div class="left-side">
                        <div class="address details">
                            <LocationOnIcon sx={{ fontSize: '3rem', color: 'white' }} />
                            <div >
                                <div className='editHover topic' initialValue={addressText} fontSize={designTopic.fontSize} selectedFont={designTopic.font} color={designTopic.color} textAlign={designTopic.textAlign} backColor="rgb(30, 64, 175)" />
                            </div>
                            <div>
                                <div className='editHover text-one' initialValue={addressDiscText} fontSize={designTopicOne.fontSize} selectedFont={designTopicOne.font} color={designTopicOne.color} textAlign={designTopicOne.textAlign} backColor="rgb(30, 64, 175)" />
                            </div>

                        </div>
                        <div class="phone details">
                            <PhoneIcon sx={{ fontSize: '3rem', color: 'white' }} />

                            <div >
                                <div className='editHover topic' initialValue={phoneText} fontSize={designTopic.fontSize} selectedFont={designTopic.font} color={designTopic.color} textAlign={designTopic.textAlign} backColor="rgb(30, 64, 175)" />
                            </div>

                            <div >
                                <div className='editHover text-one' initialValue={phoneDiscText} fontSize={designTopicOne.fontSize} selectedFont={designTopicOne.font} color={designTopicOne.color} textAlign={designTopicOne.textAlign} backColor="rgb(30, 64, 175)" />
                            </div>

                        </div>
                        <div class="email details">
                            <EmailIcon sx={{ fontSize: '3rem', color: 'white' }} />
                            <div>
                                <div className='editHover topic' initialValue={mailText} fontSize={designTopic.fontSize} selectedFont={designTopic.font} color={designTopic.color} textAlign={designTopic.textAlign} backColor="rgb(30, 64, 175)" />
                            </div>
                            <div >
                                <div className='editHover text-one' initialValue={mailDiscText} fontSize={designTopicOne.fontSize} selectedFont={designTopicOne.font} color={designTopicOne.color} textAlign={designTopicOne.textAlign} backColor="rgb(30, 64, 175)" />
                            </div>

                        </div>
                    </div>
                    <div class="right-side">
                        <div >
                        <div className='editHover topic-text' initialValue={headText} fontSize={designTopicHead.fontSize} selectedFont={designTopicHead.font} color={designTopicHead.color} textAlign={designTopicHead.textAlign} backColor="rgb(30, 64, 175)" />
                        </div>
                        <div>
                        <div className='editHover topic-desc' initialValue={headDiscText}  fontSize={designTopicDisc.fontSize} selectedFont={designTopicDisc.font} color={designTopicDisc.color} textAlign={designTopicDisc.textAlign} backColor="rgb(30, 64, 175)" />
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
                </div>

            </div>
        </div>
    );
};

export default ContactForm;