import { useState, useContext } from "react";
import Template1Context from "./Template1Context";
import GlobalContext from './GlobalContext';
const Template1Provider = ({ children }) => {

  const { response, color1 } = useContext(GlobalContext);

  const [contextHeader, setContextHeader1] = useState((response == null ? null : response.header));
  const [designHeader, setDesignHeader1] = useState();
  const [contextLogo, setContextLogo1] = useState();
  const [color, setColor1] = useState((color1 == null ? 'black' : color1));
  const [contextDescription, setContextDescription1] = useState((response == null ? null : response.description));
  const [designDescription, setDesignDescription1] = useState();
  const [contextAppStoreLink, setContextAppStoreLink] = useState();
  const [contextGooglePlayLink, setContextGooglePlayLink] = useState();
  const [contextImages, setContextImages1] = useState();
  const [contextInnovations, setContextInnovations1] = useState((response == null ? null : response.innovations));
  const [designInnovations, setDesignInnovations1] = useState();
  const [contextDataSecurity, setContextDataSecurity1] = useState((response == null ? null : response.dataSecurity));
  const [designDataSecurity, setDesignDataSecurity1] = useState();

  const setContextHeader = (header, designHeader) => {
    setContextHeader1(header);
    setDesignHeader1(designHeader);
  };

  const setContextLogo = (logo) => {
    setContextLogo1(logo);
  }

  const setColor = (color) => {
    setColor1(color);
  }

  const setContextDescription = (description, designDescription) => {
    setContextDescription1(description);
    setDesignDescription1(designDescription);
  };

  const setContextDownloadLinks = (appStoreLink, googlePlayLink) => {
    setContextAppStoreLink(appStoreLink)
    setContextGooglePlayLink(googlePlayLink)
  }

  const setContextImages = (images) => {
    setContextImages1(images)
  }

  const setContextInnovations = (innovations, designInnovations) => {
    setContextInnovations1(innovations);
    setDesignInnovations1(designInnovations);
  };

  const setContextDataSecurity = (dataSecurity, designDataSecurity) => {
    setContextDataSecurity1(dataSecurity);
    setDesignDataSecurity1(designDataSecurity);
  };


  const values = {
    contextHeader,
    designHeader,
    setContextHeader,
    contextLogo,
    setContextLogo,
    color,
    setColor,
    contextDescription,
    designDescription,
    setContextDescription,
    contextAppStoreLink,
    contextGooglePlayLink,
    setContextDownloadLinks,
    contextImages,
    setContextImages,
    contextInnovations,
    designInnovations,
    setContextInnovations,
    contextDataSecurity,
    designDataSecurity,
    setContextDataSecurity,
  };

  return <Template1Context.Provider value={values}>{children}</Template1Context.Provider>;
};

export default Template1Provider;