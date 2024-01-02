import { useState } from "react";
import PublishContext from "./PublishContext";

const PublishProvider = ({ children }) => {
    const [response, setResponsee] = useState(null);

    const setResponse = (response) => {
        setResponsee(response);
    };
    const getResponse = () => {
        return response;
    };

    const values = {
        response,
        getResponse,
        setResponse,
    };

    return <PublishContext.Provider value={values}>{children}</PublishContext.Provider>;
};

export default PublishProvider;