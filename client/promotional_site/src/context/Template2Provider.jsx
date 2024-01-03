import { useState, useContext } from "react";
import Template2Context from "./Template2Context";
import GlobalContext from './GlobalContext';

const Template2Provider = ({ children }) => {
  const { response } = useContext(GlobalContext);

  const [Logo2, setLogo2] = useState((response == null ? null : response.logo));
  const [Description2, setDescription2] = useState((response == null ? null : response.description));
  const [designDescription2, setDesignDescription2] = useState();
  const [DownloadLinks2, setDownloadLinks2] = useState();
  const [Images2, setImages2] = useState();
  const [Innovations2, setInnovations2] = useState((response == null ? null : response.innovations));
  const [designInnovations2, setDesignInnovations2] = useState();
  const [DataSecurity2, setDataSecurity2] = useState();
  const [designDataSecurity2, setDesignDataSecurity2] = useState();
  const [Comments2, setComments2] = useState();
  const [designComments2, setDesignComments2] = useState();
  const [DownloadStarDeveloper, setDownloadStarDeveloper] = useState({
    star: response == null ? null : response.star,
    rating: response == null ? null : response.rating,
    developer: response == null ? null : response.developer

  const setTemp2Logo = (logo) => {
    setLogo2(logo);
  };

  const setTemp2Description = (description, designDescription) => {
    setDescription2(description);
    setDesignDescription2(designDescription);
  };

  const setTemp2DownloadLinks = (description) => {
    setDownloadLinks2(description);
  };

  const setTemp2Images = (description) => {
    setImages2(description);
  };

  const setTemp2Innovations2 = (description, designDescription) => {
    setInnovations2(description);
    setDesignInnovations2(designDescription)
  };

  const setTemp2DataSecurity = (description, designDescription) => {
    setDataSecurity2(description);
    setDesignDataSecurity2(designDescription)
  };

  const setTemp2Comments = (description, designDescription) => {
    setComments2(description);
    setDesignComments2(designDescription)
  };

  const setTemp2DownloadStarDeveloper = (star, rating, developer) => {
    setDownloadStarDeveloper({ star: star, rating: rating, developer: developer });
  };


  const values = {
    Logo2,
    setTemp2Logo,
    Description2,
    designDescription2,
    setTemp2Description,
    DownloadLinks2,
    setTemp2DownloadLinks,
    Images2,
    setTemp2Images,
    Innovations2,
    designInnovations2,
    setTemp2Innovations2,
    DataSecurity2,
    designDataSecurity2,
    setTemp2DataSecurity,
    Comments2,
    designComments2,
    setTemp2Comments,
    DownloadStarDeveloper,
    setTemp2DownloadStarDeveloper
  };

  return <Template2Context.Provider value={values}>{children}</Template2Context.Provider>;
};

export default Template2Provider;