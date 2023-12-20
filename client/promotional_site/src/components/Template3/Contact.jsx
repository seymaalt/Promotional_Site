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
    };

    return (
        <div className='part3'>
            <div class="contactDiv">
                <div class="content">
                    <div class="left-side">
                        <div class="address details">
                            <LocationOnIcon sx={{ fontSize: '3rem', color: 'white' }} />
                            <div class="topic">Address</div>
                            <div class="text-one">Kozyatağı Mahallesi, 19 Mayıs Caddesi, Sarıkanarya Sokağı, Bina No 14 Byoffice Plaza (K2 Plaza) Kat 10, İç Kapı No 10, 34736 Kadıköy/İstanbul</div>
                        </div>
                        <div class="phone details">
                            <PhoneIcon sx={{ fontSize: '3rem', color: 'white' }}/>
                            <div class="topic">Phone</div>
                            <div class="text-one">0 (216) 473 46 74</div>
                        </div>
                        <div class="email details">
                            <EmailIcon sx={{ fontSize: '3rem', color: 'white' }}/>
                            <div class="topic">Email</div>
                            <div class="text-one">info@venhancer.com</div>
                        </div>
                    </div>
                    <div class="right-side">
                        <div class="topic-text">Send us a message</div>
                        <p style={{ color: 'white' }}>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
                        <form action="#">
                            <div class="input-box">
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div class="input-box message-box">
                                <textarea placeholder="Enter your message"></textarea>
                            </div>
                            <div class="button">
                                <input type="button" value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;