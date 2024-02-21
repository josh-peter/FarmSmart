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
import Checkbox from "expo-checkbox";
import OtherReason from "./otherReason";
import BookingCancelledSuccessfully from "../common/modals/bookingCancelledSuccessfully";

interface Props {
  modalCancelVisible: any;
  closeCancelModal: () => void;
}

export default function EditPasswordAccess({
  modalCancelVisible,
  closeCancelModal,
}: Readonly<Props>) {
  const [isChecked, setIsChecked] = useState(false);
  const [modalOtherVisible, setModalOtherVisible] = useState(false);


  const openOtherModal = () => {
    setModalOtherVisible(true);
    closeCancelModal()
  };

  const closeOtherModal = () => {
    setModalOtherVisible(false);
  };



  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={modalCancelVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={closeCancelModal}
        onBackButtonPress={closeCancelModal}
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
            height: responsiveScreenHeight(75),
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
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Cancel booking
            </Text>
            <TouchableOpacity
              onPress={closeCancelModal}
              style={styles.clearIcon}
            >
              <MaterialIcons name="clear" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: RFValue(15),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                overflow: "hidden",
                gap: RFValue(6),
                backgroundColor: "#F1F5FF",
                paddingHorizontal: RFValue(12),
                paddingVertical: RFValue(10),
                marginTop: RFValue(20),
                marginBottom: RFValue(20),
                borderRadius: RFValue(8),
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/images/danger.png")}
                style={{
                  width: RFValue(20),
                  height: RFValue(20),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "plusjakarta-regular",
                  color: "#306AFF",
                  flexShrink: 1,
                }}
              >
                If you are cancelling within 24hrs of booking you will receive
                total refund of your payment, otherwise you may get a partial
                refund. If the cancellation is on the check in date you will
                receive no refund!
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-bold",
                  color: "#06782F",
                }}
              >
                Why do you want to cancel your booking?
              </Text>
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
                    gap: RFValue(5),
                  }}
                >
                  <Checkbox
                    style={{
                      borderRadius: RFValue(4),
                    }}
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? "#06782F" : "#e1e1e1"}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontFamily: "plusjakarta-regular",
                    }}
                  >
                    I changed my mind about the apartment
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(5),
                  }}
                >
                  <Checkbox
                    style={{
                      borderRadius: RFValue(4),
                    }}
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? "#06782F" : "#e1e1e1"}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontFamily: "plusjakarta-regular",
                    }}
                  >
                    Something else came up
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(5),
                  }}
                >
                  <Checkbox
                    style={{
                      borderRadius: RFValue(4),
                    }}
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? "#06782F" : "#e1e1e1"}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontFamily: "plusjakarta-regular",
                    }}
                  >
                    Host asks me to cancel
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(5),
                  }}
                >
                  <Checkbox
                    style={{
                      borderRadius: RFValue(4),
                    }}
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? "#06782F" : "#e1e1e1"}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontFamily: "plusjakarta-regular",
                    }}
                  >
                    I am no longer available
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={openOtherModal}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: RFValue(10),
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(12),
                      fontFamily: "plusjakarta-regular",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}
                  >
                    Other reason
                  </Text>
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
            <TouchableOpacity style={styles.startBtn}>
              <Text style={styles.startText}>Done</Text>
            </TouchableOpacity>
          </View>
          <OtherReason
            modalOtherVisible={modalOtherVisible}
            closeOtherModal={closeOtherModal}
          />
         
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    borderRadius: 50,
    position: "absolute",
    top: RFValue(20),
    right: RFValue(20),
  },
});
