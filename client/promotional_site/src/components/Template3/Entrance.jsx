import React, { useState ,useContext} from 'react';
import Grid from "@mui/material/Grid";
import './style/template3.css'
import GlobalContext from '../../context/GlobalContext'

const Template3Navbar = () => {

    const { response } = useContext(GlobalContext);


    return (
        <div className='part'>
            <Grid container >
                <Grid item xs={6}>
                    <h1 className='entranceHead'>
                        Transforming Ideas Into Solutions
                    </h1>
                    <h3 className='entranceDisc'>
                    {response && response.descriptionName ? response.descriptionName : 'We leverage advanced technologies to transform your ideas into functional and innovative software applications.'}
                        
                    </h3>
                    <div className='entranceButtons'>
                        <a href='#' className='button-63'>
                            Get Started
                        </a>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMERldmVsb3BtZW50fGVufDB8MHx8fDE3MDIzNjI3NzR8MA&ixlib=rb-4.0.3&q=80&w=1920"
                            className="entranceImage"
                            alt="Image"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMERldmVsb3BtZW50fGVufDB8MHx8fDE3MDIzNjI3NzR8MA&ixlib=rb-4.0.3&q=80&w=1920"
                            className="entranceImage2"
                            alt="Image"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxTb2Z0d2FyZSUyMERldmVsb3BtZW50fGVufDB8MHx8fDE3MDIzNjI3NzR8MA&ixlib=rb-4.0.3&q=80&w=1920"
                            className="entranceImage3"
                            alt="Image"
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Template3Navbar;
