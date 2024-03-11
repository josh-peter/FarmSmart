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
import colors from "../../../constants/Colors";

interface Props {
  modalPopVisible: boolean;
  closePopModal: () => void;
}

export default function BookingCancelledSuccessfully({
  modalPopVisible,
  closePopModal,
}: Props) {
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
        onBackdropPress={closePopModal}
        onBackButtonPress={closePopModal}
        backdropOpacity={0.5}
        backdropColor="#000"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          position: "absolute",
          margin: 0,
        }}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(100),
          }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Image
              resizeMode="contain"
              source={require("../../../assets/images/success.png")}
              style={{
                width: RFValue(180),
                height: RFValue(180),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(24),
                fontFamily: "outfit-bold",
                color: "#161917",
                lineHeight: RFValue(40),
              }}>
              Successful
            </Text>
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "urbanist-medium",
                color: "#161917",
                lineHeight: RFValue(15),
                textAlign: "center",
              }}>
              Your booking has been cancelled{" "}
              <Text style={{ color: "#FA5C47", fontFamily: "outfit-semibold" }}>cancelled</Text>{" "}
            </Text>
            <View
              style={{
                marginHorizontal: RFValue(20),
                marginTop: RFValue(15),
              }}>
              <TouchableOpacity
                onPress={() => router.push("/refund")}
                style={{
                  backgroundColor: colors.primary,
                  padding: Platform.OS === "ios" ? 15 : 14,
                  borderRadius: 10,
                  borderBottomRightRadius: 0,
                  width: responsiveScreenWidth(90),
                }}>
                <Text style={styles.startText}>Request refund</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.back()}
                style={{
                  backgroundColor: "#FDFDFD",
                  borderRadius: 10,
                  borderBottomRightRadius: 0,
                  borderWidth: RFValue(1),
                  borderColor: "#F0F4FF",
                  padding: Platform.OS === "ios" ? 15 : 14,
                  width: responsiveScreenWidth(90),
                  marginTop: RFValue(15),
                }}>
                <Text
                  style={{
                    fontSize: RFValue(14),
                    color: colors.primary,
                    fontFamily: "outfit-semibold",
                    textAlign: "center",
                  }}>
                  Do it later
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 10,
    position: "absolute",
    left: RFValue(15),
    top: RFValue(35),
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
    fontFamily: "outfit-semibold",
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
