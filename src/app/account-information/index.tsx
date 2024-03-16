import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import React, { useEffect, useRef, useState } from "react";
import { Stack, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import AppBar from "../../components/appBar";
import colors from "../../constants/Colors";
const { width } = Dimensions.get("window");

export default function AccountInformation() {
   const slideIn = useSharedValue(0);
   const fadeIn = useSharedValue(0);
   useEffect(() => {
     const timer = setTimeout(() => {
       slideIn.value = withTiming(1, {
         duration: 500,
         easing: Easing.bezier(0.25, 0.1, 0.25, 1),
       });
       fadeIn.value = withTiming(1, {
         duration: 600,
         easing: Easing.linear,
       });
     }, 200);

     return () => clearTimeout(timer);
   }, []);
   const animatedStyle = useAnimatedStyle(() => {
     const translateY = 0.3 * width * (1 - slideIn.value);
     return {
       opacity: fadeIn.value,
       transform: [{ translateY }],
     };
   });


  const accountItem = [
    {
      id: 1,
      title: "Account name",
      account: "Daniel Israel",
    },
    {
      id: 2,
      title: "Email address",
      account: "danielsnr.design@gmail.com",
    },
    {
      id: 3,
      title: "Phone numbers",
      account: "+2348160523342",
    },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          title: "Account Information",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar
        title="Account information"
        onPress={() => router.push("/home/account")}
      />
      <Animated.View style={[styles.container, animatedStyle]}>
        <View
          style={{
            paddingHorizontal: RFValue(15),
            marginTop: RFValue(15),
          }}>
          <Text
            style={{
              color: "#5F5F5F",
              fontSize: RFValue(14),
              fontFamily: "urbanist-medium",
            }}>
            Manage information associated with this account. These informations
            are what helps in account recovery
          </Text>
          <View
            style={{
              flexDirection: "column",
              gap: RFValue(20),
              marginTop: RFValue(20),
            }}>
            {accountItem?.map((item) => (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: "outfit-semibold",
                      lineHeight: RFValue(20),
                      color: "#000000",
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontFamily: "urbanist-medium",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}>
                    {item.account}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Animated.View>
      <View
        style={{
          paddingHorizontal: RFValue(15),
          marginBottom: RFValue(20),
        }}>
        <TouchableOpacity
          onPress={() => router.push("/account-information/password")}
          style={styles.startBtn}>
          <Text style={styles.startText}>Edit information</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#fff",
    position: "relative",
  },

  smallText: {
    marginTop: 10,
    fontSize: RFValue(11),
    fontFamily: "satoshi-medium",
    color: "#fff",
  },

  button: {
    fontFamily: "satoshi-bold",
    textAlign: "center",
    color: "#fff",
    fontSize: RFValue(14),
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 10,
    position: "absolute",
    left: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(5),
  },
  startBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginTop: RFValue(10),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-semibold",
    textAlign: "center",
  },
});
