import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import ErrorMsg from '../Auth/errors/errorMsg';

interface InputProps {
    label: string;
    value: any; //value is optional because it can be a read only input
    onChangeText: (text: string) => void;
    errorMessage: any; //the message to show if there is an error in this field`
    onBlur: any;
    placeholder: string;
    returnKeyType: any;
    keyboardType: any;
    placeholderTextColor: any;
}

const InputField = ({ label, returnKeyType, value, keyboardType, placeholder, onChangeText, onBlur, errorMessage, placeholderTextColor }: InputProps) => {
    return (
        <View>
            <Text
                style={{
                    fontFamily: "outfit-bold",
                    fontSize: RFValue(14),
                    marginTop: RFValue(15),
                    color: "#5f5f5f",
                }}
            >
                {label}
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
                    placeholder={placeholder}
                    value={value}
                    style={styles.inputbox}
                    onChangeText={onChangeText}
                    placeholderTextColor="#5f5f5f"
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
        fontSize: RFValue(16),
        paddingVertical: RFValue(5),
    },
});