import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Platform} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import InputField from "../components/inputs/inputField";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

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
  return (
    <>
      <StatusBar style="dark" />
      <View style={{ flex: 1, paddingHorizontal: RFValue(20) }}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: RFValue(15),
              marginTop: RFValue(20),
            }}
          >
                      <TouchableOpacity onPress={() => {
                          router.push("/home/account")
            }}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/bigArrow.png")}
                style={{
                  height: RFValue(40),
                  width: RFValue(40),
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Help & support
            </Text>
          </View>
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
          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startText}>Delete</Text>
          </TouchableOpacity>
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
  startBtn: {
    backgroundColor: "#06782F",
    padding: Platform.OS === "ios" ? 18 : 17,
    borderRadius: 10,
    marginTop: RFValue(10),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
});
