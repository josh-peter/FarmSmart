import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {  } from 'react-native-responsive-fontsize';
import ErrorMsg from '../Auth/errors/errorMsg';
import colors from '../../constants/Colors';

interface InputProps {
    label: string;
    value: any; 
    onChangeText: (text: string) => void;
    errorMessage: any; 
    onBlur: any;
    placeholder: string;
    returnKeyType: any;
    keyboardType: any;
  placeholderTextColor: any;
  id: string
}

const InputField = ({ label, id, returnKeyType, value, keyboardType, placeholder, onChangeText, onBlur, errorMessage, placeholderTextColor }: InputProps) => {
    return (
      <View
        style={{
          marginTop: 0,
        }}>
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
            id={id}
            placeholder={placeholder}
            value={value}
            style={styles.inputbox}
            onChangeText={onChangeText}
            placeholderTextColor={colors.onboardingText}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            onBlur={onBlur}
          />
        </View>

        {errorMessage && <ErrorMsg message={`${errorMessage}`} />}
      </View>
    );
};

export default InputField

const styles = StyleSheet.create({
    inputbox: {
        backgroundColor: "transparent",
        fontFamily: "urbanist-medium",
        fontSize: 15,
        paddingVertical:3,
    },
});