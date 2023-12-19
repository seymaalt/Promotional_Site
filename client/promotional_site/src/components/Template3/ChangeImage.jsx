import { Modal } from '@mui/material';
import React, { useState } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import axios from 'axios'

const ImageUploader = ({ isOpen, onImageChange, onClose, modalPosition }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Resmi sunucuya yükleme fonksiyonu
    const uploadImageToServer = async (imageData) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_PORT}/user/imageUpload`, { imageData });
            return response.data.imageUrl; // Sunucudan dönen resim URL'si
        } catch (error) {
            console.error('Image upload failed:', error);
            throw error;
        }
    };

    // ImageUploader bileşeni içinde handleImageChange fonksiyonu
    const handleImageChange = async (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = async (e) => {
                setSelectedImage(e.target.result);
                onImageChange(e.target.result);
                const imageData = e.target.result;

                // Resmi sunucuya yükle ve dönen URL'yi al
                const imageUrl = await uploadImageToServer(imageData);

                // Resmi bir veritabanına kaydetmek için gerekli işlemleri yap
                saveImageToDatabase(imageUrl);
            };

            reader.readAsDataURL(file);
        }
    };

    // Veritabanına resmi kaydetme fonksiyonu (örnek)
    const saveImageToDatabase = (imageUrl) => {
        // Burada, alınan imageUrl'yi kullanarak veritabanına kayıt işlemini gerçekleştirebilirsiniz
        console.log('Resim veritabanına kaydedildi:', imageUrl);
    };

    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             setSelectedImage(e.target.result);
    //             onImageChange(e.target.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    return (
        <div className='modal'>
            <div >
                {isOpen ? (
                    <Modal open={isOpen} BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0)' } }}>
                        <div style={{ display: "flex", alignItems: "center", position: 'absolute', width: "300px", height: "100px", top: modalPosition.top, left: modalPosition.left, backgroundColor: "#1F2937", color: "white", borderRadius: "15px" }}>
                            <button style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '16px',
                            }} onClick={onClose}>X</button>
                            <br />
                            <label htmlFor="fileInput" style={{ cursor: 'pointer', width: "100%", display: 'flex', fontSize: "20px", padding: '5px', marginLeft: "15px", marginRight: "15px", backgroundColor: '#3498db', color: 'white', textAlign: "center", borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }}>
                                <FileUploadIcon />  Upload File
                            </label>
                            <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} id="fileInput" />
                        </div>
                    </Modal>
                ) : (
                    <div />
                )}
            </div>
        </div>
    );
};

export default ImageUploader;
