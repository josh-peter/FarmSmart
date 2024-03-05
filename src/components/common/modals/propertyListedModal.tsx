import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { TextInput } from "react-native-paper";
import Carousel from "pinar";
import { PropertyListedData } from "../../../Data/propertyListed";
import { Image } from "expo-image";
import colors from "../../../constants/Colors";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function PropertyListed({ modalVisible, closeModal }: Readonly<Props>) {


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
            height: responsiveScreenHeight(70),
            paddingHorizontal: RFValue(15),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.background,
              width: responsiveScreenWidth(100),
              height: responsiveScreenHeight(6),
            }}
          >
            <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
              <MaterialIcons name="clear" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontSize: RFValue(20),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(40),
              }}
            >
              Listed 12 times
            </Text>
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: "urbanist-regular",
                color: "#414141",
                marginBottom: RFValue(10),
              }}
            >
              This property is listed by 12 agents, hence this property has 12
              detail pages
            </Text>
          </View>
          <Carousel
            showsControls={false}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            scrollEnabled={true}
            autoplay={true}
            autoplayInterval={2000}
            style={{
              width: Platform.OS === "ios" ? RFValue(315) : RFValue(300),
            }}
          >
            {PropertyListedData?.map((apartment) => (
              <View style={styles.container} key={apartment.id}>
                <Image source={apartment.img} style={styles.image} />
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: RFValue(10),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(16),
                        fontFamily: "outfit-bold",
                        color:colors.dark
                      }}
                    >
                      {apartment.description}
                    </Text>
                    <TouchableOpacity
                      style={{
                        paddingVertical: RFValue(7),
                        paddingHorizontal: RFValue(20),
                        borderRadius: RFValue(5),
                        backgroundColor: colors.warm,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          fontFamily: "outfit-medium",
                          color: colors.green,
                        }}
                      >
                        {apartment.type}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(17),
                        fontFamily: "outfit-bold",
                        color: colors.green,
                      }}
                    >
                      {apartment.price}{" "}
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          fontFamily: "urbanist-regular",
                          color: colors.onboardingText,
                        }}
                      >
                        {apartment.rent}
                      </Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                      marginTop: RFValue(3),
                    }}
                  >
                    <Image
                      contentFit="contain"
                      source={require("../../../assets/images/location.png")}
                      style={{
                        width: RFValue(18),
                        height: RFValue(18),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        fontFamily: "urbanist-regular",
                        color: colors.onboardingText,
                      }}
                    >
                      {apartment.location}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </Carousel>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: RFValue(10),

    borderRadius: RFValue(10),
  },
  image: {
    width: "100%",
    height: RFValue(240),
    borderRadius: 16,
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 30,
    position: "absolute",
    right: RFValue(15),
    top: RFValue(20),
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
  arrowIcon: {
    position: "absolute",
    top: RFValue(12),
    right: RFValue(11),
    zIndex: 1,
  },
  dot: {
    width: RFValue(18),
    height: RFValue(4),
    borderRadius: 30,
    backgroundColor: "#D9D9D9",
    marginHorizontal: RFValue(2),
  },
  activeDot: {
    width: RFValue(18),
    height: RFValue(4),
    borderRadius: 30,
    backgroundColor: colors.green,
    marginHorizontal: RFValue(2),
  },
});
