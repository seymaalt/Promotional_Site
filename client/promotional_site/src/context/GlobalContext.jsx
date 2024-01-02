import { createContext } from "react";

const GlobalContext = createContext({
  response: {},
  setResponse: () => { },
  color1: null,
  setColor: () => { },
});
export default GlobalContext;