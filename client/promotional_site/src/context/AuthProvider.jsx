import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {

  const [token, setTokenn] = useState(localStorage.getItem('token') || null);
  const [isAuthenticated, setIsAuthenticatedd] = useState(false);

  const setToken = (token) => {
    setTokenn(token);
  };
  const getToken = () => {
    return token;
  };

  const setIsAuthenticated = () => {
    setIsAuthenticatedd(isAuthenticated);
  };
  const values = {
    token,
    isAuthenticated,
    getToken,
    setToken, 
    setIsAuthenticated
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;