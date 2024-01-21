import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity,Image, Dimensions, Platform, StyleSheet } from 'react-native';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from "react-native-paper";

export default function CreditCardComp() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
      const [isChecked, setIsChecked] = useState(false);
  return (
    <View>
      <View
        style={{
          marginTop: RFValue(20),
        }}
      >
        <View
          style={{
            backgroundColor: "#FAFAFA",
            padding: RFValue(10),
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontSize: RFValue(18),
              fontFamily: "outfit-bold",
              color: "#161917",
              lineHeight: RFValue(30),
            }}
          >
            Pay with card
          </Text>
          <View
            style={{
              marginTop: RFValue(10),
            }}
          >
            <TextInput
              placeholder="Card number"
              keyboardType="numeric"
              placeholderTextColor={"#808080"}
              returnKeyType="done"
              style={{
                backgroundColor: "#F2F2F2",
                paddingLeft: RFValue(32),
              }}
              underlineColor="transparent"
              activeUnderlineColor="transparent"
            />
            <TouchableOpacity style={styles.eyeIcon}>
              <Image
                resizeMode="contain"
                source={require("../../assets/images/card.png")}
                style={{
                  width: RFValue(30),
                  height: RFValue(30),
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowIcon}>
              <Image
                resizeMode="contain"
                source={require("../../assets/images/regularright.png")}
                style={{
                  width: RFValue(20),
                  height: RFValue(20),
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              marginTop: RFValue(15),
            }}
          >
            <TextInput
              placeholder="MM/YY"
              keyboardType="numeric"
              placeholderTextColor={"#808080"}
              returnKeyType="done"
              style={{
                backgroundColor: "#F2F2F2",
                width: responsiveScreenWidth(38),
              }}
              underlineColor="transparent"
              activeUnderlineColor="transparent"
            />
            <TextInput
              placeholder="CVV"
              keyboardType="numeric"
              placeholderTextColor={"#808080"}
              returnKeyType="done"
             
              style={{
                backgroundColor: "#F2F2F2",
                width: responsiveScreenWidth(38),
              }}
              underlineColor="transparent"
              activeUnderlineColor="transparent"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: RFValue(5),
              marginTop: RFValue(15),
            }}
          >
            <Checkbox
              style={{
                borderRadius: RFValue(4),
              }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? "#06782F" : "#e1e1e1"}
            />
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "plusjakarta-regular",
              }}
            >
              Save my card
            </Text>
          </View>
        </View>
      </View>
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
    top: RFValue(8),
    left: RFValue(11),
    zIndex: 1,
  },
  arrowIcon: {
    position: "absolute",
    top: RFValue(12),
    right: RFValue(11),
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
});