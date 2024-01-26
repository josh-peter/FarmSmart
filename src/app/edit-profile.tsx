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
  Modal,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, Icon, ListItem, Tab, TabView } from "@rneui/themed";
import { Link, Stack, router } from "expo-router";
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
import NotificationComponents from "../components/notificationsComps/notification";
import MessagesComp from "../components/notificationsComps/messagesComp";
import { Switch } from "react-native-switch";
import ModalPicker from "../components/common/modalPicker";
const { width, height } = Dimensions.get("window");

export default function EditProfile() {
  const fade = useRef(new Animated.Value(0)).current;
  const [chooseData, setChooseData] = useState("Lagos, Nigeria");
  const [chooseLanguage, setChooseLanguage] = useState(
    "English, Yoruba, Ibibio"
  );
  const [isModdalVisible, setisModdalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [propertyResult, setPropertyResult] = useState<any>();

  const closeModal = () => {
    setModalVisible(false);
  };

  // console.log(SearchParams(), "mem22");

  const openModal = () => {
    setModalVisible(true);
  };

  const changeModalVisibility = (bool: any) => {
    setisModdalVisible(bool);
  };

  const setData = (option: any) => {
    setChooseData(option);
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
            My profile
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
        <ScrollView
          contentContainerStyle={{
                      paddingHorizontal: RFValue(15),
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
              borderRadius: RFValue(8),
              marginBottom: RFValue(10),
              marginTop: RFValue(30),
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
                fontSize: RFValue(14),
                fontFamily: "plusjakarta-regular",
                color: "#306AFF",
                flexShrink: 1,
              }}
            >
              This is what agents you get in contact with will see!
            </Text>
          </View>
          <View>
            <View>
              <Image
                resizeMode="contain"
                source={require("../assets/images/userProfile.png")}
                style={{
                  height: RFValue(75),
                  width: RFValue(65),
                }}
              />
              <Image
                resizeMode="contain"
                source={require("../assets/images/client.png")}
                style={{
                  height: RFValue(45),
                  width: RFValue(45),
                  position: "absolute",
                  top: 50,
                  left: 10,
                  right: 0,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "outfit-bold",
                  color: "#161917",
                  lineHeight: RFValue(30),
                  marginTop: RFValue(5),
                }}
              >
                Angella Okoro
              </Text>
            </View>
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-regular",
                color: "#414141",
              }}
            >
              I am a realtor with over 2 years in real estates, I have sold over
              ₦400M property and I have helped client find their dream homes.
            </Text>
          </View>
          <View>
            <View
              style={{
                marginTop: RFValue(10),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-bold",
                  color: "#1A1A1AB2",
                  lineHeight: RFValue(30),
                }}
              >
                Address
              </Text>
              <TouchableOpacity
                onPress={() => changeModalVisibility(true)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#E4E4E7",
                  paddingVertical: RFValue(12),
                  paddingHorizontal: RFValue(10),
                  backgroundColor: "#Fdfdfd",
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "plusjakarta-regular",
                  }}
                >
                  {chooseData}
                </Text>
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModdalVisible}
                onRequestClose={() => changeModalVisibility(false)}
              >
                <ModalPicker
                  changeModalVisibility={changeModalVisibility}
                  setData={setData}
                />
              </Modal>
            </View>
            <View
              style={{
                marginTop: RFValue(10),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-bold",
                  color: "#1A1A1AB2",
                  lineHeight: RFValue(30),
                }}
              >
                Language
              </Text>
              <TouchableOpacity
                onPress={() => changeModalVisibility(true)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#E4E4E7",
                  paddingVertical: RFValue(12),
                  paddingHorizontal: RFValue(10),
                  backgroundColor: "#Fdfdfd",
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "plusjakarta-regular",
                  }}
                >
                  {chooseLanguage}
                </Text>
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModdalVisible}
                onRequestClose={() => changeModalVisibility(false)}
              >
                <ModalPicker
                  changeModalVisibility={changeModalVisibility}
                  setData={setData}
                />
              </Modal>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/edit-profile")}
            style={{
              backgroundColor: "#06782F",
              padding: Platform.OS === "ios" ? 18 : 17,
              borderRadius: 10,
              marginTop: RFValue(15),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-regular",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Edit profile
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
