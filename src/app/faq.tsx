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

export default function Faq() {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true)
    }

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
      <View style={{ flex: 1, paddingHorizontal: RFValue(20) }}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: RFValue(15),
              marginTop: RFValue(20),
            }}
          >
            <TouchableOpacity
              onPress={() => {
                router.push("/help-center");
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../assets/images/bigArrow.png")}
                style={{
                  height: RFValue(40),
                  width: RFValue(40),
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Frequently asked questions
            </Text>
          </View>
                  <View style={{
                      flexDirection: "column",
                      gap: RFValue(10),
                      marginTop:RFValue(40)
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
                  borderColor: "#f9fafa",
                 
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(8),
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(12),
                        fontFamily: "plusjakarta-bold",
                        lineHeight: RFValue(20),
                        color: "#1A1A1A",
                      }}
                    >
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
          <FaqModal modalVisible={modalVisible} closeModal={closeModal}/>
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
});
