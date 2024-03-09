import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
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
import colors from "../../../constants/Colors";
const { width, height } = Dimensions.get("window");
import { Image } from "expo-image";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function AgentReviews({
  modalVisible,
  closeModal,
}: Props) {



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
            backgroundColor: colors.background,
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(90),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.background,
              width: responsiveScreenWidth(100),
              height: responsiveScreenHeight(10),
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
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
                color: colors.primary,
                marginTop: RFValue(13),
              }}
            >
              All reviews
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
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
                  color: colors.background,
                  textAlign: "center",
                }}
              >
                Add review
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={{
            margin:20
          }}>
            {reviewsData?.map((review) => (
              <View
                key={review.id}
                style={{
                  paddingHorizontal: RFValue(20),
                  borderWidth: 1,
                  borderColor: colors.warmBtn,
                  borderRadius: 10,
                  marginBottom: RFValue(25),
                 
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
                    contentFit="contain"
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
                    contentFit="contain"
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
                      contentFit="contain"
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
