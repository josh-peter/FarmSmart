import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
  Dimensions,
  Button,
} from "react-native";
import React, { useRef, useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { router } from "expo-router";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

interface Props {
  modalPopVisible: boolean;
  closePopModal: () => void;
}

export default function CustomAlert({ modalPopVisible, closePopModal }: Props) {
  return (
    <View>
      <Modal
        isVisible={modalPopVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        backdropOpacity={0.5}
        backdropColor="transparent"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          top: Platform.OS === "android" ? RFValue(45) : RFValue(80),
          position: "absolute",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#E4FCED",
            width: responsiveScreenWidth(90),
            height: responsiveScreenHeight(6),
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
                          alignItems: "center",
              justifyContent:'space-between',
              width: responsiveScreenWidth(90),
              paddingHorizontal: RFValue(15),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: RFValue(10),
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../../assets/images/Alert.png")}
                style={{
                  width: RFValue(25),
                  height: RFValue(25),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-medium",
                  color: "#06782F",
                }}
              >
                Password updated
              </Text>
            </View>
            <TouchableOpacity onPress={closePopModal} style={styles.clearIcon}>
              <AntDesign name="closecircleo" size={24} color="#06782F" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  clearIcon: {
    borderRadius: 10,
  },
  inputbox: {
    width: responsiveScreenWidth(33),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(5),
    paddingLeft: RFValue(15),
  },
  eyeIcon: {
    position: "absolute",
    top: 23,
    left: 5,
    zIndex: 1,
  },
  startBtn: {
    backgroundColor: "#06782F",
    padding: Platform.OS === "ios" ? 15 : 14,
    borderRadius: 10,
    marginTop: RFValue(30),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
  videoSize: {
    height: "100%",
    width: "100%",
  },
  fullscreenContainer: {
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "0deg" }],
    width: Dimensions.get("window").height,
    height: Dimensions.get("window").width,
  },
  bgtransparent: {
    marginTop: 0,
    flex: 1,
  },
  videoContainer: {
    width: Dimensions.get("window").width,
    height: 0.35 * Dimensions.get("window").height,
  },
  play: {
    backgroundColor: "#fff",
    borderRadius: Platform.OS == "android" ? 1000 : 28,
    padding: 5,
    shadowColor: "#000",
    shadowOpacity: 0.9,
  },
  videoCategory: {
    paddingHorizontal: RFValue(20),
    height: responsiveScreenHeight(8),
  },
  categoryText: {
    fontFamily: "satoshi-medium",
    fontSize: RFValue(14),
  },
  videoTitle: {
    fontFamily: "satoshi-medium",
    fontSize: RFValue(22),
    lineHeight: RFValue(26),
  },
  duration: {
    fontFamily: "satoshi-regular",
    fontSize: RFValue(14),
    paddingTop: 10,
  },
});
