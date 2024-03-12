import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react';
import { Image } from 'expo-image';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../constants/Colors';

export default function PropertyCard (){
  return (
    <View
      style={{
        marginTop: RFValue(10),
      }}
    >
      <Text
        style={{
          fontSize: RFValue(14),
          fontFamily: "outfit-bold",
          color: colors.onboardingText,
          marginTop: RFValue(1),
        }}
      >
        Property Details
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingHorizontal: RFValue(10),
          paddingVertical: RFValue(10),
          backgroundColor: colors.background,
          borderRadius: RFValue(10),
          marginTop: RFValue(5),
          marginBottom: RFValue(10),
          borderWidth: 1,
          borderColor: colors.border2,
        }}
      >
        <Image
          contentFit="contain"
          source={require("../../assets/images/bedroom.png")}
          style={{
            height: RFValue(80),
            width: RFValue(80),
          }}
        />
        <View>
          <Text
            style={{
              fontSize: RFValue(14),
              fontFamily: "outfit-bold",
            }}
          >
            One bedroom flat
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginTop: RFValue(3),
            }}
          >
            <Image
              contentFit="contain"
              source={require("../../assets/images/location.png")}
              style={{
                width: RFValue(15),
                height: RFValue(15),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "urbanist-regular",
                color: "#414141",
              }}
            >
              Lekki phase 1, Lagos, Nigeria
            </Text>
          </View>
          <TouchableOpacity
            style={{
              paddingVertical: RFValue(5),
              paddingHorizontal: RFValue(12),
              borderRadius: RFValue(5),
              backgroundColor: colors.warm,
              width: RFValue(60),
              marginTop: RFValue(3),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-medium",
                color: colors.green,
              }}
            >
              Rental
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: RFValue(3),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-bold",
                color: colors.green,
              }}
            >
              ₦1,500,000{" "}
              <Text
                style={{
                  fontSize: RFValue(10),
                  fontFamily: "urbanist-regular",
                  color: "#414141",
                }}
              >
                yearly
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({})