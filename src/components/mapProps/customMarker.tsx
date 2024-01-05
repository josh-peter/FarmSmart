import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps';
import { RFValue } from 'react-native-responsive-fontsize';

const CustomMarker = ({apartment, onPress}) => {
  return (
      <Marker
          onPress={onPress}
      key={apartment.id}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          source={require("../../assets/images/indicator.png")}
          style={{
            width: RFValue(40),
            height: RFValue(40),
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>
    </Marker>
  );
}

export default CustomMarker

const styles = StyleSheet.create({})