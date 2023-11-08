import  { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalProvider = ({ children }) => {
  const [response, setResponsee] = useState(null);
  
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
  };

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;