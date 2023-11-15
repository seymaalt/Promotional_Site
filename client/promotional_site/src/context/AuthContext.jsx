import { createContext } from "react";

const AuthContext = createContext({
  token: null,
  setToken : () => {},
  logout: () => {},
});


export default AuthContext;