import React from "react";

// Colors
import { Colors } from "../components/styles";
const { primary, tertiary } = Colors;

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Main from "../screens/Main";

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
                <Stack.Screen
                    options={{
                        headerTintColor: primary,
                    }}
                    name="Main"
                    component={Main}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
