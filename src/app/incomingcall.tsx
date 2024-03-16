import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
import { Image } from "expo-image";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import colors from "../constants/Colors";

export default function IncomingCall() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "30%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {}, []);

  // Present the modal when the component mounts
  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const slideIn = useSharedValue(0);
  const fadeIn = useSharedValue(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      slideIn.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
      fadeIn.value = withTiming(1, {
        duration: 600,
        easing: Easing.linear,
      });
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    const translateY = 0.3 * width * (1 - slideIn.value);
    return {
      opacity: fadeIn.value,
      transform: [{ translateY }],
    };
  });

  return (
    <>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          title: "Incoming call",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Animated.View style={[styles.container, animatedStyle]}>
        <Image
          contentFit="contain"
          source={require("../assets/images/caller.png")}
          style={{
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(100),
            zIndex: -999,
          }}
        />
        <Image
          contentFit="contain"
          source={require("../assets/images/receivers.png")}
          style={[
            {
              width: 100,
              height: 100,
              position: "absolute",
              top: RFValue(40),
              right: RFValue(20),
            },
          ]}
        />
        <BottomSheetModalProvider>
          <View
            style={{
              flex: 1,
              paddingHorizontal: RFValue(15),
            }}>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              backgroundComponent={({ style }) => (
                <BlurView intensity={50} style={[style, { flex: 1 }]} />
              )}>
              <BottomSheetView style={styles.contentContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}>
                  <TouchableOpacity>
                    <Image
                      contentFit="contain"
                      source={require("../assets/images/decline.png")}
                      style={{
                        height: RFValue(65),
                        width: RFValue(65),
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      contentFit="contain"
                      source={require("../assets/images/turncamera.png")}
                      style={{
                        height: RFValue(65),
                        width: RFValue(65),
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => router.push("/home/appointment")}>
                    <Image
                      contentFit="contain"
                      source={require("../assets/images/hang.png")}
                      style={{
                        height: RFValue(65),
                        width: RFValue(65),
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                    marginTop: RFValue(20),
                  }}>
                  <TouchableOpacity>
                    <BlurView
                      intensity={90}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 7,
                        paddingHorizontal: RFValue(20),
                        paddingVertical: RFValue(10),
                        borderRadius: 50,
                        overflow: "hidden",
                      }}>
                      <Image
                        contentFit="contain"
                        source={require("../assets/images/cameraoff.png")}
                        style={{
                          height: RFValue(25),
                          width: RFValue(25),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(11),
                          fontFamily: "urbanist-regular",
                          color: colors.background,
                        }}>
                        Camera Off
                      </Text>
                    </BlurView>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <BlurView
                      intensity={90}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 7,
                        paddingHorizontal: RFValue(20),
                        paddingVertical: RFValue(10),
                        borderRadius: 50,
                        overflow: "hidden",
                      }}>
                      <Image
                        contentFit="contain"
                        source={require("../assets/images/volume-high.png")}
                        style={{
                          height: RFValue(25),
                          width: RFValue(25),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(11),
                          fontFamily: "urbanist-regular",
                          color: colors.background,
                        }}>
                        Speaker
                      </Text>
                    </BlurView>
                  </TouchableOpacity>
                </View>
              </BottomSheetView>
            </BottomSheetModal>
          </View>
        </BottomSheetModalProvider>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "relative",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
  },
});
