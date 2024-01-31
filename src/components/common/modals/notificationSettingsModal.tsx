import {
  Text,
  View,
  useColorScheme,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { Link, router } from "expo-router";
import AddNewCard from "./addNewCard";
import { MaterialIcons } from "@expo/vector-icons";
import { Switch } from "react-native-switch";

interface Props {
  modalPayVisible: boolean;
  closePayModal: () => void;
}

export default function NotificationSettingsModal({
  modalPayVisible,
  closePayModal,
}: Readonly<Props>) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUserLogin = (values: any, setSubmitting: any) => {
    router.push("/home/");
    setSubmitting(false);
  };

  const [modalCardVisible, setModalCardVisible] = useState(false);

  const openCardModal = () => {
    setModalCardVisible(true);
  };

  const closeCardModal = () => {
    setModalCardVisible(false);
  };

  return (
    <Modal
      isVisible={modalPayVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={300}
      animationOutTiming={300}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      onBackdropPress={closePayModal}
      onBackButtonPress={closePayModal}
      backdropOpacity={0.5}
      backdropColor="#000"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        position: "absolute",
        margin: 0,
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(45),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fafafa",
            width: responsiveScreenWidth(100),
            height: responsiveScreenWidth(22),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(30),
            }}
          >
            Account activity
          </Text>
          <TouchableOpacity style={styles.clearIcon}>
            <MaterialIcons name="clear" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: RFValue(15),
            paddingVertical: RFValue(20),
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "column",
                gap: RFValue(35),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "outfit-regular",
                  color: "#414141",
                }}
              >
                Stay on top of your reservation, account activity and legal
                info.
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-regular",
                    color: "#414141",
                  }}
                >
                  Email
                </Text>
                <TouchableOpacity>
                  <Switch
                    value={true}
                    onValueChange={(val) => console.warn(val)}
                    backgroundActive={"green"}
                    backgroundInactive={"gray"}
                    activeText={""}
                    inActiveText={""}
                    circleSize={25}
                  />
                </TouchableOpacity>
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
                    fontSize: RFValue(14),
                    fontFamily: "outfit-regular",
                    color: "#414141",
                  }}
                >
                  Push notification
                </Text>
                <TouchableOpacity>
                  <Switch
                    value={true}
                    onValueChange={(val) => console.warn(val)}
                    backgroundActive={"green"}
                    backgroundInactive={"gray"}
                    activeText={""}
                    inActiveText={""}
                    circleSize={25}
                  />
                </TouchableOpacity>
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
                    fontSize: RFValue(14),
                    fontFamily: "outfit-regular",
                    color: "#414141",
                  }}
                >
                  Sms
                </Text>
                <TouchableOpacity>
                  <Switch
                    value={true}
                    onValueChange={(val) => console.warn(val)}
                    backgroundActive={"green"}
                    backgroundInactive={"gray"}
                    activeText={""}
                    inActiveText={""}
                    circleSize={25}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <AddNewCard
          modalCardVisible={modalCardVisible}
          closeCardModal={closeCardModal}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#1D2939",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#fff",
  },
  smallText: {
    fontSize: responsiveScreenFontSize(2.5),
    lineHeight: responsiveScreenFontSize(3.2),
    fontFamily: "satoshi-bold",
    textAlign: "center",
  },
  smallerText: {
    fontSize: responsiveScreenFontSize(1.4),
    lineHeight: responsiveScreenFontSize(2.5),
    fontFamily: "satoshi-regular",
    marginTop: responsiveScreenFontSize(1.5),
    textAlign: "center",
  },
  startBtn: {
    backgroundColor: "#06782F",
    padding: Platform.OS === "ios" ? 18 : 17,
    borderRadius: 10,
    marginTop: RFValue(25),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 30,
    position: "absolute",
    right: RFValue(15),
  },
});
