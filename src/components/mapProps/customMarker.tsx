import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Marker, Callout } from "react-native-maps";
import { RFValue } from 'react-native-responsive-fontsize';

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
        <ImageBackground
          resizeMode="contain"
          source={
            isActive
              ? require("../../assets/images/activepointer.png")
              : require("../../assets/images/pointer.png")
          }
          style={{
            width: isActive ? RFValue(60) : RFValue(53),
            height: isActive ? RFValue(60) : RFValue(53),
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/custompointer.png")}
            style={{
              width: RFValue(40),
              height: RFValue(40),
              borderRadius: 50,
              marginTop: isActive ? RFValue(5) : RFValue(3),
            }}
          />
        </ImageBackground>
      </TouchableOpacity>
    </Marker>
  );
}

export default CustomMarker

const styles = StyleSheet.create({})