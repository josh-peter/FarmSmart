import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { memo } from "react";
import { Animated, StyleSheet } from "react-native";

const Header = () => (
  <>
    <Stack.Screen
      options={{
        title: "Home",
        headerShown: false,
        gestureEnabled: false,
      }}
    />
    <StatusBar style="dark" />
  </>
);

export default memo(Header);
