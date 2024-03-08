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
import { featuresData } from "../../../Data/featuresData";
import colors from "../../../constants/Colors";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function FeaturesAndAmenities({
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
            backgroundColor: "#fff",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(50),
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
              borderBottomColor: colors.border2,
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Amenities
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
              backgroundColor: colors.background,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                gap: 20,
              }}
            >
              {featuresData?.map((feature) => (
                <View
                  key={feature.id}
                  style={{
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(15),
                    borderWidth: 1,
                    borderColor: colors.border2,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: "outfit-bold",
                      lineHeight: RFValue(15),
                      color: colors.primary,
                      marginBottom: RFValue(6),
                    }}
                  >
                    {feature.features}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 3,
                      overflow: "hidden",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        fontFamily: "urbanist-regular",
                        color: colors.onboardingText,
                      }}
                    >
                      {feature.amenities}
                    </Text>
                  </View>
                </View>
              ))}
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
