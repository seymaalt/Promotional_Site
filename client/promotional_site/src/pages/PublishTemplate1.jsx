import { useContext, useRef, useEffect } from 'react';
import Color from 'color-thief-react';
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

    const { publishToken } = useParams()
    axios.post(`${import.meta.env.VITE_PORT}/content/publishTemp1/${publishToken}`)
            .then(result => {
                console.log(result)
             
            })
            .catch(err => console.log(err));



    return (
        <div>
            <div className='part' style={{ backgroundColor: 'black' }}>
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
                {/* <PublishGalleryPromotionalSite /> */}
            </div>
            <div className='part'>
                <PublishInnovationsPromotionalSite />
                <PublishDataSecurityPromotionalSite />
            </div>
        </div>
    );
}