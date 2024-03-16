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
import AppBar from "../components/appBar";
const { width, height } = Dimensions.get("window");

export default function Notification() {
  const [index, setIndex] = useState(0);

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
          title: "Notification",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar title="Notifications" onPress={() => router.push("/home/")} />
      <Animated.View style={[styles.container, animatedStyle]}>
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
          variant="default">
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
                  backgroundColor: index === 0 ? colors.primary : colors.warm,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: index === 0 ? "white" : colors.tabColor,
                    fontFamily: "outfit-bold",
                    paddingHorizontal: 5,
                    paddingVertical: 2,
                  }}>
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
                  backgroundColor: index === 1 ? colors.primary : colors.warm,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: index === 1 ? "white" : colors.tabColor,
                    fontFamily: "outfit-bold",
                    paddingHorizontal: 5,
                    paddingVertical: 2,
                  }}>
                  04
                </Text>
              </View>
            }
            onPress={() => setIndex(1)}
          />
        </Tab>
        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item
            style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
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
    backgroundColor: colors.background,
    position: "relative",
    paddingTop: RFValue(15)
  },
});
