import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, Icon, ListItem, Tab, TabView } from "@rneui/themed";
import { Link, Stack, router } from "expo-router";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import ModalPicker from "../components/common/modalPicker";
import LanguageModalPicker from "../components/common/languagePicker";
import AppBar from "../components/appBar";
import colors from "../constants/Colors";
import AddressPicker from "../components/common/addressPicker";
import LanguagePicker from "../components/common/languagePicker";
const { width, height } = Dimensions.get("window");

export default function EditProfile() {
  const [chooseData, setChooseData] = useState("Lagos, Nigeria");
  const [chooseLanguage, setChooseLanguage] = useState("English");
  const [showAddressPicker, setShowAddressPicker] = useState(false);
  const [showLanguagePicker, setShowLanguagePicker] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [propertyResult, setPropertyResult] = useState<any>();

  const toggleAddressPicker = () => {
    setShowAddressPicker(!showAddressPicker);
  };

  const toggleLanguagePicker = () => {
    setShowLanguagePicker(!showLanguagePicker);
  };

  const changeModalLangVisibility = (bool: any) => {
    setChooseLanguage(bool);
  };

  const setData = (option: any) => {
    setChooseData(option);
  };

  const setLanguageData = (option: any) => {
    setChooseLanguage(option);
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
      <Stack.Screen
        options={{
          title: "Notification",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar title="Edit profile" onPress={() => router.back()} />
      <Animated.View style={[styles.container, animatedStyle]}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: RFValue(15),
          }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              overflow: "hidden",
              gap: RFValue(6),
              backgroundColor: "#F5F5F5",
              paddingHorizontal: RFValue(12),
              paddingVertical: RFValue(10),
              borderRadius: RFValue(8),
              marginBottom: RFValue(10),
              marginTop: RFValue(30),
              width: responsiveScreenWidth(52),
            }}>
            <Image
              resizeMode="contain"
              source={require("../assets/images/eyeIcon.png")}
              style={{
                width: RFValue(20),
                height: RFValue(20),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-medium",
                color: "#000",
                flexShrink: 1,
              }}>
              Visible to all agents
            </Text>
          </View>
          <View>
            <View>
              <Image
                resizeMode="contain"
                source={require("../assets/images/userProfile.png")}
                style={{
                  height: RFValue(75),
                  width: RFValue(65),
                }}
              />
              <Image
                resizeMode="contain"
                source={require("../assets/images/EditPen.png")}
                style={{
                  height: RFValue(25),
                  width: RFValue(25),
                  position: "absolute",
                  top: 60,
                  left: 20,
                  right: 0,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "outfit-bold",
                  color: "#161917",
                  lineHeight: RFValue(30),
                  marginTop: RFValue(5),
                }}>
                Daniel Israel
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                padding: RFValue(10),
                borderRadius: 10,
                borderWidth: RFValue(1),
                borderColor: "#F0F4FF",
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 20,
                elevation: 4,
                shadowColor: "#d1d5db",
              }}>
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "outfit-semibold",
                  lineHeight: RFValue(20),
                  color: "#5F5F5F",
                }}>
                Bio (300 characters)
              </Text>
              <View
                style={{
                  backgroundColor: "#FDFDFD",
                  borderRadius: 10,
                  borderWidth: RFValue(1),
                  borderColor: "#F0F4FF",
                  padding: RFValue(8),
                  marginTop: RFValue(10),
                }}>
                <TextInput
                  style={[styles.inputbox, { textAlignVertical: "top" }]}
                  placeholderTextColor="#5f5f5f"
                  keyboardType="default"
                  multiline={true}
                  numberOfLines={3}
                  returnKeyType="done"
                />
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                marginTop: RFValue(20),
              }}>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-semibold",
                  color: "#1A1A1AB2",
                  lineHeight: RFValue(30),
                }}>
                Address
              </Text>
              <TouchableOpacity
                onPress={toggleAddressPicker}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  borderRadius: 10,
                  borderWidth: RFValue(1),
                  borderColor: "#F0F4FF",
                  shadowOffset: { width: 2, height: 2 },
                  shadowRadius: 20,
                  elevation: 4,
                  shadowColor: "#d1d5db",
                  paddingVertical: RFValue(12),
                  paddingHorizontal: RFValue(10),
                  backgroundColor: "#fff",
                }}>
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "urbanist-medium",
                  }}>
                  {chooseData}
                </Text>
              </TouchableOpacity>
              {showAddressPicker && (
                <AddressPicker
                  changeVisibility={toggleAddressPicker}
                  setData={setData}
                />
              )}
            </View>
            <View
              style={{
                marginTop: RFValue(20),
              }}>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-semibold",
                  color: "#1A1A1AB2",
                  lineHeight: RFValue(30),
                }}>
                Language
              </Text>
              <TouchableOpacity
                onPress={toggleLanguagePicker}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  borderRadius: 10,
                  borderWidth: RFValue(1),
                  borderColor: "#F0F4FF",
                  shadowOffset: { width: 2, height: 2 },
                  shadowRadius: 20,
                  elevation: 4,
                  shadowColor: "#d1d5db",
                  paddingVertical: RFValue(12),
                  paddingHorizontal: RFValue(10),
                  backgroundColor: "#fff",
                }}>
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "urbanist-medium",
                  }}>
                  {chooseLanguage}
                </Text>
              </TouchableOpacity>
              {showLanguagePicker && (
                <LanguagePicker
                  changeModalLangVisibility={changeModalLangVisibility}
                  setData={setLanguageData}
                />
              )}
            </View>
          </View>
          <View
            style={{
              paddingBottom: RFValue(15),
              marginTop: RFValue(30),
            }}>
            <TouchableOpacity
              onPress={() => router.push("/client-profile")}
              style={{
                backgroundColor: colors.primary,
                paddingHorizontal: RFValue(14),
                paddingVertical: RFValue(12),
                borderRadius: 10,
                borderBottomRightRadius: 0,
                marginTop: RFValue(10),
              }}>
              <Text
                style={{
                  fontSize: RFValue(14),
                  color: "#fff",
                  fontFamily: "outfit-semibold",
                  textAlign: "center",
                }}>
                Update profile
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animated.View>
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
  eyeIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  inputbox: {
    width: RFValue(230),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: Platform.OS === "android" ? RFValue(3) : RFValue(8),
    paddingLeft: RFValue(32),
    paddingRight: RFValue(15),
  },
});
