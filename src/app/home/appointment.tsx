import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, Icon, ListItem, Tab, TabView } from "@rneui/themed";
import { Link, Stack } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
import { Switch } from "react-native-switch";
import AppointmentUpcoming from "../../components/appointmentComps/appointmentUpcoming";
import colors from "../../constants/Colors";
import { Image } from "expo-image";
import Appointmentsync from "../../components/common/modals/appointmentSync";

export default function Appointment() {

  const [index, setIndex] = useState(0);


  const fade = useRef(new Animated.Value(0)).current;
const [animationTriggered, setAnimationTriggered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
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
          title: "Notification",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Animated.View
        style={{
          flex: 1,
          width: width,
          backgroundColor: colors.background,
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
        <TouchableOpacity
          onPress={openModal}
          style={{
            marginTop: RFValue(40),
            alignSelf: "flex-end",
            marginBottom: RFValue(-10),
          }}
        >
          <Image
            contentFit="contain"
            source={require("../../assets/images/calendarsync.png")}
            style={{
              height: RFValue(55),
              width: RFValue(55),
            }}
          />
        </TouchableOpacity>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          style={{
            marginHorizontal: RFValue(15),
          }}
          indicatorStyle={{
            backgroundColor: colors.primary,
            height: 3,
          }}
          variant="default"
        >
          <Tab.Item
            title="Upcoming"
            titleStyle={{
              fontSize: 13,
              color: index === 0 ? colors.primary : colors.tabColor,
              borderRadius: 10,
            }}
            iconPosition="right"
            icon={
              <View
                style={{
                  backgroundColor: index === 0 ? colors.primary : colors.warm,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: index === 0 ? "white" : colors.tabColor,
                    fontFamily: "outfit-bold",
                    paddingHorizontal: 5,
                    paddingVertical: 2,
                  }}
                >
                  02
                </Text>
              </View>
            }
          />
          <Tab.Item
            title="Completed"
            titleStyle={{
              fontSize: 13,
              color: index === 1 ? colors.primary : colors.tabColor,
              borderRadius: 10,
            }}
          />
          <Tab.Item
            title="Cancelled"
            titleStyle={{
              fontSize: 13,
              color: index === 2 ? colors.primary : colors.tabColor,
              borderRadius: 10,
            }}
          />
        </Tab>
        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item
            style={{ backgroundColor: "white", width: "100%", height: "100%" }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
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
                  marginVertical: RFValue(5),
                  overflow: "hidden",
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: colors.filterbg,
                      paddingHorizontal: RFValue(20),
                      paddingVertical: RFValue(10),
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/images/agentpro.png")}
                      style={{
                        height: RFValue(65),
                        width: RFValue(65),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-medium",
                        backgroundColor: colors.background,
                        padding: RFValue(6),
                        borderWidth: 1,
                        borderColor: colors.warmBtn,
                        borderRadius: 7,
                        marginTop: RFValue(8),
                      }}
                    >
                      View property
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-medium",
                        backgroundColor: colors.warm,
                        padding: RFValue(4),
                        borderWidth: 1,
                        borderColor: colors.warmBtn,
                        borderRadius: 20,
                        color: colors.green,
                        width: RFValue(80),
                      }}
                    >
                      Verified agent
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        fontFamily: "outfit-medium",
                        lineHeight: RFValue(25),
                      }}
                    >
                      Declan Ubong
                    </Text>
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 7,
                        marginTop: RFValue(2),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          fontFamily: "outfit-regular",
                        }}
                      >
                        Schedule
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 4,
                        }}
                      >
                        <Image
                          contentFit="contain"
                          source={require("../../assets/images/calendar.png")}
                          style={{
                            height: RFValue(13),
                            width: RFValue(13),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-regular",
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
                          contentFit="contain"
                          source={require("../../assets/images/clock.png")}
                          style={{
                            height: RFValue(15),
                            width: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-regular",
                          }}
                        >
                          2:00 PM - 6:30 PM
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.primary,
                    padding: Platform.OS === "ios" ? 16 : 15,
                    borderRadius: 10,
                    marginTop: RFValue(10),
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      color: colors.background,
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
                  marginVertical: RFValue(5),
                  overflow: "hidden",
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: colors.filterbg,
                      paddingHorizontal: RFValue(20),
                      paddingVertical: RFValue(10),
                    }}
                  >
                    <Image
                      contentFit="contain"
                      source={require("../../assets/images/agentpro.png")}
                      style={{
                        height: RFValue(65),
                        width: RFValue(65),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-medium",
                        backgroundColor: colors.background,
                        padding: RFValue(6),
                        borderWidth: 1,
                        borderColor: colors.warmBtn,
                        borderRadius: 7,
                        marginTop: RFValue(8),
                      }}
                    >
                      View property
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-medium",
                        backgroundColor: colors.warm,
                        padding: RFValue(4),
                        borderWidth: 1,
                        borderColor: colors.warmBtn,
                        borderRadius: 20,
                        color: colors.green,
                        width: RFValue(80),
                      }}
                    >
                      Verified agent
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        fontFamily: "outfit-medium",
                        lineHeight: RFValue(25),
                      }}
                    >
                      Declan Ubong
                    </Text>
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 7,
                        marginTop: RFValue(2),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          fontFamily: "outfit-regular",
                        }}
                      >
                        Schedule
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 4,
                        }}
                      >
                        <Image
                          contentFit="contain"
                          source={require("../../assets/images/calendar.png")}
                          style={{
                            height: RFValue(13),
                            width: RFValue(13),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-regular",
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
                          contentFit="contain"
                          source={require("../../assets/images/clock.png")}
                          style={{
                            height: RFValue(15),
                            width: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-regular",
                          }}
                        >
                          2:00 PM - 6:30 PM
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.primary,
                    padding: Platform.OS === "ios" ? 16 : 15,
                    borderRadius: 10,
                    marginTop: RFValue(10),
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      color: colors.background,
                      fontFamily: "outfit-medium",
                      textAlign: "center",
                    }}
                  >
                    Reschedule
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  gap: 4,
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(14),
                  marginHorizontal: RFValue(15),
                  marginVertical: RFValue(10),
                  overflow: "hidden",

                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: colors.filterbg,
                      paddingHorizontal: RFValue(20),
                      paddingVertical: RFValue(10),
                    }}
                  >
                    <Image
                      contentFit="contain"
                      source={require("../../assets/images/agentpro.png")}
                      style={{
                        height: RFValue(65),
                        width: RFValue(65),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-medium",
                        backgroundColor: colors.background,
                        padding: RFValue(6),
                        borderWidth: 1,
                        borderColor: colors.warmBtn,
                        borderRadius: 7,
                        marginTop: RFValue(8),
                      }}
                    >
                      View property
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-medium",
                        backgroundColor: colors.warm,
                        padding: RFValue(4),
                        borderWidth: 1,
                        borderColor: colors.warmBtn,
                        borderRadius: 20,
                        color: colors.green,
                        width: RFValue(80),
                      }}
                    >
                      Verified agent
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        fontFamily: "outfit-medium",
                        lineHeight: RFValue(25),
                      }}
                    >
                      Declan Ubong
                    </Text>
                    <View
                      style={{
                        flexDirection: "column",
                        gap: 7,
                        marginTop: RFValue(2),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          fontFamily: "outfit-regular",
                        }}
                      >
                        Schedule
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 4,
                        }}
                      >
                        <Image
                          contentFit="contain"
                          source={require("../../assets/images/calendar.png")}
                          style={{
                            height: RFValue(13),
                            width: RFValue(13),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-regular",
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
                          contentFit="contain"
                          source={require("../../assets/images/clock.png")}
                          style={{
                            height: RFValue(15),
                            width: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-regular",
                          }}
                        >
                          2:00 PM - 6:30 PM
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </TabView.Item>
        </TabView>
      </Animated.View>
      <Appointmentsync modalVisible={modalVisible} closeModal={closeModal} />
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
