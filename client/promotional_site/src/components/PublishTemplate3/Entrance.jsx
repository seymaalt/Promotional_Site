import React, { useState, useContext, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import './style/template3.css'
import GlobalContext from '../../context/GlobalContext'
import Template3Context from '../../context/Template3Context';


const Template3Navbar = () => {
    const { response } = useContext(GlobalContext);
    const { template3Response, setTemplate3Response } = useContext(Template3Context);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [modalPositionImage, setModalPositionImage] = useState({ top: 0, left: 0 });
    const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1619410283995-43d9134e7656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMERldmVsb3BtZW50fGVufDB8MHx8fDE3MDIzNjI3NzR8MA&ixlib=rb-4.0.3&q=80&w=1920")
    const [selectedImage1, setSelectedImage1] = useState("https://images.unsplash.com/photo-1619410283995-43d9134e7656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMERldmVsb3BtZW50fGVufDB8MHx8fDE3MDIzNjI3NzR8MA&ixlib=rb-4.0.3&q=80&w=1920")
    const [selectedImage2, setSelectedImage2] = useState("https://images.unsplash.com/photo-1619410283995-43d9134e7656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMERldmVsb3BtZW50fGVufDB8MHx8fDE3MDIzNjI3NzR8MA&ixlib=rb-4.0.3&q=80&w=1920")


    const [enteranceHeadText, setEnteranceHeadText] = useState('Transforming Ideas Into Solutions')
    const [enteranceDiscText, setEnteranceDiscText] = useState(response && response.descriptionName ? response.descriptionName : ' We leverage advanced technologies to transform your ideas into functional and innovative software applications.')
    const [enteranceButtonText, setEntereanceButtonText] = useState('Get Started')




    return (
        <div className='part3'>
            <Grid container >
                <Grid item md={6} xs={12}>
                    <div >
                        <div initialValue={enteranceHeadText} className='editHover entranceHead' backColor='white' fontSize={designHead.fontSize} selectedFont={designHead.font} color={designHead.color} textAlign={designHead.textAlign} />
                    </div>
                    <h3 >
                        <div initialValue={enteranceDiscText}  className='editHover entranceDisc' backColor='white' fontSize={designEntranceDisc.fontSize} selectedFont={designEntranceDisc.font} color={designEntranceDisc.color} textAlign={designEntranceDisc.textAlign} />
                    </h3>
                    <div className='entranceButtons'>
                        <a href='#'>
                            <div className='editHover button-63' initialValue={enteranceButtonText} backColor="white" fontSize={designEntranceButton.fontSize} selectedFont={designEntranceButton.font} color={designEntranceButton.color} textAlign={designEntranceButton.textAlign} />
                        </a>
                        <div className='entranceButtons'></div>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <div>
                        <img
                            src={selectedImage}
                            className="editHover changeImage entranceImage"
                            alt="Image"
                        />

                        <img
                            src={selectedImage1}
                            className="editHover changeImage entranceImage2"
                            alt="Image"
                        />

                        <img
                            src={selectedImage2}
                            className="editHover changeImage entranceImage3"
                            alt="Image"
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Template3Navbar;
