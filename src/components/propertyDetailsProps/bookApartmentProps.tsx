import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../constants/Colors';

export default function BookApartmentProps({ appointmentDate, appointmentTime }:any) {
  return (
    <View
      style={{
        paddingVertical: RFValue(10),
        backgroundColor: "#fff",
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <View>
          <Image
            resizeMode="contain"
            source={require("../../assets/images/agentprofile.png")}
            style={{
              height: RFValue(75),
              width: RFValue(75),
            }}
          />
          <Image
            resizeMode="contain"
            source={require("../../assets/images/tag.png")}
            style={{
              height: RFValue(50),
              width: RFValue(50),
              position: "absolute",
              top: 50,
              left: 17,
              right: 0,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: RFValue(13),
            fontFamily: "outfit-bold",
            color: colors.primary,
            marginTop:RFValue(10)
          }}
        >
          Beatrice James
        </Text>
      </View>
    </View>
  );
}
