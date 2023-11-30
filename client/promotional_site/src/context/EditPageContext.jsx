import { createContext } from "react";

const EditPageContext = createContext({
    fonstSize: {},
    setFontSize: () => { },
    color: {},
    setColor: () => { },
    selectedFont: {},
    setSelectedFont: () => { }
});


export default EditPageContext;