import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
  Alert,
  Animated,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
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

  const handleUserLogin = (values: any, setSubmitting: any) => {
    router.push("/auth/otpverification");
    setSubmitting(false);
  };

   const fade = useRef(new Animated.Value(0)).current;

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
          title: "sign in",
          headerShown: false,
        }}
      />
      <StatusBar style="dark" />
      <Animated.ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
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
            <Animated.View
              style={{
                opacity: fade,
                transform: [
                  {
                    translateY: fade.interpolate({
                      inputRange: [0, 1],
                      outputRange: [150, 0],
                    }),
                  },
                ],
              }}
            >
              <Image
                contentFit="contain"
                source={require("../../assets/images/icon2.png")}
                style={styles.logo}
              />
              <Text style={styles.title}>Create Account</Text>
              <View>
                <InputField
                  label={"Full name"}
                  value={values.fullName}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur}
                  placeholder={"E.g John Doe"}
                  returnKeyType="done"
                  keyboardType="name-phone-pad"
                  errorMessage={errors.fullName}
                  placeholderTextColor={"#5f5f5f"}
                />
                <InputField
                  label={"Email"}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur}
                  placeholder={"E.g myfreshpass@gmail.com"}
                  returnKeyType="done"
                  keyboardType="email-address"
                  errorMessage={errors.email}
                  placeholderTextColor={"#5f5f5f"}
                />
                <Text
                  style={{
                    fontFamily: "outfit-bold",
                    fontSize: RFValue(14),
                    marginTop: RFValue(15),
                    color: "#5f5f5f",
                  }}
                >
                  Phone number
                </Text>
                <View
                  style={{
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#E4E4E7",
                    padding: RFValue(8),
                    marginTop: RFValue(10),
                  }}
                >
                  <PhoneInput
                    placeholder="643-334-0009"
                    ref={phoneInput}
                    defaultValue={value}
                    onChangeText={handleChange("phone")}
                    defaultCode="NG"
                    layout="first"
                    onChangeFormattedText={(text) => {
                      setFormattedValue(text);
                    }}
                    textContainerStyle={styles.textInput}
                  />
                </View>
                {errors.phone && <ErrorMsg message={`${errors.phone}`} />}
                <InputField
                  label={"State"}
                  value={values.state}
                  onChangeText={handleChange("state")}
                  onBlur={handleBlur}
                  placeholder={"E.g Akwa Ibom"}
                  returnKeyType="done"
                  keyboardType="default"
                  errorMessage={errors.state}
                  placeholderTextColor={"#5f5f5f"}
                />
                <InputField
                  label={"City"}
                  value={values.city}
                  onChangeText={handleChange("city")}
                  onBlur={handleBlur}
                  placeholder={"Uyo"}
                  returnKeyType="done"
                  keyboardType="default"
                  errorMessage={errors.city}
                  placeholderTextColor={"#5f5f5f"}
                />
                <InputField
                  label={"Address"}
                  value={values.address}
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur}
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
                  width: 350,
                  marginLeft: RFValue(-18),
                }}
              >
                <CheckBox
                  checked={checked}
                  onPress={toggleCheckbox}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor={colors.primary}
                  size={30}
                  style={{
                    borderRadius: RFValue(45),
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
                {isSubmitting ||
                errors.fullName ||
                errors.email ||
                errors.phone ||
                errors.state ||
                errors.city ||
                errors.address ||
                errors.password ||
                errors.confirmPassword ||
                errors.checkBox ? (
                  <TouchableOpacity style={styles.disableBtn}>
                    <Text style={styles.button}>Sign in</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={styles.activeBtn}
                  >
                    <Text style={styles.activeButton}>Sign in</Text>
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
                  marginBottom: RFValue(100),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: RFValue(20),
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
                        fontSize: RFValue(13),
                        fontWeight: "500",
                        fontFamily: "plusjakarta-regular",
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
    marginTop: RFValue(40),
    marginBottom: RFValue(40),
    paddingHorizontal: RFValue(20),
  },
  logo: {
    height: RFValue(40),
    width: RFValue(150),
    alignSelf: "center",
    marginTop: RFValue(30),
  },
  title: {
    textAlign: "center",
    fontSize: RFValue(17),
    fontFamily: "outfit-bold",
    color: "#32264D",
    marginTop: RFValue(10),
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
    marginTop: RFValue(15),
    fontSize: RFValue(15),
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
    borderColor: "#f2f2f2",
    paddingVertical: RFValue(5),
    width: RFValue(140),
    borderRadius: RFValue(5),
  },
  googleLogoBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    paddingVertical: RFValue(5),
    width: RFValue(140),
    borderRadius: RFValue(5),
  },
  textInput: {
    paddingVertical: 0,
    color: "red",
    backgroundColor: "#fff",
    borderLeft: 1,
    borderLeftColor: "#000",
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
    fontSize: RFValue(13),
    fontFamily: "urbanist-regular",
    marginLeft: RFValue(-10),
    color: colors.onboardingText,
  },
});
