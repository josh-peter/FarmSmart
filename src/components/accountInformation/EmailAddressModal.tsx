import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { router } from "expo-router";
import InputField from "../inputs/inputField";

interface Props {
  modalEmailVisible: boolean;
  closeEmailModal: () => void;
}

export default function EmailAddressModal({
  modalEmailVisible,
  closeEmailModal,
}: Readonly<Props>) {

  const handleUserLogin = (values: any, setSubmitting: any) => {
    router.push("/home/");
    setSubmitting(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={modalEmailVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={closeEmailModal}
        onBackButtonPress={closeEmailModal}
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
            height: responsiveScreenHeight(100),
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
              marginTop: RFValue(20),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Edit email address
            </Text>
            <TouchableOpacity
              onPress={closeEmailModal}
              style={styles.clearIcon}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/images/arrow-left.png")}
                style={{
                  height: RFValue(15),
                  width: RFValue(15),
                }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: RFValue(15),
              paddingVertical: RFValue(10),
            }}
          >
            <View>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={Yup.object({
                  email: Yup.string().required("Email is required"),
                  password: Yup.string().required("Password is required"),
                })}
                onSubmit={async (values: any, { setSubmitting }) =>
                  handleUserLogin(values, setSubmitting)
                }
              >
                {({ values, handleChange, handleBlur, errors }) => (
                  <View>
                    <InputField
                      label={"Email"}
                      value={values.fullName}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur}
                      placeholder={"danielsnr.design@gmail.com"}
                      returnKeyType="done"
                      keyboardType="email"
                      errorMessage={errors.email}
                      placeholderTextColor={"#5f5f5f"}
                    />
                  </View>
                )}
              </Formik>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startText}>Update</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: responsiveScreenWidth(33),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(5),
    paddingLeft: RFValue(15),
  },
  eyeIcon: {
    position: "absolute",
    top: 23,
    left: 5,
    zIndex: 1,
  },
  startBtn: {
    backgroundColor: "#06782F",
    padding: Platform.OS === "ios" ? 15 : 14,
    borderRadius: 10,
    marginTop: RFValue(30),
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(30),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
});
