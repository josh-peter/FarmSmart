import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import LoginComp from '../../components/Auth/loginComp';

export default function Login() {
    return (
            <View>
              <LoginComp/>
            </View>
  );
}