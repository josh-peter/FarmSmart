import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import ErrorMsg from "../Auth/errors/errorMsg";
import { Link } from "expo-router";

interface SearchInputProps {
  value: any; //value is optional because it can be a read only input
  onChangeText: (text: string) => void;
  errorMessage: any; //the message to show if there is an error in this field`
  onBlur: any;
  placeholder: string;
  returnKeyType: any;
  keyboardType: any;
  secureTextEntry: any;
  placeholderTextColor: any;
}

const SearchInputField = ({
  returnKeyType,
  value,
  keyboardType,
  placeholder,
  onChangeText,
  onBlur,
  errorMessage,
}: SearchInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View>
      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#E4E4E7",
          padding: RFValue(8),
          marginTop: RFValue(10),
        }}
      >
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={handlePasswordVisibility}
        >
          <Ionicons
            name={passwordVisible ? "eye-outline" : "eye-off-outline"}
            size={34}
            color="#5f5f5f"
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Any property or location"
          value={value}
          style={styles.inputbox}
          onChangeText={onChangeText}
          placeholderTextColor="#5f5f5f"
          onBlur={onBlur}
        />
      </View>
    </View>
  );
};

export default SearchInputField;

const styles = StyleSheet.create({
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(16),
    paddingVertical: RFValue(5),
  },
  eyeIcon: {
    position: "absolute",
    top: 10,
    right: 19,
    zIndex: 1,
  },
});
