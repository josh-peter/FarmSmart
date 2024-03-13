import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Stack, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import AppBar from "../../components/appBar";
import colors from "../../constants/Colors";
const { width } = Dimensions.get("window");

export default function AccountInformation() {
  const fade = useRef(new Animated.Value(0)).current;

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
                outputRange: [150, 0],
              }),
            },
          ],
        }}>
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
        <TouchableOpacity onPress={() => router.push("/account-information/password")} style={styles.startBtn}>
          <Text style={styles.startText}>Edit information</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

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
