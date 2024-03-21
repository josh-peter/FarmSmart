import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import ErrorMsg from "../Auth/errors/errorMsg";
import { Link } from "expo-router";
import colors from "../../constants/Colors";

interface PasswordInputProps {
  label: string;
  value: any; //value is optional because it can be a read only input
  onChangeText: (text: string) => void;
  errorMessage: any; //the message to show if there is an error in this field`
  onBlur?: any;
  placeholder: string;
  returnKeyType: any;
  keyboardType: any;
  secureTextEntry: any;
  placeholderTextColor: any;
}

const PasswordInputField = ({
  label,
  returnKeyType,
  value,
  keyboardType,
  placeholder,
  onChangeText,
  onBlur,
  errorMessage,
}: PasswordInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: Platform.OS === "ios" ? 17 : 16,
          marginTop: 15,
          color: colors.dark,
        }}>
        {label}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 10,
          borderWidth: 1,
          padding: 8,
          marginTop: 5,
          borderColor: "#F0F4FF",
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: "#fff",
          marginBottom: 2,
          shadowOffset: { width: 2, height: 2 },
          shadowRadius: 20,
          elevation: 2,
          shadowColor: "#d1d5db",
        }}>
        <TextInput
          placeholder="**********R"
          value={value}
          style={styles.inputbox}
          onChangeText={onChangeText}
          placeholderTextColor={colors.onboardingText}
          secureTextEntry={passwordVisible}
          onBlur={onBlur}
          textAlignVertical="center"
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={handlePasswordVisibility}>
          <Ionicons
            name={passwordVisible ? "eye-outline" : "eye-off-outline"}
            size={23}
            color={colors.icon}
          />
        </TouchableOpacity>
      </View>

      {errorMessage && <ErrorMsg message={`${errorMessage}`} />}
    </View>
  );
};

export default PasswordInputField;

const styles = StyleSheet.create({
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "urbanist-medium",
    fontSize: 15,
    width: "80%",
    paddingVertical: 3,
  },
  eyeIcon: {
    zIndex: 1,
    color: colors.icon,
  },
});
