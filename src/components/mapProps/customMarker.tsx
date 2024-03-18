import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Platform,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Marker, Callout } from "react-native-maps";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../constants/Colors";
import { Image } from "expo-image";

const { width } = Dimensions.get("window");

const CustomMarker = ({
  apartment,
  onPress,
  selectedType,
  setSelectedType,
}: any) => {
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
    <View>
      {selectedType === "Marker" ? (
        <Marker
          onPress={handlePress}
          key={apartment.id}
          coordinate={{
            latitude: apartment.latitude,
            longitude: apartment.longitude,
          }}
        >
          <TouchableOpacity onPress={() => setSelectedType("Marker")}>
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
      ) : (
        <TouchableOpacity onPress={() => setSelectedType("Label")}>
          <Marker
            key={apartment.id}
            coordinate={{
              latitude: apartment.latitude,
              longitude: apartment.longitude,
            }}
          >
            <View
              style={{
                backgroundColor: colors.green,
                paddingHorizontal: RFValue(7),
                paddingVertical: RFValue(7),
                borderRadius: 6,
                borderWidth: 2,
                borderColor: colors.background,
                marginTop: -0,
                zIndex: 999,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "urbanist-medium",
                  fontSize: 15,
                  color: colors.background,
                }}
              >
                {apartment.price}
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                top: 25,
                left: 25,
                width: 20,
                height: 20,
                backgroundColor: colors.green,
                transform: [{ rotate: "35deg" }],
                borderWidth: 2,
                borderColor: colors.background,
              }}
            />
          </Marker>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomMarker;

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
