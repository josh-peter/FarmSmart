import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
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
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [fade] = useState(new Animated.Value(0));

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const animation = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
      animation();
    }
  }, [animationTriggered]);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Property Details",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      {animationTriggered && (
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            height: height,
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
            }}
          >
            <TouchableOpacity
              onPress={openModal}
              style={{
                backgroundColor: colors.primary,
                padding: Platform.OS === "ios" ? 18 : 17,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                marginTop: RFValue(15),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-regular",
                  color: colors.background,
                  textAlign: "center",
                }}
              >
                Rent apartment
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.ScrollView>
      )}
      <SelectBookingDate modalVisible={modalVisible} closeModal={closeModal} />
    </>
  );
}
