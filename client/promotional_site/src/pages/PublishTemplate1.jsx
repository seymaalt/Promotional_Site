import { useContext, useState, useRef, useEffect } from 'react';
import PublishContext from '../context/PublishContext';
import PublishLogoPromotionalSite from '../components/PublishTemplate1/PublishLogoPromotionalSite';
import PublishHeaderPromotionalSite from '../components/PublishTemplate1/PublishHeaderPromotionalSite';
import PublishDiscriptionPromotionalSite from '../components/PublishTemplate1/PublishDiscriptionPromotionalSite';
import PublishDownloadButtonPromotionalSite from '../components/PublishTemplate1/PublishDownloadButtonPromotionalSite';
import PublishGalleryPromotionalSite from '../components/PublishTemplate1/PublishGalleryPromotionalSite';
import PublishInnovationsPromotionalSite from '../components/PublishTemplate1/PublishInnovationsPromotionalSite';
import PublishDataSecurityPromotionalSite from '../components/PublishTemplate1/PublishDataSecurityPromotionalSite';
import axios from 'axios';
import { useParams } from 'react-router';

export default function PublishTemplate1() {
    const { response, setResponse } = useContext(PublishContext)

    const { publishToken } = useParams()


    useEffect(() => {
        axios.post(`${import.meta.env.VITE_PORT}/content/publishTemp1/${publishToken}`)
            .then(result => {
                setResponse(result.data)
                console.log(result.data)
            })
    })

    return (
        <div>
            <div className='part' style={{ backgroundColor: response.color == null ? 'black' : response.color }}>
                <PublishLogoPromotionalSite />
                <PublishHeaderPromotionalSite />
                <div className='disc' >
                    <PublishDiscriptionPromotionalSite />
                </div>
                <div className='downloadButtons'>
                    <PublishDownloadButtonPromotionalSite />
                </div>
            </div>
            <div className='part'>
                <PublishGalleryPromotionalSite />
            </div>
            <div className='part'>
                <PublishInnovationsPromotionalSite />
                <PublishDataSecurityPromotionalSite />
            </div>
        </div >
    );
}