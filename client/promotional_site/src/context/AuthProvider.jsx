import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {

  const [token, setTokenn] = useState(localStorage.getItem('token') || null);
 

  const setToken = async (token) => {
      setTokenn(token);
  };
  const getToken = () => {
    return token;
  };

  const logout = async () => {
    await setTokenn(null);
    await localStorage.removeItem('token'); 
  
  };

  const values = {
    token,
    getToken,
    setToken, 
    logout
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;