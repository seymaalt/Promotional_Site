import  { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalProvider = ({ children }) => {
  const [response, setResponsee] = useState(null);
  const [color1, setColor1] = useState(null);
  
  const setColor = (color) => {
    setColor1(color);
  }

  const setResponse = (response) => {
    setResponsee(response);
  };
  const getResponse = () => {
    return response;
  };

  const values = {
    response,
    getResponse,
    setResponse,
    color1,
    setColor
  };

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;