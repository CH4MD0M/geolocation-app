import React, { useState } from "react";
// Navigation Stack
import RootStack from "./navigator/RootStack";
// Apploading
import AppLoading from "expo-app-loading";
// AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";
// CredentialsContext
import { CredentialsContext } from "./store/CredentialsContext";

const App = () => {
    const [appReady, setAppReady] = useState(false);
    const [storedCredentials, setStoredCredentials] = useState("");

    const checkLoginCredentials = () => {
        AsyncStorage.getItem("GeolocationCredentials")
            .then((result) => {
                if (result !== null) {
                    setStoredCredentials(JSON.parse(result));
                } else {
                    setStoredCredentials(null);
                }
            })
            .catch((error) => console.log(error));
    };

    if (!appReady) {
        return (
            <AppLoading
                startAsync={checkLoginCredentials}
                onFinish={() => setAppReady(true)}
                onError={console.warn}
            />
        );
    }
    return (
        <CredentialsContext.Provider
            value={{ storedCredentials, setStoredCredentials }}
        >
            <RootStack />
        </CredentialsContext.Provider>
    );
};

export default App;
