import React, { useState } from "react";
import { Marker, Callout } from "react-native-maps";
import { RFValue } from "react-native-responsive-fontsize";
import { Image, View, Text, TouchableOpacity } from "react-native";
import colors from "../../constants/Colors";

const CustomCallout = ({ apartment}: any) => {

  return (
    <Marker
      key={apartment.id}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <Callout>
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-light",
                marginTop: RFValue(5),
              }}
            >
              {apartment.price}
            </Text>
      </Callout>
    </Marker>
  );
};

export default CustomCallout;
