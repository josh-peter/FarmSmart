import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Platform, Animated, Dimensions} from "react-native";
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
    <StatusBar style="dark" />
      <AppBar title="Help & support" returnRoute={"/home/account"}/>
      <Animated.ScrollView
        style={{
          flex: 1,
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
        <View style={{ flex: 1, paddingHorizontal: RFValue(20) }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              router.push("/faq")
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              padding: RFValue(10),
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#f9fafa",
              marginTop: RFValue(20),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: RFValue(8),
              }}
            >
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: "plusjakarta-bold",
                    lineHeight: RFValue(20),
                    color: "#1A1A1A",
                  }}
                >
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
              borderWidth: 1,
              borderColor: "#F5F5F5",
              padding: RFValue(9),
              borderRadius: 15,
              marginTop: RFValue(25),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Support
            </Text>
            <TextInput
              placeholder="Send us a message"
              style={styles.inputFieldbox}
              placeholderTextColor="#5f5f5f"
              keyboardType="default"
              returnKeyType="done"
            />
            <TextInput
              placeholder="Send us a message describing your challenge on the app."
              style={[styles.inputbox, { textAlignVertical: "top" }]}
              placeholderTextColor="#414141"
              keyboardType="default"
              multiline
              numberOfLines={7}
              returnKeyType="done"
              onChangeText={handleInputChange}
            />
            <Text
              style={{
                color: "#5F5F5F",
                fontSize: RFValue(12),
                fontFamily: "plusjakarta-regular",
                marginTop: RFValue(10),
              }}
            >
              By clicking submit, you acknowledge that our team may review
              diagnostic and performance information and the metadata associated
              with your account to try to troubleshoot and solve your reported
              issue.
            </Text>
            <Text
              style={{
                color: "#E51D34",
                fontSize: RFValue(12),
                fontFamily: "plusjakarta-regular",
                marginTop: RFValue(10),
              }}
            >
              PS: All follow ups will be via your registered email
            </Text>
          </View>
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
            }}
          >
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
                color: "#A9A9A9",
              }}
            >
              Socials
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {socialIcons?.map((icon) => (
                <Image
                  key={icon.id}
                  resizeMode="cover"
                  source={icon.img}
                  style={{
                    width: RFValue(60),
                    height: RFValue(60),
                  }}
                />
              ))}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </Animated.ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  inputbox: {
    backgroundColor: "#F9FAFA",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
    borderRadius: 10,
    height:Platform.OS=== "ios" ? RFValue(170) : RFValue(170)
  },
  inputFieldbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(10),
    borderRadius: 10,
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
    padding: Platform.OS === "ios" ? 18 : 17,
    borderRadius: 10,
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
