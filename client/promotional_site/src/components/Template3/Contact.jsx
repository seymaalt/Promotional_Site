import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import EmailIcon from '@mui/icons-material/Email';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your submit logic here
    };

    return (
        <div className='part'>
            <div className='contactDiv'>
                <h1>Get in Touch Today</h1>
                <form onSubmit={handleSubmit}  >
                    <label>
                        <div style={{ color: "white" }}> <b>Name</b></div>
                        <input type="text" style={{ border: "none", width: "350px", height: "40px", borderRadius: "5px" }} value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <br />
                    <br />
                    <label>
                        <div style={{ color: "white" }}> <b>Email</b></div>
                        <input type="email" style={{ border: "none", width: "350px", height: "40px", borderRadius: "5px" }} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <br />
                    <label>
                        <div style={{ color: "white" }}> <b>Message</b></div>
                        <textarea value={message} style={{ border: "none", width: "350px", height: "100px", borderRadius: "5px" }} onChange={(e) => setMessage(e.target.value)} />
                    </label>
                    <br />
                    <br />
                    <button className='temp3Submit' type="submit">Send Message</button>

                </form>
            </div>
        </div>
    );
};

export default ContactForm;