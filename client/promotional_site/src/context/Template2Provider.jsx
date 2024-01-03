import  { useState,useContext } from "react";
import Template2Context from "./Template2Context";
import GlobalContext from './GlobalContext';

const Template2Provider = ({ children }) => {
  const { response } = useContext(GlobalContext);

  const [Logo2,setLogo2] = useState((response == null ? null : response.logo));
  const [Description2,setDescription2] = useState((response == null ? null : response.description));
  const [DownloadLinks2,setDownloadLinks2] = useState();
  const [Images2,setImages2] = useState();
  const [Innovations2,setInnovations2] = useState((response == null ? null : response.innovations));
  const [DataSecurity2,setDataSecurity2] = useState();
  const [Comments2,setComments2] = useState();
  const [DownloadStarDeveloper,setDownloadStarDeveloper] = useState({
    star:response.star,
    rating:response.rating,
    developer:response.developer
  });




  const setTemp2Logo = (logo) => {
    setLogo2(logo);
  };

  const setTemp2Description = (description) => {
    setDescription2(description);
  };

  const setTemp2DownloadLinks = (description) => {
    setDownloadLinks2(description);
  };

  const setTemp2Images = (description) => {
    setImages2(description);
  };

  const setTemp2Innovations2 = (description) => {
    setInnovations2(description);
  };

  const setTemp2DataSecurity = (description) => {
    setDataSecurity2(description);
  };

  const setTemp2Comments = (description) => {
    setComments2(description);
  };


  const values = {
    Logo2,
    setTemp2Logo,
    Description2,
    setTemp2Description,
    DownloadLinks2,
    setTemp2DownloadLinks,
    Images2,
    setTemp2Images,
    Innovations2,
    setTemp2Innovations2,
    DataSecurity2,
    setTemp2DataSecurity,
    Comments2,
    setTemp2Comments,
    DownloadStarDeveloper,
  };

  return <Template2Context.Provider value={values}>{children}</Template2Context.Provider>;
};

export default Template2Provider;