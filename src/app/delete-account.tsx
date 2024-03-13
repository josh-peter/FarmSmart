import { Stack, router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
import AccountDeletedModal from "../components/common/modals/accountDeletedModal";
import PasswordInputField from "../components/inputs/passwordInputField";
import colors from "../constants/Colors";
import AppBar from "../components/appBar";

export default function DeleteAccount() {
  const navigation = useNavigation();

  const fade = useRef(new Animated.Value(0)).current;
  const [modalPopVisible, setModalPopVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [password, setPassword] = useState("");

  const handleBackBtn = () => {
    navigation.goBack();
  };

  const handleInputChange = (text: string) => {
    setPassword(text);
  };

  const openPopModal = () => {
    setModalPopVisible(true);
  };

  const closePopModal = () => {
    setModalPopVisible(false);
  };

  const handleSubmit = () => {
    console.log("Password submitted:");
    openPopModal();
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
          title: "Delete account",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar title="Delete account" onPress={() => router.push("/security")} />
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
        }}>
        <View
          style={{
            padding: RFValue(9),
          }}>
          <Text
            style={{
              color: "#000000",
              fontSize: RFValue(13),
              fontFamily: "urbanist-medium",
              marginTop: RFValue(10),
            }}>
            Please understand that your account can not be recovered if you
            choose to proceed with this action. Please enter your password to
            authorize account deletion
          </Text>
          <PasswordInputField
            label={"Password"}
            value={password}
            onChangeText={handleInputChange}
            errorMessage={""}
            placeholder={"**********"}
            returnKeyType="done"
            keyboardType="password"
            secureTextEntry={passwordVisible}
            placeholderTextColor={colors.onboardingText}
          />
        </View>
        <AccountDeletedModal
          modalPopVisible={modalPopVisible}
          closePopModal={closePopModal}
        />
      </Animated.ScrollView>
      <View>
        {password.length < 3 ? (
          <TouchableOpacity style={styles.disableBtn}>
            <Text style={styles.button}>Delete account</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.deleteBtn}>
            <Text style={styles.deleteText}>Delete account</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 50,
    position: "absolute",
    left: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  button: {
    fontFamily: "outfit-semibold",
    textAlign: "center",
    color: colors.buttontext,
    fontSize: RFValue(14),
  },
  deleteBtn: {
    backgroundColor: "#FDFDFD",
    padding: Platform.OS === "ios" ? 15 : 14,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderWidth: RFValue(1),
    borderColor: "#F0F4FF",
    marginTop: RFValue(15),
    marginHorizontal: RFValue(20),
    marginVertical: RFValue(20),
  },
  disableBtn: {
    backgroundColor: colors.button,
    padding: Platform.OS === "ios" ? 15 : 14,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginTop: RFValue(15),
    marginHorizontal: RFValue(12),
    marginVertical: RFValue(20),
  },
  deleteText: {
    fontSize: RFValue(14),
    color: "#FA5C47",
    fontFamily: "outfit-semibold",
    textAlign: "center",
  },
});
