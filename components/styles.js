import styled from "styled-components";
import Constants from "expo-constants";
const StatusBarHeight = Constants.statusBarHeight;

// Colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    darklight: "#9ca3af",
    main: "#358467",
    green: "#47d886",
    red: "#EF4444",
};
const { primary, secondary, darklight, main } = Colors;

export const GeolocationContainer = styled.View`
    width: 100%;
    flex: 1;
    margin-top: 130px;
    justify-content: flex-end;
    align-items: center;
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

// StyledContainer
export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
`;
// InnerContainer
export const InnerContainer = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
`;
// MainContainer
export const MainContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`;

// Title
export const PageTitle = styled.Text`
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    color: ${Colors.main};
    padding: 20px 0;
    margin-top: 40px;

    ${(props) =>
        props.verified &&
        `
    font-size: 25px;
  `}
`;
// Input
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
    color: #1f2937;
`;
export const StyledInputLabel = styled.Text`
    color: #1f2937;
    font-size: 13px;
    text-align: left;
`;

// Icon
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

// Button
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${main};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 10px 0;
    height: 60px;
`;
export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
`;

// Message box
export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${(props) => (props.type == "SUCCESS" ? "green" : "red")};
`;

// Form
export const StyledFormArea = styled.View`
    width: 90%;
    margin-top: 50px;
`;

// Text
export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;
export const TextLinkContent = styled.Text`
    color: ${main};
    font-size: 15px;
`;

// Etc
export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 18px;
`;
export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: #1f2937;
    font-size: 15px;
    margin: 0 20px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darklight};
    margin-vertical: 10px;
`;
