import React, { createContext } from "react";

// Credential context
export const CredentialsContext = React.createContext({
    storedCredentials: {},
    setStoredCredentials: () => {},
});
