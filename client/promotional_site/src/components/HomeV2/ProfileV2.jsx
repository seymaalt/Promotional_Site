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
import Swal from "sweetalert2";
import "./style/profile.css"

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

        const getGoogleUser = async () => {
            try {
                const url = `${import.meta.env.VITE_PORT}/auth/login/success`;
                const { data } = await axios.get(url, { withCredentials: true });
                setUser(data.user._json);
                console.log(data.user._json);
            } catch (err) {
                console.log(err);
            }
        };
        getGoogleUser();

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
        console.log(data)

        if (!name) {
            Swal.fire({
                position: "top",
                icon: "error",
                title: "İsim alanı boş bırakılamaz",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'swal2-popup-custom' // Özel bir sınıf ekleyerek z-index değerini kontrol etme
                }
            });
        } else {
            axios.post(`${import.meta.env.VITE_PORT}/user/changeName/`, { name, user })
                .then(result => {
                    console.log(result)
                    if (result.data.message == "Success") {
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: "İsim değiştirildi!",
                            showConfirmButton: false,
                            timer: 1500,
                            customClass: {
                                popup: 'swal2-popup-custom' // Özel bir sınıf ekleyerek z-index değerini kontrol etme
                            }
                        });
                        setToken(result.data.accessToken)
                        localStorage.setItem('token', result.data.accessToken)
                        navigate("/")
                    }
                    else {
                        Swal.fire({
                            position: "top",
                            icon: "error",
                            title: "Hatali islem",
                            showConfirmButton: false,
                            timer: 1500,
                            customClass: {
                                popup: 'swal2-popup-custom' // Özel bir sınıf ekleyerek z-index değerini kontrol etme
                            }
                        });
                    }
                })
                .catch(err => console.log(err),
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: "You cant change your name",
                        showConfirmButton: false,
                        timer: 1500,
                        customClass: {
                            popup: 'swal2-popup-custom' // Özel bir sınıf ekleyerek z-index değerini kontrol etme
                        }
                    }));
        }
    }

    const [errorMessage, setErrorMessage] = useState('');
    const handleChangeNewPassword = (event) => {
        const newPassword = event.target.value

        if (!newPassword.trim()) {
            setErrorMessage( "Şifre alanı boş bırakılamaz!")
          } else if (!/^(?=.*[A-Z])(?=.*[a-z])/.test(newPassword)) {
            setErrorMessage( "Şifre Bir büyük bir küçük harf içermeli")
          } else if (!/^(?=.*\d)/.test(newPassword)) {
            setErrorMessage( "Şifre sayi içermeli")
          } else if (!/^(?=.*[.,;@$!%*?&])/.test(newPassword)) {
            setErrorMessage( "Şifre özel karaktere içermeli")
          } else if (!/^.{8,12}$/.test(newPassword)) {
            setErrorMessage( "Şifre en az 8 en çok 12 karakter içermeli")
          }else{
            setErrorMessage("")
          }

    }

    const handleEditPassword = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const oldPassword = data.get('oldPassword')
        const newPassword = data.get('newPassword')
        const confirmPassword = data.get('confirmPassword')

        if (!oldPassword || !newPassword || !confirmPassword) {
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Eksik bilgi!",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'swal2-popup-custom' // Özel bir sınıf ekleyerek z-index değerini kontrol etme
                }
            });
            return;
        }
        else if (newPassword != confirmPassword) {
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Yeni şifre eşleşmiyor!",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'swal2-popup-custom' // Özel bir sınıf ekleyerek z-index değerini kontrol etme
                }
            });
        }
        else {
            axios.post(`${import.meta.env.VITE_PORT}/user/profile/`, { oldPassword, confirmPassword, user })
                .then(result => {
                    console.log(result)
                    if (result.data == "Success") {
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: "Sifre değiştirildi!",
                            showConfirmButton: false,
                            timer: 1500,
                            customClass: {
                                popup: 'swal2-popup-custom' // Özel bir sınıf ekleyerek z-index değerini kontrol etme
                            }
                        });
                        navigate("/")
                    }
                    else if (result.data = "wrongOldPassword") {
                        Swal.fire({
                            position: "top",
                            icon: "error",
                            title: "Eski sifre hatali",
                            showConfirmButton: false,
                            timer: 1500,
                            customClass: {
                                popup: 'swal2-popup-custom' // Özel bir sınıf ekleyerek z-index değerini kontrol etme
                            }
                        });
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
                    <Grid item xs={12} className="centerColumn" sx={{ paddingBottom: '4%' }}>
                        <Grid xs={4}>
                            <div className="profileLabel2">
                                Name
                            </div>
                        </Grid>
                        <Grid xs={5}>
                            <div className="profileData2">{name == null ? user.username || user.given_name : name}</div>
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
                            style={{zIndex :1}}
                        >
                            <Box component="form" onSubmit={handleEditName} noValidate sx={{ mt: 1 }} >
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
                    <Grid item xs={12} className="centerColumn" sx={{ paddingBottom: '4%' }}>
                        <Grid xs={4}>
                            <div className="profileLabel2">
                                Email
                            </div>
                        </Grid>
                        <Grid xs={5} style={{ width: '100%', overflow: 'hidden' }}>
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
                            style={{zIndex :1}}
                        >
                            <Box component="form" onSubmit={handleEditPassword} noValidate sx={{ mt: 1 }} >
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
                                            <TextField id="newPassword" name="newPassword" className='profileInput2' type="password" onChange={handleChangeNewPassword} />
                                            <div style={{ color: 'rgb(255, 18, 18)', marginTop:'2%' }}>{errorMessage}</div>
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