import { Stack, router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
import colors from "../../constants/Colors";
import AppBar from "../../components/appBar";

export default function EditInformation() {
  const navigation = useNavigation();

  const fade = useRef(new Animated.Value(0)).current;
  const [password, setPassword] = useState("");

  const handleBackBtn = () => {
    navigation.goBack();
  };

  const handleInputChange = (text: string) => {
    setPassword(text);
  };

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
        style={{
          flex: 1,
          height: height,
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
        }}>
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
