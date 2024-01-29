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
import AboutProperty from "../components/propertyDetailsProps/aboutProperty";
import SelectBookingDate from "../components/common/modals/selectBookingDate";
const { width, height } = Dimensions.get("window");

export default function PropertyDetails() {
  const fade = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);

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
    animation();
  }, []);

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
        <View>
          <PropertyFeatureComp />
        </View>
        <AboutProperty />
        <View>
          <HostReviews />
        </View>
        <View
          style={{
            paddingHorizontal: RFValue(20),
          }}
        >
          <Morelist />
        </View>
        <View>
          <Similarlisting />
        </View>
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
              backgroundColor: "#06782F",
              padding: Platform.OS === "ios" ? 18 : 17,
              borderRadius: 10,
              marginTop: RFValue(15),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-regular",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Rent apartment
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
      <SelectBookingDate modalVisible={modalVisible} closeModal={closeModal} />
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
