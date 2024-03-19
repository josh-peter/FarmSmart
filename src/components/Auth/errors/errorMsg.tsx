import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

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
      <MaterialIcons name="info-outline" size={26} color="red" />
      <Text
        style={{
          textAlign: "left",
          color: "red",
         fontSize:13,
        }}
          >
              {message}
      </Text>
    </View>
  );
}

export default ErrorMsg

const styles = StyleSheet.create({})