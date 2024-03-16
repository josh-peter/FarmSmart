import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Platform,
    Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMsg from "../../components/Auth/errors/errorMsg";
import CustomAlert from "../../components/common/modals/customAlert";
import colors from "../../constants/Colors";
import { Image } from "expo-image";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
const { width } = Dimensions.get("window");

export default function NewPassword() {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [modalPopVisible, setModalPopVisible] = useState(false);
    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
  const openPopModal = () => {
    setModalPopVisible(true);
  };

  const closePopModal = () => {
  setModalPopVisible(false)
}
    const handleNewPassword = async (values: any, setSubmitting: Function) => {
   setTimeout(() => {
     router.push("/auth/login");
     openPopModal();
     setSubmitting(false);
   }, 500);
  }

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
            title: "chnage password",
            headerShown: false,
          }}
        />
        <StatusBar style="dark" />
        <Animated.View style={animatedStyle}>

        </Animated.View>
        <Formik
          initialValues={{
            confirmPassword: "",
            password: "",
          }}
          validationSchema={Yup.object({
            password: Yup.string()
              .required("Password is required")
              .min(5, "Your password is too short."),
            confirmPassword: Yup.string().oneOf(
              [Yup.ref("password")],
              "Passwords must match"
            ),
          })}
          onSubmit={async (values: any, { setSubmitting }) =>
            handleNewPassword(values, setSubmitting)
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
            <>
              <Animated.View style={[styles.container, animatedStyle]}>
                <View>
                  <Image
                    contentFit="contain"
                    source={require("../../assets/images/icon2.png")}
                    style={styles.logo}
                  />
                  <Text style={styles.title}>New Password</Text>
                  <Text style={styles.subtitle}>
                    Please enter your new password to Sign In
                  </Text>
                  <View>
                    <View>
                      <Text
                        style={{
                          fontFamily: "outfit-bold",
                          fontSize: RFValue(14),
                          marginTop: RFValue(20),
                          color: "#5f5f5f",
                        }}
                      >
                        New Password
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
                        <TextInput
                          placeholder="**********"
                          value={values.password}
                          style={styles.inputbox}
                          onChangeText={handleChange("password")}
                          onBlur={handleBlur("password")}
                          placeholderTextColor="#5f5f5f"
                          secureTextEntry={passwordVisible}
                        />
                        <TouchableOpacity
                          style={styles.eyeIcon}
                          onPress={handlePasswordVisibility}
                        >
                          <Ionicons
                            name={
                              passwordVisible
                                ? "eye-outline"
                                : "eye-off-outline"
                            }
                            size={34}
                            color="#5f5f5f"
                          />
                        </TouchableOpacity>
                      </View>

                      {errors.password && (
                        <ErrorMsg message={`${errors.password}`} />
                      )}
                    </View>
                    <View>
                      <Text
                        style={{
                          fontFamily: "outfit-bold",
                          fontSize: RFValue(14),
                          marginTop: RFValue(20),
                          color: "#5f5f5f",
                        }}
                      >
                        Confirm New Password
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
                        <TextInput
                          placeholder="**********"
                          value={values.confirmPassword}
                          onChangeText={handleChange("confirmPassword")}
                          onBlur={handleBlur("confirmPassword")}
                          style={styles.inputbox}
                          placeholderTextColor="#5f5f5f"
                          secureTextEntry={passwordVisible}
                        />
                        <TouchableOpacity
                          style={styles.eyeIcon}
                          onPress={handlePasswordVisibility}
                        >
                          <Ionicons
                            name={
                              passwordVisible
                                ? "eye-outline"
                                : "eye-off-outline"
                            }
                            size={34}
                            color="#5f5f5f"
                          />
                        </TouchableOpacity>
                      </View>
                      {errors.confirmPassword && (
                        <ErrorMsg message={`${errors.confirmPassword}`} />
                      )}
                    </View>
                  </View>
                </View>
              </Animated.View>
              <View
                style={{
                  paddingHorizontal: RFValue(20),
                  paddingVertical: RFValue(28),
                }}
              >
                {isSubmitting || errors.password || errors.confirmPassword ? (
                  <TouchableOpacity style={styles.disableBtn}>
                    <Text style={styles.button}>Update</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={styles.activeBtn}
                  >
                    <Text style={styles.activeButton}>Update</Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}
        </Formik>
        {modalPopVisible && (
          <CustomAlert
            modalPopVisible={modalPopVisible}
            closePopModal={closePopModal}
          />
        )}
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: RFValue(20),
    flex: 1,
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
    marginTop: RFValue(20),
    fontSize: RFValue(16),
    fontFamily: "plusjakarta-regular",
    textAlign: "center",
  },
});
