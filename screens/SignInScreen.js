import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator } from "react-native";

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
const { primary, darkLight, brand } = Colors;
// Back-End
import axios from "axios";

const SignInScreen = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handleSignIn = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = "https://fierce-earth-37794.herokuapp.com/user/signin";
        axios
            .post(url, credentials)
            .then((response) => {
                const result = response.data;
                const { message, status, data } = result;

                if (status !== "SUCCESS") {
                    handleMessage(message, status);
                } else {
                    navigation.navigate("Main", { ...data });
                }
                setSubmitting(false);
            })
            .catch((error) => {
                // console.log(error.response);
                setSubmitting(false);
                handleMessage(error.response.data.message);
            });
    };

    const handleMessage = (message, type = "FAILED") => {
        setMessage(message);
        setMessageType(type);
    };
    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <SignInContainer>
                    <PageTitle>Sign In</PageTitle>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values, { setSubmitting }) => {
                            if (values.email == "" || values.password == "") {
                                handleMessage(
                                    "아이디 비밀번호를 입력해 주세요."
                                );
                                setSubmitting(false);
                            } else {
                                handleSignIn(values, setSubmitting);
                            }
                        }}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            isSubmitting,
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
                                <MsgBox type={messageType}>{message}</MsgBox>
                                {!isSubmitting && (
                                    <StyledButton onPress={handleSubmit}>
                                        <ButtonText>Login</ButtonText>
                                    </StyledButton>
                                )}
                                {isSubmitting && (
                                    <StyledButton disabled={true}>
                                        <ActivityIndicator
                                            size="large"
                                            color={primary}
                                        />
                                    </StyledButton>
                                )}

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
