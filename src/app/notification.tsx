import { View, Text, Animated, Dimensions, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Icon, ListItem, Tab, TabView } from "@rneui/themed";
import { Link, Stack } from 'expo-router';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
 const { width, height } = Dimensions.get("window");

export default function Notification() {
   

      const fade = useRef(new Animated.Value(0)).current;
      const [index, setIndex] = useState(1);
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
        <View
          style={{
            backgroundColor: "#fafafa",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(10),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fafafa",
              width: responsiveScreenWidth(100),

              marginTop: RFValue(25),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                textTransform: "uppercase",
                lineHeight: RFValue(30),
              }}
            >
              Notification
            </Text>
            <TouchableOpacity style={styles.clearIcon}>
              <MaterialIcons name="clear" size={24} color="black" />
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
          }}
          indicatorStyle={{
            backgroundColor: "#06782F",
            height: 3,
                  }}
                  variant='default'
        >
          <Tab.Item
            title="Notifications"
            titleStyle={{ fontSize: 15, color: "#06782F" }}
          />
          <Tab.Item
            title="Messages"
            titleStyle={{ fontSize: 15, color: "#06782F" }}
          />
        </Tab>
        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <Text>Recent</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
            <Text>Favorite</Text>
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
    borderRadius: 50,
    position: "absolute",
    left: RFValue(15),
  },
});