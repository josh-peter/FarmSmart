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
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import AccountNameModal from "../components/accountInformation/acccountNameModal";
import EmailAddressModal from "../components/accountInformation/EmailAddressModal";
import UpdatePhoneModal from "../components/accountInformation/updatePhoneModal";
import EditDateOfBirth from "../components/accountInformation/editDateOfBirth";
import NotificationSettingsModal from "../components/common/modals/notificationSettingsModal";
import { Formik } from "formik";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import ErrorMsg from "../components/Auth/errors/errorMsg";
import PasswordInputField from "../components/inputs/passwordInputField";

const { width, height } = Dimensions.get("window");

export default function Security() {
  const fade = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEmailVisible, setModalEmailVisible] = useState(false);
  const [modalPhoneVisible, setModalPhoneVisible] = useState(false);
  const [modalDOBVisible, setModalDOBVisible] = useState(false);
  const [modalPayVisible, setModalPayVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleNewPassword = (values: any, setSubmitting: any) => {};

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openEmailModal = () => {
    setModalEmailVisible(true);
  };

  const closeEmailModal = () => {
    setModalEmailVisible(false);
  };

  const openPhoneModal = () => {
    setModalPhoneVisible(true);
  };

  const closePhoneModal = () => {
    setModalPhoneVisible(false);
  };

  const openDOBModal = () => {
    setModalDOBVisible(true);
  };

  const closeDOBModal = () => {
    setModalDOBVisible(false);
  };

  const openPayModal = () => {
    setModalPayVisible(true);
  };

  const closePayModal = () => {
    setModalPayVisible(false);
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

  const accountItem = [
    {
      id: 1,
      title: "Account activity",
      account: "On: Email, Push notification and Sms",
    },
    {
      id: 2,
      title: "Listing activity",
      account: "On: Email, Push notification and Sms",
    },
  ];

  const updatesItem = [
    {
      id: 1,
      title: "News and offers",
      account: "Off",
    },
    {
      id: 2,
      title: "New listing",
      account: "Off",
    },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          title: "Security",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
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
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fafafa",
            width: responsiveScreenWidth(100),
            height: responsiveScreenWidth(20),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(30),
            }}
          >
            Account information
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/home/account")}
            style={styles.clearIcon}
          >
            <Image
              resizeMode="contain"
              source={require("../assets/images/arrow-left.png")}
              style={{
                height: RFValue(15),
                width: RFValue(15),
              }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: RFValue(20),
            marginTop: RFValue(15),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(14),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(20),
              color: "#1A1A1A",
            }}
          >
            Password
          </Text>
          <Text
            style={{
              fontSize: RFValue(11),
              fontFamily: "plusjakarta-regular",
              color: "#1A1A1A",
            }}
          >
            Manage your login password
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: RFValue(20),
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-medium",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
                Change password
              </Text>
              <Text
                style={{
                  fontSize: RFValue(11),
                  fontFamily: "plusjakarta-regular",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
                Last updated 13 months ago
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-medium",
                  lineHeight: RFValue(40),
                  color: "#06782F",
                }}
              >
                Update
              </Text>
            </TouchableOpacity>
          </View>
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
              <View>
                <View
                  style={{
                    backgroundColor: "#fafafa",
                    borderRadius: 10,
                    padding: RFValue(15),
                    marginTop: RFValue(20),
                  }}
                >
                  <View>
                    <View>
                      <Text
                        style={{
                          fontFamily: "outfit-bold",
                          fontSize: RFValue(14),

                          color: "#5f5f5f",
                        }}
                      >
                        Current Password
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
                      </View>
                      {errors.password && (
                        <ErrorMsg message={`${errors.password}`} />
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
                        Confirm Password
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
                      </View>
                      {errors.confirmPassword && (
                        <ErrorMsg message={`${errors.confirmPassword}`} />
                      )}
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: RFValue(30),
                    }}
                  >
                    {isSubmitting ||
                    errors.password ||
                    errors.confirmPassword ? (
                      <TouchableOpacity style={styles.disableBtn}>
                        <Text style={styles.button}>Update Password</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => handleSubmit()}
                        style={styles.activeBtn}
                      >
                        <Text style={styles.button}>Update Password</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            )}
          </Formik>
          <View
            style={{
              marginTop: RFValue(35),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(20),
                color: "#1A1A1A",
              }}
            >
              Device history
            </Text>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "plusjakarta-regular",
                color: "#1A1A1A",
              }}
            >
              You are currently logged into these devices
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: RFValue(20),
              marginBottom: RFValue(30),
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFValue(11),
                  fontFamily: "plusjakarta-medium",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
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
                  fontSize: RFValue(9),
                  fontFamily: "plusjakarta-regular",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
                December 23, 2022 at 10:14
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/location.png")}
                  style={{
                    width: RFValue(12),
                    height: RFValue(12),
                  }}
                />
                <Text
                  style={{
                    fontSize: RFValue(9),
                    fontFamily: "plusjakarta-regular",
                    color: "#414141",
                  }}
                >
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
                  color: "#06782F",
                }}
              >
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
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFValue(11),
                  fontFamily: "plusjakarta-medium",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
                Iphone 14 promax
              </Text>
              <Text
                style={{
                  fontSize: RFValue(9),
                  fontFamily: "plusjakarta-regular",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
                December 23, 2022 at 10:14
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/location.png")}
                  style={{
                    width: RFValue(12),
                    height: RFValue(12),
                  }}
                />
                <Text
                  style={{
                    fontSize: RFValue(9),
                    fontFamily: "plusjakarta-regular",
                    color: "#414141",
                  }}
                >
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
                  color: "#06782F",
                }}
              >
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
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFValue(11),
                  fontFamily: "plusjakarta-medium",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
                Iphone 14 promax
              </Text>
              <Text
                style={{
                  fontSize: RFValue(9),
                  fontFamily: "plusjakarta-regular",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
                December 23, 2022 at 10:14
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/location.png")}
                  style={{
                    width: RFValue(12),
                    height: RFValue(12),
                  }}
                />
                <Text
                  style={{
                    fontSize: RFValue(9),
                    fontFamily: "plusjakarta-regular",
                    color: "#414141",
                  }}
                >
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
                  color: "#06782F",
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: RFValue(20),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(20),
                color: "#1A1A1A",
              }}
            >
              Account
            </Text>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "plusjakarta-regular",
                color: "#1A1A1A",
              }}
            >
              Delete account
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFF8F8",
                marginTop: RFValue(15),
                paddingHorizontal: RFValue(14),
                paddingVertical: RFValue(12),
                borderRadius: Platform.OS == "android" ? 15 : 15,
                justifyContent: "center",
                marginBottom: RFValue(30),
              }}
            >
              <Text
                style={{
                  fontFamily: "satoshi-bold",
                  textAlign: "center",
                  color: "#FA5C47",
                  fontSize: RFValue(14),
                }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <AccountNameModal modalVisible={modalVisible} closeModal={closeModal} />
        <EmailAddressModal
          modalEmailVisible={modalEmailVisible}
          closeEmailModal={closeEmailModal}
        />
        <UpdatePhoneModal
          modalPhoneVisible={modalPhoneVisible}
          closePhoneModal={closePhoneModal}
        />
        <EditDateOfBirth
          modalDOBVisible={modalDOBVisible}
          closeDOBModal={closeDOBModal}
        />
        <NotificationSettingsModal
          modalPayVisible={modalPayVisible}
          closePayModal={closePayModal}
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
    fontFamily: "satoshi-bold",
    textAlign: "center",
    color: "#fff",
    fontSize: RFValue(14),
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 10,
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
