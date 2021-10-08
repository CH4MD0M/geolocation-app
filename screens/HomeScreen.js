import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";

// CredentialsContext
import { CredentialsContext } from "../store/CredentialsContext";
// AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";
// Styles
import {
    StyledContainer,
    PageTitle,
    StyledFormArea,
    StyledButton,
    InnerContainer,
    MainContainer,
    ButtonText,
    Line,
} from "./../components/styles";

const HomeScreen = () => {
    // context
    const { storedCredentials, setStoredCredentials } =
        useContext(CredentialsContext);
    const { name, email } = storedCredentials.user
        ? storedCredentials.user
        : storedCredentials;

    // LogoutHandler
    const logoutHandler = () => {
        AsyncStorage.removeItem("GeolocationCredentials")
            .then(() => {
                setStoredCredentials("");
            })
            .catch((error) => console.log(error));
    };
    return (
        <>
            <StyledContainer>
                <StatusBar style="light" />
                <InnerContainer>
                    <InnerContainer />
                    <MainContainer>
                        <PageTitle verified={true}>
                            안녕하세요! {name}님
                        </PageTitle>
                        <PageTitle verified={true}>{email}</PageTitle>

                        <StyledFormArea>
                            <Line />
                            <StyledButton onPress={logoutHandler}>
                                <ButtonText>로그아웃</ButtonText>
                            </StyledButton>
                        </StyledFormArea>
                    </MainContainer>
                </InnerContainer>
            </StyledContainer>
        </>
    );
};

export default HomeScreen;
