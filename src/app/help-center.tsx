import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import colors from "../constants/Colors";
import AppBar from "../components/appBar";

const { width, height } = Dimensions.get("window");

export default function Helpcenter() {
  const socialIcons = [
    {
      id: 1,
      img: require("../assets/images/twitter.png"),
    },
    {
      id: 2,
      img: require("../assets/images/instagram.png"),
    },
    {
      id: 3,
      img: require("../assets/images/facebook.png"),
    },
    {
      id: 4,
      img: require("../assets/images/whatsapp.png"),
    },
    {
      id: 5,
      img: require("../assets/images/discord.png"),
    },
  ];

  const [message, setMessage] = useState("");

  // Function to handle input change
  const handleInputChange = (text: string) => {
    setMessage(text);
  };

  // Function to handle submit
  const handleSubmit = () => {
    console.log("Message submitted:", message);
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
      <StatusBar style="dark" />
      <AppBar
        title="Help & support"
        onPress={() => router.push("/home/account")}
      />
      <Animated.ScrollView style={[styles.container, animatedStyle]}>
        <View style={{ flex: 1, paddingHorizontal: RFValue(20) }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                router.push("/faq");
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                padding: RFValue(10),
                borderRadius: 15,
                borderWidth: 1,
                borderColor: "#f3f4f6",
                marginTop: RFValue(20),
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 20,
                elevation: 2,
                shadowColor: "#d1d5db",
              }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: RFValue(8),
                }}>
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "urbanist-medium",
                    lineHeight: RFValue(20),
                    color: "#000000",
                  }}>
                  Frequently asked questions
                </Text>
              </View>
              <Image
                resizeMode="contain"
                source={require("../assets/images/arrow-right.png")}
                style={{
                  height: RFValue(22),
                  width: RFValue(22),
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#f3f4f6",
                padding: RFValue(9),
                borderRadius: 15,
                marginTop: RFValue(25),
                marginBottom: RFValue(30),
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 20,
                elevation: 2,
                shadowColor: "#d1d5db",
              }}>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-bold",
                  lineHeight: RFValue(30),
                }}>
                Support
              </Text>
              <Text style={styles.inputFieldbox}>Send us a message</Text>
              <TextInput
                placeholder="Send us a message describing your challenge on the app."
                style={[styles.inputbox, { textAlignVertical: "top" }]}
                placeholderTextColor="#999999"
                keyboardType="default"
                multiline
                numberOfLines={7}
                returnKeyType="done"
                onChangeText={handleInputChange}
              />
              <Text
                style={{
                  color: "#5F5F5F",
                  fontSize: RFValue(13),
                  fontFamily: "urbanist-medium",
                  marginTop: RFValue(10),
                }}>
                By clicking submit, you acknowledge that our team may review
                diagnostic and performance information and the metadata
                associated with your account to try to troubleshoot and solve
                your reported issue.
              </Text>
              <Text
                style={{
                  color: "#E51D34",
                  fontSize: RFValue(13),
                  fontFamily: "urbanist-medium",
                  marginTop: RFValue(10),
                }}>
                PS: All follow ups will be via your registered email
              </Text>
              <View>
                {message.length < 1 ? (
                  <TouchableOpacity style={styles.disableBtn}>
                    <Text style={styles.button}>Send</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={styles.startBtn}>
                    <Text style={styles.startText}>Send</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  marginTop: RFValue(20),
                }}>
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "outfit-bold",
                    lineHeight: RFValue(30),
                    color: "#A9A9A9",
                  }}>
                  Socials
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  {socialIcons?.map((icon) => (
                    <TouchableOpacity key={icon.id}>
                      <Image
                        resizeMode="cover"
                        source={icon.img}
                        style={{
                          width: RFValue(50),
                          height: RFValue(50),
                        }}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#fff",
    position: "relative",
  },
  inputbox: {
    backgroundColor: "#F9FAFA",
    color: "#000000",
    fontFamily: "urbanist-medium",
    fontSize: RFValue(14),
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
    borderRadius: 10,
    height: Platform.OS === "ios" ? RFValue(170) : RFValue(170),
  },
  inputFieldbox: {
    backgroundColor: "transparent",
    color: "#A9A9A9",
    fontFamily: "urbanist-medium",
    fontSize: RFValue(14),
    paddingBottom: RFValue(10),
    borderBottomWidth: 1,
    borderBottomColor: "#E7E7E7",
    marginBottom: RFValue(10),
  },
  button: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: colors.buttontext,
    fontSize: RFValue(14),
  },
  startBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginTop: RFValue(10),
  },
  disableBtn: {
    backgroundColor: colors.button,
    marginTop: RFValue(10),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 50,
    position: "absolute",
    left: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
});
