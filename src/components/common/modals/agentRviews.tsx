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
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import PasswordInputField from "../../inputs/passwordInputField";
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Checkbox from "expo-checkbox";
import { reviewsData } from "../../../Data/reviewsData";
const { width, height } = Dimensions.get("window");

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function AgentReviews({
  modalVisible,
  closeModal,
}: Props) {

  const featuresData = [
    {
      id: 1,
      features: "1 master bedroom",
      amenities: "Extra amenities:",
      explanation: "Fully air-conditioned with king sized mattress",
    },
    {
      id: 2,
      features: "2 Bathroom",
      amenities: "Extra amenities:",
      explanation: "Water heater available",
    },
    {
      id: 3,
      features: "1 Sitting room",
      amenities: "Extra amenities:",
      explanation:
        "Fully furnished sitting room, with air condition and 60 inchs TV",
    },
    {
      id: 4,
      features: "1 Sitting room",
      amenities: "Extra amenities:",
      explanation:
        "Fully furnished sitting room, with air condition, 60 inches TV and complete set of luxury sofas",
    },
    {
      id: 5,
      features: "1 Dining room",
      amenities: "Extra amenities:",
      explanation:
        "Fully furnished sitting room, with air condition, 60 inches TV and complete set of luxury sofas",
    },
  ];

  return (
    <View>
      <Modal
        isVisible={modalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
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
            height: responsiveScreenHeight(90),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fafafa",
              width: responsiveScreenWidth(100),
              height: responsiveScreenHeight(10),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
                textAlign: "center",
              }}
            >
              Agent review
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
              <MaterialIcons name="clear" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: RFValue(20),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(35),
                color: "#06782F",
                marginTop: RFValue(13),
              }}
            >
              All reviews
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#ECFFF4",
                padding: Platform.OS === "ios" ? 18 : 17,
                borderRadius: 10,
                marginTop: RFValue(15),
                marginBottom: RFValue(20),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-medium",
                  color: "#06782F",
                  textAlign: "center",
                }}
              >
                Add review
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "column",
              gap: 25,
              alignItems: "center",
              marginBottom: RFValue(15),
            }}
          >
            {reviewsData?.map((review) => (
              <View
                key={review.id}
                style={{
                  width: width,
                  paddingHorizontal: RFValue(20),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    marginTop: RFValue(8),
                    marginBottom: RFValue(3),
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require("../../../assets/images/calendar.png")}
                    style={{
                      height: RFValue(20),
                      width: RFValue(20),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-regular",
                      color: "#414141",
                    }}
                  >
                    {review.date}
                  </Text>
                </View>
                <View>
                  <Image
                    resizeMode="contain"
                    source={review.image}
                    style={{
                      height: RFValue(55),
                      width: RFValue(45),
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: "outfit-bold",
                      color: "#161917",
                      lineHeight: RFValue(20),
                    }}
                  >
                    {review.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../../assets/images/icon-star.png")}
                      style={{
                        height: RFValue(20),
                        width: RFValue(20),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: RFValue(12),
                        fontFamily: "outfit-regular",
                        color: "#414141",
                      }}
                    >
                      {review.rating}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-regular",
                    color: "#414141",
                    textAlign: "justify",
                  }}
                >
                  {review.review}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 50,
    position: "absolute",
        right: RFValue(35),
   
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
});
