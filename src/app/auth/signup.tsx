import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import SignUpComp from '../../components/Auth/signUpComp';

export default function SignUp() {
    return (
            <View>
              <SignUpComp/>
            </View>
  );
}