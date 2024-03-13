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
import React, { useMemo, useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";
import PayForApartment from "./payForApartment";
import { router } from "expo-router";
import { Calendar } from "react-native-calendars";
import colors from "../../../constants/Colors";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  props:any
}

export default function SelectBookingDate({
  modalVisible,
  closeModal,
  props,
}: Readonly<Props>) {
  const [selectedDate, setSelectedDate] = useState("");
  const [modalPayVisible, setModalPayVisible] = useState(false);
  const initDate = "2024-03-13";
  const [selected, setSelected] = useState(initDate);
  const marked = useMemo(
    () => ({
      [selected]: {
        customStyles: {
          container: {
            backgroundColor: colors.primary,
            borderRadius: 0,
          },
          text: {
            color: "white",
          },
        },
      },
    }),
    [selected]
  );

  const closePayModal = () => {
    setModalPayVisible(false);
  };


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
            height: responsiveScreenHeight(80),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fafafa",
              width: responsiveScreenWidth(100),
              height: responsiveScreenHeight(10),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Book apartment
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
              <MaterialIcons name="clear" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: RFValue(15),
              paddingVertical: RFValue(20),
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFValue(18),
                  fontFamily: "outfit-bold",
                  color: "#161917",
                  lineHeight: RFValue(40),
                }}
              >
                Select check-in date
              </Text>

              <Calendar
                onPress={(date: any) => setSelectedDate(date)}
                markingType="custom"
                markedDates={marked}
                onDayPress={(day: any) => {
                  setSelected(day.dateString);
                }}
                {...props}
                style={{
                  borderRadius: 5,
                  shadowOffset: { width: 0, height: 4 },
                  shadowRadius: 20,
                  shadowOpacity: 0.16,
                  elevation: 14,
                  shadowColor: "#d5d0dd",
                }}
                theme={{
                  calendarBackground: colors.background,
                  dayTextColor: colors.primary,
                  textDisabledColor: "#00175426",
                  monthTextColor: colors.primary,
                  textMonthFontFamily: "outfit-bold",
                  arrowColor: colors.primary,
                  "stylesheet.calendar.header": {
                    dayTextAtIndex0: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                    dayTextAtIndex1: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                    dayTextAtIndex2: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                    dayTextAtIndex3: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                    dayTextAtIndex4: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                    dayTextAtIndex5: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                    dayTextAtIndex6: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                  },
                }}
              />
            </View>
            <View
              style={{
                marginTop: RFValue(9),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(18),
                  fontFamily: "outfit-bold",
                  color: "#161917",
                  lineHeight: RFValue(40),
                }}
              >
                Select check-out date
              </Text>
              <Calendar
                onPress={(date: any) => setSelectedDate(date)}
                markingType="custom"
                markedDates={marked}
                onDayPress={(day: any) => {
                  setSelected(day.dateString);
                }}
                {...props}
                style={{
                  borderRadius: 5,
                  shadowOffset: { width: 0, height: 4 },
                  shadowRadius: 20,
                  shadowOpacity: 0.16,
                  elevation: 14,
                  shadowColor: "#d5d0dd",
                }}
                theme={{
                  calendarBackground: colors.background,
                  dayTextColor: colors.primary,
                  textDisabledColor: "#00175426",
                  monthTextColor: colors.primary,
                  textMonthFontFamily: "outfit-bold",
                  arrowColor: colors.primary,
                  "stylesheet.calendar.header": {
                    dayTextAtIndex0: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                    dayTextAtIndex1: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                    dayTextAtIndex2: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                    dayTextAtIndex3: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                    dayTextAtIndex4: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                    dayTextAtIndex5: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                    dayTextAtIndex6: {
                      color: colors.primary,
                      fontFamily: "outfit-medium",
                    },
                  },
                }}
              />
              {/* <DatePicker
                mode="calendar"
                options={{
                  backgroundColor: "#fafafa",
                  mainColor: "#06782F",
                }}
                style={{
                  borderRadius: 10,
                }}
              /> */}
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: RFValue(15),
              borderTopWidth: 1,
              borderTopColor: colors.border2,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "outfit-bold",
                  color: colors.primary,
                  lineHeight: RFValue(20),
                }}
              >
                Total (2 nights)
              </Text>
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "outfit-bold",
                  color: colors.green,
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
                }}
              >
                Sat, 3 Nov 2023 - Mon, 5 Nov 2023
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                router.push("/summary-confirmation");
              }}
              style={{
                backgroundColor: colors.primary,
                padding: Platform.OS === "ios" ? 15 : 14,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                width: RFValue(100),
              }}
            >
              <Text style={styles.startText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <PayForApartment
        modalPayVisible={modalPayVisible}
        closePayModal={closePayModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 50,
    position: "absolute",
    right: RFValue(15),
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
