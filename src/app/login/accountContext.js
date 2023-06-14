import { createContext } from "react";

// export const AccountContext = createContext("");

const createAccountContext = () => {
    const AccountContext = createContext();
    return AccountContext;
};

export const AccountContext = createAccountContext();