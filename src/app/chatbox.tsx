import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, Stack, router } from "expo-router";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "expo-status-bar";
import colors from "../constants/Colors";
const { width, height } = Dimensions.get("window");

export default function ChatBox() {
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

  return (
    <>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          title: "Chatbox",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Animated.View
        style={{
          flex: 1,
          width: width,
          backgroundColor: colors.background,
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
        }}
      >
        <View
          style={{
            backgroundColor: colors.background,
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(10),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: colors.background,
              paddingHorizontal: RFValue(15),
              marginTop: RFValue(25),
              paddingBottom: RFValue(10),
            }}
          >
            <TouchableOpacity
              style={styles.clearIcon}
              onPress={() => router.push("/notification")}
            >
              <Image
                resizeMode="contain"
                source={require("../assets/images/arrow-left.png")}
                style={{
                  height: RFValue(22),
                  width: RFValue(22),
                }}
              />
            </TouchableOpacity>

            <View>
              <Text
                style={{
                  fontSize: RFValue(15),
                  fontFamily: "outfit-bold",
                  textAlign: "center",
                }}
              >
                Abigail Williams
              </Text>
              <Text
                style={{
                  fontSize: RFValue(11),
                  fontFamily: "outfit-regular",
                  textAlign: "center",
                }}
              >
                Last online yesterday
              </Text>
            </View>
            <Image
              resizeMode="contain"
              source={require("../assets/images/profile.png")}
              style={{
                height: RFValue(35),
                width: RFValue(35),
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: RFValue(10),
            paddingVertical: RFValue(10),
            backgroundColor: colors.background,
            borderRadius: RFValue(10),
            marginHorizontal: RFValue(20),
            marginTop: RFValue(20),
            marginBottom: RFValue(10),
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../assets/images/bedroom.png")}
            style={{
              height: RFValue(80),
              width: RFValue(80),
            }}
          />
          <View>
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-bold",
              }}
            >
              One bedroom flat
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                marginTop: RFValue(3),
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../assets/images/location.png")}
                style={{
                  width: RFValue(15),
                  height: RFValue(15),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "urbanist-regular",
                  color: colors.onboardingText,
                }}
              >
                Lekki phase 1, Lagos, Nigeria
              </Text>
            </View>
            <TouchableOpacity
              style={{
                paddingVertical: RFValue(5),
                paddingHorizontal: RFValue(12),
                borderRadius: RFValue(5),
                backgroundColor: colors.warm,
                width: RFValue(60),
                marginTop: RFValue(3),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "outfit-medium",
                  color: colors.green,
                }}
              >
                Rental
              </Text>
            </TouchableOpacity>
            <View
              style={{
                marginTop: RFValue(3),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-bold",
                  color: colors.green,
                }}
              >
                ₦1,500,000{" "}
                <Text
                  style={{
                    fontSize: RFValue(10),
                    fontFamily: "urbanist-regular",
                    color: "#414141",
                  }}
                >
                  yearly
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: RFValue(15),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: "urbanist-regular",
              color: "#414141",
              textAlign: "center",
            }}
          >
            Yesterday
          </Text>
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              marginTop: RFValue(20),
            }}
          >
            <View
              style={{
                backgroundColor: colors.primary,
                paddingHorizontal: RFValue(20),
                paddingVertical: RFValue(10),
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                borderTopStartRadius: 20,
                borderBottomStartRadius: 20,
                borderTopEndRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "urbanist-regular",
                  color: "#fff",
                }}
              >
                Hi
              </Text>
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "urbanist-regular",
                  color: "#fff",
                }}
              >
                Abigail
              </Text>
            </View>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "urbanist-regular",
                color: colors.onboardingText,
                alignItems: "flex-end",
              }}
            >
              {new Intl.DateTimeFormat("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              }).format(new Date())}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              marginTop: RFValue(20),
            }}
          >
            <View
              style={{
                backgroundColor: colors.primary,
                paddingHorizontal: RFValue(20),
                paddingVertical: RFValue(10),
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                borderTopStartRadius: 20,
                borderBottomStartRadius: 20,
                borderTopEndRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "urbanist-regular",
                  color: colors.background,
                }}
              >
                I will like to make reservation now, but I have some other
                questions
              </Text>
            </View>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "urbanist-regular",
                color: colors.onboardingText,
                alignItems: "flex-end",
              }}
            >
              {new Intl.DateTimeFormat("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              }).format(new Date())}
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "urbanist-regular",
                color: colors.onboardingText,
                alignItems: "flex-end",
              }}
            >
              Seen by Abigail
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginTop: RFValue(20),
            }}
          >
            <View
              style={{
                backgroundColor: "#F9FAFA",
                paddingHorizontal: RFValue(20),
                paddingVertical: RFValue(10),
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                borderTopEndRadius: 20,
                borderBottomEndRadius: 20,
                borderTopStartRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "urbanist-regular",
                  color: colors.onboardingText,
                }}
              >
                Okay then
              </Text>
            </View>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "urbanist-regular",
                color: "#414141",
                alignItems: "flex-end",
              }}
            >
              {new Intl.DateTimeFormat("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              }).format(new Date())}
            </Text>
          </View>
          <View
            style={{
              marginTop: RFValue(10),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: "urbanist-regular",
                color: "#414141",
                textAlign: "center",
              }}
            >
              Today
            </Text>
            <View
              style={{
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                marginTop: RFValue(20),
              }}
            >
              <View
                style={{
                  backgroundColor: colors.primary,
                  paddingHorizontal: RFValue(20),
                  paddingVertical: RFValue(10),
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  borderTopStartRadius: 20,
                  borderBottomStartRadius: 20,
                  borderTopEndRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: "urbanist-regular",
                    color: "#fff",
                  }}
                >
                  I don’t think I will be able to make it, sorry!
                </Text>
              </View>
              <Text
                style={{
                  fontSize: RFValue(11),
                  fontFamily: "urbanist-regular",
                  color: colors.onboardingText,
                  alignItems: "flex-end",
                }}
              >
                {new Intl.DateTimeFormat("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                }).format(new Date())}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FCFCFC",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(10),
            position: "absolute",
            bottom: responsiveScreenHeight(0),
            paddingHorizontal: RFValue(20),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 15,
              alignItems: "center",
              marginTop: RFValue(15),
            }}
          >
            <View
              style={{
                flex: 1,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.warmBtn,
                padding: RFValue(6),
                backgroundColor: colors.background,
              }}
            >
              <TextInput
                placeholder="Type here"
                style={styles.inputbox}
                placeholderTextColor={colors.onboardingText}
              />
            </View>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={require("../assets/images/chatBtn.png")}
                style={{
                  height: RFValue(35),
                  width: RFValue(35),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#3538cd",
    position: "relative",
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#15263A",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#fff",
  },
  videoSize: {
    height: "100%",
    width: "100%",
  },
  animationContainer: {
    backgroundColor: "#eef8ff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animatedContainer: {
    backgroundColor: "#173273",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: RFValue(22),
    fontFamily: "satoshi-medium",
    color: "#fff",
  },
  subtitle: {
    fontSize: RFValue(28),
    lineHeight: RFValue(32),
    fontFamily: "satoshi-bold",
    color: "#051040",
    textAlign: "center",
    paddingHorizontal: RFValue(20),
  },
  smallText: {
    marginTop: 10,
    fontSize: RFValue(11),
    fontFamily: "satoshi-medium",
    color: "#fff",
  },
  tabInner: {
    marginTop: RFValue(20),
  },
  tabContainer: {
    flex: 1,
    width: width,
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
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  inputbox: {
    width: RFValue(230),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(3),
  },
  eyeIcon: {
    position: "absolute",
    left: 6,
    top: "20%",
    transform: [{ translateY: RFValue(3.0) }],
    zIndex: 10,
  },
});
