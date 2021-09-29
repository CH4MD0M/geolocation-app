import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";

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
    SubTitle,
    Colors,
} from "./../components/styles";

import { View, TouchableOpacity } from "react-native";

const { darkLight, brand } = Colors;

import { Octicons, Fontisto, Ionicons } from "@expo/vector-icons";

const SignUpScreen = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);

    const showDatePicker = () => {
        setShow("date");
    };
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <SignUpContainer>
                <PageTitle>Sign Up</PageTitle>

                <Formik
                    initialValues={{
                        fullName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    onSubmit={(values) => {
                        values = { ...values };
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="아이디"
                                placeholder="아이디"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange("fullName")}
                                onBlur={handleBlur("fullName")}
                                value={values.fullName}
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
                                onChangeText={handleChange("confirmPassword")}
                                onBlur={handleBlur("confirmPassword")}
                                value={values.confirmPassword}
                                secureTextEntry={hidePassword}
                                icon="lock"
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox></MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>회원가입</ButtonText>
                            </StyledButton>
                            <Line />
                            <ExtraView>
                                <ExtraText>이미 계정이 있으신가요? </ExtraText>
                                <TextLink
                                    onPress={() =>
                                        navigation.navigate("SignIn")
                                    }
                                >
                                    <TextLinkContent>로그인</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                    )}
                </Formik>
            </SignUpContainer>
        </StyledContainer>
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
