import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {  Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SplashScreen, Slot } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Explore from "./explore";

SplashScreen.preventAutoHideAsync();

const Home = () => {
  const [fontsLoaded, fontError] = useFonts({
    "urbanist-regular": require("../assets/fonts/Urbanist-Regular.ttf"),
    "urbanist-black": require("../assets/fonts/Urbanist-Black.ttf"),
    "urbanist-bold": require("../assets/fonts/Urbanist-Bold.ttf"),
    "urbanist-extrabold": require("../assets/fonts/Urbanist-ExtraBold.ttf"),
    "urbanist-extralight": require("../assets/fonts/Urbanist-ExtraLight.ttf"),
    "urbanist-light": require("../assets/fonts/Urbanist-Light.ttf"),
    "urbanist-medium": require("../assets/fonts/Urbanist-Medium.ttf"),
    "urbanist-semibold": require("../assets/fonts/Urbanist-SemiBold.ttf"),
    "urbanist-thin": require("../assets/fonts/Urbanist-Thin.ttf"),
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
      <StatusBar style="dark" />
      <Stack.Screen options={{ title: "Splash Screen", headerShown: false }} />
      <RootSiblingParent>
        <SafeAreaProvider onLayout={onLayoutRootView}>
          <SafeAreaView style={styles.container}>
            <Explore/>
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
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
