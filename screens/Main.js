import React from "react";
import { StatusBar } from "expo-status-bar";

import {
    PageTitle,
    StyledFormArea,
    StyledButton,
    InnerContainer,
    MainContainer,
    ButtonText,
    Line,
} from "./../components/styles";

const Main = ({ navigation, route }) => {
    console.log(route);
    const { name, email } = route.params.user;
    return (
        <>
            <StatusBar style="light" />
            <InnerContainer>
                <InnerContainer />
                <MainContainer>
                    <PageTitle verified={true}>안녕하세요! {name}님</PageTitle>
                    <PageTitle verified={true}>{email}</PageTitle>

                    <StyledFormArea>
                        <Line />
                        <StyledButton
                            onPress={() => {
                                navigation.navigate("SignIn");
                            }}
                        >
                            <ButtonText>로그아웃</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </MainContainer>
            </InnerContainer>
        </>
    );
};

export default Main;
