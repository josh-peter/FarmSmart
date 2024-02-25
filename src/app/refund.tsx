import Morelist from "../components/propertyDetailsProps/moreListing";
import HostReviews from "../components/propertyDetailsProps/hostReviewComp";
import PropertyCarouselImages from "../components/propertyDetailsProps/propertyCarouselImages";
import PropertyFeatureComp from "../components/propertyDetailsProps/propertyFeaturesComp";
import { BlurView } from "expo-blur";
import { Stack, router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  StyleSheet,
  Modal,
} from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import SearchInput from "../components/inputs/searchInput";
import InputField from "../components/inputs/inputField";
const { width, height } = Dimensions.get("window");
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import RefundSuccessful from "../components/common/modals/refundSuccessfull";

export default function Refund() {
  const fade = useRef(new Animated.Value(0)).current;
  const [modalPopVisible, setModalPopVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(true);

  const openPopModal = () => {
    setModalPopVisible(true);
  };

  const closePopModal = () => {
    setModalPopVisible(false);
  };



  const handleUserLogin = (values: any, setSubmitting: any) => {
    router.push("/home/");
    setSubmitting(false);
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
          title: "Property Details",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          height: height,
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
            height: responsiveScreenWidth(22),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(30),
            }}
          >
            Refund
          </Text>
          <TouchableOpacity style={styles.clearIcon}>
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
        <View
          style={{
            paddingHorizontal: RFValue(20),
            paddingVertical: RFValue(30),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-medium",
              lineHeight: RFValue(30),
              color: "#1A1A1AB2",
            }}
          >
            Refund for
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: RFValue(10),
              paddingVertical: RFValue(10),
              backgroundColor: "#fff",
              borderRadius: RFValue(10),
              marginTop: RFValue(5),
              marginBottom: RFValue(10),
              borderWidth: 1,
              borderColor: "#d5d0dd",
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../assets/images/bedroom.png")}
              style={{
                height: RFValue(80),
                width: RFValue(80),
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-bold",
                }}
              >
                One bedroom flat
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                  marginTop: RFValue(3),
                }}
              >
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
                    fontSize: RFValue(11),
                    fontFamily: "plusjakarta-regular",
                    color: "#414141",
                  }}
                >
                  Lekki phase 1, Lagos, Nigeria
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  paddingVertical: RFValue(5),
                  paddingHorizontal: RFValue(12),
                  borderRadius: RFValue(5),
                  backgroundColor: "#ECFFF4",
                  width: RFValue(60),
                  marginTop: RFValue(3),
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(11),
                    fontFamily: "outfit-medium",
                    color: "#06782F",
                  }}
                >
                  Rental
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  marginTop: RFValue(3),
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-bold",
                    color: "#06782F",
                  }}
                >
                  ₦1,500,000{" "}
                  <Text
                    style={{
                      fontSize: RFValue(9),
                      fontFamily: "plusjakarta-regular",
                      color: "#414141",
                    }}
                  >
                    yearly
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              overflow: "hidden",
              gap: RFValue(6),
              backgroundColor: "#F1F5FF",
              paddingHorizontal: RFValue(12),
              paddingVertical: RFValue(10),
              marginTop: RFValue(20),
              marginBottom: RFValue(15),
              borderRadius: RFValue(8),
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../assets/images/danger.png")}
              style={{
                width: RFValue(20),
                height: RFValue(20),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "plusjakarta-regular",
                color: "#306AFF",
                flexShrink: 1,
              }}
            >
              Account name must match your name on Easyfynd
            </Text>
          </View>
          <View>
            <SearchInput />
            <View>
              <Formik
                initialValues={{
                  account: "",
                }}
                validationSchema={Yup.object({
                  account: Yup.string().required("Account number is required"),
                })}
                onSubmit={async (values: any, { setSubmitting }) =>
                  handleUserLogin(values, setSubmitting)
                }
              >
                {({ values, handleChange, handleBlur, errors }) => (
                  <View>
                    <InputField
                      label={"Account number"}
                      value={values.fullName}
                      onChangeText={handleChange("")}
                      onBlur={handleBlur}
                      placeholder={"type account number"}
                      returnKeyType="done"
                      keyboardType="name-phone-pad"
                      errorMessage={errors.fullName}
                      placeholderTextColor={"#5f5f5f"}
                    />
                  </View>
                )}
              </Formik>
            </View>
          </View>
        </View>
        <RefundSuccessful modalPopVisible={modalPopVisible} closePopModal={closePopModal} />
      </Animated.ScrollView>
      <TouchableOpacity
        onPress={openPopModal}
        style={{
          backgroundColor: "#06782F",
          padding: Platform.OS === "ios" ? 18 : 17,
          borderRadius: 10,
          marginTop: RFValue(15),
          marginHorizontal: RFValue(20),
          marginVertical: RFValue(20),
        }}
      >
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: "outfit-regular",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Done
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 10,
    position: "absolute",
    left: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
});
