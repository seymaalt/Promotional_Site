import  { useState } from "react";
import Template1Context from "./Template1Context";

const Template1Provider = ({ children }) => {
  const [template1Response, setTemplate1Responsee] = useState();
  
  const setTemplate1Response = (template1Response) => {
    setTemplate1Responsee(template1Response);
  };
  const getTemplate1Response = () => {
    return template1Response;
  };

  const values = {
    template1Response,
    getTemplate1Response,
    setTemplate1Response,  
  };

  return <Template1Context.Provider value={values}>{children}</Template1Context.Provider>;
};

export default Template1Provider;