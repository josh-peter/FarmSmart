import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import React, { useEffect, useRef, useState } from "react";
import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
import AccountActivityModal from "../components/common/modals/accountActivityModal";
import ListingActivityModal from "../components/common/modals/listingActivityModal";
import colors from "../constants/Colors";
import AppBar from "../components/appBar";

const { width, height } = Dimensions.get("window");

export default function NotificationSettings() {
  const [accountActivityModalVisible, setAccountActivityModalVisible] = useState(false);
  const [listingActivityModalodalVisible, setListingActivityModalVisible] = useState(false);

  const openAccountActivityModal = () => {
    setAccountActivityModalVisible(true);
  };

  const closeAccountActivityModal = () => {
    setAccountActivityModalVisible(false);
  };

  const openListingActivityModal = () => {
    setListingActivityModalVisible(true);
  };

  const closeListingActivityModal = () => {
    setListingActivityModalVisible(false);
  };

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

  const accountItem = [
    {
      id: 1,
      title: "Account activity",
      account: "On: Email, Push notification and Sms",
    },
    {
      id: 2,
      title: "Listing activity",
      account: "On: Email, Push notification and Sms",
    },
  ];

    const updatesItem = [
      {
        id: 1,
        title: "News and offers",
        account: "Off",
      },
      {
        id: 2,
        title: "New listing",
        account: "Off",
      },
    ];

  return (
    <>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          title: "Notification settings",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar
        title="Notification settings"
        onPress={() => router.push("/home/account")}
      />
      <Animated.View style={[styles.container, animatedStyle]}>
        <View
          style={{
            paddingHorizontal: RFValue(15),
            marginTop: RFValue(15),
          }}>
          <Text
            style={{
              fontSize: RFValue(17),
              fontFamily: "outfit-bold",
              color: "#1A1A1A",
            }}>
            Account activity & policies
          </Text>
          <Text
            style={{
              color: "#5F5F5F",
              fontSize: RFValue(13),
              fontFamily: "plusjakarta-regular",
            }}>
            Confirm your booking and account activity, and learn about important
            Easyfynd policies.
          </Text>
          <View
            style={{
              flexDirection: "column",
              gap: RFValue(20),
              marginTop: RFValue(20),
            }}>
            {accountItem?.map((item) => (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "plusjakarta-semibold",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(12),
                      fontFamily: "plusjakarta-regular",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}>
                    {item.account}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={
                    item.id === 1
                      ? openAccountActivityModal
                      : item.id === 2
                      ? openListingActivityModal
                      : undefined
                  }>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-bold",
                      lineHeight: RFValue(40),
                      color: colors.primary,
                      textDecorationLine: "underline",
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: RFValue(15),
            marginTop: RFValue(45),
          }}>
          <Text
            style={{
              fontSize: RFValue(17),
              fontFamily: "outfit-bold",
              color: "#1A1A1A",
            }}>
            Easyfynd updates & offers
          </Text>
          <Text
            style={{
              color: "#5F5F5F",
              fontSize: RFValue(13),
              fontFamily: "plusjakarta-regular",
            }}>
            Stay up to date on the latest news from Easyfynd let us know how we
            can improve.
          </Text>
          <View
            style={{
              flexDirection: "column",
              gap: RFValue(20),
              marginTop: RFValue(20),
            }}>
            {updatesItem?.map((item) => (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "plusjakarta-semibold",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(11),
                      fontFamily: "plusjakarta-regular",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}>
                    {item.account}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={
                    item.id === 1
                      ? openAccountActivityModal
                      : item.id === 2
                      ? openListingActivityModal
                      : undefined
                  }>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-bold",
                      lineHeight: RFValue(40),
                      color: colors.primary,
                      textDecorationLine: "underline",
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <AccountActivityModal
          modalVisible={accountActivityModalVisible}
          closeModal={closeAccountActivityModal}
        />
        <ListingActivityModal
          modalVisible={listingActivityModalodalVisible}
          closeModal={closeListingActivityModal}
        />
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
