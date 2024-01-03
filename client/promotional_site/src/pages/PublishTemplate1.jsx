import { useContext, useState, useRef, useEffect } from 'react';
import PublishContext from '../context/PublishContext';
import GlobalContext from '../context/GlobalContext';
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
        const fetchData = async () => {
            try {
                const result = await axios.post(`${import.meta.env.VITE_PORT}/content/publishTemp1/${publishToken}`);
                setResponse(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, [publishToken, setResponse]);
    



    return (
        <div className='temp1Page'>
           {response && 
           <div>
           <div className='part' style={{ backgroundColor:response.color }}>
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
            </div>} 
        </div>

    );
}