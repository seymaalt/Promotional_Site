import React, { useContext, useEffect, useState } from "react";
import axios from "../services/axios";
import AuthContext from "../context/AuthContext.jsx";
import Logo from "../components/Logo";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";

import ProfilePhoto from "../assets/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";

const Profile = () => {
    const { token, setToken } = useContext(AuthContext);
    const [user, setUser] = useState([]);
    const [name, setName] = useState(null);
    const [openEditName, setOpenEditName] = useState(false);
    const [openEditPassword, setOpenEditPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = { headers: { Authorization: `Bearer ${token}` } };
                const { data } = await axios.get(`${import.meta.env.VITE_PORT}/user/current`, config);
                setUser(data);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        fetchData();
    }, [token]);

    const handleOpenModal = (modalStateSetter) => () => modalStateSetter(true);
    const handleCloseModal = (modalStateSetter) => () => modalStateSetter(false);

    const handleEditName = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get('name');

        if (!name) {
            alert('İsim alanı boş bırakılamaz');
        } else {
            axios.post(`${import.meta.env.VITE_PORT}/user/changeName/`, { name, user })
                .then(result => {
                    if (result.data.message === "Success") {
                        alert('İsim değiştirildi!');
                        setToken(result.data.accessToken);
                        localStorage.setItem('token', result.data.accessToken);
                        navigate("/");
                    } else {
                        alert('Hatali islem');
                    }
                })
                .catch(err => console.log(err));
        }
    };

    const handleEditPassword = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const oldPassword = data.get('oldPassword');
        const newPassword = data.get('newPassword');
        const confirmPassword = data.get('confirmPassword');

        if (!oldPassword || !newPassword || !confirmPassword) {
            alert("Eksik bilgi!");
            return;
        } else if (newPassword !== confirmPassword) {
            alert("Yeni şifre eşleşmiyor!");
        } else {
            axios.post(`${import.meta.env.VITE_PORT}/user/profile/`, { oldPassword, confirmPassword, user })
                .then(result => {
                    if (result.data === "Success") {
                        alert('Sifre değiştirildi!');
                        navigate("/");
                    } else if (result.data === "wrongOldPassword") {
                        alert('Eski sifre hatali');
                    }
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='background'>
            <div className='navbar' >
                <Button onClick={() => navigate('/')}>
                    <Logo />
                </Button>
            </div>
            <div className='profileCard'>
                <Grid container rowSpacing={5} spacing={2}>
                    <Grid item xs={12} className="centerColumn">
                        <img src={ProfilePhoto} className="profilePhoto" alt="Profile Photo" />
                    </Grid>
                    {/* ... (other profile information) ... */}
                    <Grid item xs={12} className="centerColumn">
                        <Grid xs={4}>
                            <div className="profileLabel">Name</div>
                        </Grid>
                        <Grid xs={5}>
                            <div className="profileData">{name == null ? user.username : name}</div>
                        </Grid>
                        <Grid xs={2}>
                            <Button variant="contained" size="medium" onClick={handleOpenModal(setOpenEditName)} id="profileButton">
                                Edit
                            </Button>
                        </Grid>
                        <Grid xs={1}></Grid>
                        <Modal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={openEditName}
                            onClose={handleCloseModal(setOpenEditName)}
                        >
                            <FormModal
                                title="Edit"
                                labels={["Name"]}
                                inputNames={["name"]}
                                onSubmit={handleEditName}
                            />
                        </Modal>
                    </Grid>
                    {/* ... (other profile information) ... */}
                    <Grid item xs={12} className="centerColumn">
                        <Grid xs={4}>
                            <div className="profileLabel">Password</div>
                        </Grid>
                        <Grid xs={5}></Grid>
                        <Grid xs={2}>
                            <Button variant="contained" size="medium" onClick={handleOpenModal(setOpenEditPassword)} id="profileButton">
                                Edit
                            </Button>
                        </Grid>
                        <Grid xs={1}></Grid>
                        <Modal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            open={openEditPassword}
                            onClose={handleCloseModal(setOpenEditPassword)}
                        >
                            <FormModal
                                title="Change Password"
                                labels={["Old", "New", "Confirm"]}
                                inputNames={["oldPassword", "newPassword", "confirmPassword"]}
                                onSubmit={handleEditPassword}
                                passwordInputs
                            />
                        </Modal>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

const FormModal = ({ title, labels, inputNames, onSubmit, passwordInputs = false }) => (
    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
        <div className="centerColumn">
            <div className='modalCard'>
                <h2 className="profileModalHeader">{title}</h2>
                <div>
                    {labels.map((label, index) => (
                        <div key={index} className="profileModalLabel">
                            {label}
                            <TextField
                                id={inputNames[index]}
                                name={inputNames[index]}
                                className='profileInput'
                                type={passwordInputs ? "password" : "text"}
                            />
                        </div>
                    ))}
                    <Button type="submit" variant="contained" size="medium" id="profileModalButton">
                        Done
                    </Button>
                </div>
            </div>
        </div>
    </Box>
);

export default Profile;