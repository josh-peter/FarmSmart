import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState, useCallback } from "react";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { MaterialIcons } from "@expo/vector-icons";
import { Switch } from "react-native-switch";
import colors from "../../../constants/Colors";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function AccountActivityModal({
  modalVisible,
  closeModal,
}: Readonly<Props>) {
  const [emailNotification, setEmailNotification] = useState(true);
  const [pushNotification, setPushNotification] = useState(true);
  const [smsNotification, setSmsNotification] = useState(true);

  const toggleEmailNotification = useCallback(() => {
    setEmailNotification((prev) => !prev);
  }, []);

  const togglePushNotification = useCallback(() => {
    setPushNotification((prev) => !prev);
  }, []);

  const toggleSmsNotification = useCallback(() => {
    setSmsNotification((prev) => !prev);
  }, []);

  const [modalCardVisible, setModalCardVisible] = useState(false);

  const closeCardModal = () => {
    setModalCardVisible(false);
  };

  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={300}
      animationOutTiming={300}
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      backdropOpacity={0.5}
      backdropColor="#000"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        position: "absolute",
        margin: 0,
      }}>
      <View
        style={{
          backgroundColor: "#fff",
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(45),
        }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            marginBottom: RFValue(15),
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 20,
            shadowOpacity: 0.16,
            elevation: 14,
            shadowColor: "#d5d0dd",
            width: responsiveScreenWidth(100),
            height: responsiveScreenWidth(20),
          }}>
          <Text
            style={{
              fontSize: RFValue(18),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(30),
            }}>
            Account activity
          </Text>
          <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
            <MaterialIcons name="clear" size={18} color="#1A1A1A" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: RFValue(15),
            paddingVertical: RFValue(20),
          }}>
          <View>
            <View
              style={{
                flexDirection: "column",
                gap: RFValue(35),
              }}>
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "outfit-regular",
                  color: "#414141",
                }}>
                Stay on top of your reservation, account activity and legal
                info.
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-regular",
                    color: "#414141",
                  }}>
                  Email
                </Text>
                <TouchableOpacity>
                  <Switch
                    value={emailNotification}
                    onValueChange={toggleEmailNotification}
                    backgroundActive={colors.primary}
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
                }}>
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-regular",
                    color: "#414141",
                  }}>
                  Push notification
                </Text>
                <TouchableOpacity>
                  <Switch
                    value={pushNotification}
                    onValueChange={togglePushNotification}
                    backgroundActive={colors.primary}
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
                }}>
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-regular",
                    color: "#414141",
                  }}>
                  Sms
                </Text>
                <TouchableOpacity>
                  <Switch
                    value={smsNotification}
                    onValueChange={toggleSmsNotification}
                    backgroundActive={colors.primary}
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
    padding: RFValue(6),
    borderRadius: 50,
    position: "absolute",
    right: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
});
