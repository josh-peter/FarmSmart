import { Stack, router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TextInput,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
import colors from "../../constants/Colors";
import AppBar from "../../components/appBar";

export default function EditInformation() {
  const navigation = useNavigation();

  const [password, setPassword] = useState("");

  const handleBackBtn = () => {
    navigation.goBack();
  };

  const handleInputChange = (text: string) => {
    setPassword(text);
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
          title: "Delete account",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar
        title="Edit information"
        onPress={() => router.push("/account-information/")}
      />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, animatedStyle]}>
        <View
          style={{
            padding: RFValue(15),
          }}>
          <View>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: RFValue(14),
                marginTop: RFValue(15),
                color: colors.dark,
              }}>
              First name
            </Text>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                padding: RFValue(8),
                marginTop: RFValue(10),
                borderColor: "#f3f4f6",
                paddingHorizontal: RFValue(10),
                paddingVertical: RFValue(10),
                backgroundColor: "#fff",
                marginBottom: RFValue(10),
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 20,
                elevation: 2,
                shadowColor: "#d1d5db",
              }}>
              <TextInput
                placeholder=""
                value="Daniel"
                style={styles.inputbox}
                placeholderTextColor={colors.onboardingText}
                onChangeText={handleInputChange}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: RFValue(14),
                marginTop: RFValue(15),
                color: colors.dark,
              }}>
              Last name
            </Text>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                padding: RFValue(8),
                marginTop: RFValue(10),
                borderColor: "#f3f4f6",
                paddingHorizontal: RFValue(10),
                paddingVertical: RFValue(10),
                backgroundColor: "#fff",
                marginBottom: RFValue(10),
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 20,
                elevation: 2,
                shadowColor: "#d1d5db",
              }}>
              <TextInput
                placeholder=""
                value="Isreal"
                style={styles.inputbox}
                placeholderTextColor={colors.onboardingText}
                onChangeText={handleInputChange}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: RFValue(14),
                marginTop: RFValue(15),
                color: colors.dark,
              }}>
              Email
            </Text>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                padding: RFValue(8),
                marginTop: RFValue(10),
                borderColor: "#f3f4f6",
                paddingHorizontal: RFValue(10),
                paddingVertical: RFValue(10),
                backgroundColor: "#fff",
                marginBottom: RFValue(10),
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 20,
                elevation: 2,
                shadowColor: "#d1d5db",
              }}>
              <TextInput
                placeholder=""
                value="danielsnr.design@gmail.com"
                style={styles.inputbox}
                placeholderTextColor={colors.onboardingText}
                onChangeText={handleInputChange}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: RFValue(14),
                marginTop: RFValue(15),
                color: colors.dark,
              }}>
              Phone number
            </Text>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                padding: RFValue(8),
                marginTop: RFValue(10),
                borderColor: "#f3f4f6",
                paddingHorizontal: RFValue(10),
                paddingVertical: RFValue(10),
                backgroundColor: "#fff",
                marginBottom: RFValue(10),
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 20,
                elevation: 2,
                shadowColor: "#d1d5db",
              }}>
              <TextInput
                placeholder=""
                value="+2348160523342"
                style={styles.inputbox}
                placeholderTextColor={colors.onboardingText}
                onChangeText={handleInputChange}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: RFValue(15),
            marginBottom: RFValue(20),
          }}>
          {password.length < 3 ? (
            <TouchableOpacity style={styles.disableBtn}>
              <Text style={styles.button}>Update information</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              // onPress={() => handleSubmit()}
              style={styles.startBtn}>
              <Text style={styles.startText}>Update information</Text>
            </TouchableOpacity>
          )}
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
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(6),
    borderRadius: 50,
    position: "absolute",
    right: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "urbanist-medium",
    fontSize: RFValue(15),
    paddingVertical: RFValue(3),
  },
  button: {
    fontFamily: "outfit-semibold",
    textAlign: "center",
    color: colors.buttontext,
    fontSize: RFValue(14),
  },
  disableBtn: {
    backgroundColor: colors.button,
    padding: Platform.OS === "ios" ? 15 : 14,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginTop: RFValue(50),
    marginVertical: RFValue(20),
  },
  startBtn: {
    backgroundColor: colors.primary,
    padding: Platform.OS === "ios" ? 15 : 14,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginTop: RFValue(50),
    marginVertical: RFValue(20),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-semibold",
    textAlign: "center",
  },
});
