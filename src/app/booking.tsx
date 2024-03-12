import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Tab, TabView } from "@rneui/themed";
import { Stack, router } from "expo-router";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
import BookingDetails from "../components/accountInformation/bookingDetails";
import CancelBooking from "../components/accountInformation/cancelBooking";
import colors from "../constants/Colors";
import AppBar from "../components/appBar";

export default function Booking() {
  const fade = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const [modalBookVisible, setModalBookVisible] = useState(false);
  const [modalCancelVisible, setModalCancelVisible] = useState(false);

  const openBookModal = () => {
    setModalBookVisible(true);
  };

  const closeBookModal = () => {
    setModalBookVisible(false);
  };

  const openCancelModal = () => {
    setModalCancelVisible(true);
  };

  const closeCancelModal = () => {
    setModalCancelVisible(false);
  };

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
          title: "Booking",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar title="Booking" onPress={() => router.push("/home/account")} />
      <Animated.View
        style={{
          flex: 1,
          width: width,
          backgroundColor: "#fff",
          position: "relative",
          opacity: fade,
          transform: [
            {
              translateY: fade.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0],
              }),
            },
          ],
        }}>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          style={{
            backgroundColor: "#E4E4E7",
            marginTop: RFValue(15),
            marginBottom: RFValue(12),
            paddingHorizontal: RFValue(3),
            paddingVertical: RFValue(3),
            marginHorizontal: RFValue(7),
            borderRadius: 10,
          }}
          variant="default"
          disableIndicator
          buttonStyle={(active) => ({
            backgroundColor: active ? "#fff" : undefined,
            borderRadius: 10,
          })}>
          <Tab.Item
            title="Pending"
            titleStyle={{
              fontSize: 13,
              color: index === 0 ? "black" : "#1A1A1AB2",
              borderRadius: 10,
            }}
          />
          <Tab.Item
            title="Approved"
            titleStyle={{
              fontSize: 13,
              color: index === 1 ? "black" : "#1A1A1AB2",
              borderRadius: 10,
            }}
          />
          <Tab.Item
            title="Cancelled"
            titleStyle={{
              fontSize: 13,
              color: index === 2 ? "black" : "#1A1A1AB2",
              borderRadius: 10,
            }}
          />
        </Tab>
        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item
            style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: RFValue(7),
              }}>
              <View
                style={{
                  position: "relative",
                  borderWidth: 1,
                  borderColor: "#f3f4f6",
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(10),
                  backgroundColor: "#fff",
                  borderRadius: RFValue(10),
                  marginTop: RFValue(20),
                  marginBottom: RFValue(10),
                  shadowOffset: { width: 2, height: 2 },
                  shadowRadius: 20,
                  elevation: 4,
                  shadowColor: "#d1d5db",
                }}>
                <View
                  style={{
                    zIndex: 20,
                    paddingVertical: RFValue(5),
                    paddingHorizontal: RFValue(12),
                    borderRadius: RFValue(12),
                    backgroundColor: "#FDFBF7",
                    width: RFValue(115),
                    height: RFValue(28),
                    position: "absolute",
                    top: RFValue(-14),
                    left: RFValue(0),
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(10),
                      fontFamily: "outfit-semibold",
                      color: "#E8AE2E",
                    }}>
                    Pending approval
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}>
                  <View>
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/bedroom.png")}
                      style={{
                        height: RFValue(95),
                        width: RFValue(90),
                        marginTop: RFValue(-7),
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(16),
                        fontFamily: "outfit-bold",
                      }}>
                      One bedroom flat
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(3),
                      }}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/location.png")}
                        style={{
                          width: RFValue(15),
                          height: RFValue(15),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          color: "#414141",
                          fontFamily: "urbanist-medium",
                        }}>
                        Lekki phase 1, Lagos, Nigeria
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        paddingVertical: RFValue(5),
                        paddingHorizontal: RFValue(12),
                        borderRadius: RFValue(5),
                        backgroundColor: "#F5F5F5",
                        width: RFValue(82),
                        marginTop: RFValue(5),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(11),
                          fontFamily: "outfit-semibold",
                          color: "#00AE31",
                        }}>
                        Apartment
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: RFValue(5),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                          color: "#00AE31",
                        }}>
                        ₦60,000{" "}
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            color: "#414141",
                            fontFamily: "urbanist-medium",
                          }}>
                          /2 night
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 18,
                    alignItems: "center",
                    marginTop: RFValue(6),
                  }}>
                  <View
                    style={{
                      marginTop: RFValue(3),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(12),
                        color: "#414141",
                        fontFamily: "urbanist-medium",
                      }}>
                      Check-in date
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(8),
                      }}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/calendar.png")}
                        style={{
                          width: RFValue(20),
                          height: RFValue(20),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(12),
                          color: "#414141",
                          fontFamily: "urbanist-medium",
                        }}>
                        Wed, Aug 23, 2023
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: RFValue(3),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(12),
                        color: "#414141",
                        fontFamily: "urbanist-medium",
                      }}>
                      Check-out date
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(8),
                      }}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/calendar.png")}
                        style={{
                          width: RFValue(20),
                          height: RFValue(20),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(12),
                          color: "#414141",
                          fontFamily: "urbanist-medium",
                        }}>
                        Fri, Aug 26, 2023
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: RFValue(10),
                  }}>
                  <TouchableOpacity
                    onPress={openBookModal}
                    style={{
                      backgroundColor: colors.primary,
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      width: responsiveScreenWidth(43),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#fff",
                        fontFamily: "outfit-semibold",
                        textAlign: "center",
                      }}>
                      View details
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={openCancelModal}
                    style={{
                      backgroundColor: "#FDFDFD",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      borderWidth: RFValue(1),
                      borderColor: "#F0F4FF",
                      width: responsiveScreenWidth(43),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#FA5C47",
                        fontFamily: "outfit-semibold",
                        textAlign: "center",
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <CancelBooking
                modalCancelVisible={modalCancelVisible}
                closeCancelModal={closeCancelModal}
              />
            </ScrollView>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: RFValue(7),
              }}>
              <View
                style={{
                  position: "relative",
                  borderWidth: 1,
                  borderColor: "#f3f4f6",
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(10),
                  backgroundColor: "#fff",
                  borderRadius: RFValue(10),
                  marginTop: RFValue(20),
                  marginBottom: RFValue(10),
                  shadowOffset: { width: 2, height: 2 },
                  shadowRadius: 20,
                  elevation: 4,
                  shadowColor: "#d1d5db",
                }}>
                <View
                  style={{
                    zIndex: 20,
                    paddingVertical: RFValue(5),
                    paddingHorizontal: RFValue(12),
                    borderRadius: RFValue(12),
                    backgroundColor: "#ECFFF4",
                    width: RFValue(115),
                    height: RFValue(28),
                    position: "absolute",
                    top: RFValue(-14),
                    left: RFValue(0),
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(9),
                      fontFamily: "outfit-semibold",
                      color: "#00AE31",
                    }}>
                    Approved by host
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}>
                  <Image
                    resizeMode="contain"
                    source={require("../assets/images/bedroom.png")}
                    style={{
                      height: RFValue(95),
                      width: RFValue(90),
                      marginTop: RFValue(-7),
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(16),
                        fontFamily: "outfit-bold",
                      }}>
                      One bedroom flat
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(3),
                      }}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/location.png")}
                        style={{
                          width: RFValue(15),
                          height: RFValue(15),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          color: "#414141",
                          fontFamily: "urbanist-medium",
                        }}>
                        Lekki phase 1, Lagos, Nigeria
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        paddingVertical: RFValue(5),
                        paddingHorizontal: RFValue(12),
                        borderRadius: RFValue(5),
                        backgroundColor: "#F5F5F5",
                        width: RFValue(82),
                        marginTop: RFValue(5),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(11),
                          fontFamily: "outfit-semibold",
                          color: "#00AE31",
                        }}>
                        Apartment
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: RFValue(5),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                          color: "#00AE31",
                        }}>
                        ₦60,000{" "}
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            color: "#414141",
                            fontFamily: "urbanist-medium",
                          }}>
                          /2 night
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 18,
                    alignItems: "center",
                    marginTop: RFValue(6),
                  }}>
                  <View
                    style={{
                      marginTop: RFValue(3),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(12),
                        color: "#414141",
                        fontFamily: "urbanist-medium",
                      }}>
                      Check-in date
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(8),
                      }}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/calendar.png")}
                        style={{
                          width: RFValue(20),
                          height: RFValue(20),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(12),
                          color: "#414141",
                          fontFamily: "urbanist-medium",
                        }}>
                        Wed, Aug 23, 2023
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: RFValue(3),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(12),
                        color: "#414141",
                        fontFamily: "urbanist-medium",
                      }}>
                      Check-out date
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(8),
                      }}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/calendar.png")}
                        style={{
                          width: RFValue(20),
                          height: RFValue(20),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(12),
                          color: "#414141",
                          fontFamily: "urbanist-medium",
                        }}>
                        Fri, Aug 26, 2023
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: RFValue(10),
                  }}>
                  <TouchableOpacity
                    onPress={openBookModal}
                    style={{
                      backgroundColor: colors.primary,
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      width: responsiveScreenWidth(43),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#fff",
                        fontFamily: "outfit-semibold",
                        textAlign: "center",
                      }}>
                      View details
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FDFDFD",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      borderWidth: RFValue(1),
                      borderColor: "#F0F4FF",
                      width: responsiveScreenWidth(43),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: colors.primary,
                        fontFamily: "outfit-semibold",
                        textAlign: "center",
                      }}>
                      Chat host
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: RFValue(7),
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
                  marginTop: RFValue(8),
                  marginBottom: RFValue(30),
                  borderRadius: RFValue(8),
                }}>
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/danger.png")}
                  style={{
                    width: RFValue(20),
                    height: RFValue(20),
                  }}
                />
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "urbanist-medium",
                    color: "#000000",
                    flexShrink: 1,
                  }}>
                  Full refund is only available for users who cancelled within
                  24hrs after booking or users whose host declined or did not
                  approve their booking request within 24hrs! Otherwise you may
                  get a partial refund. If the cancellation occurred on the
                  check in date you will receive no refund!
                </Text>
              </View>
              <View
                style={{
                  position: "relative",
                  borderWidth: 1,
                  borderColor: "#f3f4f6",
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(10),
                  backgroundColor: "#fff",
                  borderRadius: RFValue(10),
                  marginTop: RFValue(5),
                  marginBottom: RFValue(10),
                  shadowOffset: { width: 2, height: 2 },
                  shadowRadius: 20,
                  elevation: 4,
                  shadowColor: "#d1d5db",
                }}>
                <View
                  style={{
                    zIndex: 20,
                    paddingVertical: RFValue(5),
                    paddingHorizontal: RFValue(12),
                    borderRadius: RFValue(12),
                    backgroundColor: "#F5F5F5",
                    width: RFValue(82),
                    height: RFValue(28),
                    position: "absolute",
                    top: RFValue(-14),
                    left: RFValue(0),
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(10),
                      fontFamily: "outfit-semibold",
                      color: "#FA5C47",
                    }}>
                    Cancelled
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}>
                  <View>
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/bedroom.png")}
                      style={{
                        height: RFValue(95),
                        width: RFValue(90),
                        marginTop: RFValue(-7),
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(16),
                        fontFamily: "outfit-bold",
                      }}>
                      One bedroom flat
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(3),
                      }}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/location.png")}
                        style={{
                          width: RFValue(15),
                          height: RFValue(15),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          color: "#414141",
                          fontFamily: "urbanist-medium",
                        }}>
                        Lekki phase 1, Lagos, Nigeria
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        paddingVertical: RFValue(5),
                        paddingHorizontal: RFValue(12),
                        borderRadius: RFValue(5),
                        backgroundColor: "#F5F5F5",
                        width: RFValue(82),
                        marginTop: RFValue(5),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(11),
                          fontFamily: "outfit-semibold",
                          color: "#00AE31",
                        }}>
                        Apartment
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: RFValue(5),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                          color: "#00AE31",
                        }}>
                        ₦60,000{" "}
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            color: "#414141",
                            fontFamily: "urbanist-medium",
                          }}>
                          /2 night
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: RFValue(10),
                  }}>
                  <TouchableOpacity
                    onPress={openBookModal}
                    style={{
                      backgroundColor: colors.primary,
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      width: responsiveScreenWidth(43),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#fff",
                        fontFamily: "outfit-semibold",
                        textAlign: "center",
                      }}>
                      View details
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FDFDFD",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      borderWidth: RFValue(1),
                      borderColor: "#F0F4FF",
                      width: responsiveScreenWidth(43),
                    }}>
                    <Text
                      onPress={() => router.push("/refund")}
                      style={{
                        fontSize: RFValue(14),
                        color: colors.primary,
                        fontFamily: "outfit-semibold",
                        textAlign: "center",
                      }}>
                      Refund
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  position: "relative",
                  borderWidth: 1,
                  borderColor: "#f3f4f6",
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(10),
                  backgroundColor: "#fff",
                  borderRadius: RFValue(10),
                  marginTop: RFValue(20),
                  marginBottom: RFValue(10),
                  shadowOffset: { width: 2, height: 2 },
                  shadowRadius: 20,
                  elevation: 4,
                  shadowColor: "#d1d5db",
                }}>
                <View
                  style={{
                    zIndex: 20,
                    paddingVertical: RFValue(5),
                    paddingHorizontal: RFValue(12),
                    borderRadius: RFValue(12),
                    backgroundColor: "#F5F5F5",
                    width: RFValue(82),
                    height: RFValue(28),
                    position: "absolute",
                    top: RFValue(-14),
                    left: RFValue(0),
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(10),
                      fontFamily: "outfit-semibold",
                      color: "#FA5C47",
                    }}>
                    Cancelled
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}>
                  <View>
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/bedroom.png")}
                      style={{
                        height: RFValue(95),
                        width: RFValue(90),
                        marginTop: RFValue(-7),
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(16),
                        fontFamily: "outfit-bold",
                      }}>
                      One bedroom flat
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(3),
                      }}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/location.png")}
                        style={{
                          width: RFValue(15),
                          height: RFValue(15),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          color: "#414141",
                          fontFamily: "urbanist-medium",
                        }}>
                        Lekki phase 1, Lagos, Nigeria
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        paddingVertical: RFValue(5),
                        paddingHorizontal: RFValue(12),
                        borderRadius: RFValue(5),
                        backgroundColor: "#F5F5F5",
                        width: RFValue(82),
                        marginTop: RFValue(5),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(11),
                          fontFamily: "outfit-semibold",
                          color: "#00AE31",
                        }}>
                        Apartment
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: RFValue(5),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                          color: "#00AE31",
                        }}>
                        ₦60,000{" "}
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            color: "#414141",
                            fontFamily: "urbanist-medium",
                          }}>
                          /2 night
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: RFValue(10),
                  }}>
                  <TouchableOpacity
                    onPress={openBookModal}
                    style={{
                      backgroundColor: colors.primary,
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      width: responsiveScreenWidth(43),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#fff",
                        fontFamily: "outfit-semibold",
                        textAlign: "center",
                      }}>
                      View details
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FDFDFD",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      borderWidth: RFValue(1),
                      borderColor: "#F0F4FF",
                      width: responsiveScreenWidth(43),
                    }}>
                    <Text
                      onPress={() => router.push("/refund")}
                      style={{
                        fontSize: RFValue(14),
                        color: colors.primary,
                        fontFamily: "outfit-semibold",
                        textAlign: "center",
                      }}>
                      Refund
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  position: "relative",
                  borderWidth: 1,
                  borderColor: "#f3f4f6",
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(10),
                  backgroundColor: "#fff",
                  borderRadius: RFValue(10),
                  marginTop: RFValue(20),
                  marginBottom: RFValue(10),
                  shadowOffset: { width: 2, height: 2 },
                  shadowRadius: 20,
                  elevation: 4,
                  shadowColor: "#d1d5db",
                }}>
                <View
                  style={{
                    zIndex: 20,
                    paddingVertical: RFValue(5),
                    paddingHorizontal: RFValue(12),
                    borderRadius: RFValue(12),
                    backgroundColor: "#F5F5F5",
                    width: RFValue(82),
                    height: RFValue(28),
                    position: "absolute",
                    top: RFValue(-14),
                    left: RFValue(0),
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(10),
                      fontFamily: "outfit-semibold",
                      color: "#FA5C47",
                    }}>
                    Cancelled
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}>
                  <View>
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/bedroom.png")}
                      style={{
                        height: RFValue(95),
                        width: RFValue(90),
                        marginTop: RFValue(-7),
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(16),
                        fontFamily: "outfit-bold",
                      }}>
                      One bedroom flat
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(3),
                      }}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/location.png")}
                        style={{
                          width: RFValue(15),
                          height: RFValue(15),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          color: "#414141",
                          fontFamily: "urbanist-medium",
                        }}>
                        Lekki phase 1, Lagos, Nigeria
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        paddingVertical: RFValue(5),
                        paddingHorizontal: RFValue(12),
                        borderRadius: RFValue(5),
                        backgroundColor: "#F5F5F5",
                        width: RFValue(82),
                        marginTop: RFValue(5),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(11),
                          fontFamily: "outfit-semibold",
                          color: "#00AE31",
                        }}>
                        Apartment
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: RFValue(5),
                      }}>
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                          color: "#00AE31",
                        }}>
                        ₦60,000{" "}
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            color: "#414141",
                            fontFamily: "urbanist-medium",
                          }}>
                          /2 night
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: RFValue(10),
                  }}>
                  <TouchableOpacity
                    onPress={openBookModal}
                    style={{
                      backgroundColor: colors.primary,
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      width: responsiveScreenWidth(43),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#fff",
                        fontFamily: "outfit-semibold",
                        textAlign: "center",
                      }}>
                      View details
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#FDFDFD",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      borderBottomRightRadius: 0,
                      borderWidth: RFValue(1),
                      borderColor: "#F0F4FF",
                      width: responsiveScreenWidth(43),
                    }}>
                    <Text
                      onPress={() => router.push("/refund")}
                      style={{
                        fontSize: RFValue(14),
                        color: colors.primary,
                        fontFamily: "outfit-semibold",
                        textAlign: "center",
                      }}>
                      Refund
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <BookingDetails
                modalBookVisible={modalBookVisible}
                closeBookModal={closeBookModal}
              />
            </ScrollView>
          </TabView.Item>
        </TabView>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#3538cd",
    position: "relative",
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
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: RFValue(22),
    fontFamily: "satoshi-medium",
    color: "#fff",
  },
  subtitle: {
    fontSize: RFValue(28),
    lineHeight: RFValue(32),
    fontFamily: "satoshi-bold",
    color: "#051040",
    textAlign: "center",
    paddingHorizontal: RFValue(20),
  },
  smallText: {
    marginTop: 10,
    fontSize: RFValue(11),
    fontFamily: "satoshi-medium",
    color: "#fff",
  },
  tabInner: {
    marginTop: RFValue(20),
  },
  tabContainer: {
    flex: 1,
    width: width,
  },
  button: {
    fontFamily: "satoshi-bold",
    textAlign: "center",
    color: "#fff",
    fontSize: RFValue(14),
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 10,
    position: "absolute",
    left: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
});
