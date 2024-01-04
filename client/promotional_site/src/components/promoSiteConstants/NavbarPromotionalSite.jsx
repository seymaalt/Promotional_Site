import * as React from 'react';
import { useState, useEffect, useContext } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PublishIcon from '@mui/icons-material/Publish';
import Logo from '../../assets/logosiyah.png'
import axios from "axios";
import AuthContext from '../../context/AuthContext';
import PublishContext from '../../context/PublishContext';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from "react-router-dom";
import Template1Context from '../../context/Template1Context';
import GlobalContext from '../../context/GlobalContext';
import Swal from 'sweetalert2'
import Template2Context from '../../context/Template2Context';
import Template3Context from '../../context/Template3Context';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ButtonAppBar = () => {
  const { token, setToken, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const { contextHeader, designHeader, contextLogo, color, contextDescription, designDescription,
    contextDownloadLinks, contextImages, contextInnovations, designInnovations, contextDataSecurity, designDataSecurity } = useContext(Template1Context);

  const { Logo2, Description2, DesignDescription2, DownloadLinks2, Images2, Innovations2, DesignInnovations2,
    DataSecurity2, DesignDataSecurity2, Comments2, DesignComments2, DownloadStarDeveloper } = useContext(Template2Context);

    const {    CompanyNameContext3,
      NavigationText3,
      ButtonTextContext3,
      EntranceHeadContext3,
      EntranceDiscContext3,
      EntranceButtonContext3,
      EntranceImagesContext3,
      ServicesHeadContext3,
      ServicesDiscContext3,
      ServicesBoxContext3,} = useContext(Template3Context);
  const handleDownload = async () => {
    try {
      const userResponse = await axios.get(`${import.meta.env.VITE_PORT}/user/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userId = userResponse.data.id;

      var fullUrl = window.location.href;

      const tempNo = fullUrl.match(/\d+$/)[0];
      console.log("Temp No: " + tempNo);
      let postData;

      if (tempNo == 1) {
        postData = {
          userId,
          contextHeader,
          designHeader,
          contextLogo,
          color,
          contextDescription,
          designDescription,
          contextDownloadLinks,
          contextImages,
          contextInnovations,
          designInnovations,
          contextDataSecurity,
          designDataSecurity,
          tempNo,
        };
      } else if (tempNo == 2) {
        postData = {
          userId,
          Logo2,
          Description2,
          DesignDescription2,
          DownloadLinks2,
          Images2,
          Innovations2,
          DesignInnovations2,
          DataSecurity2,
          DesignDataSecurity2,
          Comments2,
          DesignComments2,
          DownloadStarDeveloper,
          tempNo,
        };
      }else if(tempNo == 3){
        postData = {
          userId,
          CompanyNameContext3,
          NavigationText3,
          ButtonTextContext3,
          EntranceHeadContext3,
          EntranceDiscContext3,
          EntranceButtonContext3,
          EntranceImagesContext3,
          ServicesHeadContext3,
          ServicesDiscContext3,
          ServicesBoxContext3,
          tempNo,
        }
      }



      await axios.post(`${import.meta.env.VITE_PORT}/content/TempData/${tempNo}`, {
        data: postData,
      }).then(result => {
        console.log(result.data.publishToken)
        console.log(tempNo)
        Swal.fire({
          title: "Your Page is Ready!",
          html:
            `
        Your link: 
       <a href="${(`${import.meta.env.VITE_CLIENT_URL}/${tempNo}/` + result.data.publishToken)}" target='_blank'>${(`${import.meta.env.VITE_CLIENT_URL}/${tempNo}/` + result.data.publishToken)}</a>`,
          imageUrl: "https://i.hizliresim.com/o23f2f4.png",
          imageWidth: 130,
          imageAlt: "Custom image"
        });
      });

    } catch (error) {
      console.error('Error fetching data from the server!', error);
    }
  };

  return (
    <Box >
      <div className='appbar' style={{ backgroundColor: 'white', height: 70, width: '100%', top: 0 }}>       <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
          <Button onClick={() => navigate('/')}>
            <img src={Logo} className='navbarLogo'></img>
          </Button>
        </Typography>
        <div className='icons'>
          <div className='icon'>

            <Button id='iconButton' onClick={handleDownload} ><PublishIcon sx={{ marginRight: '5%' }} /><b>Publish</b></Button>

          </div>


        </div>

      </Toolbar>
      </div>
    </Box>
  );
}

export default ButtonAppBar;
