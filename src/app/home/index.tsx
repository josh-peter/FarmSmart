import { StyleSheet, Platform, Dimensions } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { Link, Stack, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import Header from "../../components/homeScreens/headerComponent";
import SearchBarComponent from "../../components/homeScreens/searchBarComponent";
import PropertyListItem from "../../components/homeScreens/propertyListItem";
import HeaderButtons from "../../components/homeScreens/headerButtons";
import HomeIcons from "../../components/homeScreens/HomeIcons";
import colors from "../../constants/Colors";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const Index = () => {
  const [selectedType, setSelectedType] = useState<"Rental" | "Sales">(
    "Rental"
  );

  const searchHandler = (value: string) => {
    if (value === "") return;

    router.push({
      pathname: `/search`,
      params: { search: value },
    });
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
      <Header />
      <Animated.View style={[styles.container, animatedStyle]}>
        <SearchBarComponent onSearch={searchHandler} />
        <HeaderButtons
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        <HomeIcons />
        <PropertyListItem selectedType={selectedType} />
      </Animated.View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: Platform.OS === "ios" ? RFValue(10) : RFValue(15),
    paddingVertical: RFValue(20),
  },
  inputbox: {
    width: RFValue(230),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: Platform.OS === "android" ? RFValue(6) : RFValue(8),
    paddingLeft: RFValue(32),
    paddingRight: RFValue(15),
  },
  eyeIcon: {
    position: "absolute",
    top: RFValue(10),
    left: RFValue(10),
    zIndex: 1,
  },
  dot: {
    width: RFValue(18),
    height: RFValue(4),
    borderRadius: 30,
    backgroundColor: "#D9D9D9",
    marginHorizontal: RFValue(2),
  },
  activeDot: {
    width: RFValue(18),
    height: RFValue(4),
    borderRadius: 30,
    backgroundColor: "#06782F",
    marginHorizontal: RFValue(2),
  },
});
