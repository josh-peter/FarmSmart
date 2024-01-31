import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, Stack, router } from "expo-router";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import AccountNameModal from "../components/accountInformation/acccountNameModal";
import EmailAddressModal from "../components/accountInformation/EmailAddressModal";
import UpdatePhoneModal from "../components/accountInformation/updatePhoneModal";
import EditDateOfBirth from "../components/accountInformation/editDateOfBirth";
import NotificationSettingsModal from "../components/common/modals/notificationSettingsModal";

const { width, height } = Dimensions.get("window");

export default function NotificationSettings() {
  const fade = useRef(new Animated.Value(0)).current;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEmailVisible, setModalEmailVisible] = useState(false);
  const [modalPhoneVisible, setModalPhoneVisible] = useState(false);
  const [modalDOBVisible, setModalDOBVisible] = useState(false);
  const [modalPayVisible, setModalPayVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openEmailModal = () => {
    setModalEmailVisible(true);
  };

  const closeEmailModal = () => {
    setModalEmailVisible(false);
  };

  const openPhoneModal = () => {
    setModalPhoneVisible(true);
  };

  const closePhoneModal = () => {
    setModalPhoneVisible(false);
  };

  const openDOBModal = () => {
    setModalDOBVisible(true);
  };

  const closeDOBModal = () => {
    setModalDOBVisible(false);
  };

    const openPayModal = () => {
      setModalPayVisible(true);
    };

    const closePayModal = () => {
      setModalPayVisible(false);
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
      <Stack.Screen
        options={{
          title: "Account Information",
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
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fafafa",
            width: responsiveScreenWidth(100),
            height: responsiveScreenWidth(20),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(30),
            }}
          >
            Account information
          </Text>
          <TouchableOpacity style={styles.clearIcon}>
            <Image
              resizeMode="contain"
              source={require("../assets/images/arrow-left.png")}
              style={{
                height: RFValue(15),
                width: RFValue(15),
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: RFValue(15),
            marginTop: RFValue(15),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(17),
              fontFamily: "outfit-bold",
              color: "#1A1A1A",
            }}
          >
            Account activity & policies
          </Text>
          <Text
            style={{
              color: "#5F5F5F",
              fontSize: RFValue(13),
              fontFamily: "plusjakarta-regular",
            }}
          >
            Confirm your booking and account activity, and learn about important
            Easyfynd policies.
          </Text>
          <View
            style={{
              flexDirection: "column",
              gap: RFValue(20),
              marginTop: RFValue(20),
            }}
          >
            {accountItem?.map((item) => (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "plusjakarta-semibold",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(11),
                      fontFamily: "plusjakarta-regular",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}
                  >
                    {item.account}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={
                    item.id === 1
                      ? openModal
                      : item.id === 2
                      ? openEmailModal
                      : item.id === 3
                      ? openPhoneModal
                      : item.id === 4
                      ? openDOBModal
                      : undefined
                  }
                >
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-bold",
                      lineHeight: RFValue(40),
                      color: "#06782F",
                    }}
                  >
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
          }}
        >
          <Text
            style={{
              fontSize: RFValue(17),
              fontFamily: "outfit-bold",
              color: "#1A1A1A",
            }}
          >
            Easyfynd updates & offers
          </Text>
          <Text
            style={{
              color: "#5F5F5F",
              fontSize: RFValue(13),
              fontFamily: "plusjakarta-regular",
            }}
          >
            Stay up to date on the latest news from Easyfynd let us know how we
            can improve.
          </Text>
          <View
            style={{
              flexDirection: "column",
              gap: RFValue(20),
              marginTop: RFValue(20),
            }}
          >
            {updatesItem?.map((item) => (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "plusjakarta-semibold",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(11),
                      fontFamily: "plusjakarta-regular",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}
                  >
                    {item.account}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={
                    item.id === 1
                      ? openPayModal
                      : item.id === 2
                      ? openEmailModal
                      : item.id === 3
                      ? openPhoneModal
                      : item.id === 4
                      ? openDOBModal
                      : undefined
                  }
                >
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-bold",
                      lineHeight: RFValue(40),
                      color: "#06782F",
                    }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <AccountNameModal modalVisible={modalVisible} closeModal={closeModal} />
        <EmailAddressModal
          modalEmailVisible={modalEmailVisible}
          closeEmailModal={closeEmailModal}
        />
        <UpdatePhoneModal
          modalPhoneVisible={modalPhoneVisible}
          closePhoneModal={closePhoneModal}
        />
        <EditDateOfBirth
          modalDOBVisible={modalDOBVisible}
          closeDOBModal={closeDOBModal}
        />
        <NotificationSettingsModal modalPayVisible={modalPayVisible} closePayModal={closePayModal}/>
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
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(5),
  },
});
