import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const Onboarding = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);
  const OnboardingData = [
    {
      id: 1,
      img: require("../assets/images/phone1.png"),
      title: "Discover Listings",
      description: "Search for apartments, houses, lands, and more. Find",
      subdescription: "your dream property",
    },
    {
      id: 2,
      img: require("../assets/images/phone2.png"),
      title: "Book Appointments",
      description: "Schedule viewings and meetings with agents. Your ",
      subdescription: "path to hassle-free property hunting.",
    },
    {
      id: 3,
      img: require("../assets/images/phone3.png"),
      title: "Save Your Favorites",
      description:
        "Keep track of properties you love. Tap the heart icon to save them for later.",
      subdescription: "to save them for later.",
    },
    {
      id: 4,
      img: require("../assets/images/phone4.png"),
      title: "Secure Payments",
      description: "Easily pay for apartments securely through our ",
      subdescription: "platform.",
    },
  ];

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex)
  }

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    const offSet = nextSlideIndex * width;
     ref?.current?.scrollToIndex({offSet});
  }


  return (
    <SafeAreaView>
      <Image
        resizeMode="contain"
        source={require("../assets/images/spiral.png")}
        style={{
          top: RFValue(80),
          right: RFValue(0),
          position: "absolute",
          width: "100%",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: RFValue(15),
        }}
      >
        {OnboardingData?.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: "#06782F",
              },
            ]}
          />
        ))}
      </View>
      <FlatList
        data={OnboardingData}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={ref}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              width: width,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                resizeMode="contain"
                source={item.img}
                style={{
                  width: RFValue(220),
                  height: RFValue(520),
                }}
              />
              <Image
                resizeMode="contain"
                source={require("../assets/images/cloudy.png")}
                style={{
                  bottom: RFValue(0),
                  right: RFValue(0),
                  position: "absolute",
                  width: "100%",
                }}
              />
            </View>
            <View
              style={{
                marginTop: RFValue(-90),
                paddingHorizontal: RFValue(15),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(32),
                  fontFamily: "outfit-semibold",
                  marginBottom: RFValue(2),
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "plusjakarta-regular",
                  color: "#6C727F",
                }}
              >
                {item.description}
              </Text>
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "plusjakarta-regular",
                  color: "#6C727F",
                }}
              >
                {item.subdescription}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: RFValue(30),
          paddingHorizontal: RFValue(15),
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              fontSize: RFValue(14),
              fontFamily: "plusjakarta-semibold",
              color: "#06782F",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goNextSlide}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            shadowOffset: { width: 2, height: 2 },
            shadowRadius: 20,
            shadowOpacity: 1.0,
            elevation: 5,
            shadowColor: "#caf7b7",
            width: RFValue(50),
            height: RFValue(50),
            borderRadius: RFValue(30),
          }}
        >
          <AntDesign name="arrowright" size={24} color="#06782F" />
        </TouchableOpacity>
      </View>
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
});
