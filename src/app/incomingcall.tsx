import { Stack } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, StyleSheet, Animated, Dimensions, TouchableOpacity } from "react-native";
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

  const buttons = [
    {
      id: 1,
      image: require("../assets/images/volume.png"),
    },
    {
      id: 2,
      image: require("../assets/images/mute.png"),
    },
    {
      id: 3,
      image: require("../assets/images/reject.png"),
    },
    {
      id: 4,
      image: require("../assets/images/video.png"),
    },
    {
      id: 5,
      image: require("../assets/images/camera.png"),
    },
  ];

  return (
    <>
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
          source={require("../assets/images/incoming-caller.png")}
          style={[
            {
              width: "100%",
              height: "100%",
              zIndex: -999,
            },
          ]}
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
            gap:20,
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
