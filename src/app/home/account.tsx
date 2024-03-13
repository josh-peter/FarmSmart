import React, { useEffect, useRef, useState } from "react";
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
import colors from "../../constants/Colors";
const { width, height } = Dimensions.get("window");

export default function Account() {
   const [animationTriggered, setAnimationTriggered] = useState(false);
  const [fade] = useState(new Animated.Value(0));
  const [toggleLocation, setToggleLocation] = useState(false);

  const handleToggleLocation = () => {
    setToggleLocation((prev) => !prev);
  };

  const animation = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
      animation();
    }
  }, [animationTriggered]);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Account",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      {animationTriggered && (
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
          }}>
          <View>
            <TouchableOpacity
              onPress={() => router.push("/client-profile")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                padding: RFValue(10),
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#f3f4f6",
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 20,
                elevation: 2,
                shadowColor: "#d1d5db",
              }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: RFValue(8),
                }}>
                <Image
                  resizeMode="contain"
                  source={require("../../assets/images/userProfile.png")}
                  style={{
                    height: RFValue(50),
                    width: RFValue(50),
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: "outfit-semibold",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}>
                    Daniel Israel
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(12),
                      fontFamily: "urbanist-medium",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}>
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
                  marginTop: RFValue(18),
                }}>
                <TouchableOpacity
                  onPress={() =>
                    item.id === 1
                      ? router.push("/account-information/")
                      : item.id === 2
                      ? router.push("/booking")
                      : item.id === 3
                      ? router.push("/payment-management/")
                      : item.id === 4
                      ? router.push("/notification-settings")
                      : item.id === 5
                      ? router.push("/security")
                      : item.id === 6
                      ? router.push("/help-center")
                      : undefined
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#fff",
                    padding: RFValue(10),
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 2,
                    shadowColor: "#d1d5db",
                  }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: RFValue(8),
                    }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "#f3f4f6",
                        backgroundColor: "#fff",
                        padding: RFValue(5),
                        borderRadius: 50,
                        height: RFValue(40),
                        width: RFValue(40),
                        shadowOffset: { width: 2, height: 2 },
                        shadowRadius: 20,
                        elevation: 2,
                        shadowColor: "#d1d5db",
                      }}>
                      <Image
                        resizeMode="contain"
                        source={item.img}
                        style={{
                          height: RFValue(18),
                          width: RFValue(18),
                        }}
                      />
                    </View>
                    <View
                      style={{
                        maxWidth: RFValue(200),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-semibold",
                          lineHeight: RFValue(20),
                          color: "#1A1A1A",
                        }}>
                        {item.info}
                      </Text>
                      <Text
                        style={{
                          fontSize: RFValue(12),
                          fontFamily: "urbanist-medium",
                          lineHeight: RFValue(20),
                          color: "#1A1A1A",
                        }}>
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
              marginTop: RFValue(15),
              marginBottom: RFValue(10),
            }}>
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(40),
                color: "#BABBBC",
              }}>
              Location
            </Text>
            <View
              style={{
                backgroundColor: "#f9fafa",
                padding: RFValue(10),
                borderRadius: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "urbanist-medium",
                    lineHeight: RFValue(20),
                    color: "#1A1A1A",
                  }}>
                  Give location to get nearby property suggestion
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: RFValue(10),
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: "outfit-semibold",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}>
                    Grant location access
                  </Text>
                  <Switch
                    value={toggleLocation}
                    onValueChange={handleToggleLocation}
                    backgroundActive={colors.primary}
                    backgroundInactive={"#E4E4E7"}
                    activeText={""}
                    inActiveText={""}
                    circleSize={25}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            {additionalData?.map((item) => (
              <View
                key={item.id}
                style={{
                  marginTop: RFValue(20),
                }}>
                <TouchableOpacity
                  onPress={() =>
                    item.id === 1
                      ? router.push("/help-center")
                      : item.id === 2
                      ? router.push("/")
                      : undefined
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#fff",
                    padding: RFValue(10),
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 2,
                    shadowColor: "#d1d5db",
                  }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: RFValue(8),
                    }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "#f3f4f6",
                        backgroundColor: "#fff",
                        padding: RFValue(5),
                        borderRadius: 50,
                        height: RFValue(40),
                        width: RFValue(40),
                        shadowOffset: { width: 2, height: 2 },
                        shadowRadius: 20,
                        elevation: 2,
                        shadowColor: "#d1d5db",
                      }}>
                      <Image
                        resizeMode="contain"
                        source={item.img}
                        style={{
                          height: RFValue(18),
                          width: RFValue(18),
                        }}
                      />
                    </View>
                    <View
                      style={{
                        maxWidth: RFValue(200),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-semibold",
                          lineHeight: RFValue(20),
                          color: "#1A1A1A",
                        }}>
                        {item.info}
                      </Text>
                      <Text
                        style={{
                          fontSize: RFValue(12),
                          fontFamily: "urbanist-medium",
                          lineHeight: RFValue(20),
                          color: "#1A1A1A",
                        }}>
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
            }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                padding: RFValue(10),
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#f3f4f6",
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 20,
                elevation: 2,
                shadowColor: "#d1d5db",
              }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: RFValue(8),
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    backgroundColor: "#fff",
                    padding: RFValue(5),
                    borderRadius: 50,
                    height: RFValue(40),
                    width: RFValue(40),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 2,
                    shadowColor: "#d1d5db",
                  }}>
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/images/account-logout.png")}
                    style={{
                      height: RFValue(20),
                      width: RFValue(20),
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: "outfit-bold",
                      lineHeight: RFValue(20),
                      color: "#FA5C47",
                    }}>
                    Logout
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderBottomRightRadius: 0,
              borderWidth: RFValue(1),
              borderColor: "#F0F4FF",
              backgroundColor: "#FDFDFD",
              padding: Platform.OS === "ios" ? 18 : 17,
              marginTop: RFValue(24),
              marginBottom: RFValue(105),
            }}>
            <Text
              style={{
                fontSize: RFValue(14),
                color: colors.primary,
                fontFamily: "outfit-semibold",
                textAlign: "center",
              }}>
              Become an Easyfynd agent
            </Text>
          </TouchableOpacity>
        </Animated.ScrollView>
      )}
    </>
  );
}
