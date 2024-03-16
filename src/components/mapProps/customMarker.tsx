import { StyleSheet, Text, TouchableOpacity, View,ImageBackground, Platform, TextInput, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Marker, Callout } from "react-native-maps";
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../constants/Colors';
import { Image } from 'expo-image';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const CustomMarker = ({ apartment, onPress }: any) => {
  const [isActive, setIsActive] = useState(false);

const handlePress = () => {
  if (!isActive) {
    setIsActive(true); 
    onPress(); 
  } else {
    setIsActive(false);
  }
  };
  



  return (
    <Marker
      onPress={handlePress}
      key={apartment.id}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <TouchableOpacity>
        <View
          style={{
            width: RFValue(60),
            height: RFValue(60),
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/custompointer.png")}
            style={{
              width: RFValue(45),
              height: RFValue(45),
              borderRadius: 50,
              borderWidth: 4,
              borderColor: colors.background,
            }}
          />
        </View>
      </TouchableOpacity>
    </Marker>
  );
}

export default CustomMarker

const styles = StyleSheet.create({
  inputbox: {
    width: RFValue(230),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: Platform.OS === "android" ? RFValue(3) : RFValue(8),
    paddingLeft: RFValue(32),
    paddingRight: RFValue(15),
  },
  eyeIcon: {
    position: "absolute",
    left: 2,
    top: "60%",
    transform: [{ translateY: RFValue(3.0) }],
    zIndex: 10,
  },
});