import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import InputField from "../components/inputs/inputField";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import FaqModal from "../components/faqS/faqModal";
import { MaterialIcons } from "@expo/vector-icons";
import {
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export default function Faq() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const faqData = [
    {
      id: 1,
      faq: "Question 1 placeholder",
    },
    {
      id: 2,
      faq: "Question 1 placeholder",
    },
    {
      id: 3,
      faq: "Question 1 placeholder",
    },
    {
      id: 4,
      faq: "Question 1 placeholder",
    },
    {
      id: 5,
      faq: "Question 1 placeholder",
    },
    {
      id: 6,
      faq: "Question 1 placeholder",
    },
    {
      id: 7,
      faq: "Question 1 placeholder",
    },
  ];
  return (
    <>
      <StatusBar style="dark" />
      <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFFFFF",
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 20,
              shadowOpacity: 0.16,
              elevation: 14,
              shadowColor: "#d5d0dd",
              width: responsiveScreenWidth(100),
              height: responsiveScreenWidth(20),
            }}>
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}>
              Frequently asked questions
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.push("/help-center");
              }}
              style={styles.clearIcon}>
              <MaterialIcons name="clear" size={18} color="#1A1A1A" />
            </TouchableOpacity>
          </View>
      <View style={{ flex: 1, paddingHorizontal: RFValue(20) }}>
        <View>
          <View
            style={{
              flexDirection: "column",
              gap: RFValue(10),
              marginTop: RFValue(40),
            }}>
            {faqData?.map((faq) => (
              <TouchableOpacity
                onPress={openModal}
                key={faq.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#fff",
                  padding: RFValue(10),
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#f3f4f6",
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
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "urbanist-medium",
                        lineHeight: RFValue(20),
                        color: "#000000",
                      }}>
                      Frequently asked questions
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
            ))}
          </View>
        </View>
      </View>
      <FaqModal modalVisible={modalVisible} closeModal={closeModal} />
    </>
  );
}

const styles = StyleSheet.create({
  inputbox: {
    backgroundColor: "#F9FAFA",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
    borderRadius: 10,
    height: Platform.OS === "ios" ? RFValue(170) : RFValue(170),
  },
  inputFieldbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(10),
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E7E7E7",
    marginBottom: RFValue(10),
  },
  startBtn: {
    backgroundColor: "#06782F",
    padding: Platform.OS === "ios" ? 18 : 17,
    borderRadius: 10,
    marginTop: RFValue(10),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(6),
    borderRadius: 50,
    position: "absolute",
    right: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
});
