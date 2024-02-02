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
  TextInput,
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
import BookingCancelledSuccessfully from "../common/modals/bookingCancelledSuccessfully";

interface Props {
  modalOtherVisible: boolean;
  closeOtherModal: () => void;
}

export default function OtherReasonDelete({
  modalOtherVisible,
  closeOtherModal,
}: Readonly<Props>) {
  const [modalPopVisible, setModalPopVisible] = useState(false);
  const openPopModal = () => {
    setModalPopVisible(true);
  };

  const closePopModal = () => {
    setModalPopVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={modalOtherVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={closeOtherModal}
        onBackButtonPress={closeOtherModal}
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
            height: responsiveScreenHeight(45),
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
              Delete account
            </Text>
            <TouchableOpacity
              onPress={closeOtherModal}
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
                padding: RFValue(10),
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-medium",
                  lineHeight: RFValue(20),
                  color: "#06782F",
                }}
              >
                Other reason
              </Text>
              <View
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#E4E4E7",
                  padding: RFValue(8),
                  marginTop: RFValue(10),
                }}
              >
                <TextInput
                  placeholder="Please describe your reason behind this action"
                  style={[styles.inputbox, { textAlignVertical: "top" }]}
                  placeholderTextColor="#5f5f5f"
                  keyboardType="default"
                  multiline={true}
                  numberOfLines={5}
                  returnKeyType="done"
                />
              </View>
            </View>
            <TouchableOpacity onPress={openPopModal} style={styles.startBtn}>
              <Text style={styles.startText}>Delete</Text>
            </TouchableOpacity>
          </View>
          <BookingCancelledSuccessfully
            modalPopVisible={modalPopVisible}
            closePopModal={closePopModal}
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
    backgroundColor: "#Fcada3",
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
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(5),
  },
});
