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
}

const InputField = ({ label, returnKeyType, value, keyboardType, placeholder, onChangeText, onBlur, errorMessage, placeholderTextColor }: InputProps) => {
    return (
      <View
        style={{
          marginTop: 12,
        }}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 16,
            marginTop:15,
            color: colors.dark,
          }}>
          {label}
        </Text>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            padding: 10,
            marginTop: 11,
            borderColor: colors.warmBtn,
            paddingHorizontal:12,
            paddingVertical: 12,
            backgroundColor:colors.background,
            marginBottom: 10,
            shadowOffset: { width: 4, height: 4 },
            shadowRadius: 20,
            elevation: 1,
            shadowColor: colors.border,
          }}>
          <TextInput
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
        fontFamily: "outfit-light",
        fontSize: 15,
        paddingVertical:3,
    },
});