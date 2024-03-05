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
import { Link, Stack, router } from "expo-router";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import NotificationComponents from "../components/notificationsComps/notification";
import MessagesComp from "../components/notificationsComps/messagesComp";
import colors from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
const { width, height } = Dimensions.get("window");

export default function Notification() {
  const fade = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

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
      <StatusBar
        style="dark"
      />
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
        <View
          style={{
            backgroundColor: colors.background,
            width: width,
            height: responsiveScreenHeight(10),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.background,
              width: width,
              marginTop: RFValue(25),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(21),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Notification
            </Text>
            <TouchableOpacity
              style={styles.clearIcon}
              onPress={() => router.push("/home/")}
            >
              <Image
                resizeMode="contain"
                source={require("../assets/images/arrow-left.png")}
                style={{
                  height: RFValue(22),
                  width: RFValue(22),
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          style={{
            backgroundColor: "white",
            borderBottomWidth: 1,
            borderBottomColor: "#DBDBDB",
            marginHorizontal: RFValue(15),
          }}
          indicatorStyle={{
            backgroundColor: colors.primary,
            height: 3,
          }}
          variant="default"
        >
          <Tab.Item
            title="Notifications"
            titleStyle={{
              fontSize: 16,
              fontFamily: "urbanist-regular",
              color: index === 0 ? colors.primary : colors.tabColor,
            }}
            iconPosition="right"
            icon={
              <View
                style={{
                  backgroundColor:
                    index === 0 ? colors.primary : colors.warm,
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
            onPress={() => setIndex(0)}
          />

          <Tab.Item
            title="Messages"
            titleStyle={{
              fontSize: 16,
              fontFamily: "urbanist-regular",
              color: index === 1 ? colors.primary : colors.tabColor,
            }}
            iconPosition="right"
            icon={
              <View
                style={{
                  backgroundColor:
                    index === 1 ? colors.primary : colors.warm,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: index === 1 ? "white" : colors.tabColor,
                    fontFamily: "outfit-bold",
                    paddingHorizontal: 5,
                    paddingVertical: 2,
                  }}
                >
                  04
                </Text>
              </View>
            }
            onPress={() => setIndex(1)}
          />
        </Tab>
        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item
            style={{ backgroundColor: "white", width: "100%", height: "100%" }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <NotificationComponents />
            </ScrollView>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <MessagesComp />
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
    backgroundColor: colors.background,
    padding: RFValue(10),
    borderRadius:50,
    position: "absolute",
      left: RFValue(15),
      borderWidth: 1,
    borderColor:colors.border2
  },

});
