import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import colors from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

type Props = {
  title: string;
  onPress: any;
};

export default function AppBar({ title, onPress }: Readonly<Props>) {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appBar}>
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: "outfit-bold",
            lineHeight: RFValue(30),
          }}>
          {title}
        </Text>
        <TouchableOpacity onPress={onPress} style={styles.clearIcon}>
          <Image
            resizeMode="contain"
            source={require("../assets/images/arrow-left.png")}
            style={{
              height: RFValue(15),
              width: RFValue(15),
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 50,
    position: "absolute",
    left: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },

  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    marginBottom: RFValue(5),
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 20,
    shadowOpacity: 0.16,
    elevation: 14,
    shadowColor: "#d5d0dd",
    width: responsiveScreenWidth(100),
    height: responsiveScreenWidth(20),
  },
});
