import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import React, { useEffect, useRef, useState } from "react";
import { Link, Stack, router } from "expo-router";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { Switch } from "react-native-switch";
import AppBar from "../components/appBar";
const { width, height } = Dimensions.get("window");

export default function ClientProfile() {
  const [index, setIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
      <Stack.Screen
        options={{
          title: "Notification",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar title="My profile" onPress={() => router.push("/home/account")} />
      <Animated.View style={[styles.container, animatedStyle]}>
        <View
          style={{
            paddingHorizontal: RFValue(25),
          }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              overflow: "hidden",
              gap: RFValue(6),
              backgroundColor: "#F5F5F5",
              paddingHorizontal: RFValue(12),
              paddingVertical: RFValue(10),
              borderRadius: RFValue(8),
              marginBottom: RFValue(10),
              marginTop: RFValue(30),
              width: responsiveScreenWidth(52),
            }}>
            <Image
              resizeMode="contain"
              source={require("../assets/images/eyeIcon.png")}
              style={{
                width: RFValue(20),
                height: RFValue(20),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-medium",
                color: "#000",
                flexShrink: 1,
              }}>
              Visible to all agents
            </Text>
          </View>
          <View>
            <View>
              <Image
                resizeMode="contain"
                source={require("../assets/images/userProfile.png")}
                style={{
                  height: RFValue(75),
                  width: RFValue(65),
                }}
              />
              <Image
                resizeMode="contain"
                source={require("../assets/images/client.png")}
                style={{
                  height: RFValue(45),
                  width: RFValue(45),
                  position: "absolute",
                  top: 50,
                  left: 10,
                  right: 0,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "outfit-bold",
                  color: "#161917",
                  lineHeight: RFValue(30),
                  marginTop: RFValue(5),
                }}>
                Daniel Israel
              </Text>
            </View>
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-regular",
                color: "#414141",
              }}>
              I am a realtor with over 2 years in real estates, I have sold over
              ₦400M property and I have helped client find their dream homes.
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
                marginTop: RFValue(8),
              }}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/square.png")}
                style={{
                  height: RFValue(20),
                  width: RFValue(20),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-regular",
                  color: "#414141",
                }}>
                English, Yoruba and Ibibio
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
                marginTop: RFValue(8),
              }}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/location.png")}
                style={{
                  height: RFValue(20),
                  width: RFValue(20),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-regular",
                  color: "#414141",
                }}>
                Lagos, Nigeria
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: RFValue(10),
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#f9fafa",
                padding: RFValue(10),
                borderRadius: 10,
              }}>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(4),
                  }}>
                  <Image
                    resizeMode="contain"
                    source={require("../assets/images/sms.png")}
                    style={{
                      height: RFValue(15),
                      width: RFValue(15),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(12),
                      fontFamily: "plusjakarta-regular",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}>
                    danielsnr.design@gmail.com
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: RFValue(10),
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontFamily: "plusjakarta-regular",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}>
                    Show email address
                  </Text>
                  <Switch
                    value={true}
                    onValueChange={(val) => console.warn(val)}
                    backgroundActive={"green"}
                    backgroundInactive={"gray"}
                    activeText={""}
                    inActiveText={""}
                    circleSize={25}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: RFValue(10),
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#f9fafa",
                padding: RFValue(10),
                borderRadius: 10,
              }}>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(4),
                  }}>
                  <Image
                    resizeMode="contain"
                    source={require("../assets/images/call.png")}
                    style={{
                      height: RFValue(15),
                      width: RFValue(15),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(12),
                      fontFamily: "plusjakarta-regular",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}>
                    +2348160523342
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: RFValue(10),
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontFamily: "plusjakarta-regular",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}>
                    Show phone number
                  </Text>
                  <Switch
                    value={true}
                    onValueChange={(val) => console.warn(val)}
                    backgroundActive={"green"}
                    backgroundInactive={"gray"}
                    activeText={""}
                    inActiveText={""}
                    circleSize={25}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/edit-profile")}
            style={{
              backgroundColor: "#ECFFF4",
              padding: Platform.OS === "ios" ? 18 : 17,
              borderRadius: 10,
              marginTop: RFValue(15),
            }}>
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-regular",
                color: "#06782F",
                textAlign: "center",
              }}>
              Edit profile
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#fff",
    position: "relative",
  },
});
