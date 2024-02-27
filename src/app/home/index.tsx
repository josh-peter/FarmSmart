import { StyleSheet, Animated, Platform } from "react-native";
import React, { useEffect, useRef, useState, memo } from "react";
import { Link, Stack, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import Header from "../../components/homeScreens/headerComponent";
import SearchBarComponent from "../../components/homeScreens/searchBarComponent";
import PropertyListItem from "../../components/homeScreens/propertyListItem";
import HeaderButtons from "../../components/homeScreens/headerButtons";
import HomeIcons from "../../components/homeScreens/HomeIcons";

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

  const fade = useRef(new Animated.Value(0)).current;

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
      <Header />
      <Animated.View
        style={[
          styles.container,
          {
            opacity: fade,
            transform: [
              {
                translateY: fade.interpolate({
                  inputRange: [0, 1],
                  outputRange: [150, 0],
                }),
              },
            ],
          },
        ]}
      >
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
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(30),
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
