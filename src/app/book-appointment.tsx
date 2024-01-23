import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
  Dimensions,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import BookApartmentProps from "../components/propertyDetailsProps/bookApartmentProps";
import CalendarComponent from "../components/bookAppointmentComps/calendarComp";
import TimeComp from "../components/bookAppointmentComps/timeComp";
import CreditCardComp from "../components/bookAppointmentComps/creditCardComp";
import { Stack, router } from "expo-router";
import EditPayment from "../components/common/modals/editPayment";
import BookedSuccessfully from "../components/common/modals/bookedSuccessfully";

export default function BookAppointmentModal() {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [registeredUser, setRegisteredUser] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPopVisible, setModalPopVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openPopModal = () => {
    setModalPopVisible(true);
  };

  const closePopModal = () => {
    setModalPopVisible(false);
  };

  const fade = useRef(new Animated.Value(0)).current;

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
          title: "Book Appointment",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(100),
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
            height: responsiveScreenHeight(9),
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.clearIcon}
          >
            <Image
              resizeMode="contain"
              source={require("../assets/images/arrow-left.png")}
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
            height: registeredUser ? RFValue(800) : RFValue(920),
          }}
        >
          <BookApartmentProps
            appointmentTime={appointmentTime}
            appointmentDate={appointmentDate}
          />
          {registeredUser ? (
            <View
              style={{
                marginTop: RFValue(5),
                marginHorizontal: RFValue(15),
                flexDirection: "column",
                gap: RFValue(150),
              }}
            >
              <View
                style={{
                  padding: RFValue(10),
                  backgroundColor: "#fafafa",
                  borderRadius: 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(18),
                      fontFamily: "outfit-bold",
                      color: "#161917",
                      lineHeight: RFValue(30),
                    }}
                  >
                    Pay with
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: RFValue(5),
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/Mastercard.png")}
                        style={{
                          width: RFValue(30),
                          height: RFValue(30),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-regular",
                          color: "#414141",
                        }}
                      >
                        **** 3421
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: RFValue(18),
                        fontFamily: "outfit-bold",
                        lineHeight: RFValue(40),
                        color: "#06782F",
                      }}
                    >
                      Edit
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontFamily: "outfit-bold",
                      color: "#161917",
                      lineHeight: RFValue(20),
                    }}
                  >
                    Total (2 nights)
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontFamily: "outfit-bold",
                      color: "#06782f",
                      lineHeight: RFValue(20),
                    }}
                  >
                    ₦60,000
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(11),
                      fontFamily: "outfit-regular",
                      color: "#414141",
                      textDecorationLine: "underline",
                    }}
                  >
                    Sat, 3 Nov 2023 - Mon, 5 Nov 2023
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={openModal}
                  style={{
                    backgroundColor: "#06782F",
                    padding: Platform.OS === "ios" ? 15 : 14,
                    borderRadius: 10,
                    width: RFValue(100),
                  }}
                >
                  <Text style={styles.startText}>Pay</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              <View style={{ paddingHorizontal: RFValue(20) }}>
                {!appointmentDate && (
                  <CalendarComponent setAppointmentDate={setAppointmentDate} />
                )}
                {appointmentDate && !appointmentTime && (
                  <TimeComp setAppointmentTime={setAppointmentTime} />
                )}
                {appointmentTime && appointmentDate && <CreditCardComp />}
              </View>
              <TouchableOpacity
                disabled={!appointmentDate || !appointmentTime}
                onPress={openPopModal}
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
            </View>
          )}
        </ScrollView>
      </Animated.View>
      <EditPayment modalVisible={modalVisible} closeModal={closeModal} />
      <BookedSuccessfully
        modalPopVisible={modalPopVisible}
        closePopModal={closePopModal}
      />
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
    top: RFValue(10),
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
