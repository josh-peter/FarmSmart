import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { Link, Stack, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import { Formik } from "formik";
import * as Yup from "yup";
import OTPTextInput from "react-native-otp-textinput";
import ErrorMsg from "../../components/Auth/errors/errorMsg";
import colors from "../../constants/Colors";
import { Image } from "expo-image";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
const { width, height } = Dimensions.get("window");
import OtpTextInput from "react-native-text-input-otp";


const OtpVerification = () => {
  const [resendText, setResendText] = useState("Resend code in 60s");
  const [timer, setTimer] = useState(60);
  const [otp, setOtp] = React.useState("");

  const handleVerifyOTPCode = (values: any, setSubmitting: any) => {
    router.push("/auth/newpassword");
    setSubmitting(false);
  };

  useEffect(() => {
    let countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      setResendText("Request again");
      clearInterval(countdown);
    }
    return () => {
      clearInterval(countdown);
    };
  }, [timer]);
  const handleRequestAgain = () => {
    setResendText("Resend code in 60s");
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: "OtpVerification",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          code: Yup.string()
            .required("OTP code is required")
            .min(4, "Incorrect Code"),
        })}
        onSubmit={async (values: any, { setSubmitting }) =>
          handleVerifyOTPCode(values, setSubmitting)
        }>
        {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
          <>
            <Animated.View style={[styles.container, animatedStyle]}>
              <Image
                contentFit="contain"
                source={require("../../assets/images/icon2.png")}
                style={styles.logo}
              />
              <Text style={styles.title}>Verify Code</Text>
              <Text style={styles.subtitle}>
                Please enter the code we just sent to your email{" "}
                <Text
                  style={{
                    color: colors.secondary,
                  }}>
                  danielsnr.design@gmail.com
                </Text>
              </Text>

              <View style={styles.otpHeaderContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 25,
                  }}>
                  {/* <OTPTextInput
                    textInputStyle={{
                      ...styles.otpInput,
                    }}
                    tintColor={colors.primary}
                    ref={(e) => (values.code = e)}
                    autoFocus={true}
                    handleTextChange={handleChange("code")}
                  /> */}
                  <OtpTextInput
                    otp={otp}
                    setOtp={setOtp}
                    digits={4}
                    style={{
                      borderRadius: 10,
                      borderTopWidth: 2,
                      borderRightWidth: 2,
                      borderLeftWidth: 2,
                      height: 55,
                      width: 55,
                      borderColor: colors.border2,
                    }}
                    fontStyle={{
                      fontSize: 22,
                      fontFamily: "outfit-medium",
                      marginTop: 5,
                    }}
                    focusedStyle={{
                      borderColor: colors.border2,
                      borderWidth: 2,
                    }}
                    ref={(e: any) => (values.code = e)}
                    autoFocus={true}
                    handleTextChange={handleChange("code")}
                  />
                </View>
              </View>
              {errors.code && (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    paddingVertical: RFValue(7),
                  }}>
                  <ErrorMsg message={`${errors.code}`} />
                </View>
              )}
              <View style={{}}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text
                    style={[
                      styles.resendText,
                      {
                        color: colors.onboardingText,
                        textAlign: "center",
                      },
                    ]}>
                    {!errors.code && "Didn’t receive code? "}
                  </Text>
                  <TouchableOpacity onPress={handleRequestAgain}>
                    <Text
                      style={[
                        styles.resendText,
                        {
                          color: colors.primary,
                          textAlign: "center",
                        },
                      ]}>
                      <Text style={{ fontFamily: "urbanist-bold" }}>
                        {!errors.code ? "" : "Resend"}
                      </Text>
                      <Text style={styles.resendTextbold}>
                        {!errors.code ? "Resend code" : ""}
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Animated.View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 28,
              }}>
              {isSubmitting || errors.code ? (
                <TouchableOpacity style={styles.disableBtn}>
                  <Text style={styles.button}>Verify</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.activeBtn}
                  onPress={() => router.push("/auth/newpassword")}>
                  <Text style={styles.activeButton}>Verify</Text>
                </TouchableOpacity>
              )}
            </View>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  logo: {
    height: 40,
    width: 140,
    alignSelf: "center",
    marginTop: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 23,
    fontFamily: "outfit-semibold",
    color: "#000000",
    marginTop: 5,
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "normal",
    fontFamily: "urbanist-medium",
    marginVertical: 7,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  otpHeaderContainer: {
    marginTop: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  otpInput: {
    width: 50,
    height: 50,
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: Platform.OS == "android" ? 5 : 6,
    backgroundColor: colors.background,
  },
  hyphen: {
    fontSize: 24,
    marginHorizontal: 5,
    color: "#D0D5DD",
  },
  incorrectCodeText: {
    color: colors.danger,
    marginTop: 10,
  },
  resendText: {
    marginTop: 15,
    fontSize: 15,
    fontFamily: "urbanist-medium",
    textAlign: "center",
    color: colors.header,
  },
  resendTextbold: {
    fontSize: 16,
    fontFamily: "urbanist-bold",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: colors.buttontext,
    fontSize: 14,
  },
  activeButton: {
    fontFamily: "outfit-semibold",
    textAlign: "center",
    color: colors.background,
    fontSize: 17,
  },
  disableBtn: {
    backgroundColor: colors.button,
    marginTop: 10,
    padding: 13,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
  activeBtn: {
    backgroundColor: colors.primary,
    marginTop: 10,
    padding: 13,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
});

export default OtpVerification;
