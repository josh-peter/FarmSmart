import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  buttonText: string;
  buttonColor: any;
  buttonTextColor: any;
  onPress: any;
  disabled: boolean;
  marginTop:any
};

const CustomButton = ({
  onPress,
  buttonText,
  buttonColor,
  buttonTextColor,
  disabled,
  marginTop
}: Props) => {
  return (
    <View
      style={{
        height: RFValue(100),
      }}
    >
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={{
          backgroundColor: buttonColor,
          padding: Platform.OS === "ios" ? 18 : 17,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          marginTop: marginTop,
        }}
      >
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: "outfit-bold",
            color: buttonTextColor,
            textAlign: "center",
          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
