import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar, setStatusBarHidden } from "expo-status-bar";
import BookApartmentProps from "../../../components/propertyDetailsProps/bookApartmentProps";
import { TextInput } from "react-native-paper";
import Checkbox from "expo-checkbox";
import CalendarComponent from "../../../components/bookAppointmentComps/calendarComp";
import TimeComp from "../../../components/bookAppointmentComps/timeComp";
import CreditCardComp from "../../../components/bookAppointmentComps/creditCardComp";

interface Props {
  modalVideoVisible: boolean;
  closeBookModal: () => void;
}

export default function BookAppointmentModal({
  modalIsVisible,
  closeBookModal,
}:any) {

  const [appointmentDate, setAppointmentDate] = useState('')
  const [appointmentTime, setAppointmentTime] = useState('')

  return (
    <>
      <StatusBar style="auto" />
      <View>
        <Modal
          isVisible={modalIsVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={300}
          animationOutTiming={300}
          backdropTransitionInTiming={300}
          backdropTransitionOutTiming={300}
          onBackdropPress={closeBookModal}
          onBackButtonPress={closeBookModal}
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
              height: responsiveScreenHeight(100),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fafafa",
                width: responsiveScreenWidth(100),
                height: responsiveScreenHeight(12),
              }}
            >
              <TouchableOpacity
                onPress={closeBookModal}
                style={styles.clearIcon}
              >
                <Image
                  resizeMode="contain"
                  source={require("../../../assets/images/arrow-left.png")}
                  style={{
                    height: RFValue(22),
                    width: RFValue(22),
                  }}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                height: RFValue(640),
              }}
            >
              <BookApartmentProps
                appointmentTime={appointmentTime}
                appointmentDate={appointmentDate}
              />
              <View
                style={{
                  paddingHorizontal: RFValue(20),
                }}
              >
                {!appointmentDate && (
                  <CalendarComponent setAppointmentDate={setAppointmentDate} />
                )}
                {appointmentDate && !appointmentTime && (
                  <TimeComp setAppointmentTime={setAppointmentTime} />
                )}
                {appointmentTime && appointmentDate && <CreditCardComp />}
              </View>
              <TouchableOpacity
                disabled={!appointmentDate && !appointmentTime ? true : false}
                style={{
                  backgroundColor:
                    appointmentDate && appointmentTime ? "#06782F" : "#83bb97",
                  padding: Platform.OS === "ios" ? 15 : 14,
                  borderRadius: 10,
                  marginTop: RFValue(30),
                  marginHorizontal: RFValue(15),
                }}
              >
                <Text style={styles.startText}>
                  Book appointment for ₦1,500
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 10,
    position: "absolute",
    left: RFValue(15),
    top: RFValue(35),
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
    top: RFValue(8),
    left: RFValue(11),
    zIndex: 1,
  },
  arrowIcon: {
    position: "absolute",
    top: RFValue(12),
    right: RFValue(11),
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
  videoSize: {
    height: "100%",
    width: "100%",
  },
  fullscreenContainer: {
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "0deg" }],
    width: Dimensions.get("window").height,
    height: Dimensions.get("window").width,
  },
  bgtransparent: {
    marginTop: 0,
    flex: 1,
  },
});
