import { useContext, useState, useRef, useEffect } from 'react';
import PublishContext from '../context/PublishContext';
import PublishComment from '../components/PublishTemplate2/PublishComment'
import PublishDataSecinn from '../components/PublishTemplate2/PublishDataSecinn'
import PublishGallery from '../components/PublishTemplate2/PublishGallery'
import PublishHead from '../components/PublishTemplate2/PublishHead'
import PublishRating from '../components/PublishTemplate2/PublishRating'
import FooterPromotionalSite from "../components/Template1/FooterPromotionalSite.jsx";
import Grid from "@mui/material/Grid";




import axios from 'axios';
import { useParams } from 'react-router';

export default function PublishTemplate1() {
    const { response, setResponse } = useContext(PublishContext)

    const { publishToken } = useParams()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.post(`${import.meta.env.VITE_PORT}/content/publishTemp2/${publishToken}`);
                setResponse(result.data);
                console.log(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [publishToken, setResponse]);




    return (
        <div>
            {response &&
                <div>
                    <Grid container >
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <div className="part" >
                                <div >
                                    <div className="part" style={{ marginTop: "70px" }}>
                                        <PublishHead />
                                    </div>
                                </div>
                            </div>
                            <div className="part" >
                                <PublishRating></PublishRating>
                            </div>
                            <div className="part">
                                <PublishDataSecinn ></PublishDataSecinn>
                            </div>
                            <div className="part">
                                <PublishGallery ></PublishGallery>
                            </div>
                            <div className="part">
                                <PublishComment ></PublishComment>
                            </div>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                    <FooterPromotionalSite />
                </div>}
        </div>
    );
}