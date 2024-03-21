import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../inputs/inputField";
import PasswordInputField from "../inputs/passwordInputField";
import PhoneInput from "react-native-phone-number-input";
import ErrorMsg from "./errors/errorMsg";
import { CheckBox } from "@rneui/themed";
import { Image } from "expo-image";
import colors from "../../constants/Colors";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import authService from "../../features/auth/authAction";
import axios from 'axios'
const { width, height } = Dimensions.get("window");

export default function SignUpComp() {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [checked, setChecked] = React.useState(true);

  const toggleCheckbox = () => setChecked(!checked);
  const phoneInput = useRef(null);
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUserLogin = async (values: any, setSubmitting: any) => {
   console.log(values, "WEY ENTEREDDD");
    const payload = {
      name: {
        firstName: values.fullName.split(" ")[0],
        lastName: values.fullName.split(" ")[1],
      },
      email: values.email,
      password: values.password,
      address: {
        name: values.address,
        city: values.city,
        state: values.state,
        // placeId: string,
        // coordinate: {
        //   type: "point",
        //   coordinates: [3.748],
        // },
      },
      device: 'Iphone',
      // location: {
      //   name: string,
      //   city: string,
      //   state: string,
      //   placeId: string,
      //   coordinate: {
      //     type: any,
      //     coordinates: [{}],
      //   },
      // },
    };
    
    const res = await axios.post(
      "https://easyfynd.onrender.com/auth/client/signup",
      payload
    );
    console.log("the resss", res?.data)
    // router.push("/auth/otpverification");
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
          title: "sign in",
          headerShown: false,
        }}
      />
      <StatusBar style="dark" />
      <Animated.ScrollView
        showsHorizontalScrollIndicator={false}
        style={[styles.container, animatedStyle]}>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            state: "",
            city: "",
            address: "",
            password: "",
            confirmPassword: "",
            checkBox: "",
          }}
          validationSchema={Yup.object({
            fullName: Yup.string().required("Full name is required").min(5),
            email: Yup.string()
              .required("Email is required")
              .email("Invalid emai")
              .min(5, "Must be a valid email"),
            state: Yup.string().required("This field is required"),
            city: Yup.string().required("This field is required"),
            address: Yup.string().required("This field is required"),
            password: Yup.string()
              .required("Password is required")
              .min(5, "Your password is too short."),
            confirmPassword: Yup.string().oneOf(
              [Yup.ref("password")],
              "Passwords must match"
            ),
            phone: Yup.number().required("A phone number is required"),
            checkBox: Yup.boolean().required("This field is required"),
          })}
          onSubmit={async (values, { setSubmitting }) =>
            handleUserLogin(values, setSubmitting)
          }
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setSubmitting,
            errors,
          }) => (
            <Animated.View>
              <Image
                contentFit="contain"
                source={require("../../assets/images/icon2.png")}
                style={styles.logo}
              />
              <Text style={styles.title}>Create Account</Text>
              <View>
                <InputField
                  label={"Full name"}
                  id={"fullName"}
                  value={values.fullName}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  placeholder={"E.g John Doe"}
                  returnKeyType="done"
                  keyboardType="name-phone-pad"
                  errorMessage={errors.fullName}
                  placeholderTextColor={"#5f5f5f"}
                />
                <InputField
                  label={"Email"}
                  id={"email"}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder={"E.g myfreshpass@gmail.com"}
                  returnKeyType="done"
                  keyboardType="email-address"
                  errorMessage={errors.email}
                  placeholderTextColor={"#5f5f5f"}
                />
                <Text
                  style={{
                    fontFamily: "outfit-medium",
                    fontSize: Platform.OS === "ios" ? 17 : 16,
                    marginTop: 15,
                    color: colors.dark,
                  }}
                >
                  Phone number
                </Text>
                <View
                  style={{
                    paddingVertical: 13,
                    marginTop: 8,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#F0F4FF",
                    backgroundColor: "#fff",
                    marginBottom: 2,
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 2,
                    shadowColor: "#d1d5db",
                  }}
                >
                  <PhoneInput
                    placeholder="643-334-0009"
                    ref={phoneInput}
                    defaultValue={value}
                    onChangeText={handleChange("phone")}
                    defaultCode="NG"
                    layout="second"
                    onChangeFormattedText={(text) => {
                      setFormattedValue(text);
                    }}
                    textContainerStyle={styles.textInput}
                  />
                </View>
                {errors.phone && <ErrorMsg message={`${errors.phone}`} />}
                <InputField
                  label={"State"}
                  id={"state"}
                  value={values.state}
                  onChangeText={handleChange("state")}
              onBlur={handleBlur("state")}
                  placeholder={"E.g Akwa Ibom"}
                  returnKeyType="done"
                  keyboardType="default"
                  errorMessage={errors.state}
                  placeholderTextColor={"#5f5f5f"}
                />
                <InputField
                  label={"City"}
                  id={"city"}
                  value={values.city}
                  onChangeText={handleChange("city")}
                  onBlur={handleBlur("city")}
                  placeholder={"Uyo"}
                  returnKeyType="done"
                  keyboardType="default"
                  errorMessage={errors.city}
                  placeholderTextColor={"#5f5f5f"}
                />
                <InputField
                  label={"Address"}
                  id={"address"}
                  value={values.address}
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  placeholder={"E.g 13 Ekpri-nsuka"}
                  returnKeyType="done"
                  keyboardType="default"
                  errorMessage={errors.address}
                  placeholderTextColor={"#5f5f5f"}
                />
                <PasswordInputField
                  label={"Password"}
                  placeholder="**********"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  keyboardType="visible-password"
                  placeholderTextColor={"#5f5f5f"}
                  secureTextEntry={passwordVisible}
                  errorMessage={errors.password}
                  returnKeyType="done"
                />
                <PasswordInputField
                  label={"Confirm password"}
                  placeholder="**********"
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  placeholderTextColor="#5f5f5f"
                  keyboardType="visible-password"
                  secureTextEntry={passwordVisible}
                  errorMessage={errors.confirmPassword}
                  returnKeyType="done"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  // width: 350,
                  marginLeft: -21,
                  marginTop: 10,
                }}>
                <CheckBox
                  checked={checked}
                  onPress={toggleCheckbox}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor={colors.primary}
                  size={30}
                  style={{
                    borderRadius: 50,
                  }}
                />
                <Text style={styles.TStext}>
                  I agree to the company{" "}
                  <Link href={"/auth/login"} asChild>
                    <Text
                      style={{
                        color: colors.primary,
                        fontFamily: "urbanist-bold",
                      }}
                    >
                      Term of Service
                    </Text>
                  </Link>{" "}
                  and{" "}
                  <Link href={"/auth/login"} asChild>
                    <Text
                      style={{
                        color: colors.primary,
                        fontFamily: "urbanist-bold",
                      }}
                    >
                      Privacy Policy
                    </Text>
                  </Link>
                </Text>
              </View>
              <View>
                {isSubmitting
? (
                  <TouchableOpacity style={styles.disableBtn}>
                    <Text style={styles.button}>Sign up</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                      onPress={() => {
                        console.log("Press444")
                        handleUserLogin(values, setSubmitting)
                         handleSubmit
                      }}
                    style={styles.activeBtn}
                  >
                    <Text style={styles.activeButton}>Sign up</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 32,
                }}
              >
                <View style={styles.line} />
                <Text style={styles.signupText}>Or Sign Up With</Text>
                <View style={styles.line} />
              </View>
              <View
                style={{
                  marginBottom: 100,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 22,
                  }}
                >
                  <TouchableOpacity style={styles.appleLogoBtn}>
                    <Image
                      contentFit="contain"
                      source={require("../../assets/images/apple.png")}
                      style={styles.appleLogo}
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "500",
                        fontFamily: "urbanist-medium",
                      }}
                    >
                      Apple
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.googleLogoBtn}>
                    <Image
                      contentFit="contain"
                      source={require("../../assets/images/google.png")}
                      style={styles.googleLogo}
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "500",
                        fontFamily: "urbanist-medium",
                      }}
                    >
                      Google
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.smallText}>
                  Already have an account?
                  <Link href={"/auth/login"} asChild>
                    <Text
                      style={{
                        color: colors.primary,
                        fontFamily: "urbanist-bold",
                      }}
                    >
                      {" "}
                      Sign In
                    </Text>
                  </Link>
                </Text>
              </View>
            </Animated.View>
          )}
        </Formik>
      </Animated.ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    marginTop: 10,
    marginBottom: 40,
    paddingHorizontal: 20,
    overflowX: "hidden",
  },
  logo: {
    height: 49,
    width: 170,
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
  button: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: colors.buttontext,
    fontSize: 17,
  },
  activeButton: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: colors.background,
    fontSize: 17,
  },
  disableBtn: {
    backgroundColor: colors.button,
    marginTop: 13,
    paddingHorizontal: 17,
    paddingVertical: 15,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
  activeBtn: {
    backgroundColor: colors.primary,
    marginTop: 13,
    paddingHorizontal: 17,
    paddingVertical: 15,
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
    fontSize: 13,
    fontWeight: "normal",
    fontFamily: "urbanist-regular",
    marginHorizontal: 4,
  },
  appleLogo: {
    height: 33,
    width: 33,
  },
  googleLogo: {
    height: 33,
    width: 33,
  },
  smallText: {
    marginTop: 15,
    fontSize: 16,
    fontFamily: "urbanist-medium",
    textAlign: "center",
    color: colors.header,
  },
  appleLogoBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    borderWidth: 1,
    borderColor: colors.border2,
    paddingVertical: 7,
    width:  "47%",
    borderRadius: 5,
  },
  googleLogoBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    borderWidth: 1,
    borderColor: colors.border2,
    paddingVertical: 7,
    width:  "47%",
    borderRadius: 5,
  },
  textInput: {
    paddingVertical: 0,
    color: colors.danger,
    backgroundColor: colors.background,
    borderLeft: 1,
    borderLeftColor: colors.border2,
    fontSize: 15,
  },
  phoneContainer: {
    width: "75%",
    height: 50,
  },
  buttonProp: {
    marginTop: 30,
    width: "75%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  TStext: {
    fontSize: 16,
    fontFamily: "urbanist-medium",
    marginLeft: -10,
    color: "#414141",
  },
});
