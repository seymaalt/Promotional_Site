import { createContext } from "react";

const AuthContext = createContext({
  isAuthenticated: localStorage.getItem('token') || null,
  token: null,
  setToken : () => {},
  setIsAuthenticated: () => {},
});


export default AuthContext;