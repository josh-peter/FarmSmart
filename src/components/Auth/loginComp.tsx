import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState, } from "react";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../inputs/inputField";
import PasswordInputField from "../inputs/passwordInputField";


export default function LoginComp() {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const handleUserLogin = (values: any, setSubmitting: any) => {
    router.push("/home");
    setSubmitting(false)
    console.log("Logging User In...");
  };
  

  return (
    <>
      <Stack.Screen
        options={{
          title: "login",
          headerShown: false,
        }}
      />
      <StatusBar style="dark" />
      <View style={styles.container}>
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
          }
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            errors,
          }) => (
            <View>
              <Image
                resizeMode="contain"
                source={require("../../assets/images/logo.png")}
                style={styles.logo}
              />
              <Text style={styles.title}>Welcome back</Text>
              <Text style={styles.subtitle}>
                Please sign in your account by filling in your login details
              </Text>

              <InputField
                label={"Email/Phone"}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder={"E.g myfreshpass@gmail.com"}
                returnKeyType="done"
                keyboardType="email-address"
                errorMessage={errors.email}
                placeholderTextColor={"#5f5f5f"}
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
                placeholderTextColor={"#5f5f5f"}
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
                  // <Link href={"/auth/otpverification"} asChild>
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={styles.activeBtn}
                  >
                    <Text style={styles.button}>Sign in</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: RFValue(30),
                }}
              >
                <View style={styles.line} />
                <Text style={styles.signupText}>Or Sign In With</Text>
                <View style={styles.line} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: RFValue(20),
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    borderWidth: 1,
                    borderColor: "#f2f2f2",
                    paddingVertical: RFValue(5),
                    width: RFValue(140),
                    borderRadius: RFValue(5),
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/images/apple.png")}
                    style={styles.appleLogo}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontWeight: "500",
                      fontFamily: "plusjakarta-regular",
                    }}
                  >
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
                    borderColor: "#f2f2f2",
                    paddingVertical: RFValue(5),
                    width: RFValue(140),
                    borderRadius: RFValue(5),
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/images/google.png")}
                    style={styles.googleLogo}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontWeight: "500",
                      fontFamily: "plusjakarta-regular",
                    }}
                  >
                    Google
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.smallText}>
                Don't have an account?
                <Link href={"/auth/signup"} asChild>
                  <Text style={{ color: "#06782f" }}> Sign Up</Text>
                </Link>
              </Text>
            </View>
          )}
        </Formik>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: RFValue(20),
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
    fontSize: RFValue(13),
    fontWeight: "normal",
    fontFamily: "outfit-regular",
    color: "#8E8C84",
    marginVertical: RFValue(7),
  },
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(16),
    paddingVertical: RFValue(5),
  },
  errorText: {
    fontFamily: "outfit-medium",
    fontSize: RFValue(10),
    color: "red",
  },
  eyeIcon: {
    position: "absolute",
    top: 10,
    right: 19,
    zIndex: 1,
  },
  passText: {
    fontSize: RFValue(15),
    fontWeight: "normal",
    fontFamily: "outfit-regular",
    color: "#06782f",
    marginVertical: RFValue(13),
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
  line: {
    height: RFValue(1.2),
    width: Platform.OS === "ios" ? RFValue(110) : RFValue(104),
    backgroundColor: "#C0C0C0",
  },
  signupText: {
    color: "#C0C0C0",
    fontSize: RFValue(11),
    fontWeight: "normal",
    fontFamily: "outfit-regular",
    marginHorizontal: RFValue(4),
  },
  appleLogo: {
    height: RFValue(30),
    width: RFValue(30),
  },
  googleLogo: {
    height: RFValue(30),
    width: RFValue(30),
  },
  smallText: {
    marginTop: RFValue(20),
    fontSize: RFValue(14),
    fontFamily: "plusjakarta-regular",
    textAlign:"center"
  },
});
