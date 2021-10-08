import React from "react";
// CredentialsContext
import { CredentialsContext } from "../store/CredentialsContext";

// Colors
import { Colors } from "../components/styles";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import GeolocationScreen from "../screens/GeolocationScreen";

// Drawer
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "transparent",
                },
                headerTintColor: "#1F2937",
                headerTransparent: true,
                headerTitle: "",
                headerLeftContainerStyle: {
                    paddingLeft: 10,
                    paddingTop: 50,
                },
            }}
            initialRouteName="Home"
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Geolocations" component={GeolocationScreen} />
        </Drawer.Navigator>
    );
};

// Stack
const Stack = createStackNavigator();
const RootStack = () => {
    return (
        <CredentialsContext.Consumer>
            {({ storedCredentials }) => (
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: "transparent",
                            },
                            headerTintColor: "#1F2937",
                            headerTransparent: true,
                            headerTitle: "",
                            headerLeftContainerStyle: {
                                paddingLeft: 10,
                                paddingTop: 50,
                            },
                        }}
                        initialRouteName="SignIn"
                    >
                        {storedCredentials ? (
                            <Stack.Screen name="Main" component={MyDrawer} />
                        ) : (
                            <>
                                <Stack.Screen
                                    name="SignIn"
                                    component={SignInScreen}
                                />
                                <Stack.Screen
                                    name="SignUp"
                                    component={SignUpScreen}
                                />
                            </>
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </CredentialsContext.Consumer>
    );
};

export default RootStack;
