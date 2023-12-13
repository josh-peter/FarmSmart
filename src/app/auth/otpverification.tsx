import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  useColorScheme,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
} from "react-native";
import { Link, Stack, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import OTPTextInput from "react-native-otp-textinput";
import ErrorMsg from "../../components/Auth/errors/errorMsg";


const OtpVerification = () => {
  const [otp, setOTP] = useState(["", "", "", "",]);
  const [incorrectCode, setIncorrectCode] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 2;
  const [resendText, setResendText] = useState("Resend code in 60s");
  const [timer, setTimer] = useState(60);

  const handleVerifyOTPCode = (values: any, setSubmitting: any) => {
    console.warn(values, "the values hehehehehehehe");
    router.push("/auth/newpassword");
    setSubmitting(false);
    console.log("Logging User In...");
  };

  const otpInputRefs: React.RefObject<TextInput>[] = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];




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
    <>
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
            .min(4, "invalid OTP Code"),
        })}
        onSubmit={async (values: any, { setSubmitting }) =>
          handleVerifyOTPCode(values, setSubmitting)
        }
      >
        {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
          <View style={styles.container}>
            <Image
              resizeMode="contain"
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>
              Please enter the code we just sent to your email
              <Text
                style={{
                  color: "#06782f",
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
                  marginBottom: RFValue(2),
                }}
              >
                <Text
                  style={[
                    styles.resendText,
                    {
                      color: "#051040",
                      textAlign: "center",
                    },
                  ]}
                >
                  {timer > 0
                    ? `Resend code in ${timer}s`
                    : "Didn’t receive code? "}
                </Text>
                <TouchableOpacity onPress={handleRequestAgain}>
                  <Text
                    style={[
                      styles.resendText,
                      {
                        color: "#06782f",
                        textAlign: "center",
                      },
                    ]}
                  >
                    {timer > 0 ? "" : "Resend code"}
                  </Text>
                </TouchableOpacity>
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
                    <TouchableOpacity
                      
                      style={styles.activeBtn}
                    >
                      <Text style={styles.button}>Verify</Text>
                    </TouchableOpacity>
                  </Link>
                )}
              </View>
            </View>
          </View>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(5),
    paddingVertical: RFValue(7),
  },
  logo: {
    height: RFValue(70),
    width: RFValue(70),
    alignSelf: "center",
    marginTop: RFValue(30),
  },
  title: {
    textAlign: "center",
    fontSize: RFValue(20),
    fontFamily: "outfit-bold",
    color: "#32264D",
    marginTop: 9,
  },
  subtitle: {
    textAlign: "center",
    fontSize: RFValue(14),
    fontWeight: "normal",
    fontFamily: "outfit-regular",
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
    marginTop: RFValue(19),
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
    borderColor: "#D0D5DD",
    borderRadius: Platform.OS == "android" ? 5 : 6,
    backgroundColor: "#fff",
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
    fontFamily: "plusjakarta-regular",
    textAlign: "center",
    marginTop: RFValue(20)
  },
  button: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: "#fff",
    fontSize: RFValue(14),
  },
  disableBtn: {
    backgroundColor: "#06782f",
    marginTop: RFValue(10),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: Platform.OS == "android" ? 15 : 15,
    justifyContent: "center",
    opacity: 0.2,
  },
  activeBtn: {
    backgroundColor: "#06782f",
    marginTop: RFValue(10),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: Platform.OS == "android" ? 15 : 15,
    justifyContent: "center",
  },
});

export default OtpVerification;
