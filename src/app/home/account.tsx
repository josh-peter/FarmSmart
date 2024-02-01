import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  Animated,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { additionalData } from "../../Data/additionalData";
import { accountData } from "../../Data/accountData";
import { Stack, router } from "expo-router";
import { Switch } from "react-native-switch";
const { width, height } = Dimensions.get("window");

export default function Account() {
  const fade = useRef(new Animated.Value(0)).current;

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
      <Stack.Screen
        options={{
          title: "Account",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          width: width,
          backgroundColor: "#fff",
          position: "relative",
          opacity: fade,
          paddingVertical: RFValue(40),
          paddingHorizontal: RFValue(15),
          transform: [
            {
              translateY: fade.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0],
              }),
            },
          ],
        }}
      >
        <View>
          <Text
            style={{
              fontSize: RFValue(15),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(40),
              color: "#BABBBC",
            }}
          >
            Profile
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/client-profile")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f9fafa",
              padding: RFValue(10),
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: RFValue(8),
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/images/userProfile.png")}
                style={{
                  height: RFValue(60),
                  width: RFValue(50),
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "plusjakarta-semibold",
                    lineHeight: RFValue(20),
                    color: "#1A1A1A",
                  }}
                >
                  Daniel Israel
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: "plusjakarta-regular",
                    lineHeight: RFValue(20),
                    color: "#1A1A1A",
                  }}
                >
                  Show profile
                </Text>
              </View>
            </View>
            <Image
              resizeMode="contain"
              source={require("../../assets/images/arrow-right.png")}
              style={{
                height: RFValue(22),
                width: RFValue(22),
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          {accountData?.map((item) => (
            <View
              key={item.id}
              style={{
                marginTop: RFValue(10),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(15),
                  fontFamily: "outfit-bold",
                  lineHeight: RFValue(40),
                  color: "#BABBBC",
                }}
              >
                {item.name}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  item.id === 1
                    ? router.push("/account-information")
                    : item.id === 2
                    ? router.push("/booking")
                    : item.id === 3
                    ? router.push("/payment-management")
                    : item.id === 4
                    ? router.push("/notification-settings")
                          : item.id === 5
                            ? router.push("/security")
                            :undefined
                }
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#f9fafa",
                  padding: RFValue(10),
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(8),
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={item.img}
                    style={{
                      height: RFValue(60),
                      width: RFValue(50),
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(12),
                        fontFamily: "plusjakarta-semibold",
                        lineHeight: RFValue(20),
                        color: "#1A1A1A",
                      }}
                    >
                      {item.info}
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(10),
                        fontFamily: "plusjakarta-regular",
                        lineHeight: RFValue(20),
                        color: "#1A1A1A",
                      }}
                    >
                      {item.entails}
                    </Text>
                  </View>
                </View>
                <Image
                  resizeMode="contain"
                  source={require("../../assets/images/arrow-right.png")}
                  style={{
                    height: RFValue(22),
                    width: RFValue(22),
                  }}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View>
          <Text
            style={{
              fontSize: RFValue(15),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(40),
              color: "#BABBBC",
            }}
          >
            Location
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#f9fafa",
              padding: RFValue(10),
              borderRadius: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "plusjakarta-regular",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
                Give location to get nearby property suggestion
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: RFValue(10),
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: "plusjakarta-regular",
                    lineHeight: RFValue(20),
                    color: "#1A1A1A",
                  }}
                >
                  Grant location access
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
        <View>
          {additionalData?.map((item) => (
            <View
              key={item.id}
              style={{
                marginTop: RFValue(20),
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#f9fafa",
                  padding: RFValue(10),
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: RFValue(8),
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={item.img}
                    style={{
                      height: RFValue(60),
                      width: RFValue(50),
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(12),
                        fontFamily: "plusjakarta-semibold",
                        lineHeight: RFValue(20),
                        color: "#1A1A1A",
                      }}
                    >
                      {item.info}
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(10),
                        fontFamily: "plusjakarta-regular",
                        lineHeight: RFValue(20),
                        color: "#1A1A1A",
                      }}
                    >
                      {item.entails}
                    </Text>
                  </View>
                </View>
                <Image
                  resizeMode="contain"
                  source={require("../../assets/images/arrow-right.png")}
                  style={{
                    height: RFValue(22),
                    width: RFValue(22),
                  }}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View
          style={{
            marginTop: RFValue(20),
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f9fafa",
              padding: RFValue(10),
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: RFValue(8),
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/images/logout.png")}
                style={{
                  height: RFValue(60),
                  width: RFValue(50),
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: RFValue(15),
                    fontFamily: "plusjakarta-regular",
                    lineHeight: RFValue(20),
                    color: "#1A1A1A",
                  }}
                >
                  Logout
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#ECFFF4",
            padding: Platform.OS === "ios" ? 18 : 17,
            borderRadius: 10,
            marginTop: RFValue(35),
            marginBottom: RFValue(105),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-regular",
              color: "#06782F",
              textAlign: "center",
            }}
          >
            Switch to agent account mode
          </Text>
        </TouchableOpacity>
      </Animated.ScrollView>
    </>
  );
}
