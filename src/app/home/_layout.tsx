import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Image, View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import colors from "../../constants/Colors";

export default function Layout() {
  return (
    <Tabs
      initialRouteName="index"
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
        headerShown:false,
        headerStyle: false,
        headerTintColor: "#fff",
        headerTitleStyle: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderWidth: 1,
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderTopColor: "rgba(71, 84, 103, 0.20))",
          height: responsiveScreenHeight(8),
          elevation: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: "transparent",
                  width: responsiveScreenWidth(25),
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: RFValue(10),
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    width: RFValue(22),
                    height: RFValue(22),
                  }}
                  source={
                    focused
                      ? require("../../assets/images/navicons/home-dark.png")
                      : require("../../assets/images/navicons/home-white.png")
                  }
                />
                <Text
                  style={{
                    color: focused ? colors.primary : colors.bottomTab,
                    fontSize: RFValue(10),
                    fontFamily: "outfit-medium",
                  }}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: "transparent",
                  width: responsiveScreenWidth(25),
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: RFValue(10),
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    width: RFValue(22),
                    height: RFValue(22),
                  }}
                  source={
                    focused
                      ? require("../../assets/images/navicons/heart-dark.png")
                      : require("../../assets/images/navicons/heart-white.png")
                  }
                />
                <Text
                  style={{
                    color: focused ? colors.primary : "#BABABA",
                    fontSize: RFValue(10),
                    fontFamily: "outfit-medium",
                  }}
                >
                  Wishlist
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: "transparent",
                  width: responsiveScreenWidth(25),
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: RFValue(10),
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    width: RFValue(22),
                    height: RFValue(22),
                  }}
                  source={
                    focused
                      ? require("../../assets/images/navicons/explore-dark.png")
                      : require("../../assets/images/navicons/explore-white.png")
                  }
                />
                <Text
                  style={{
                    color: focused ? colors.primary : "#BABABA",
                    fontSize: RFValue(10),
                    fontFamily: "outfit-medium",
                  }}
                >
                  Explore
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: "transparent",
                  width: responsiveScreenWidth(25),
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: RFValue(10),
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    width: RFValue(22),
                    height: RFValue(22),
                  }}
                  source={
                    focused
                      ? require("../../assets/images/navicons/appointment-dark.png")
                      : require("../../assets/images/navicons/appointment-white.png")
                  }
                />
                <Text
                  style={{
                    color: focused ? colors.primary : "#BABABA",
                    fontSize: RFValue(10),
                    fontFamily: "outfit-medium",
                  }}
                >
                  Appointment
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: "transparent",
                  width: responsiveScreenWidth(25),
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: RFValue(10),
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{
                    width: RFValue(22),
                    height: RFValue(22),
                  }}
                  source={
                    focused
                      ? require("../../assets/images/navicons/account-dark.png")
                      : require("../../assets/images/navicons/account-white.png")
                  }
                />
                <Text
                  style={{
                    color: focused ? colors.primary : "#BABABA",
                    fontSize: RFValue(10),
                    fontFamily: "outfit-medium",
                  }}
                >
                  Account
                </Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
