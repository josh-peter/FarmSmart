import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity, Button } from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
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
  const fade = useRef(new Animated.Value(0)).current;
   const bottomSheetModalRef = useRef<BottomSheetModal>(null);

   // variables
   const snapPoints = useMemo(() => ["25%", "30%"], []);

   // callbacks
   const handleSheetChanges = useCallback((index: number) => {
  
   }, []);

   // Present the modal when the component mounts
   useEffect(() => {
     bottomSheetModalRef.current?.present();
   }, []);

  const animation = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation();
  }, []);

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
      <Animated.View
        style={{
          backgroundColor: "#fff",
          position: "relative",
          opacity: fade,
          transform: [
            {
              translateY: fade.interpolate({
                inputRange: [0, 1],
                outputRange: [160, 0],
              }),
            },
          ],
        }}
      >
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
          <View style={{ flex: 1, paddingHorizontal: RFValue(15) }}>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              backgroundComponent={({ style }) => (
                <BlurView intensity={50} style={[style, { flex: 1 }]} />
              )}
            >
              <BottomSheetView style={styles.contentContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
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
                  <TouchableOpacity onPress={()=>router.push("/home/appointment")}>
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
                  }}
                >
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
                      }}
                    >
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
                        }}
                      >
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
                      }}
                    >
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
                        }}
                      >
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
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
  },
});
