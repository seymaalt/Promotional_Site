import { useState, useContext } from "react";
import EditPageContext from "./EditPageContext";

const EditPageProvider = ({ children }) => {
    const [fontSize, setFontSizee] = useState(30);
    const [color, setColorr] = useState("white");
    const [selectedFont, setSelectedFontt] = useState('Roboto, sans-serif');

    const setFontSize = (fontSize) => {
        setFontSizee(fontSize);
    };
    const setColor = (color) => {
        setColorr(color);
    };
    const setSelectedFont = (selectedFont) => {
        setSelectedFontt(selectedFont);
    };

    const values = {
        fontSize,
        setFontSize,
        color,
        setColor,
        selectedFont,
        setSelectedFont,
    };

    return <EditPageContext.Provider value={values}>{children}</EditPageContext.Provider>;
};

export default EditPageProvider;