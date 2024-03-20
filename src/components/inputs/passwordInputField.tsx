import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import ErrorMsg from '../Auth/errors/errorMsg';
import { Link } from 'expo-router';
import colors from '../../constants/Colors';



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
          fontSize: 16,
          marginTop: 15,
          color: colors.dark,
        }}>
        {label}
      </Text>
      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          padding: 8,
          marginTop: 8,
          borderColor: "#F0F4FF",
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: "#fff",
          marginBottom: 5,
          shadowOffset: { width: 2, height: 2 },
          shadowRadius: 20,
          elevation: 2,
          shadowColor: "#d1d5db",
        }}>
        <TextInput
          placeholder="**********"
          value={value}
          style={styles.inputbox}
          onChangeText={onChangeText}
          placeholderTextColor={colors.onboardingText}
          secureTextEntry={passwordVisible}
          onBlur={onBlur}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={handlePasswordVisibility}>
          <Ionicons
            name={passwordVisible ? "eye-outline" : "eye-off-outline"}
            size={28}
            color={colors.icon}
          />
        </TouchableOpacity>
      </View>

      {errorMessage && <ErrorMsg message={`${errorMessage}`} />}
    </View>
  );
};

export default PasswordInputField

const styles = StyleSheet.create({
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "urbanist-medium",
    fontSize: RFValue(16),
    paddingVertical: RFValue(3),
  },
  eyeIcon: {
    position: "absolute",
    top: 15,
    right: 19,
    zIndex: 1,
    color:colors.icon
  },
});