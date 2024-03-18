import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import LoginComp from '../../components/Auth/loginComp';
const { width,height } = Dimensions.get("window");

export default function Login() {
    return (
      <View style={{
        flex: 1,
        width: width,
        height: height
      }}>
        <LoginComp />
      </View>
    );
}