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

const Main = () => {
    return (
        <>
            <StatusBar style="light" />
            <InnerContainer>
                <InnerContainer />
                <MainContainer>
                    <PageTitle verified={true}>
                        안녕하세요! UserName님
                    </PageTitle>
                    {/* <SubTitle welcome={true}>User Name</SubTitle> */}
                    {/* <SubTitle welcome={true}>email@gmail.com</SubTitle> */}
                    <StyledFormArea>
                        <Line />
                        <StyledButton onPress={() => {}}>
                            <ButtonText>로그아웃</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </MainContainer>
            </InnerContainer>
        </>
    );
};

export default Main;
