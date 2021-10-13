import React, { useState, useEffect, useRef, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

// URL
import { API } from "../constants/URl";

// CredentialsContext
import { CredentialsContext } from "../store/CredentialsContext";

import {
    LocationButton,
    ButtonText,
    MsgBox,
    Line,
} from "./../components/styles";
import axios from "axios";

const LocationPicker = () => {
    // context
    const { storedCredentials } = useContext(CredentialsContext);

    const [Latitude, setLatitude] = useState(null);
    const [Longitude, setLongitude] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isActivate, setIsActivate] = useState(false);
    // const [isReadyToSend, setIsReadyToSend] = useState(false);
    const interval = useRef();

    useEffect(() => {
        if (isActivate) {
            interval.current = setInterval(GetLocation, 5000);
        }
        return () => {
            clearInterval(interval.current);
        };
    }, [isActivate]);

    // 위치정보 수집
    const GetLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            setErrorMsg("위치 액세스 권한이 거부되었습니다.");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);

        SendLocation();
    };

    // 위치정보 전달
    const SendLocation = async () => {
        const { email } = storedCredentials.user;

        try {
            await axios.post(`${API}/user/locationWrite`, {
                email: email,
                locations: {
                    coordinates: [Longitude, Latitude],
                },
            });
        } catch (err) {
            console.error(err);
        }
    };

    const sendButton = () => {
        setIsActivate(true);
    };

    const cancelSendButton = () => {
        setIsActivate(false);
        setLongitude(null);
        setLatitude(null);
    };

    return (
        <>
            <Line />
            <MsgBox>{errorMsg}</MsgBox>

            {!isActivate ? (
                <LocationButton status={isActivate} onPress={sendButton}>
                    <ButtonText>위치정보 보내기 활성화</ButtonText>
                </LocationButton>
            ) : (
                <LocationButton status={isActivate} onPress={cancelSendButton}>
                    <ButtonText>위치정보 보내기 비활성화</ButtonText>
                </LocationButton>
            )}

            <Line />
        </>
    );
};

export default LocationPicker;
