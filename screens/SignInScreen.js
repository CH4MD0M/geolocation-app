import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

// formik
import { Formik } from "formik";
// Keyboard Avoiding View
import KeyboardAvoidingWrapper from "./../components/UI/KeyboardAvoidingWrapper";
// Icons
import { Octicons, Fontisto, Ionicons } from "@expo/vector-icons";
// Styles
import {
    StyledContainer,
    PageTitle,
    StyledInputLabel,
    StyledFormArea,
    StyledButton,
    StyledTextInput,
    LeftIcon,
    RightIcon,
    SignInContainer,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    Colors,
} from "./../components/styles";
// Colors
const { darkLight, brand } = Colors;

const SignInScreen = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <SignInContainer>
                    <PageTitle>Sign In</PageTitle>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values) => {
                            // console.log(values);
                            navigation.navigate("Main");
                        }}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                        }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="이메일 주소"
                                    placeholder="sample@gmail.com"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    value={values.email}
                                    keyboardType="email-address"
                                    icon="mail"
                                />
                                <MyTextInput
                                    label="비밀번호"
                                    placeholder="* * * * * * *"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    value={values.password}
                                    secureTextEntry={hidePassword}
                                    icon="lock"
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MsgBox></MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Login</ButtonText>
                                </StyledButton>
                                <Line />

                                <ExtraView>
                                    <ExtraText>
                                        아직 회원이 아니신가요?
                                    </ExtraText>
                                    <TextLink
                                        onPress={() =>
                                            navigation.navigate("SignUp")
                                        }
                                    >
                                        <TextLinkContent>
                                            회원가입
                                        </TextLinkContent>
                                    </TextLink>
                                </ExtraView>
                            </StyledFormArea>
                        )}
                    </Formik>
                </SignInContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({
    label,
    icon,
    isPassword,
    hidePassword,
    setHidePassword,
    ...props
}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon
                    onPress={() => {
                        setHidePassword(!hidePassword);
                    }}
                >
                    <Ionicons
                        name={hidePassword ? "md-eye-off" : "md-eye"}
                        size={30}
                        color={darkLight}
                    />
                </RightIcon>
            )}
        </View>
    );
};
export default SignInScreen;
