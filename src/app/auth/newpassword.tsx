import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Platform,
} from "react-native";
import React, { useState } from "react";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMsg from "../../components/Auth/errors/errorMsg";

export default function NewPassword() {
    const [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [firstName, setFirstName] = useState(""),
        [lastName, setLastName] = useState(""),
        [disableButton, setDisableButton] = useState(true),
        [passwordVisible, setPasswordVisible] = useState(true),
        [phoneNumber, setPhoneNumber] = useState("");

    const handleEmail = (email: React.SetStateAction<string>) => {
        setEmail(email);
        if (email == "") setDisableButton(true);
        else setDisableButton(false);
    };

    const handlePassword = (password: React.SetStateAction<string>) => {
        setPassword(password);
        if (password == "") setDisableButton(true);
        else setDisableButton(false);
    };

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // const signupUserPrompt = () => {
    //   if (!email || !password) Toast.error("Please fill in the fields");
    //   else {
    //     router.push("/auth/otpverification");
    //   }
    // };


    const handleNewPassword = (values: any, setSubmitting: any) => {

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
            <View style={styles.container}>
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
                            passwordVisible ? "eye-outline" : "eye-off-outline"
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
                            passwordVisible ? "eye-outline" : "eye-off-outline"
                          }
                          size={34}
                          color="#5f5f5f"
                        />
                      </TouchableOpacity>
                    </View>
                    {errors.confirmPassword && (
                      <ErrorMsg message={`${errors.confirmPassword}`} />
                    )}
                    {/* <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 2,
                        paddingVertical: RFValue(7),
                      }}
                    >
                      <MaterialIcons
                        name="info-outline"
                        size={24}
                        color="red"
                      />
                      <Text
                        style={{
                          textAlign: "left",
                          color: "red",
                        }}
                      >
                        Password does not match
                      </Text>
                    </View> */}
                  </View>
                </View>
                <View
                  style={{
                    marginTop: RFValue(30),
                  }}
                >
                  {isSubmitting || errors.password || errors.confirmPassword ? (
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
              </View>
            </View>
          )}
        </Formik>
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
        fontSize: RFValue(16),
        fontFamily: "plusjakarta-regular",
        textAlign: "center",
    },
});
