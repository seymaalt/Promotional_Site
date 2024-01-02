import { useContext, useRef, useEffect } from 'react';
import Color from 'color-thief-react';
import PublishLogoPromotionalSite from '../components/PublishTemplate1/PublishLogoPromotionalSite';
import PublishHeaderPromotionalSite from '../components/PublishTemplate1/PublishHeaderPromotionalSite';
import PublishDiscriptionPromotionalSite from '../components/PublishTemplate1/PublishDiscriptionPromotionalSite';
import PublishDownloadButtonPromotionalSite from '../components/PublishTemplate1/PublishDownloadButtonPromotionalSite';
import PublishGalleryPromotionalSite from '../components/PublishTemplate1/PublishGalleryPromotionalSite';
import PublishInnovationsPromotionalSite from '../components/PublishTemplate1/PublishInnovationsPromotionalSite';
import PublishDataSecurityPromotionalSite from '../components/PublishTemplate1/PublishDataSecurityPromotionalSite';


export default function PublishTemplate1() {

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