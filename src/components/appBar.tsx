import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform, BackHandler} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { router } from "expo-router";
// import { useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";


type Props = {
    title: string,
    returnRoute: any
}

export default function AppBar({title, returnRoute}: Props) {
    // const navigation = useNavigation();    

    // const handleBackBtn = () => {
    //     navigation.goBack();
    // };

  return (
    <>
        <View style={styles.appBar}>
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(30),
            }}
          >
            {title}
          </Text>
          <TouchableOpacity onPress={() => router.push(returnRoute)} style={styles.clearIcon}>
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
  )
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
    backgroundColor: "#FFFFFF",
    marginBottom: RFValue(15),
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 20,
    shadowOpacity: 0.16,
    elevation: 14,
    shadowColor: "#E3E3E3",
    width: responsiveScreenWidth(100),
    height: responsiveScreenWidth(20),
    }
  });