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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
import PasswordInputField from "../../components/inputs/passwordInputField";
import colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Password() {
  const navigation = useNavigation();

  const fade = useRef(new Animated.Value(0)).current;
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [password, setPassword] = useState("");

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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          marginBottom: RFValue(15),
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 20,
          shadowOpacity: 0.16,
          elevation: 14,
          shadowColor: "#d5d0dd",
          width: responsiveScreenWidth(100),
          height: responsiveScreenWidth(20),
        }}>
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: "outfit-bold",
            lineHeight: RFValue(30),
          }}>
          Enter password
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/account-information/")}
          style={styles.clearIcon}>
          <MaterialIcons name="clear" size={18} color="#1A1A1A" />
        </TouchableOpacity>
      </View>
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
            padding: RFValue(9),
          }}>
          <Text
            style={{
              color: "#000000",
              fontSize: RFValue(13),
              fontFamily: "urbanist-medium",
              marginTop: RFValue(10),
            }}>
            This is a sensitive action, please provide your password to
            continue.
          </Text>
          <PasswordInputField
            label={"Password"}
            value={password}
            onChangeText={handleInputChange}
            errorMessage={""}
            placeholder={"**********"}
            returnKeyType="done"
            keyboardType="password"
            secureTextEntry={passwordVisible}
            placeholderTextColor={colors.onboardingText}
          />
        </View>
      </Animated.ScrollView>
        <View
          style={{
            paddingHorizontal: RFValue(15),
            marginBottom: RFValue(20),
          }}>
          {password.length < 3 ? (
            <TouchableOpacity style={styles.disableBtn}>
              <Text style={styles.button}>Continue</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => router.push("/account-information/editInformation")}
              style={styles.startBtn}>
              <Text style={styles.startText}>Continue</Text>
            </TouchableOpacity>
          )}
        </View>
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
    marginTop: RFValue(15),
    marginVertical: RFValue(20),
  },
  startBtn: {
    backgroundColor: colors.primary,
    padding: Platform.OS === "ios" ? 15 : 14,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginTop: RFValue(15),
    marginVertical: RFValue(20),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-semibold",
    textAlign: "center",
  },
});
