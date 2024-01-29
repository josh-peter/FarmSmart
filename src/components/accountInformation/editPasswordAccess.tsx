import {
  Text,
  View,
  useColorScheme,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { Link, router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import PasswordInputField from "../inputs/passwordInputField";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function EditPasswordAccess({
  modalVisible,
  closeModal,
}: Readonly<Props>) {

      const [passwordVisible, setPasswordVisible] = useState(true);
      const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
    
  const handleUserLogin = (values: any, setSubmitting: any) => {
    router.push("/home/");
    setSubmitting(false);
  };
  return (
    <Modal
      isVisible={modalVisible}
      animationIn="bounceIn"
      animationOut="bounceOut"
      animationInTiming={400}
      animationOutTiming={400}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      backdropOpacity={0.5}
      backdropColor="#000"
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          paddingHorizontal: RFValue(25),
          paddingVertical: RFValue(45),
          borderRadius: 10,
        }}
      >
        <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
          <MaterialIcons name="clear" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: RFValue(18),
            textAlign: "center",
            lineHeight: RFValue(30.25),
            marginTop: RFValue(20),
          }}
        >
          Enter password to edit
        </Text>
        <Text
          style={{
            fontSize: RFValue(11),
            fontFamily: "plusjakarta-regular",
            color: "#5F5F5F",
            textAlign: "center",
          }}
        >
          Please provide your login password to proceed
        </Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string(),
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
            errors,
          }) => (
            <View>
              <PasswordInputField
                label={"Password"}
                value={values.password}
                onChangeText={handleChange("password")}
                errorMessage={errors.password}
                onBlur={handleBlur("password")}
                placeholder={"************"}
                returnKeyType="done"
                keyboardType="password"
                secureTextEntry={passwordVisible}
                placeholderTextColor={"#5f5f5f"}
              />
            </View>
          )}
        </Formik>
        <TouchableOpacity style={styles.startBtn}>
          <Text style={styles.startText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#1D2939",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#fff",
  },
  smallText: {
    fontSize: responsiveScreenFontSize(2.5),
    lineHeight: responsiveScreenFontSize(3.2),
    fontFamily: "satoshi-bold",
    textAlign: "center",
  },
  smallerText: {
    fontSize: responsiveScreenFontSize(1.4),
    lineHeight: responsiveScreenFontSize(2.5),
    fontFamily: "satoshi-regular",
    marginTop: responsiveScreenFontSize(1.5),
    textAlign: "center",
  },
  startBtn: {
    backgroundColor: "#06782F",
    padding: Platform.OS === "ios" ? 18 : 17,
    borderRadius: 10,
    marginTop: RFValue(25),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 50,
    position: "absolute",
    top: RFValue(20),
    right: RFValue(20),
  },
});
