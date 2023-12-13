import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import CircleIcon from '@mui/icons-material/Circle';

const Services = () => {

    return (
        <div className='part'>
            <Grid container spacing={2}>
                <Grid item xs={6} >
                    <div className='servicesHeader'>
                        A Glance at Our Services
                    </div>
                </Grid>
                <Grid item xs={6} >
                    <div className='servicesDisc'>
                        We offer a broad spectrum of custom software development services ranging from enterprise software solutions to mobile applications, with a proven track record for success.
                    </div>
                </Grid>
                <Grid item xs={4} >
                    <Grid
                        className='servicesBox'
                        container
                        direction="column"
                        alignItems="center"
                    >
                        <img className='servicesImage' src='https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxNnx8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfDB8fHwxNzAyMzYyNzc0fDA&ixlib=rb-4.0.3&q=80&w=1920'></img>
                        <div className='servicesBoxHeader' >Custom Software Solutions</div>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={8}>
                                <div className='servicesBoxDisc'>Tailored to your specific needs.</div>
                            </Grid>
                            <Grid item xs={4}>
                                <CircleIcon sx={{ padding: '2rem', float: 'right', fontSize: '4rem', color: 'white' }}></CircleIcon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} >
                    <Grid
                        className='servicesBox'
                        container
                        direction="column"
                        alignItems="center"
                    >
                        <img className='servicesImage' src='https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxN3x8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfDB8fHwxNzAyMzYyNzc0fDA&ixlib=rb-4.0.3&q=80&w=1920'></img>
                        <div className='servicesBoxHeader'>Mobile Application Development</div>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={8}>
                                <div className='servicesBoxDisc'>Reach your customers on the go.</div>
                            </Grid>
                            <Grid item xs={4}>
                                <CircleIcon sx={{ padding: '2rem', float: 'right', fontSize: '4rem', color: 'white' }}></CircleIcon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} >
                    <Grid
                        className='servicesBox'
                        container
                        direction="column"
                        alignItems="center"
                    >
                        <img className='servicesImage' src='https://images.unsplash.com/photo-1580894908361-967195033215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxOHx8U29mdHdhcmUlMjBEZXZlbG9wbWVudHxlbnwwfDB8fHwxNzAyMzYyNzc0fDA&ixlib=rb-4.0.3&q=80&w=1920'></img>
                        <div className='servicesBoxHeader'>Enterprise Software Solutions</div>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item xs={8}>
                                <div className='servicesBoxDisc'>Streamline your business operations.</div>
                            </Grid>
                            <Grid item xs={4}>
                                <CircleIcon sx={{ padding: '2rem', float: 'right', fontSize: '4rem', color: 'white' }}></CircleIcon>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Services;