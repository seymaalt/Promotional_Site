import { createContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  token: null,
  setToken : () => {},
  setIsAuthenticated: () => {},
});


export default AuthContext;