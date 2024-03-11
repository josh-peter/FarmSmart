import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, Stack, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMsg from "../components/Auth/errors/errorMsg";
import DeleteAccountFlow from "../components/accountInformation/deleteAccountFlow";
import colors from "../constants/Colors";
import AppBar from "../components/appBar";

const { width, height } = Dimensions.get("window");

export default function Security() {
  const fade = useRef(new Animated.Value(0)).current;
  const [modalCancelVisible, setModalCancelVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [showUpdatePasswordForm, setShowUpdatePasswordForm] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleNewPassword = (values: any, setSubmitting: any) => {};

  const closeCancelModal = () => {
    setModalCancelVisible(false);
  };

  const handleShowUpdatePasswordForm = () => {
    setShowUpdatePasswordForm(!showUpdatePasswordForm);
  };

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
          title: "Security",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar title="Security settings" returnRoute={"/home/account"} />
      <Animated.View
        style={{
          flex: 1,
          width: width,
          backgroundColor: "#fff",
          position: "relative",
          opacity: fade,
          transform: [
            {
              translateY: fade.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0],
              }),
            },
          ],
        }}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: RFValue(20),
            marginTop: RFValue(15),
          }}>
          <Text
            style={{
              fontSize: RFValue(18),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(20),
              color: "#000000",
            }}>
            Password
          </Text>
          <Text
            style={{
              fontSize: RFValue(12),
              fontFamily: "urbanist-medium",
              lineHeight: RFValue(20),
              color: "#414141",
            }}>
            Manage your login password
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: RFValue(20),
            }}>
            <View>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-semibold",
                  lineHeight: RFValue(20),
                  color: "#000000",
                }}>
                Change password
              </Text>
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "urbanist-medium",
                  lineHeight: RFValue(20),
                  color: "#414141",
                }}>
                Last updated 13 months ago
              </Text>
            </View>
            <TouchableOpacity onPress={handleShowUpdatePasswordForm}>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-medium",
                  lineHeight: RFValue(40),
                  color: colors.primary,
                  textDecorationLine: "underline",
                }}>
                Update
              </Text>
            </TouchableOpacity>
          </View>
          {showUpdatePasswordForm && (
            <Formik
              initialValues={{
                confirmPassword: "",
                password: "",
              }}
              validationSchema={Yup.object({
                currentPassword: Yup.string()
                  .required("Password is required")
                  .min(5, "Your password is too short."),
                newPassword: Yup.string()
                  .required("Password is required")
                  .min(5, "Your password is too short."),
                confirmPassword: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Passwords must match"
                ),
              })}
              onSubmit={async (values: any, { setSubmitting }) =>
                handleNewPassword(values, setSubmitting)
              }>
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                errors,
              }) => (
                <View>
                  <View
                    style={{
                      backgroundColor: "#fafafa",
                      borderRadius: 10,
                      padding: RFValue(15),
                      marginTop: RFValue(20),
                    }}>
                    <View>
                      <View>
                        <Text
                          style={{
                            fontFamily: "outfit-bold",
                            fontSize: RFValue(14),

                            color: "#5f5f5f",
                          }}>
                          Current Password
                        </Text>
                        <View
                          style={{
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: "#E4E4E7",
                            padding: RFValue(8),
                            marginTop: RFValue(10),
                          }}>
                          <TextInput
                            placeholder="**********"
                            value={values.currentPassword}
                            style={styles.inputbox}
                            onChangeText={handleChange("currentPassword")}
                            onBlur={handleBlur("currentPassword")}
                            placeholderTextColor="#5f5f5f"
                            secureTextEntry={passwordVisible}
                          />
                        </View>
                        {errors.currentPassword && (
                          <ErrorMsg message={`${errors.currentPassword}`} />
                        )}
                        <Link href={"/auth/otpverification"} asChild>
                          <TouchableOpacity>
                            <Text style={styles.passText}>Forgot password</Text>
                          </TouchableOpacity>
                        </Link>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontFamily: "outfit-bold",
                            fontSize: RFValue(14),
                            marginTop: RFValue(20),
                            color: "#5f5f5f",
                          }}>
                          New Password
                        </Text>
                        <View
                          style={{
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: "#E4E4E7",
                            padding: RFValue(8),
                            marginTop: RFValue(10),
                          }}>
                          <TextInput
                            placeholder="**********"
                            value={values.newPassword}
                            style={styles.inputbox}
                            onChangeText={handleChange("newPassword")}
                            onBlur={handleBlur("newPassword")}
                            placeholderTextColor="#5f5f5f"
                            secureTextEntry={passwordVisible}
                          />
                        </View>

                        {errors.newPassword && (
                          <ErrorMsg message={`${errors.newPassword}`} />
                        )}
                      </View>
                      <View>
                        <Text
                          style={{
                            fontFamily: "outfit-bold",
                            fontSize: RFValue(14),
                            marginTop: RFValue(20),
                            color: "#5f5f5f",
                          }}>
                          Confirm Password
                        </Text>
                        <View
                          style={{
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: "#E4E4E7",
                            padding: RFValue(8),
                            marginTop: RFValue(10),
                          }}>
                          <TextInput
                            placeholder="**********"
                            value={values.confirmPassword}
                            onChangeText={handleChange("confirmPassword")}
                            onBlur={handleBlur("confirmPassword")}
                            style={styles.inputbox}
                            placeholderTextColor="#5f5f5f"
                            secureTextEntry={passwordVisible}
                          />
                        </View>
                        {errors.confirmPassword && (
                          <ErrorMsg message={`${errors.confirmPassword}`} />
                        )}
                      </View>
                    </View>
                    <View
                      style={{
                        marginTop: RFValue(30),
                      }}>
                      {isSubmitting ||
                      errors.currentPassword ||
                      errors.newPassword ||
                      errors.confirmPassword ? (
                        <TouchableOpacity style={styles.disableBtn}>
                          <Text style={styles.disableBtnText}>
                            Update Password
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => handleSubmit()}
                          style={styles.activeBtn}>
                          <Text style={styles.button}>Update Password</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              )}
            </Formik>
          )}
          <View
            style={{
              marginTop: RFValue(35),
            }}>
            <Text
              style={{
                fontSize: RFValue(18),
                fontFamily: "outfit-semibold",
                lineHeight: RFValue(20),
                color: "#000000",
              }}>
              Device history
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "urbanist-medium",
                lineHeight: RFValue(20),
                color: "#414141",
              }}>
              You are currently logged into these devices
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: RFValue(30),
              marginTop: RFValue(20),
            }}>
            <View
              style={{
                gap: 2,
              }}>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-semibold",
                  lineHeight: RFValue(20),
                  color: "#000000",
                }}>
                Iphone 14 promax
              </Text>
              <Image
                resizeMode="contain"
                source={require("../assets/images/current.png")}
                style={{
                  height: RFValue(20),
                  width: RFValue(75),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "urbanist-medium",
                  lineHeight: RFValue(20),
                  color: "#414141",
                }}>
                December 23, 2022 at 10:14
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}>
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/location.png")}
                  style={{
                    width: RFValue(15),
                    height: RFValue(15),
                  }}
                />
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: "urbanist-medium",
                    color: "#000000",
                  }}>
                  Lagos, Nigeria
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-medium",
                  lineHeight: RFValue(40),
                  color: colors.primary,
                  textDecorationLine: "underline",
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: RFValue(30),
            }}>
            <View
              style={{
                gap: 2,
              }}>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-semibold",
                  lineHeight: RFValue(20),
                  color: "#000000",
                }}>
                Iphone 14 promax
              </Text>
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "urbanist-medium",
                  lineHeight: RFValue(20),
                  color: "#414141",
                }}>
                December 23, 2022 at 10:14
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}>
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/location.png")}
                  style={{
                    width: RFValue(15),
                    height: RFValue(15),
                  }}
                />
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: "urbanist-medium",
                    color: "#000000",
                  }}>
                  Lagos, Nigeria
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-medium",
                  lineHeight: RFValue(40),
                  color: colors.primary,
                  textDecorationLine: "underline",
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: RFValue(30),
            }}>
            <View
              style={{
                gap: 2,
              }}>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-semibold",
                  lineHeight: RFValue(20),
                  color: "#000000",
                }}>
                Iphone 14 promax
              </Text>
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "urbanist-medium",
                  lineHeight: RFValue(20),
                  color: "#414141",
                }}>
                December 23, 2022 at 10:14
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}>
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/location.png")}
                  style={{
                    width: RFValue(15),
                    height: RFValue(15),
                  }}
                />
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: "urbanist-medium",
                    color: "#000000",
                  }}>
                  Lagos, Nigeria
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-medium",
                  lineHeight: RFValue(40),
                  color: colors.primary,
                  textDecorationLine: "underline",
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: RFValue(20),
            }}>
            <Text
              style={{
                fontSize: RFValue(18),
                fontFamily: "outfit-semibold",
                lineHeight: RFValue(20),
                color: "#000000",
              }}>
              Account
            </Text>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "urbanist-medium",
                lineHeight: RFValue(20),
                color: "#414141",
              }}>
              Delete account
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/delete-account")}
              style={{
                backgroundColor: "#FDFDFD",
                marginTop: RFValue(15),
                paddingHorizontal: RFValue(14),
                paddingVertical: RFValue(12),
                borderRadius: Platform.OS == "android" ? 15 : 15,
                borderBottomRightRadius: 0,
                borderWidth: RFValue(1),
                borderColor: "#F0F4FF",
                justifyContent: "center",
                marginBottom: RFValue(30),
              }}>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  textAlign: "center",
                  color: "#FA5C47",
                  fontSize: RFValue(14),
                }}>
                Delete Account
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <DeleteAccountFlow
          modalCancelVisible={modalCancelVisible}
          closeCancelModal={closeCancelModal}
        />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#3538cd",
    position: "relative",
  },
  logo: {
    height: RFValue(70),
    width: RFValue(70),
    alignSelf: "center",
    marginTop: RFValue(30),
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#15263A",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#fff",
  },
  videoSize: {
    height: "100%",
    width: "100%",
  },
  animationContainer: {
    backgroundColor: "#eef8ff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animatedContainer: {
    backgroundColor: "#173273",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: RFValue(28),
    lineHeight: RFValue(32),
    fontFamily: "satoshi-bold",
    color: "#051040",
    textAlign: "center",
    paddingHorizontal: RFValue(20),
  },
  smallText: {
    marginTop: 10,
    fontSize: RFValue(11),
    fontFamily: "satoshi-medium",
    color: "#fff",
  },
  button: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: "#fff",
    fontSize: RFValue(14),
  },
  disableBtnText: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: colors.buttontext,
    fontSize: RFValue(14),
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 50,
    position: "absolute",
    left: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(5),
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
    marginVertical: RFValue(5),
  },
  disableBtn: {
    backgroundColor: colors.button,
    marginTop: RFValue(10),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: RFValue(10),
    borderBottomRightRadius: 0,
    justifyContent: "center",
    opacity: 0.2,
  },
  activeBtn: {
    backgroundColor: colors.primary,
    marginTop: RFValue(10),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: RFValue(10),
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
});
