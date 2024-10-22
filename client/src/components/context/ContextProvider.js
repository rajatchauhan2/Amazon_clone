import React, { Children, createContext, useState} from "react";

export const LoginContext = createContext(null);

const ContextProvider = ( {Children}) => {
    const [account, setAccount] = useState("");

    return <>
    <LoginContext.Provider value={{account, setAccount}}>
        {Children}
    </LoginContext.Provider>
    </>;
};

export default ContextProvider;