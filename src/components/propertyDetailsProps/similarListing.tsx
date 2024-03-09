import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
import { Image } from "expo-image";
import colors from "../../constants/Colors";
import { similarListData } from "../../Data/similarListData";

export default function Similarlist() {

  return (
    <View
      style={{
        height: RFValue(370),
        width: width,
        paddingHorizontal: RFValue(15),
        marginTop: RFValue(40),
      }}
    >
      <Text
        style={{
          fontSize: RFValue(16),
          fontFamily: "outfit-bold",
          color: "#161917",
          lineHeight: RFValue(40),
        }}
      >
        More listing from Beatrice
      </Text>
      <FlatList
        data={similarListData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: RFValue(15) }}
        style={{ width: width }}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: RFValue(20),
              marginRight: RFValue(15),
            }}
          >
            <View
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                contentFit="cover"
                source={item.img}
                style={{
                  width: RFValue(250),
                  height: RFValue(200),
                  zIndex: -999,
                  borderRadius: 20,
                }}
              />
            </View>
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
                  fontSize: RFValue(18),
                  fontFamily: "outfit-bold",
                }}
              >
                {item.description}
              </Text>
              <TouchableOpacity
                style={{
                  paddingVertical: RFValue(7),
                  paddingHorizontal: RFValue(20),
                  borderRadius: RFValue(10),
                  backgroundColor: colors.warm,
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-medium",
                    color: colors.green,
                  }}
                >
                  {item.type}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  fontSize: RFValue(18),
                  fontFamily: "outfit-bold",
                  color: colors.green,
                }}
              >
                {item.price}{" "}
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "urbanist-regular",
                    color: colors.onboardingText,
                  }}
                >
                  {item.type === "Rental" ? item.rent : ""}
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
                contentFit="contain"
                source={require("../../assets/images/location.png")}
                style={{
                  width: RFValue(20),
                  height: RFValue(20),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "urbanist-regular",
                  color: colors.onboardingText,
                }}
              >
                {item.location}
              </Text>
            </View>
          </View>
        )}
      />
      <TouchableOpacity>
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: "outfit-bold",
            color: colors.primary,
            textDecorationLine: "underline",
            marginTop: RFValue(5),
          }}
        >
          See all +1K similar listing
        </Text>
      </TouchableOpacity>
    </View>
  );
}
