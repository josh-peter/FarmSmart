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
import AddressModalPicker from "../components/common/addressModalPicker";
import LanguageModalPicker from "../components/common/languageModalPicker";
import AppBar from "../components/appBar";
const { width, height } = Dimensions.get("window");

export default function EditProfile() {
  const [chooseData, setChooseData] = useState("Lagos, Nigeria");
  const [chooseLanguage, setChooseLanguage] = useState(
    "English"
  );
  const [isModdalVisible, setisModdalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [propertyResult, setPropertyResult] = useState<any>();

  const changeModalVisibility = (bool: any) => {
    setisModdalVisible(bool);
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
                backgroundColor: "#fafafa",
                padding: RFValue(10),
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-medium",
                  lineHeight: RFValue(20),
                  color: "#5F5F5F",
                }}>
                Bio (300 characters)
              </Text>
              <View
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#E4E4E7",
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
                marginTop: RFValue(10),
              }}>
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-bold",
                  color: "#1A1A1AB2",
                  lineHeight: RFValue(30),
                }}>
                Address
              </Text>
              <TouchableOpacity
                onPress={() => changeModalVisibility(true)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#E4E4E7",
                  paddingVertical: RFValue(12),
                  paddingHorizontal: RFValue(10),
                  backgroundColor: "#Fdfdfd",
                }}>
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "plusjakarta-regular",
                  }}>
                  {chooseData}
                </Text>
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModdalVisible}
                onRequestClose={() => changeModalVisibility(false)}>
                <AddressModalPicker
                  changeModalVisibility={changeModalVisibility}
                  setData={setData}
                />
              </Modal>
            </View>
            <View
              style={{
                marginTop: RFValue(10),
              }}>
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-bold",
                  color: "#1A1A1AB2",
                  lineHeight: RFValue(30),
                }}>
                Language
              </Text>
              <TouchableOpacity
                onPress={() => changeModalLangVisibility(true)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#E4E4E7",
                  paddingVertical: RFValue(12),
                  paddingHorizontal: RFValue(10),
                  backgroundColor: "#Fdfdfd",
                }}>
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "plusjakarta-regular",
                  }}>
                  {chooseLanguage}
                </Text>
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModdalVisible}
                onRequestClose={() => changeModalLangVisibility(false)}>
                <LanguageModalPicker
                  changeModalLangVisibility={changeModalLangVisibility}
                  setData={setLanguageData}
                />
              </Modal>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/edit-profile")}
            style={{
              backgroundColor: "#06782F",
              padding: Platform.OS === "ios" ? 18 : 17,
              borderRadius: 10,
              marginTop: RFValue(15),
            }}>
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-regular",
                color: "#fff",
                textAlign: "center",
              }}>
              Update profile
            </Text>
          </TouchableOpacity>
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
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(5),
  },
});
