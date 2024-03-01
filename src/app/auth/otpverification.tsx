import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Link, Stack, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import { Formik } from "formik";
import * as Yup from "yup";
import OTPTextInput from "react-native-otp-textinput";
import ErrorMsg from "../../components/Auth/errors/errorMsg";
import colors from "../../constants/Colors";
import { Image } from "expo-image";

const OtpVerification = () => {
  const [resendText, setResendText] = useState("Resend code in 60s");
  const [timer, setTimer] = useState(60);

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
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
        }
      >
        {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
          <>
            <View style={styles.container}>
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
                  }}
                >
                  danielsnr.design@gmail.com
                </Text>
              </Text>

              <View style={styles.otpHeaderContainer}>
                <View style={styles.otpInputContainer}>
                  <OTPTextInput
                    textInputStyle={{
                      ...styles.otpInput,
                    }}
                    tintColor={colors.primary}
                    ref={(e) => (values.code = e)}
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
                  }}
                >
                  <ErrorMsg message={`${errors.code}`} />
                </View>
              )}
              <View style={{}}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={[
                      styles.resendText,
                      {
                        color: colors.onboardingText,
                        textAlign: "center",
                      },
                    ]}
                  >
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
                      ]}
                    >
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
            </View>
            <View
              style={{
                paddingHorizontal: RFValue(10),
                paddingVertical: RFValue(28),
              }}
            >
              {isSubmitting || errors.code ? (
                <TouchableOpacity style={styles.disableBtn}>
                  <Text style={styles.button}>Verify</Text>
                </TouchableOpacity>
              ) : (
                <Link href={"/auth/newpassword"} asChild>
                  <TouchableOpacity style={styles.activeBtn}>
                    <Text style={styles.activeButton}>Verify</Text>
                  </TouchableOpacity>
                </Link>
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
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(7),
  },
  logo: {
    height: RFValue(40),
    width: RFValue(140),
    alignSelf: "center",
    marginTop: RFValue(30),
  },
  title: {
    textAlign: "center",
    fontSize: RFValue(16),
    fontFamily: "outfit-bold",
    color: "#32264D",
    marginTop: 9,
  },
  subtitle: {
    textAlign: "center",
    fontSize: RFValue(13),
    fontWeight: "normal",
    fontFamily: "urbanist-medium",
    marginVertical: RFValue(7),
  },
  headerText: {
    fontSize: RFValue(3.5),
    fontFamily: "satoshi-bold",
  },
  smallText: {
    fontSize: RFValue(2),
    fontFamily: "plusjakarta-regular",
    marginTop: Platform.OS === "android" ? RFValue(1) : RFValue(2),
  },
  phoneText: {
    fontSize: RFValue(29),
    fontFamily: "satoshi-bold",
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  otpHeaderContainer: {
    marginTop: RFValue(10),
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
    backgroundColor: "#fff",
    borderBottom: 0,
  },
  hyphen: {
    fontSize: 24,
    marginHorizontal: 5,
    color: "#D0D5DD",
  },
  verifyButton: {
    marginTop: RFValue(2),
    backgroundColor: "#4a9cda",
    paddingVertical: RFValue(2),
    borderRadius: 30,
    marginBottom: Platform.OS === "ios" ? RFValue(1) : RFValue(0.5),
  },
  verifyButtonText: {
    fontSize: 18,
    color: "#fff",
  },
  incorrectCodeText: {
    color: "red",
    marginTop: 10,
  },
  resendText: {
    fontSize: RFValue(14),
    fontFamily: "urbanist-medium",
    textAlign: "center",
    marginTop: RFValue(10),
  },
  resendTextbold: {
    fontSize: RFValue(14),
    fontFamily: "urbanist-bold",
    textAlign: "center",
    marginTop: RFValue(10),
  },
  button: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: colors.buttontext,
    fontSize: RFValue(14),
  },
  activeButton: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: colors.background,
    fontSize: RFValue(14),
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
  activeBtn: {
    backgroundColor: colors.primary,
    marginTop: RFValue(10),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
});

export default OtpVerification;
