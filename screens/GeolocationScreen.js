import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import LocationPicker from "../components/LocationPicker";

// Styles
import {
    StyledContainer,
    InnerContainer,
    MainContainer,
} from "./../components/styles";

const GeolocationScreen = () => {
    return (
        <>
            <StyledContainer>
                <StatusBar style="light" />
                <InnerContainer>
                    <InnerContainer />
                    <MainContainer>
                        <LocationPicker />
                    </MainContainer>
                </InnerContainer>
            </StyledContainer>
        </>
    );
};

export default GeolocationScreen;

const styles = StyleSheet.create({});
