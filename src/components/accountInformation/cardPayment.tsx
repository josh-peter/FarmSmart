import {
  Text,
  View,
  useColorScheme,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { Link, router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import PasswordInputField from "../inputs/passwordInputField";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../inputs/inputField";
import AddNewCard from "./addNewCard";


interface Props {
  modalPayVisible: boolean;
  closePayModal: () => void;
}

export default function CardPayment({
  modalPayVisible,
  closePayModal,
}: Readonly<Props>) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUserLogin = (values: any, setSubmitting: any) => {
    router.push("/home/");
    setSubmitting(false);
    };
    
      const [modalCardVisible, setModalCardVisible] = useState(false);

      const openCardModal = () => {
        setModalCardVisible(true);
      };

      const closeCardModal = () => {
        setModalCardVisible(false);
    };
    
  return (
    <Modal
      isVisible={modalPayVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={300}
      animationOutTiming={300}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      onBackdropPress={closePayModal}
      onBackButtonPress={closePayModal}
      backdropOpacity={0.5}
      backdropColor="#000"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        position: "absolute",
        margin: 0,
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
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fafafa",
            width: responsiveScreenWidth(100),
            height: responsiveScreenWidth(22),
            marginTop: RFValue(20),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(30),
            }}
          >
            Payment method
          </Text>
          <TouchableOpacity style={styles.clearIcon}>
            <Image
              resizeMode="contain"
              source={require("../../assets/images/arrow-left.png")}
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
            paddingVertical: RFValue(20),
          }}
        >
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
                      color: "#9C0000",
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
                      color: "#9C0000",
                    }}
                  >
                    Remove this card
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
                      <TouchableOpacity
                          onPress={openCardModal}
              style={{
                backgroundColor: "#06782F",
                padding: Platform.OS === "ios" ? 14 : 13,
                borderRadius: 10,
                marginTop: RFValue(25),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-regular",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Add new card
              </Text>
            </TouchableOpacity>
          </View>
              </View>
              <AddNewCard modalCardVisible={modalCardVisible} closeCardModal={closeCardModal}/>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#1D2939",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#fff",
  },
  smallText: {
    fontSize: responsiveScreenFontSize(2.5),
    lineHeight: responsiveScreenFontSize(3.2),
    fontFamily: "satoshi-bold",
    textAlign: "center",
  },
  smallerText: {
    fontSize: responsiveScreenFontSize(1.4),
    lineHeight: responsiveScreenFontSize(2.5),
    fontFamily: "satoshi-regular",
    marginTop: responsiveScreenFontSize(1.5),
    textAlign: "center",
  },
  startBtn: {
    backgroundColor: "#06782F",
    padding: Platform.OS === "ios" ? 18 : 17,
    borderRadius: 10,
    marginTop: RFValue(25),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 10,
    position: "absolute",
    left: RFValue(15),
    borderWidth: 1,
    borderColor: "#E6E6E6",
  },
});
