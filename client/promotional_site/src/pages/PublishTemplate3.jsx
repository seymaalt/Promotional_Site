import { useContext, useEffect } from 'react';
import PublishContext from '../context/PublishContext';
import PublishContact from '../components/PublishTemplate3/Contact';
import PublishEntrance from '../components/PublishTemplate3/Entrance';
import PublishFooter from '../components/PublishTemplate3/Footer';
import PublishNavbar from '../components/PublishTemplate3/Navbar';
import PublishServices from '../components/PublishTemplate3/Services';
import Grid from "@mui/material/Grid";

import axios from 'axios';
import { useParams } from 'react-router';

export default function PublishTemplate1() {
    const { response, setResponse } = useContext(PublishContext)

    const { publishToken } = useParams()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.post(`${import.meta.env.VITE_PORT}/content/publishTemp3/${publishToken}`);
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
                    <PublishNavbar></PublishNavbar>
                    <Grid container >
                        <Grid item md={2}></Grid>
                        <Grid item md={8}>
                            <PublishEntrance></PublishEntrance>
                            <PublishServices></PublishServices>
                            <PublishContact></PublishContact>
                        </Grid>
                        <Grid item md={2}></Grid>
                    </Grid>
                    <PublishFooter></PublishFooter>
                </div>}
        </div>
    );
}