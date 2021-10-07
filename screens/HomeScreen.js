import React from "react";
import { StatusBar } from "expo-status-bar";
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
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = (props) => {
    // const { name, email } = props.route.params.params.user;
    return (
        <SafeAreaView>
            <StyledContainer>
                <StatusBar style="light" />
                <InnerContainer>
                    <InnerContainer />
                    <MainContainer>
                        <PageTitle verified={true}>안녕하세요! 님</PageTitle>
                        <PageTitle verified={true}></PageTitle>

                        <StyledFormArea>
                            <Line />
                            <StyledButton
                                onPress={() => {
                                    // props.navigation.navigate("SignIn");
                                }}
                            >
                                <ButtonText>로그아웃</ButtonText>
                            </StyledButton>
                        </StyledFormArea>
                    </MainContainer>
                </InnerContainer>
            </StyledContainer>
        </SafeAreaView>
    );
};

export default HomeScreen;
