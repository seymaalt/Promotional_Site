import React, { useContext, useEffect, useState, useRef } from "react";
import ProfilePhoto from "../assets/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";
import axios from "../services/axios";
import AuthContext from "../context/AuthContext.jsx";
import Logo from "../components/Logo";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate, useParams } from "react-router-dom";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Profile() {
    const { token } = useContext(AuthContext);
    const [user, setUser] = useState([]);
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const { id, token2 } = useParams()
    const [openEditName, setOpenEditName] = React.useState(false);
    const [openEditPassword, setOpenEditPassword] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const password = data.get('password')

        axios.post(`${import.meta.env.VITE_PORT}/user/resetPassword/${id}/${token2}`, { password })
            .then(result => {
                console.log(result)
                if (result.data == "Success") {
                    navigate("/profile")
                }
            })
            .catch(err => console.log(err));


    }

    const handleOpenEditName = () => setOpenEditName(true);
    const handleCloseEditName = () => setOpenEditName(false);
    const handleOpenEditPassword = () => setOpenEditPassword(true);
    const handleCloseEditPassword = () => setOpenEditPassword(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                await axios.get(
                    `${import.meta.env.VITE_PORT}/user/current`,
                    config
                ).then(data => setUser(data.data));
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        fetchData();
    }, [token]);
    useEffect(() => (console.log(user)));
    return (
        <div className='background'>
            <div className='navbar' >
                <Button onClick={() => navigate('/')}>
                    <Logo />
                </Button>
            </div>
            <div className='profileCard'>
                <Grid container rowSpacing={5} spacing={2}>
                    <Grid item xs={12} className="centerColumn" >
                        <img
                            src={ProfilePhoto}
                            className="profilePhoto"
                            alt="Profile Photo"
                        />
                    </Grid>
                    <Grid item xs={12} className="centerColumn">
                        <Grid xs={4}>
                            <div className="profileLabel">
                                Name
                            </div>
                        </Grid>
                        <Grid xs={5}>
                            <div className="profileData">{user.username}</div>
                        </Grid>
                        <Grid xs={2}>
                            <Button variant="contained" size="medium" onClick={handleOpenEditName} id="profileButton">
                                Edit
                            </Button>
                        </Grid>
                        <Grid xs={1}></Grid>
                        <Modal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={openEditName}
                            onClose={handleCloseEditName}
                        >
                            <div className="centerColumn">
                                <div className='modalCard'>
                                    <h2 className="profileModalHeader">
                                        Edit
                                    </h2>
                                    <div>
                                        <div className="profileModalLabel">
                                            Name
                                        </div>
                                        <TextField id="outlined-size-normal" className='profileInput' />
                                        <Button variant="contained" size="medium" onClick={handleCloseEditName} id="profileModalButton">
                                            Done
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </Grid>
                    <Grid item xs={12} className="centerColumn">
                        <Grid xs={4}>
                            <div className="profileLabel">
                                Email
                            </div>
                        </Grid>
                        <Grid xs={5}>
                            <div className="profileData">{user.email}</div>
                        </Grid>
                        <Grid xs={3}></Grid>
                    </Grid>
                    <Grid item xs={12} className="centerColumn" >
                        <Grid xs={4}>
                            <div className="profileLabel">
                                Password
                            </div>
                        </Grid>
                        <Grid xs={5}>
                        </Grid>
                        <Grid xs={2}>
                            <Button variant="contained" size="medium" onClick={handleOpenEditPassword} id="profileButton">
                                Edit
                            </Button>
                        </Grid>
                        <Grid xs={1}></Grid>
                        <Modal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={openEditPassword}
                            onClose={handleCloseEditPassword}
                        >
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <div className="centerColumn">
                                    <div className='modalCard'>
                                        <h2 className="profileModalHeader">
                                            Change Password
                                        </h2>
                                        <div>
                                            <div className="profileModalLabel">
                                                Old
                                            </div>
                                            <TextField id="outlined-size-normal" className='profileInput' />
                                            <div className="profileModalLabel">
                                                New
                                            </div>
                                            <TextField id="outlined-size-normal" className='profileInput' />
                                            <div className="profileModalLabel">
                                                Confirm
                                            </div>
                                            <TextField id="outlined-size-normal" className='profileInput' />
                                            <Button variant="contained" size="medium" onClick={handleCloseEditPassword} id="profileModalButton">
                                                Done
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    </Grid>
                </Grid>

            </div>
        </div >
    );
}