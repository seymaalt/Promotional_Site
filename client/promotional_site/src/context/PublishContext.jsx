import { createContext } from "react";

const PublishContext = createContext({
  response:{},
  setResponse : () => {},
});
export default PublishContext;