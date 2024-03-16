import {
  View,
  Text,
  Dimensions,
  Image,
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
import { StatusBar } from "expo-status-bar";
import AppBar from "../../components/appBar";
const { width, height } = Dimensions.get("window");
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import colors from "../../constants/Colors";

export default function CardPayment() {
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

  return (
    <>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          title: "Payment method",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar
        title="Payment method"
        onPress={() => router.push("/payment-management/")}
      />
      <Animated.View style={[styles.container, animatedStyle]}>
        <View
          style={{
            backgroundColor: "#fff",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(100),
          }}>
          <View
            style={{
              paddingHorizontal: RFValue(15),
              paddingBottom: RFValue(20),
            }}>
            <Text
              style={{
                fontSize: RFValue(15),
                fontFamily: "outfit-bold",
                color: "#414141",
                lineHeight: RFValue(40),
              }}>
              Add and manage your card
            </Text>
            <View>
              <View
                style={{
                  flexDirection: "column",
                  gap: RFValue(25),
                  marginTop: RFValue(10),
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: RFValue(5),
                    }}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/images/Mastercard.png")}
                      style={{
                        width: RFValue(30),
                        height: RFValue(30),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "outfit-regular",
                        color: "#414141",
                      }}>
                      **** 3421
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "outfit-regular",
                        color: "#FA5C47",
                      }}>
                      Remove this card
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: RFValue(5),
                    }}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/images/Mastercard.png")}
                      style={{
                        width: RFValue(30),
                        height: RFValue(30),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "outfit-regular",
                        color: "#414141",
                      }}>
                      **** 3421
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "outfit-regular",
                        color: "#FA5C47",
                      }}>
                      Remove this card
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => router.push("/payment-management/add-new-card")}
                style={styles.startBtn}>
                <Text style={styles.startText}>Add new card</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: "#fff",
    position: "relative",
  },
  startBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
    marginTop: RFValue(25),
  },
  startText: {
    fontSize: RFValue(16),
    color: "#fff",
    fontFamily: "outfit-semibold",
    textAlign: "center",
  },
});
