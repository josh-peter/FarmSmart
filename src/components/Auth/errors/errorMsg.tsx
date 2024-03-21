import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

interface IErrorProps{
    message: string
}
const ErrorMsg = ({message}: IErrorProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        paddingVertical: 2,
      }}
    >
      <MaterialIcons name="error-outline" size={18} color="red" />
      <Text
        style={{
          textAlign: "left",
          color: "red",
          fontFamily: "outfit-regular",
         fontSize: 14,
        }}
          >
              {message}
      </Text>
    </View>
  );
}

export default ErrorMsg

const styles = StyleSheet.create({})