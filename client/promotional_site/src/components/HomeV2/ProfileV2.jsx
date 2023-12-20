import React, { useContext, useEffect, useState, useRef } from "react";
import ProfilePhoto from "../../assets/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";
import axios from "../../services/axios";
import AuthContext from "../../context/AuthContext.jsx";
import Logo from "../../components/Logo";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate, useParams } from "react-router-dom";
import image from '../../assets/59438.jpg'

export default function Profile() {
    const { token, setToken } = useContext(AuthContext);
    const [user, setUser] = useState([]);
    const [name, setName] = useState(null);
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const [openEditName, setOpenEditName] = React.useState(false);
    const [openEditPassword, setOpenEditPassword] = React.useState(false);

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

    const handleOpenEditName = () => setOpenEditName(true);
    const handleCloseEditName = () => setOpenEditName(false);
    const handleOpenEditPassword = () => setOpenEditPassword(true);

    const handleCloseEditPassword = () => setOpenEditPassword(false);

    const handleEditName = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get('name')

        if (!name) {
            alert('İsim alanı boş bırakılamaz')
        } else {
            axios.post(`${import.meta.env.VITE_PORT}/user/changeName/`, { name, user })
                .then(result => {
                    console.log(result)
                    if (result.data.message == "Success") {
                        alert('İsim değiştirildi!')
                        setToken(result.data.accessToken)
                        localStorage.setItem('token', result.data.accessToken)
                        navigate("/")
                    }
                    else {
                        alert('Hatali islem')
                    }
                })
                .catch(err => console.log(err));
        }
    }

    const handleEditPassword = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const oldPassword = data.get('oldPassword')
        const newPassword = data.get('newPassword')
        const confirmPassword = data.get('confirmPassword')

        if (!oldPassword || !newPassword || !confirmPassword) {
            alert("Eksik bilgi!")
            return;
        } else if (newPassword != confirmPassword) {
            alert("Yeni şifre eşleşmiyor!")
        }
        else {
            axios.post(`${import.meta.env.VITE_PORT}/user/profile/`, { oldPassword, confirmPassword, user })
                .then(result => {
                    console.log(result)
                    if (result.data == "Success") {
                        alert('Sifre değiştirildi!')
                        navigate("/")
                    }
                    else if (result.data = "wrongOldPassword") {
                        alert('Eski sifre hatali')
                    }
                })
                .catch(err => console.log(err));
        }
    }


    return (
        <div className='profileBackground'>
            <div className='navbar' >
                <Button onClick={() => navigate('/')} >
                    <Logo />
                </Button>
            </div>
            <div className='profileCard2'>
                <Grid container rowSpacing={5} spacing={2}>
                    <Grid item xs={12} className="centerColumn" >
                        <div className="profileHeader">
                            PROFILE
                        </div>
                    </Grid>
                    <Grid item xs={12} className="centerColumn" sx={{paddingBottom:'4%'}}>
                        <Grid xs={4}>
                            <div className="profileLabel2">
                                Name
                            </div>
                        </Grid>
                        <Grid xs={5}>
                            <div className="profileData2">{name == null ? user.username : name}</div>
                        </Grid>
                        <Grid xs={2}>
                            <Button variant="contained" size="medium" onClick={handleOpenEditName} id="profileButton2">
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
                            <Box component="form" onSubmit={handleEditName} noValidate sx={{ mt: 1 }}>
                                <div className="centerColumn" >
                                    <div className='modalCard2'>
                                        <h2 className="profileModalHeader2">
                                            Edit
                                        </h2>
                                        <div>
                                            <div className="profileModalLabel2">
                                                Name
                                            </div>
                                            <TextField id="name" name="name" className='profileInput2' />
                                            <Button type="submit" variant="contained" size="medium" id="profileModalButton2">
                                                Done
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    </Grid>
                    <Grid item xs={12} className="centerColumn" sx={{paddingBottom:'4%'}}>
                        <Grid xs={4}>
                            <div className="profileLabel2">
                                Email
                            </div>
                        </Grid>
                        <Grid xs={5}>
                            <div className="profileData2">{user.email}</div>
                        </Grid>
                        <Grid xs={3}></Grid>
                    </Grid>
                    <Grid item xs={12} className="centerColumn" >
                        <Grid xs={4}>
                            <div className="profileLabel2">
                                Password
                            </div>
                        </Grid>
                        <Grid xs={5}>
                        </Grid>
                        <Grid xs={2}>
                            <Button variant="contained" size="medium" onClick={handleOpenEditPassword} id="profileButton2">
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
                            <Box component="form" onSubmit={handleEditPassword} noValidate sx={{ mt: 1 }}>
                                <div className="centerColumn">
                                    <div className='modalCard2'>
                                        <h2 className="profileModalHeader2">
                                            Change Password
                                        </h2>
                                        <div>
                                            <div className="profileModalLabel2">
                                                Old
                                            </div>
                                            <TextField id="oldPassword" name="oldPassword" className='profileInput2' type="password" />
                                            <div className="profileModalLabel2">
                                                New
                                            </div>
                                            <TextField id="newPassword" name="newPassword" className='profileInput2' type="password" />
                                            <div className="profileModalLabel2">
                                                Confirm
                                            </div>
                                            <TextField id="confirmPassword" name="confirmPassword" className='profileInput2' type="password" />
                                            <Button type="submit" variant="contained" size="medium" id="profileModalButton2">
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