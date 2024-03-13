import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import LoginComp from '../../components/Auth/loginComp';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function Login() {
      const transition = useSharedValue(0);

      useEffect(() => {
        transition.value = withTiming(1, { duration: 500 });
      }, []);

      const animatedStyle = useAnimatedStyle(() => {
        return {
          opacity: transition.value,
        };
      });
    return (
      <Animated.View style={animatedStyle}>
        <LoginComp />
      </Animated.View>
    );
}