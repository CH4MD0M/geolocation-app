import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator } from "react-native";
import KeyboardAvoidingWrapper from "./../components/UI/KeyboardAvoidingWrapper";

// URL
import { URL } from "../constants/ApiUrl";
// formik
import { Formik } from "formik";

// Back-End
import axios from "axios";
// CredentialsContext
import { CredentialsContext } from "../store/CredentialsContext";
// AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const SignInScreen = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    // credentials context
    const { storedCredentials, setStoredCredentials } =
        useContext(CredentialsContext);

    const handleSignIn = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = `${URL}/auth/signIn`;
        axios
            .post(url, credentials)
            .then((response) => {
                const result = response.data;
                console.log(result);
                const { message, status, data } = result;

                if (status !== "SUCCESS") {
                    handleMessage(message, status);
                } else {
                    persistLogin({ ...data }, message, status);
                }
                setSubmitting(false);
            })
            .catch((error) => {
                setSubmitting(false);
                handleMessage(error.response.data.message);
            });
    };

    // ??????????????? ??????
    const handleMessage = (message, type = "") => {
        setMessage(message);
        setMessageType(type);
    };

    // ????????? ??????

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <SignInContainer>
                    <PageTitle>?????????</PageTitle>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values, { setSubmitting }) => {
                            if (values.email == "" || values.password == "") {
                                handleMessage(
                                    "????????? ??????????????? ????????? ?????????."
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
                                <CustomTextInput
                                    label="????????? ??????"
                                    placeholder="sample@gmail.com"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    value={values.email}
                                    keyboardType="email-address"
                                    icon="mail"
                                />
                                <CustomTextInput
                                    label="????????????"
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
                                        ?????? ????????? ????????????????
                                    </ExtraText>
                                    <TextLink
                                        onPress={() =>
                                            navigation.navigate("SignUp")
                                        }
                                    >
                                        <TextLinkContent>
                                            ????????????
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

// CustomTextInput
const CustomTextInput = ({
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
