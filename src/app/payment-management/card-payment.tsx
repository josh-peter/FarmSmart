import {
    View,
    Text,
    Animated,
    Dimensions,
    Image,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
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
        <StatusBar style="dark"/>
        <Stack.Screen
          options={{
            title: "Payment method",
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <AppBar title="Payment method" onPress={() => router.push("/payment-management/")}/>
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
          }}
        >
          <View
        style={{
          backgroundColor: "#fff",
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(100),
        }}
      >
        <View
          style={{
            paddingHorizontal: RFValue(15),
            paddingBottom: RFValue(20),
          }}
            >
              <Text
                style={{
                  fontSize: RFValue(15),
                  fontFamily: "outfit-bold",
                  color: "#414141",
                  lineHeight: RFValue(40),
                }}
              >
                Add and manage your card
              </Text>
          <View>
            <View
              style={{
                flexDirection: "column",
                gap: RFValue(25),
                marginTop: RFValue(10),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(5),
                  }}
                >
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
                    }}
                  >
                    **** 3421
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-regular",
                      color: "#FA5C47",
                    }}
                  >
                    Remove this card
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(5),
                  }}
                >
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
                    }}
                  >
                    **** 3421
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-regular",
                      color: "#FA5C47",
                    }}
                  >
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
  