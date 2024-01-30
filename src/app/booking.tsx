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
import { Avatar, Icon, ListItem, Tab, TabView } from "@rneui/themed";
import { Link, Stack } from "expo-router";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
import { Switch } from "react-native-switch";
import BookingDetails from "../components/accountInformation/bookingDetails";
import CancelBooking from "../components/accountInformation/cancelBooking";

export default function Booking() {
  const fade = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const [modalBookVisible, setModalBookVisible] = useState(false);
  const [modalCancelVisible, setModalCancelVisible] = useState(false);

  const openModal = () => {
    setModalBookVisible(true);
  };

  const closeModal = () => {
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
          title: "Notification",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
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
        }}
      >
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          style={{
            backgroundColor: "#E4E4E7",
            marginTop: RFValue(50),
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
          })}
        >
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
            style={{ backgroundColor: "white", width: "100%", height: "100%" }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: RFValue(7),
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#d5d0dd",
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(10),
                  backgroundColor: "#fff",
                  borderRadius: RFValue(10),
                  marginTop: RFValue(5),
                  marginBottom: RFValue(10),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <View style={{ position: "relative" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/bedroom.png")}
                      style={{
                        height: RFValue(80),
                        width: RFValue(80),
                      }}
                    />
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/approval.png")}
                      style={{
                        height: RFValue(90),
                        width: RFValue(90),
                        position: "absolute",
                        bottom: RFValue(40),
                        left: RFValue(-5),
                        right: RFValue(0),
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "outfit-bold",
                      }}
                    >
                      One bedroom flat
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(3),
                      }}
                    >
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
                          fontSize: RFValue(11),
                          fontFamily: "plusjakarta-regular",
                          color: "#414141",
                        }}
                      >
                        Lekki phase 1, Lagos, Nigeria
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        paddingVertical: RFValue(5),
                        paddingHorizontal: RFValue(12),
                        borderRadius: RFValue(5),
                        backgroundColor: "#ECFFF4",
                        width: RFValue(79),
                        marginTop: RFValue(3),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(11),
                          fontFamily: "outfit-medium",
                          color: "#06782F",
                        }}
                      >
                        Apartment
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: RFValue(3),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                          color: "#06782F",
                        }}
                      >
                        ₦60,000{" "}
                        <Text
                          style={{
                            fontSize: RFValue(9),
                            fontFamily: "plusjakarta-regular",
                            color: "#414141",
                          }}
                        >
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
                    marginTop: RFValue(5),
                  }}
                >
                  <TouchableOpacity
                    onPress={openCancelModal}
                    style={{
                      backgroundColor: "#FFF8F8",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      width: responsiveScreenWidth(43),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#FA5C47",
                        fontFamily: "outfit-medium",
                        textAlign: "center",
                      }}
                    >
                      Cancel booking
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#06782F",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      width: responsiveScreenWidth(43),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#fff",
                        fontFamily: "outfit-medium",
                        textAlign: "center",
                      }}
                    >
                      View details
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <CancelBooking modalCancelVisible={modalCancelVisible} closeCancelModal={closeCancelModal}/>
            </ScrollView>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: RFValue(7),
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#d5d0dd",
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(10),
                  backgroundColor: "#fff",
                  borderRadius: RFValue(10),
                  marginTop: RFValue(5),
                  marginBottom: RFValue(10),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <View style={{ position: "relative" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/bedroom.png")}
                      style={{
                        height: RFValue(80),
                        width: RFValue(80),
                      }}
                    />
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/approved.png")}
                      style={{
                        height: RFValue(90),
                        width: RFValue(90),
                        position: "absolute",
                        bottom: RFValue(40),
                        left: RFValue(-5),
                        right: RFValue(0),
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "outfit-bold",
                      }}
                    >
                      One bedroom flat
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(3),
                      }}
                    >
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
                          fontSize: RFValue(11),
                          fontFamily: "plusjakarta-regular",
                          color: "#414141",
                        }}
                      >
                        Lekki phase 1, Lagos, Nigeria
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        paddingVertical: RFValue(5),
                        paddingHorizontal: RFValue(12),
                        borderRadius: RFValue(5),
                        backgroundColor: "#ECFFF4",
                        width: RFValue(79),
                        marginTop: RFValue(3),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(11),
                          fontFamily: "outfit-medium",
                          color: "#06782F",
                        }}
                      >
                        Apartment
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: RFValue(3),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                          color: "#06782F",
                        }}
                      >
                        ₦60,000{" "}
                        <Text
                          style={{
                            fontSize: RFValue(9),
                            fontFamily: "plusjakarta-regular",
                            color: "#414141",
                          }}
                        >
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
                    marginTop: RFValue(5),
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#ECFFF4",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      width: responsiveScreenWidth(43),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#06782F",
                        fontFamily: "outfit-medium",
                        textAlign: "center",
                      }}
                    >
                      Manage host
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#06782F",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      width: responsiveScreenWidth(43),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#fff",
                        fontFamily: "outfit-medium",
                        textAlign: "center",
                      }}
                    >
                      View details
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
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  overflow: "hidden",
                  gap: RFValue(6),
                  backgroundColor: "#F1F5FF",
                  paddingHorizontal: RFValue(12),
                  paddingVertical: RFValue(10),
                  marginTop: RFValue(20),
                  marginBottom: RFValue(30),
                  borderRadius: RFValue(8),
                }}
              >
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
                    fontSize: RFValue(12),
                    fontFamily: "plusjakarta-regular",
                    color: "#306AFF",
                    flexShrink: 1,
                  }}
                >
                  Full refund is only available for users who cancelled within
                  24hrs after booking or users whose host declined or did not
                  approve their booking request within 24hrs! Otherwise you may
                  get a partial refund. If the cancellation occurred on the
                  check in date you will receive no refund!
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#d5d0dd",
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(10),
                  backgroundColor: "#fff",
                  borderRadius: RFValue(10),
                  marginTop: RFValue(5),
                  marginBottom: RFValue(10),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <View style={{ position: "relative" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/bedroom.png")}
                      style={{
                        height: RFValue(80),
                        width: RFValue(80),
                      }}
                    />
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/cancelled.png")}
                      style={{
                        height: RFValue(80),
                        width: RFValue(70),
                        position: "absolute",
                        bottom: RFValue(40),
                        left: RFValue(-5),
                        right: RFValue(0),
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "outfit-bold",
                      }}
                    >
                      One bedroom flat
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(3),
                      }}
                    >
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
                          fontSize: RFValue(11),
                          fontFamily: "plusjakarta-regular",
                          color: "#414141",
                        }}
                      >
                        Lekki phase 1, Lagos, Nigeria
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        paddingVertical: RFValue(5),
                        paddingHorizontal: RFValue(12),
                        borderRadius: RFValue(5),
                        backgroundColor: "#ECFFF4",
                        width: RFValue(79),
                        marginTop: RFValue(3),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(11),
                          fontFamily: "outfit-medium",
                          color: "#06782F",
                        }}
                      >
                        Apartment
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: RFValue(3),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                          color: "#06782F",
                        }}
                      >
                        ₦60,000{" "}
                        <Text
                          style={{
                            fontSize: RFValue(9),
                            fontFamily: "plusjakarta-regular",
                            color: "#414141",
                          }}
                        >
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
                    marginTop: RFValue(5),
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#ECFFF4",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      width: responsiveScreenWidth(43),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#06782F",
                        fontFamily: "outfit-medium",
                        textAlign: "center",
                      }}
                    >
                      Request refund
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#06782F",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      width: responsiveScreenWidth(43),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#fff",
                        fontFamily: "outfit-medium",
                        textAlign: "center",
                      }}
                    >
                      View details
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#d5d0dd",
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(10),
                  backgroundColor: "#fff",
                  borderRadius: RFValue(10),
                  marginTop: RFValue(20),
                  marginBottom: RFValue(10),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <View style={{ position: "relative" }}>
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/bedroom.png")}
                      style={{
                        height: RFValue(80),
                        width: RFValue(80),
                      }}
                    />
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/cancelled.png")}
                      style={{
                        height: RFValue(80),
                        width: RFValue(70),
                        position: "absolute",
                        bottom: RFValue(40),
                        left: RFValue(-5),
                        right: RFValue(0),
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "outfit-bold",
                      }}
                    >
                      One bedroom flat
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                        marginTop: RFValue(3),
                      }}
                    >
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
                          fontSize: RFValue(11),
                          fontFamily: "plusjakarta-regular",
                          color: "#414141",
                        }}
                      >
                        Lekki phase 1, Lagos, Nigeria
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        paddingVertical: RFValue(5),
                        paddingHorizontal: RFValue(12),
                        borderRadius: RFValue(5),
                        backgroundColor: "#ECFFF4",
                        width: RFValue(79),
                        marginTop: RFValue(3),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(11),
                          fontFamily: "outfit-medium",
                          color: "#06782F",
                        }}
                      >
                        Apartment
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: RFValue(3),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                          color: "#06782F",
                        }}
                      >
                        ₦60,000{" "}
                        <Text
                          style={{
                            fontSize: RFValue(9),
                            fontFamily: "plusjakarta-regular",
                            color: "#414141",
                          }}
                        >
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
                    marginTop: RFValue(5),
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#ECFFF4",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      width: responsiveScreenWidth(43),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#06782F",
                        fontFamily: "outfit-medium",
                        textAlign: "center",
                      }}
                    >
                      Request refund
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={openModal}
                    style={{
                      backgroundColor: "#06782F",
                      padding: Platform.OS === "ios" ? 14 : 12,
                      borderRadius: 10,
                      width: responsiveScreenWidth(43),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        color: "#fff",
                        fontFamily: "outfit-medium",
                        textAlign: "center",
                      }}
                    >
                      View details
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <BookingDetails modalBookVisible={modalBookVisible} closeBookModal={closeModal}/>
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
