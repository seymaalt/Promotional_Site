import  { useState } from "react";
import Template3Context from "./Template3Context";

const Template3Provider = ({ children }) => {
  const [template3Response, setTemplate3Responsee] = useState(null);
  
  const setTemplate3Response = (template3Response) => {
    setTemplate3Responsee(template3Response);
  };
  const getTemplate3Response = () => {
    return template3Response;
  };

  const values = {
    template3Response,
    getTemplate3Response,
    setTemplate3Response,  
  };

  return <Template3Context.Provider value={values}>{children}</Template3Context.Provider>;
};

export default Template3Provider;