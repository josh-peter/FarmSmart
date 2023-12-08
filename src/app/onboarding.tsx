import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  Directions,
  Gesture,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { OnboardingData } from "../Data/onBoardingData";
const { width, height } = Dimensions.get("window");
import { GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  BounceInRight,
  BounceOutLeft,
} from "react-native-reanimated";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Onboarding = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = OnboardingData[screenIndex];
  const onContinue = () => {
    const isLastScreen = screenIndex === OnboardingData.length - 1;
    if (isLastScreen) {
      setScreenIndex(0);
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      setScreenIndex(0);
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.LEFT).onEnd(onBack)
  );

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="dark" />
      <Image
        resizeMode="contain"
        source={require("../assets/images/spiral.png")}
        style={styles.spiral}
      />
      <View style={styles.indicatorContainer}>
        {OnboardingData?.map((step, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor: index === screenIndex ? "#06782F" : "#d9d9d9",
              },
            ]}
          />
        ))}
      </View>
      <FlatList
        data={OnboardingData}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <GestureDetector gesture={swipes}>
            <Animated.View
              entering={BounceInRight}
              exiting={BounceOutLeft}
              style={styles.pageContainer}
            >
              <Animated.View
                entering={BounceInRight}
                exiting={BounceOutLeft}
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Animated.Image
                  entering={BounceInRight}
                  exiting={BounceOutLeft}
                  resizeMode="contain"
                  source={data.img}
                  style={styles.phones}
                />
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/cloudy.png")}
                  style={styles.cloudyEffect}
                />
              </Animated.View>
              <Animated.View
                entering={BounceInRight}
                exiting={BounceOutLeft}
                style={{
                  marginTop: RFValue(-90),
                  paddingHorizontal: RFValue(15),
                }}
              >
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.subdescription}>{data.subdescription}</Text>
              </Animated.View>
            </Animated.View>
          </GestureDetector>
        )}
        keyExtractor={(data) => data.id.toString()}
      />
      {screenIndex == OnboardingData.length - 1 ? (
        <View
          style={{
            paddingHorizontal: RFValue(15),
          }}
        >
          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.skipBtn}>
          <TouchableOpacity>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onContinue} style={styles.nextBtn}>
            <AntDesign name="arrowright" size={24} color="#06782F" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  indicator: {
    height: RFValue(2.5),
    width: RFValue(70),
    backgroundColor: "#d9d9d9",
    marginHorizontal: RFValue(3),
    marginTop: RFValue(20),
  },
  spiral: {
    top: RFValue(80),
    right: RFValue(0),
    position: "absolute",
    width: "100%",
  },
  indicatorContainer: {
    flexDirection: "row",
    paddingHorizontal: RFValue(15),
  },
  pageContainer: {
    flex: 1,
    width: width,
  },
  phones: {
    width: RFValue(220),
    height: RFValue(520),
  },
  cloudyEffect: {
    bottom: RFValue(0),
    right: RFValue(0),
    left: RFValue(0),
    position: "absolute",
    width: "100%",
  },
  title: {
    fontSize: RFValue(32),
    fontFamily: "outfit-semibold",
    marginBottom: RFValue(3),
  },
  description: {
    fontSize: RFValue(12),
    fontFamily: "plusjakarta-regular",
    color: "#6C727F",
  },
  subdescription: {
    fontSize: RFValue(12),
    fontFamily: "plusjakarta-regular",
    color: "#6C727F",
  },
  skipBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: RFValue(50),
    paddingHorizontal: RFValue(15),
  },
  skipText: {
    fontSize: RFValue(14),
    fontFamily: "plusjakarta-semibold",
    color: "#06782F",
  },
  nextBtn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 20,
    shadowOpacity: 1.0,
    elevation: 5,
    shadowColor: Platform.OS === "ios" ? "#caf7b7" : "green",
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(30),
  },
  startBtn: {
    backgroundColor: "#06782F",
    padding: 10,
    borderRadius: 10,
    marginTop:RFValue(60)
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
});
