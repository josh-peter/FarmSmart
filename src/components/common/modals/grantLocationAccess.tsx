import {
  Text,
  View,
  useColorScheme,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../../constants/Colors";

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

export default function GrantAccessLocations({
  modalVisible,
  closeModal,
  handleGrantLocationAccess,
}: any) {
  return (
    <Modal
      isVisible={modalVisible}
      animationIn="bounceIn"
      animationOut="bounceOut"
      animationInTiming={400}
      animationOutTiming={400}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      backdropOpacity={0.5}
      backdropColor="#000"
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          paddingHorizontal: RFValue(25),
          paddingVertical: RFValue(45),
          borderRadius: 10,
        }}
      >
        <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
          <MaterialIcons name="clear" size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: RFValue(22),
            textAlign: "center",
            lineHeight: RFValue(30.25),
            marginTop: RFValue(20),
            color: colors.primary,
          }}
        >
          Grant Location Access
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "urbanist-regular",
            color: "#5F5F5F",
            textAlign: "center",
            marginTop: 5,
          }}
        >
          This will help us suggest nearby properties
        </Text>
        <TouchableOpacity
          onPress={handleGrantLocationAccess}
          style={styles.startBtn}
        >
          <Text style={styles.startText}>Allow location access</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectBtn}>
          <Text style={styles.rejectText}>Do it later</Text>
        </TouchableOpacity>
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
  button: {
    fontFamily: "satoshi-medium",
    textAlign: "center",
    color: "#fff",
    fontSize: responsiveScreenFontSize(2),
  },
  startBtn: {
    backgroundColor: colors.primary,
    marginTop: RFValue(20),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
  rejectBtn: {
    backgroundColor: colors.warmBtn,
    marginTop: RFValue(10),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
  rejectText: {
    fontSize: RFValue(14),
    color:colors.primary,
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
