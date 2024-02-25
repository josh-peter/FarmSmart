import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import { Link, Stack, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import OTPTextInput from "react-native-otp-textinput";
import ErrorMsg from "../../Auth/errors/errorMsg";
import Modal from "react-native-modal";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  modalPayVisible: boolean;
  closePayModal: () => void;
}

export default function ({ modalPayVisible, closePayModal }: Props){
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
    
    const {height} = useWindowDimensions()

  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={60}
        style={styles.container}
      >
        <Modal
          isVisible={modalPayVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={300}
          animationOutTiming={300}
          backdropTransitionInTiming={300}
          backdropTransitionOutTiming={300}
          onBackdropPress={closePayModal}
          onBackButtonPress={closePayModal}
          backdropOpacity={0.5}
          backdropColor="#000"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            bottom: 0,
            position: "absolute",
            margin: 0,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              width: responsiveScreenWidth(100),
              height: responsiveScreenHeight(50),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fafafa",
                width: responsiveScreenWidth(100),
                height: responsiveScreenHeight(10),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-bold",
                  lineHeight: RFValue(30),
                }}
              >
                Payment verification
              </Text>
              <TouchableOpacity onPress={closePayModal} style={styles.clearIcon}>
                <MaterialIcons name="clear" size={24} color="black" />
              </TouchableOpacity>
            </View>
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
              {({
                values,
                handleChange,
                handleSubmit,
                isSubmitting,
                errors,
              }) => (
                <View style={styles.container}>
                  <Text style={styles.title}>OTP</Text>
                  <Text style={styles.subtitle}>
                    Please provide the one time password sent to your phone
                  </Text>

                  <View style={styles.otpHeaderContainer}>
                    <View style={styles.otpInputContainer}>
                      <OTPTextInput
                        textInputStyle={{
                          ...styles.otpInput,
                        }}
                        ref={(e) => (values.code = e)}
                        autoFocus={false}
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
                            color: "#051040",
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
                              color: "#06782f",
                              textAlign: "center",
                            },
                          ]}
                        >
                          <Text style={{ fontFamily: "plusjakarta-bold" }}>
                            {!errors.code ? "" : "Resend"}
                          </Text>
                          <Text style={styles.resendText}>
                            {!errors.code ? "Resend code" : ""}
                          </Text>
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
                          <TouchableOpacity style={styles.activeBtn} onPress={()=> {router.push("/payment-successful")}}>
                            <Text style={styles.button}>Verify</Text>
                          </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(7),
    },
      clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 50,
    position: "absolute",
    right: RFValue(15),
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
    fontFamily: "plusjakarta-regular",
    textAlign: "center",
    marginTop: RFValue(10),
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
