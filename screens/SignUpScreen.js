import React, { useState } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import KeyboardAvoidingWrapper from "./../components/UI/KeyboardAvoidingWrapper";
import { Octicons, Ionicons } from "@expo/vector-icons";
// URL
import { URL } from "../constants/ApiUrl";

// formik
import { Formik } from "formik";

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
    SignUpContainer,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    Colors,
} from "./../components/styles";

const { primary, darkLight, brand } = Colors;

import axios from "axios";

const SignUpScreen = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    // Form handling
    const handleSignup = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = `${URL}/auth/signUp`;
        axios
            .post(url, credentials)
            .then((response) => {
                const result = response.data;
                // console.log(result);
                const { status, message } = result;

                if (status !== "SUCCESS") {
                    handleMessage(message, status);
                } else {
                    navigation.navigate("SignIn");
                }
                setSubmitting(false);
            })
            .catch((error) => {
                setSubmitting(false);
                handleMessage("접속 오류! 네트워크 연결 설정을 확인하세요.");
                // console.log(error.toJSON());
            });
    };

    const handleMessage = (message, type = "") => {
        setMessage(message);
        setMessageType(type);
    };

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <SignUpContainer>
                    <PageTitle>회원가입</PageTitle>

                    <Formik
                        initialValues={{
                            displayName: "",
                            email: "",
                            password: "",
                            passwordConfirm: "",
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            if (
                                values.displayName == "" ||
                                values.email == "" ||
                                values.password == "" ||
                                values.passwordConfirm == ""
                            ) {
                                handleMessage("모든 항목을 입력해주세요.");
                                setSubmitting(false);
                            } else if (
                                values.password !== values.passwordConfirm
                            ) {
                                handleMessage("패스워드가 일치하지 않습니다.");
                                setSubmitting(false);
                            } else {
                                handleSignup(values, setSubmitting);
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
                                    label="이름"
                                    placeholder="이름"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange("displayName")}
                                    onBlur={handleBlur("displayName")}
                                    value={values.displayName}
                                    icon="person"
                                />
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
                                    placeholder="* * * * * * * *"
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
                                <MyTextInput
                                    label="비밀번호 확인"
                                    placeholder="* * * * * * * *"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange(
                                        "passwordConfirm"
                                    )}
                                    onBlur={handleBlur("passwordConfirm")}
                                    value={values.passwordConfirm}
                                    secureTextEntry={hidePassword}
                                    icon="lock"
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MsgBox type={messageType}>{message}</MsgBox>

                                {!isSubmitting && (
                                    <StyledButton onPress={handleSubmit}>
                                        <ButtonText>Signup</ButtonText>
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
                                        이미 계정이 있으신가요?
                                    </ExtraText>
                                    <TextLink
                                        onPress={() =>
                                            navigation.navigate("SignIn")
                                        }
                                    >
                                        <TextLinkContent>
                                            로그인
                                        </TextLinkContent>
                                    </TextLink>
                                </ExtraView>
                            </StyledFormArea>
                        )}
                    </Formik>
                </SignUpContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

SignUpScreen.navigationOptions = {
    headerTitle: "SignUp",
};

const MyTextInput = ({
    label,
    icon,
    isPassword,
    hidePassword,
    setHidePassword,
    isDate,
    showDatePicker,
    ...props
}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && (
                <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props} />
                </TouchableOpacity>
            )}

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

export default SignUpScreen;
