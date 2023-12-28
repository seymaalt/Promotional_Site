import  { useState } from "react";
import Template2Context from "./Template2Context";

const Template2Provider = ({ children }) => {
  const [template2Response, setTemplate2Responsee] = useState(null);
  
  const setTemplate2Response = (template2Response) => {
    setTemplate2Responsee(template2Response);
  };
  const getTemplate2Response = () => {
    return template2Response;
  };

  const values = {
    template2Response,
    getTemplate2Response,
    setTemplate2Response,  
  };

  return <Template2Context.Provider value={values}>{children}</Template2Context.Provider>;
};

export default Template2Provider;