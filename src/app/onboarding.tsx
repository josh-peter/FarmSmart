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
import colors from "../constants/Colors";

interface OnboardingItem {
  id: number;
  title: string;
  description: string;
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

const indicatorColor = (index: number) => {
  if (index < 2 && screenIndex < 2) {
    return colors.primary; 
  } else if (
    index >= OnboardingData.length - 2 &&
    screenIndex >= OnboardingData.length - 2
  ) {
    return colors.green; 
  } else if (index === screenIndex) {
    return colors.primary;
  } else {
    return colors.indicator; 
  }
};

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="dark" />
      <View style={styles.indicatorContainer}>
        {OnboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor: indicatorColor(index),
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
                height: RFValue(120),
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
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
            <AntDesign name="arrowright" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  indicator: {
    height: 2.5,
    width: 85,
    backgroundColor: colors.primary,
    marginHorizontal: RFValue(3),
    marginTop: RFValue(20),
  },
  indicatorContainer: {
    flexDirection: "row",
    marginHorizontal: RFValue(15),
  },
  pageContainer: {
    flex: 1,
    width: width,
  },
  phones: {
    width: responsiveScreenWidth(100),
    height: RFValue(520),
  },
  title: {
    fontSize: RFValue(32),
    fontFamily: "outfit-semibold",
    marginBottom: RFValue(5),
    color:colors.dark
  },
  description: {
    fontSize: RFValue(13),
    fontFamily: "urbanist-medium",
    color: colors.onboardingText,
  },
  subdescription: {
    fontSize: RFValue(13),
    fontFamily: "urbanist-medium",
    color: colors.onboardingText,
  },
  skipBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: RFValue(15),
  },
  skipText: {
    fontSize: RFValue(14),
    fontFamily: "urbanist-bold",
    color: colors.primary,
  },
  nextBtn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 20,
    shadowOpacity: 0.1,
    elevation: 5,
    shadowColor: Platform.OS === "ios" ? "#000" : "green",
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(30),
  },
  startBtn: {
    backgroundColor: colors.primary,
    padding: Platform.OS === "ios" ? 13 : 12,
    borderRadius: 10,
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
});
