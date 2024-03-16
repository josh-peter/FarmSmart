import React, { useEffect, useState, useMemo } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ScrollView,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import PropertyFeatureComp from "../components/propertyDetailsProps/propertyFeaturesComp";
import AboutProperty from "../components/propertyDetailsProps/aboutProperty";
import HostReviews from "../components/propertyDetailsProps/hostReviewComp";
import Morelist from "../components/propertyDetailsProps/moreListing";
import Similarlisting from "../components/propertyDetailsProps/similarListing";
import PropertyCarouselImages from "../components/propertyDetailsProps/propertyCarouselImages";
import SelectBookingDate from "../components/common/modals/selectBookingDate";
import { Stack } from "expo-router";
import colors from "../constants/Colors";

const { width, height } = Dimensions.get("window");

export default function PropertyDetails() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const slideIn = useSharedValue(0);
  const fadeIn = useSharedValue(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      slideIn.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      fadeIn.value = withTiming(1, {
        duration: 600,
        easing: Easing.linear,
      });
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    const translateY = 0.3 * width * (1 - slideIn.value);
    return {
      opacity: fadeIn.value,
      transform: [{ translateY }],
    };
  });

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
        contentContainerStyle={{
          width: width,
          backgroundColor: "#fff",
        }}>
        <PropertyCarouselImages />
        <PropertyFeatureComp />
        <AboutProperty />
        <HostReviews />
        <Morelist />
        <Similarlisting />
        <View
          style={{
            height: RFValue(100),
            paddingHorizontal: RFValue(20),
            marginTop: 50,
          }}>
          <TouchableOpacity
            onPress={openModal}
            style={{
              backgroundColor: colors.primary,
              padding: Platform.OS === "ios" ? 18 : 17,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              marginTop: RFValue(15),
            }}>
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-regular",
                color: colors.background,
                textAlign: "center",
              }}>
              Rent apartment
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
      <SelectBookingDate modalVisible={modalVisible} closeModal={closeModal} />
    </>
  );
}
