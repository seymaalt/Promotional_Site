import { useState } from "react";
import Template3Context from "./Template3Context";

const Template3Provider = ({ children }) => {

  const [CompanyNameContext3, setCompanyNameContext33] = useState();
  const [NavigationText3, setNavigationText33] = useState();
  const [ButtonTextContext3, setButtonTextContext33] = useState();

  const [EntranceHeadContext3, setEntranceHeadContext33] = useState();
  const [EntranceDiscContext3, setEntranceDiscContext33] = useState();
  const [EntranceButtonContext3, setEntranceButtonContext33] = useState();
  const [EntranceImagesContext3, setEntranceImagesContext33] = useState();

  const [ServicesHeadContext3, setServicesHeadContext33] = useState();
  const [ServicesDiscContext3, setServicesDiscContext33] = useState();
  const [ServicesBoxContext3, setServicesBoxContext33] = useState();

  const setCompanyNameContext3 = (CompanyNameContext3) => {
    setCompanyNameContext33(CompanyNameContext3);
  };

  const setNavigationTextContext3 = (NavigationText3) => {
    setNavigationText33(NavigationText3);
  };

  const setButtonTextContext3 = (ButtonTextContext3) => {
    setButtonTextContext33(ButtonTextContext3);
  };



  const setEntranceHeadContext3 = (CompanyNameContext3) => {
    setEntranceHeadContext33(CompanyNameContext3);
  };

  const setEntranceDiscContext3 = (NavigationText3) => {
    setEntranceDiscContext33(NavigationText3);
  };

  const setEntranceButtonContext3 = (ButtonTextContext3) => {
    setEntranceButtonContext33(ButtonTextContext3);
  };

  const setEntranceImagesContext3 = (ButtonTextContext3) => {
    setEntranceImagesContext33(ButtonTextContext3);
  };

  

  const setServicesHeadContext3 = (NavigationText3) => {
    setServicesHeadContext33(NavigationText3);
  };

  const setServicesDiscContext3 = (ButtonTextContext3) => {
    setServicesDiscContext33(ButtonTextContext3);
  };

  const setServicesBoxContext3 = (ButtonTextContext3) => {
    setServicesBoxContext33(ButtonTextContext3);
  };

  const values = {
    CompanyNameContext3,
    setCompanyNameContext3,
    NavigationText3,
    setNavigationTextContext3,
    ButtonTextContext3,
    setButtonTextContext3,
    EntranceHeadContext3,
    setEntranceHeadContext3,
    EntranceDiscContext3,
    setEntranceDiscContext3,
    EntranceButtonContext3,
    setEntranceButtonContext3,
    EntranceImagesContext3,
    setEntranceImagesContext3,
    ServicesHeadContext3,
    setServicesHeadContext3,
    ServicesDiscContext3,
    setServicesDiscContext3,
    ServicesBoxContext3,
    setServicesBoxContext3,
  };

  return <Template3Context.Provider value={values}>{children}</Template3Context.Provider>;
};

export default Template3Provider;