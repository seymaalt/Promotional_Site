import { createContext } from "react";

const GlobalContext = createContext({
  response:{},
  setResponse : () => {},
});
export default GlobalContext;