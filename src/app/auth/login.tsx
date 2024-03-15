import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import LoginComp from '../../components/Auth/loginComp';

export default function Login() {
    return (
      <View>
        <LoginComp />
      </View>
    );
}