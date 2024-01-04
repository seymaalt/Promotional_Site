import { useContext, useEffect } from 'react';
import PublishContext from '../context/PublishContext.jsx';
import PublishComment from '../components/PublishTemplate2/PublishComment.jsx'
import PublishDataSecinn from '../components/PublishTemplate2/PublishDataSecinn.jsx'
import PublishGallery from '../components/PublishTemplate2/PublishGallery.jsx'
import PublishHead from '../components/PublishTemplate2/PublishHead.jsx'
import PublishRating from '../components/PublishTemplate2/PublishRating.jsx'
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
    }, [publishToken]);




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