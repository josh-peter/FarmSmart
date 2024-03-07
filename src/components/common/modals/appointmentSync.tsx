import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../../constants/Colors";
import { Switch } from "react-native-switch";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function Appointmentsync({
  modalVisible,
  closeModal,
}: Props) {
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View>
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
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(20),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.background,
              width: responsiveScreenWidth(100),
              marginTop:RFValue(50)
            }}
          >
           
            <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
              <MaterialIcons name="clear" size={23} color={colors.onboardingText} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 18,
              padding: RFValue(20),
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "urbanist-regular",
                color: "#1A1A1A",
                maxWidth: RFValue(220),
              }}
            >
              Auto-synchronize my upcoming booking with my phone’s calender to
              remind me of all coming booking day & time.
            </Text>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              activeText={""}
              inActiveText={""}
              circleSize={25}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(5),
    borderRadius: 50,
    position: "absolute",
        right: RFValue(25),
        bottom: RFValue(7),
        borderWidth: 1,
    borderColor:colors.border2
  },
  inputbox: {
    width: responsiveScreenWidth(33),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(5),
    paddingLeft: RFValue(15),
  },
  eyeIcon: {
    position: "absolute",
    top: 23,
    left: 5,
    zIndex: 1,
  },
  startBtn: {
    backgroundColor: "#06782F",
    padding: Platform.OS === "ios" ? 15 : 14,
    borderRadius: 10,
    marginTop: RFValue(30),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
});
