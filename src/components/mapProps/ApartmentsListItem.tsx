import { View, Text,StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const ApartmentsListapartment = ({
  apartment,
  handleCloseNavigationApartment,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/mapimg.png")}
        style={styles.image}
      />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: RFValue(10),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-bold",
            }}
          >
            {apartment.title}
          </Text>
          <TouchableOpacity
            style={{
              paddingVertical: RFValue(7),
              paddingHorizontal: RFValue(20),
              borderRadius: RFValue(5),
              backgroundColor: "#ECFFF4",
            }}
          >
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "outfit-medium",
                color: "#06782F",
              }}
            >
              {apartment.type}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-bold",
              color: "#06782F",
            }}
          >
            {apartment.price}{" "}
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "plusjakarta-regular",
                color: "#414141",
              }}
            >
              {apartment.rent}
            </Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginTop: RFValue(3),
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/images/location.png")}
            style={{
              width: RFValue(18),
              height: RFValue(18),
            }}
          />
          <Text
            style={{
              fontSize: RFValue(11),
              fontFamily: "plusjakarta-regular",
              color: "#414141",
            }}
          >
            {apartment.location}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.clearIcon}>
        <MaterialIcons name="clear" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleCloseNavigationApartment}
        style={{
          backgroundColor: "#fff",
          position: "absolute",
          bottom: RFValue(-5),
          right:
            Platform.OS == "android"
              ? responsiveScreenWidth(45)
              : responsiveScreenWidth(45),
          width: responsiveScreenWidth(6),
          height: responsiveScreenHeight(2),
          transform: [{ rotate: "45deg" }],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    right: 20,
    left: 20,
    backgroundColor: "#fff",
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(15),
    borderRadius: RFValue(10),
  },
  image: {
    width: "100%",
    height: RFValue(180),
    borderRadius: 16,
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 50,
    position: "absolute",
    top: RFValue(-10),
    right: RFValue(-10),
  },
});

export default ApartmentsListapartment