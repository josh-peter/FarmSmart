import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../inputs/inputField";
import PasswordInputField from "../inputs/passwordInputField";
import { Image } from "expo-image";
import colors from "../../constants/Colors";
const { width, height } = Dimensions.get("window");

export default function LoginComp() {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUserLogin = (values: any, setSubmitting: any) => {
    router.push("/home/");
    setSubmitting(false);
  };

  const slideIn = useSharedValue(0);
  const fadeIn = useSharedValue(0);

  useEffect(() => {
    slideIn.value = withTiming(1, {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });

    fadeIn.value = withTiming(1, {
      duration: 1000,
      easing: Easing.linear,
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = -0.3 * width * (1 - slideIn.value);

    return {
      opacity: fadeIn.value,
      transform: [{ translateX }],
    };
  });

  return (
    <>
      <Stack.Screen
        options={{
          title: "login",
          headerShown: false,
        }}
      />
      <StatusBar style="dark" />
      <Animated.View style={[styles.container, animatedStyle]}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .required("Email is required")
              .email("Invalid emai")
              .min(5, "Must be a valid email"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={async (values: any, { setSubmitting }) =>
            handleUserLogin(values, setSubmitting)
          }>
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            errors,
          }) => (
            <Animated.View sharedTransitionTag="tag">
              <Image
                contentFit="contain"
                source={require("../../assets/images/icon2.png")}
                style={styles.logo}
              />
              <Text style={styles.title}>Sign In</Text>
              <InputField
                label={"Email/Phone"}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder={"E.g myfreshpass@gmail.com"}
                returnKeyType="done"
                keyboardType="email-address"
                errorMessage={errors.email}
                placeholderTextColor={colors.onboardingText}
              />

              <PasswordInputField
                label={"Password"}
                value={values.password}
                onChangeText={handleChange("password")}
                errorMessage={errors.password}
                onBlur={handleBlur("password")}
                placeholder={"**********"}
                returnKeyType="done"
                keyboardType="password"
                secureTextEntry={passwordVisible}
                placeholderTextColor={colors.onboardingText}
              />

              <Link href={"/auth/otpverification"} asChild>
                <TouchableOpacity>
                  <Text style={styles.passText}>Forgot password</Text>
                </TouchableOpacity>
              </Link>
              <View>
                {isSubmitting || errors.email || errors.password ? (
                  <TouchableOpacity style={styles.disableBtn}>
                    <Text style={styles.button}>Sign in</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={styles.activeBtn}>
                    <Text style={styles.activeButton}>Sign in</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 30,
                  paddingHorizontal: 20,
                }}>
                <View style={styles.line} />
                <Text style={styles.signupText}>Or Sign In With</Text>
                <View style={styles.line} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    borderWidth: 1,
                    borderColor: colors.button,
                    paddingVertical: 5,
                    width: Platform.OS === "ios" ? "40%" : "45%",
                    borderRadius: 5,
                  }}>
                  <Image
                    contentFit="contain"
                    source={require("../../assets/images/apple.png")}
                    style={styles.appleLogo}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "urbanist-medium",
                    }}>
                    Apple
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    borderWidth: 1,
                    borderColor: colors.button,
                    paddingVertical: 5,
                    width: Platform.OS === "ios" ? "40%" : "45%",
                    borderRadius: 5,
                  }}>
                  <Image
                    contentFit="contain"
                    source={require("../../assets/images/google.png")}
                    style={styles.googleLogo}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "urbanist-medium",
                    }}>
                    Google
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.smallText}>
                Don't have an account?
                <Link href={"/auth/signup"} asChild>
                  <Text
                    style={{
                      color: colors.primary,
                      fontFamily: "urbanist-bold",
                    }}>
                    {" "}
                    Sign Up
                  </Text>
                </Link>
              </Text>
            </Animated.View>
          )}
        </Formik>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  logo: {
    height: 40,
    width: 150,
    alignSelf: "center",
    marginTop: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontFamily: "outfit-semibold",
    color: "#000000",
    marginTop: 5,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "normal",
    fontFamily: "outfit-regular",
    color: "#8E8C84",
    marginVertical: 7,
  },
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: 16,
    paddingVertical: 5,
  },
  errorText: {
    fontFamily: "outfit-medium",
    fontSize: 10,
    color: "red",
  },
  eyeIcon: {
    position: "absolute",
    top: 10,
    right: 19,
    zIndex: 1,
  },
  passText: {
    fontSize: 15,
    fontWeight: "normal",
    fontFamily: "outfit-medium",
    color: colors.primary,
    marginVertical: 13,
  },
  button: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: colors.buttontext,
    fontSize: 14,
  },
  activeButton: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: colors.background,
    fontSize: 14,
  },
  disableBtn: {
    backgroundColor: colors.button,
    marginTop: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
  activeBtn: {
    backgroundColor: colors.primary,
    marginTop: 10,
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
  line: {
    height: 1.2,
    width: Platform.OS === "ios" ? 138 : 120,
    backgroundColor: colors.line,
  },
  signupText: {
    color: colors.onboardingText,
    fontSize: 11,
    fontWeight: "normal",
    fontFamily: "urbanist-regular",
    marginHorizontal: 4,
  },
  appleLogo: {
    height: 30,
    width: 30,
  },
  googleLogo: {
    height: 30,
    width: 30,
  },
  smallText: {
    marginTop: 15,
    fontSize: 15,
    fontFamily: "urbanist-medium",
    textAlign: "center",
    color: colors.header,
  },
});
