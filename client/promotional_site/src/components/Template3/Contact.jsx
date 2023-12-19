import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import EmailIcon from '@mui/icons-material/Email';
import EditableText from './EditableText';

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
                
                <EditableText className='editHover contactHeader'  initialValue='Get in Touch Today' backColor="rgb(30, 64, 175)" />
                <form onSubmit={handleSubmit}  >
                    <label>
                        <EditableText className='editHover contactLabel'  initialValue='Name' backColor="rgb(30, 64, 175)" />
                        
                        <input type="text" style={{ border: "none", width: "350px", height: "40px", borderRadius: "5px" }} value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <br />
                    <br />
                    <label>
                        <div style={{ color: "white" }}><b><EditableText className='editHover contactLabel' initialValue='Email' backColor="rgb(30, 64, 175)" /></b></div>
                        <input type="email" style={{ border: "none", width: "350px", height: "40px", borderRadius: "5px" }} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <br />
                    <label>
                        <div style={{ color: "white" }}> <b><EditableText className='editHover contactLabel' initialValue='Message' backColor="rgb(30, 64, 175)" /></b></div>
                        <textarea value={message} style={{ border: "none", width: "350px", height: "100px", borderRadius: "5px" }} onChange={(e) => setMessage(e.target.value)} />
                    </label>
                    <br />
                    <br />
                    <button className='temp3Submit' type="submit"><EditableText className='editHover' initialValue='Send Message' backColor="white" /></button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;