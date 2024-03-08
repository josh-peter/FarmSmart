import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
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
import colors from "../../../constants/Colors";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function AboutPropertyModal({
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
            height: responsiveScreenHeight(60),
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
              borderBottomColor: colors.border
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              About Property
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
              <MaterialIcons name="clear" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: RFValue(15),
              paddingVertical: RFValue(20),
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-bold",
                  lineHeight: RFValue(15),
                  color: colors.primary,
                  marginBottom: RFValue(3),
                }}
              >
                Description
              </Text>

              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "urbanist-regular",
                  color: colors.onboardingText,
                }}
              >
                Welcome to this charming two-bedroom apartment nestled in a
                peaceful residential neighborhood. This spacious and bright
                apartment offers a comfortable living experience with an
                open-concept layout, allowing natural light to flow through the
                living room, dining area, and modern kitchen. The kitchen
                features granite countertops, stainless steel appliances, and
                ample cabinet space. Both bedrooms are generously sized and
                provide a relaxing retreat with large windows and ample closet
                space. The apartment comes with a private balcony, perfect for
                enjoying your morning coffee or evening sunset views. With
                convenient access to nearby parks, schools, and public
                transportation, this apartment is an ideal choice for those
                seeking a comfortable and well-located home.
              </Text>
            </View>
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
    right: RFValue(15),
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
