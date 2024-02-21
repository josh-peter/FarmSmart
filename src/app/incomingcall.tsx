import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, StyleSheet, Animated, Dimensions, TouchableOpacity } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");

export default function IncomingCall() {

    const fade = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const animation = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation();
  }, []);


  return (
    <>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          title: "Incoming call",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Animated.View
        style={{
          flex: 1,
          width: width,
          backgroundColor: "#fff",
          position: "relative",
          opacity: fade,
          transform: [
            {
              translateY: fade.interpolate({
                inputRange: [0, 1],
                outputRange: [160, 0],
              }),
            },
          ],
        }}
      >
        <Image
          resizeMode="contain"
          source={require("../assets/images/zoomcall.png")}
          style={{
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(100),
            zIndex: -999,
          }}
        />
        <Image
          resizeMode="contain"
          source={require("../assets/images/receiver.png")}
          style={[
            {
              width: 160,
              height: 160,
              position: "absolute",
              top: RFValue(60),
              right: RFValue(10),
            },
          ]}
        />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            position: "absolute",
            bottom: RFValue(30),
            right: RFValue(10),
            left: RFValue(10),
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../assets/images/volume.png")}
            style={[
              {
                width: 60,
                height: 60,
              },
            ]}
          />
          <Image
            resizeMode="contain"
            source={require("../assets/images/mute.png")}
            style={[
              {
                width: 60,
                height: 60,
              },
            ]}
          />
          <TouchableOpacity onPress={()=> router.push("/home/appointment")}>
            <Image
              resizeMode="contain"
              source={require("../assets/images/reject.png")}
              style={[
                {
                  width: 60,
                  height: 60,
                },
              ]}
            />
          </TouchableOpacity>
          <Image
            resizeMode="contain"
            source={require("../assets/images/video.png")}
            style={[
              {
                width: 60,
                height: 60,
              },
            ]}
          />
          <Image
            resizeMode="contain"
            source={require("../assets/images/camera.png")}
            style={[
              {
                width: 60,
                height: 60,
              },
            ]}
          />
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}
