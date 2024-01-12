import Morelist from "../components/propertyDetailsProps/moreListing";
import HostReviews from "../components/propertyDetailsProps/hostReviewComp";
import PropertyCarouselImages from "../components/propertyDetailsProps/propertyCarouselImages";
import PropertyFeatureComp from "../components/propertyDetailsProps/propertyFeaturesComp";
import { BlurView } from "expo-blur";
import { Stack } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import Similarlisting from "../components/propertyDetailsProps/similarListing";
const { width, height } = Dimensions.get("window");

export default function PropertyDetails() {
  const fade = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(1);

  const animation = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation();
  }, []);

  const amenities = [
    {
      id: 1,
      number: 1,
      amenity: "Kitchen",
    },
    {
      id: 2,
      number: 2,
      amenity: "Bathroom",
    },
    {
      id: 3,
      number: 1,
      amenity: "Garage",
    },
    {
      id: 4,
      number: 1,
      amenity: "Bedroom",
    },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          title: "Property Details",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          width: width,
          backgroundColor: "#fff",
          position: "relative",
          opacity: fade,
          transform: [
            {
              translateY: fade.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0],
              }),
            },
          ],
        }}
      >
        <PropertyCarouselImages />
        <View
          style={{
            height: RFValue(1370),
            marginTop: RFValue(-110),
          }}
        >
          <PropertyFeatureComp />
        </View>
        <View>
          <HostReviews />
        </View>
        <View>
          <Morelist />
        </View>
        <View>
          <Similarlisting />
        </View>
        <View style={{
          height:RFValue(100),
          paddingHorizontal: RFValue(20),
                    marginTop:(50)
        }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#ECFFF4",
              padding: Platform.OS === "ios" ? 18 : 17,
              borderRadius: 10,
              marginTop: RFValue(15),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-regular",
                color: "#06782F",
                textAlign: "center",
              }}
            >
              Book appointment
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
  },
});
