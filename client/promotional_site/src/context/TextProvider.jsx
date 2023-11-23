import { useState, useContext } from "react";
import TextContext from "./TextContext";

const TextProvider = ({ children }) => {
    const [header, setHeaderr] = useState(null);
    const [discription, setDiscriptionn] = useState(null);
    const [innovations, setInnovationss] = useState(null);
    const [dataSecurity, setDataSecurityy] = useState(null);

    const setHeader = (header) => {
        setHeaderr(header);
    };
    const setDiscription = (discription) => {
        setDiscriptionn(discription);
    };
    const setInnovations = (innovations) => {
        setInnovationss(innovations);
    };
    const setDataSecurity = (dataSecurity) => {
        setDataSecurityy(dataSecurity);
    };

    const values = {
        header,
        setHeader,
        discription,
        setDiscription,
        innovations,
        setInnovations,
        dataSecurity,
        setDataSecurity,
    };

    return <TextContext.Provider value={values}>{children}</TextContext.Provider>;
};

export default TextProvider;