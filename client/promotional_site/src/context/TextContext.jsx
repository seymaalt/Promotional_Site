import { createContext } from "react";

const TextContext = createContext({
    header: {},
    setHeader: () => { },
    discription: {},
    setDiscription: () => { },
    innovations: {},
    setInnovations: () => { },
    dataSecurity: {},
    setDataSecurity: () => { },
});


export default TextContext;