import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Image } from 'expo-image';

export default function NoticeCard(){
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        gap: RFValue(6),
        backgroundColor: colors.warm,
        paddingHorizontal: RFValue(12),
        paddingVertical: RFValue(10),
        marginTop: RFValue(5),
        borderRadius: RFValue(5),
      }}
    >
      <Image
        contentFit="contain"
        source={require("../../assets/images/danger.png")}
        style={{
          width: RFValue(20),
          height: RFValue(20),
        }}
      />
      <Text
        style={{
          fontSize: RFValue(12),
          fontFamily: "urbanist-regular",
          color: colors.primary,
          flexShrink: 1,
        }}
      >
        Please note that you will be charged a non-refundable fee of ₦1,500 to
        book appointment with this agent, this helps us compensate for agents
        time and also make sure only serious clients schedule an appointment.
        Thank you for understanding!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({})