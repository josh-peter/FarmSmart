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
import AppBar from "../components/appBar";
import CustomButton from "../components/common/customButton";
import colors from "../constants/Colors";
import TimeAndDataComp from "../components/propertyDetailsProps/timeAndDataComp";
import PropertyCard from "../components/propertyDetailsProps/propertyCard";
import NoticeCard from "../components/propertyDetailsProps/noticeCard";

export default function BookAppointmentModal() {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [registeredUser, setRegisteredUser] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPopVisible, setModalPopVisible] = useState(false);
  const [creditCardFilled, setCreditCardFilled] = useState(false);
  const [step, setStep] = useState<number>(1);

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

  const handleNextStep = () => {
    if (step === 1 && appointmentDate) {
      setStep(2);
    }
    if (step === 2 && appointmentTime) {
      setStep(3);
    } else if (step === 3) {
      openPopModal();
    }
  };

  const buttonColor = () => {
    if (step === 1 && appointmentDate) {
      return colors.primary;
    } else if (step === 2 && appointmentTime) {
      return colors.primary;
    } else if (step === 3 && creditCardFilled) {
      return colors.primary;
    } else {
      return colors.button;
    }
  };

  const buttonTextColor = () => {
    if (step === 1 && appointmentDate) {
      return colors.background;
    } else if (step === 2 && appointmentTime) {
      return colors.background;
    } else if (step === 3 && creditCardFilled) {
      return colors.background;
    } else {
      return colors.buttontext;
    }
  };
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
        <AppBar
          title={step === 3 ? "Pay for appointment" : "Book appointment"}
          onPress={() => router.back()}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            height: registeredUser ? RFValue(800) : RFValue(850),
            paddingHorizontal: RFValue(20),
          }}
        >
          {registeredUser ? (
            <>
              <BookApartmentProps />
              {step === 3 && (
                <TimeAndDataComp
                  appointmentTime={appointmentTime}
                  appointmentDate={appointmentDate}
                />
              )}
              <PropertyCard />
              <View
                style={{
                  marginTop: RFValue(5),

                  flexDirection: "column",
                  gap: RFValue(150),
                }}
              >
                <View
                  style={{
                    padding: RFValue(10),
                    backgroundColor: colors.background,
                    borderWidth: 1,
                    borderColor: colors.border2,
                    borderRadius: 10,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(18),
                        fontFamily: "outfit-bold",
                        color: colors.primary,
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
                            color: colors.onboardingText,
                          }}
                        >
                          **** 3421
                        </Text>
                      </View>
                      <TouchableOpacity onPress={openModal}>
                        <Text
                          style={{
                            fontSize: RFValue(16),
                            fontFamily: "outfit-bold",
                            lineHeight: RFValue(40),
                            color: colors.primary,
                          }}
                        >
                          Edit
                        </Text>
                      </TouchableOpacity>
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
                        color: colors.primary,
                        lineHeight: RFValue(20),
                      }}
                    >
                      ₦60,000
                    </Text>
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "outfit-regular",
                        color: colors.onboardingText,
                        textDecorationLine: "underline",
                      }}
                    >
                      Sat, 3 Nov 2023 - Mon, 5 Nov 2023
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={openModal}
                    style={{
                      backgroundColor: colors.primary,
                      padding: Platform.OS === "ios" ? 15 : 14,
                      borderRadius: 10,
                      width: RFValue(100),
                    }}
                  >
                    <Text style={styles.startText}>Pay</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : (
            <View>
              <BookApartmentProps />
              {step === 3 && (
                <TimeAndDataComp
                  appointmentTime={appointmentTime}
                  appointmentDate={appointmentDate}
                />
              )}
              <PropertyCard />
              {step === 1 && <NoticeCard />}
              {step === 2 && <NoticeCard />}
              <View style={{ paddingHorizontal: RFValue(0) }}>
                {step === 1 && (
                  <CalendarComponent
                    setAppointmentDate={setAppointmentDate}
                    appointmentTime={appointmentTime}
                  />
                )}
                {step === 2 && (
                  <TimeComp setAppointmentTime={setAppointmentTime} />
                )}
                {step === 3 && (
                  <CreditCardComp setCreditCardFilled={setCreditCardFilled} />
                )}
              </View>

              <View
                style={{
                  marginTop: RFValue(20),
                }}
              >
                <CustomButton
                  buttonText={
                    step === 3
                      ? "Pay (Booking fee ₦1,500)"
                      : "Next (Booking fee ₦1,500)"
                  }
                  buttonColor={buttonColor()}
                  buttonTextColor={buttonTextColor()}
                  onPress={handleNextStep}
                  disabled={
                    (step === 1 && !appointmentDate) ||
                    (step === 2 && !appointmentTime) ||
                    (step === 3 && !creditCardFilled)
                  }
                  marginTop={RFValue(15)}
                />
              </View>
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
    backgroundColor: colors.primary,
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
