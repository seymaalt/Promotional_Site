import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
function EmailVerified() {

    const { emailToken } = useParams()
    axios.post(`${import.meta.env.VITE_PORT}/user/verify-email/${emailToken}`)
            .then(result => {
                console.log(result)
                if (result.data == "Success") {
                    navigate("/")
                }
            })
            .catch(err => console.log(err));

    return (
        <div>

            <head>
                <title>Email Verification Successful</title>
            </head>
            <body style={{textAlign: "center"}}>
                <h1>Email verification successful</h1>
                <p>Your email has been verified.</p>
                <button style={{ padding: "10px", backgroundColor: "#7247AE", color: "white", border: "none", borderRadius: "5px" }}>
                    <a href="/" style={{textDecoration: "none", color: "white"}}>Return to the application</a>      
                </button>
            </body>


        </div>
    )
}

export default EmailVerified

