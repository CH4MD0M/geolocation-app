import styled from "styled-components";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

// Colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    red: "#EF4444",
};

const { primary, secondary, tertiary, darkLight, brand, green } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
`;

export const SignInContainer = styled.View`
    width: 100%;
    flex: 1;
    margin-top: 130px;
    justify-content: flex-end;
    align-items: center;
`;
export const SignUpContainer = styled.View`
    width: 100%;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 100px;
`;

export const InnerContainer = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
`;

export const MainContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`;

export const PageTitle = styled.Text`
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    color: ${Colors.brand};
    padding: 40px 0;

    ${(props) =>
        props.verified &&
        `
    font-size: 35px;
  `}
`;

export const StyledTextInput = styled.TextInput`
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    background-color: ${secondary};
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 33px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 33px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 18px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
    margin: 0 20px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`;
