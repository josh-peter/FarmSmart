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
import { Link, Stack, router } from "expo-router";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import AccountNameModal from "../components/accountInformation/acccountNameModal";
import EmailAddressModal from "../components/accountInformation/EmailAddressModal";
import UpdatePhoneModal from "../components/accountInformation/updatePhoneModal";
import EditDateOfBirth from "../components/accountInformation/editDateOfBirth";
import { additionalData } from "../Data/additionalData";
import PaymentHistoryModal from "../components/accountInformation/paymenthistoryModal";
import CardPayment from "../components/accountInformation/cardPayment";
import { StatusBar } from "expo-status-bar";
const { width, height } = Dimensions.get("window");

export default function PaymentManagement() {
  const fade = useRef(new Animated.Value(0)).current;
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
          title: "Account Information",
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
                outputRange: [150, 0],
              }),
            },
          ],
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fafafa",
            width: responsiveScreenWidth(100),
            height: responsiveScreenWidth(20),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(30),
            }}
          >
            Account information
          </Text>
          <TouchableOpacity onPress={()=> router.push("/home/account")} style={styles.clearIcon}>
            <Image
              resizeMode="contain"
              source={require("../assets/images/arrow-left.png")}
              style={{
                height: RFValue(15),
                width: RFValue(15),
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: RFValue(15),
            marginTop: RFValue(15),
          }}
        >
          <View>
            <View
              style={{
                marginTop: RFValue(20),
              }}
            >
              <TouchableOpacity
                onPress={openModal}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#f9fafa",
                  padding: RFValue(10),
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(8),
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require("../assets/images/paymenthistory.png")}
                    style={{
                      height: RFValue(60),
                      width: RFValue(50),
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(12),
                        fontFamily: "plusjakarta-semibold",
                        lineHeight: RFValue(20),
                        color: "#1A1A1A",
                      }}
                    >
                      Payment history
                    </Text>
                  </View>
                </View>
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/arrow-right.png")}
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
              }}
            >
              <TouchableOpacity
                onPress={openPayModal}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#f9fafa",
                  padding: RFValue(10),
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(8),
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require("../assets/images/cardpayment.png")}
                    style={{
                      height: RFValue(60),
                      width: RFValue(50),
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(12),
                        fontFamily: "plusjakarta-semibold",
                        lineHeight: RFValue(20),
                        color: "#1A1A1A",
                      }}
                    >
                      Your card payment
                    </Text>
                  </View>
                </View>
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/arrow-right.png")}
                  style={{
                    height: RFValue(22),
                    width: RFValue(22),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <PaymentHistoryModal modalVisible={modalVisible} closeModal={closeModal} />
          <CardPayment modalPayVisible={modalPayVisible} closePayModal={closePayModal}/>
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
});
