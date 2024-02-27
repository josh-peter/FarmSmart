import { Animated, Easing, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { Link, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { SplashScreen, Slot } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Onboarding from './onboarding';

SplashScreen.preventAutoHideAsync();

const Home = () => {

    const [fontsLoaded, fontError] = useFonts({
      "outfit-black": require("../assets/fonts/Outfit-Black.ttf"),
      "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
      "outfit-extrabold": require("../assets/fonts/Outfit-ExtraBold.ttf"),
      "outfit-extralight": require("../assets/fonts/Outfit-ExtraLight.ttf"),
      "outfit-light": require("../assets/fonts/Outfit-Light.ttf"),
      "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
      "outfit-regular": require("../assets/fonts/Outfit-Regular.ttf"),
      "outfit-semibold": require("../assets/fonts/Outfit-SemiBold.ttf"),
      "outfit-thin": require("../assets/fonts/Outfit-Thin.ttf"),
      "plusjakarta-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
      "plusjakarta-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
      "plusjakarta-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
      return null;
    }


  return (
    <>
      <Stack.Screen options={{ title: "Splash Screen", headerShown: false }} />
      <RootSiblingParent>
        <SafeAreaProvider onLayout={onLayoutRootView}>
          <SafeAreaView style={styles.container}>
         <Onboarding/>
            <StatusBar
              style="auto"
              hidden={false}
              translucent={true}
              backgroundColor="#fff" 
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </RootSiblingParent>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: "black",
    margin: 30,
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#15263A",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#fff",
  },
  videoSize: {
    height: "100%",
    width: "100%",
  },
  animationContainer: {
    backgroundColor: "#eef8ff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animatedContainer: {
    backgroundColor: "#173273",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
