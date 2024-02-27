import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Animated,
  Dimensions,
  Platform,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Directions,
  Gesture,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { OnboardingData } from "../Data/onBoardingData";
const { width, height } = Dimensions.get("window");
import { Image } from "expo-image";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";

interface OnboardingItem {
  id: number;
  title: string;
  description: string;
  subdescription: string;
  img: any;
}

const Onboarding = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const flatListRef = useRef<FlatList<OnboardingItem>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  
    const fade = useRef(new Animated.Value(0)).current;

    const animation = () => {
       Animated.timing(fade, {
         toValue: 1,
         duration: 1000,
         useNativeDriver: true,
       }).start();
    };

    useEffect(() => {
      animation();
    }, []);

  const updateCurrentSlide = (e: {
    nativeEvent: { contentOffset: { x: number } };
  }) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    if (currentIndex !== screenIndex) {
      setScreenIndex(currentIndex);
    }
  };

  const goToNextSlide = () => {
    if (screenIndex < OnboardingData.length - 1) {
      setScreenIndex(screenIndex + 1);
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: screenIndex + 1,
      });
    }
  };

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <View style={styles.indicatorContainer}>
        {OnboardingData?.map((_, index) => (
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
        onMomentumScrollEnd={updateCurrentSlide}
        ref={flatListRef}
        data={OnboardingData}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <Animated.View
            style={[
              styles.pageContainer,
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
            <Animated.View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                contentFit="contain"
                source={item.img}
                style={styles.phones}
              />
            </Animated.View>
            <Animated.View
              style={{
                marginTop: RFValue(-90),
                paddingHorizontal: RFValue(15),
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.subdescription}>{item.subdescription}</Text>
            </Animated.View>
          </Animated.View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {screenIndex == OnboardingData.length - 1 ? (
        <View
          style={{
            paddingHorizontal: RFValue(15),
          }}
        >
          <Link href={"/auth/login"} asChild>
            <TouchableOpacity style={styles.startBtn}>
              <Text style={styles.startText}>Get Started</Text>
            </TouchableOpacity>
          </Link>
        </View>
      ) : (
        <View style={styles.skipBtn}>
          <TouchableOpacity onPress={() => router.push("/auth/login")}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextBtn} onPress={goToNextSlide}>
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
    top: RFValue(70),
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
    width: responsiveScreenWidth(100),
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
    padding: Platform.OS === "ios" ? 13 : 12,
    borderRadius: 10,
    marginTop: RFValue(60),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
});
