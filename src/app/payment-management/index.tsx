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
import PaymentHistoryModal from "../../components/accountInformation/paymenthistoryModal";
import CardPayment from "../../components/accountInformation/cardPayment";
import { StatusBar } from "expo-status-bar";
import AppBar from "../../components/appBar";
const { width, height } = Dimensions.get("window");

export default function PaymentManagement() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPayVisible, setModalPayVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openPayModal = () => {
    setModalPayVisible(true);
  };

  const closePayModal = () => {
    setModalPayVisible(false);
  };

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
          title: "Payment management",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar
        title="Payment management"
        onPress={() => router.push("/home/account")}
      />
      <Animated.View style={[styles.container, animatedStyle]}>
        <View
          style={{
            paddingHorizontal: RFValue(15),
          }}>
          <View>
            <View
              style={{
                marginTop: RFValue(20),
              }}>
              <TouchableOpacity
                onPress={() =>
                  router.push("/payment-management/payment-history")
                }
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: RFValue(10),
                  borderWidth: 1,
                  borderColor: "#f3f4f6",
                  backgroundColor: "#fff",
                  borderRadius: RFValue(10),
                  marginTop: RFValue(10),
                  shadowOffset: { width: 2, height: 2 },
                  shadowRadius: 20,
                  elevation: 2,
                  shadowColor: "#d1d5db",
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(8),
                  }}>
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/images/payment-history.png")}
                    style={{
                      height: RFValue(52),
                      width: RFValue(52),
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(15),
                        fontFamily: "outfit-medium",
                        lineHeight: RFValue(20),
                        color: "#1A1A1A",
                      }}>
                      Payment history
                    </Text>
                  </View>
                </View>
                <Image
                  resizeMode="contain"
                  source={require("../../assets/images/arrow-right.png")}
                  style={{
                    height: RFValue(22),
                    width: RFValue(22),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: RFValue(20),
              }}>
              <TouchableOpacity
                onPress={() => router.push("/payment-management/card-payment")}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: RFValue(10),
                  borderWidth: 1,
                  borderColor: "#f3f4f6",
                  backgroundColor: "#fff",
                  borderRadius: RFValue(10),
                  shadowOffset: { width: 2, height: 2 },
                  shadowRadius: 20,
                  elevation: 2,
                  shadowColor: "#d1d5db",
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(8),
                  }}>
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/images/card-payment.png")}
                    style={{
                      height: RFValue(52),
                      width: RFValue(52),
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(15),
                        fontFamily: "outfit-medium",
                        lineHeight: RFValue(20),
                        color: "#1A1A1A",
                      }}>
                      Your card payment
                    </Text>
                  </View>
                </View>
                <Image
                  resizeMode="contain"
                  source={require("../../assets/images/arrow-right.png")}
                  style={{
                    height: RFValue(22),
                    width: RFValue(22),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <PaymentHistoryModal
            modalVisible={modalVisible}
            closeModal={closeModal}
          />
          <CardPayment
            modalPayVisible={modalPayVisible}
            closePayModal={closePayModal}
          />
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
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(5),
  },
});
