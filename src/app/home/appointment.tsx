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
import AppointmentUpcoming from "../../components/appointmentComps/appointmentUpcoming";

export default function Appointment() {
  const fade = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
            marginHorizontal: Platform.OS === "ios" ? RFValue(7) : RFValue(12),
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
            title="Upcoming"
            titleStyle={{
              fontSize: 13,
              color: index === 0 ? "black" : "#1A1A1AB2",
              borderRadius: 10,
            }}
          />
          <Tab.Item
            title="Completed"
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
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 18,
                  backgroundColor: "#FAFAFA",
                  padding: RFValue(20),
                  margin: RFValue(15),
                  overflow: "hidden",
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: "plusjakarta-regular",
                    color: "#1A1A1A",
                    maxWidth: RFValue(210),
                  }}
                >
                  Auto-synchronize my upcoming booking with my phone’s calender
                  to remind me of all coming booking day & time.
                </Text>
                <Switch
                  value={true}
                  activeText={""}
                  inActiveText={""}
                  circleSize={25}
                />
              </View>
              <AppointmentUpcoming />
            </ScrollView>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: "column",
                  gap: 4,
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(14),
                  marginHorizontal: RFValue(15),
                  marginVertical: RFValue(15),
                  overflow: "hidden",
                  borderWidth: 1,
                  borderColor: "#E6E6E6",
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <View>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/images/agentprofile.png")}
                      style={{
                        height: RFValue(45),
                        width: RFValue(45),
                      }}
                    />
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/images/tag.png")}
                      style={{
                        height: RFValue(35),
                        width: RFValue(35),
                        position: "absolute",
                        top: 30,
                        left: 5,
                        right: 0,
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-bold",
                      }}
                    >
                      Beatrice James
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-medium",
                        lineHeight: RFValue(20),
                      }}
                    >
                      Appointment Details
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 7,
                        marginTop: RFValue(2),
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 4,
                        }}
                      >
                        <Image
                          resizeMode="contain"
                          source={require("../../assets/images/calendar-red.png")}
                          style={{
                            height: RFValue(13),
                            width: RFValue(13),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-regular",
                            color: "#FA5C47",
                          }}
                        >
                          Aug 23, 2023
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 4,
                        }}
                      >
                        <Image
                          resizeMode="contain"
                          source={require("../../assets/images/clock-red.png")}
                          style={{
                            height: RFValue(15),
                            width: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-regular",
                            color: "#FA5C47",
                          }}
                        >
                          2:00 PM - 6:30 PM
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-bold",
                        lineHeight: RFValue(20),
                        color: "#06782F",
                      }}
                    >
                      See property
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#06782F",
                    padding: Platform.OS === "ios" ? 16 : 15,
                    borderRadius: 10,
                    marginTop: RFValue(15),
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
                    Follow up with chat
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: "column",
                  gap: 4,
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(14),
                  marginHorizontal: RFValue(15),
                  marginVertical: RFValue(15),
                  overflow: "hidden",
                  borderWidth: 1,
                  borderColor: "#E6E6E6",
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <View>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/images/agentprofile.png")}
                      style={{
                        height: RFValue(45),
                        width: RFValue(45),
                      }}
                    />
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/images/tag.png")}
                      style={{
                        height: RFValue(35),
                        width: RFValue(35),
                        position: "absolute",
                        top: 30,
                        left: 5,
                        right: 0,
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-bold",
                      }}
                    >
                      Beatrice James
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-medium",
                        lineHeight: RFValue(20),
                      }}
                    >
                      Appointment Details
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 7,
                        marginTop: RFValue(2),
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 4,
                        }}
                      >
                        <Image
                          resizeMode="contain"
                          source={require("../../assets/images/calendar-red.png")}
                          style={{
                            height: RFValue(13),
                            width: RFValue(13),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-regular",
                            color: "#FA5C47",
                          }}
                        >
                          Aug 23, 2023
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 4,
                        }}
                      >
                        <Image
                          resizeMode="contain"
                          source={require("../../assets/images/clock-red.png")}
                          style={{
                            height: RFValue(15),
                            width: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-regular",
                            color: "#FA5C47",
                          }}
                        >
                          2:00 PM - 6:30 PM
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-bold",
                        lineHeight: RFValue(20),
                        color: "#06782F",
                      }}
                    >
                      See property
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#06782F",
                    padding: Platform.OS === "ios" ? 16 : 15,
                    borderRadius: 10,
                    marginTop: RFValue(15),
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
                    Reschedule
                  </Text>
                </TouchableOpacity>
              </View>
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
