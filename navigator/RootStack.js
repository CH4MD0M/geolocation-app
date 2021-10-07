import React from "react";

// Colors
import { Colors } from "../components/styles";
const { primary, tertiary } = Colors;

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

import HomeScreen from "../screens/HomeScreen";
import GeolocationScreen from "../screens/GeolocationScreen";

import Main from "../screens/Main";
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "transparent",
                },
                headerTintColor: tertiary,
                headerTransparent: true,
                headerTitle: "",
                headerLeftContainerStyle: {
                    paddingLeft: 20,
                    paddingTop: 100,
                },
            }}
            initialRouteName="Home"
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Geolocations" component={GeolocationScreen} />
        </Drawer.Navigator>
    );
};
const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer style={{ backgroundColor: "red" }}>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "transparent",
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeftContainerStyle: {
                        paddingLeft: 20,
                    },
                }}
                initialRouteName="SignIn"
            >
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Main" component={MyDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
