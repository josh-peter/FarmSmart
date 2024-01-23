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
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";
import PayForApartment from "./payForApartment";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function SelectBookingDate({ modalVisible, closeModal }: Props) {
  const [selectedDate, setSelectedDate] = useState("");
      const [modalPayVisible, setModalPayVisible] = useState(false);

      const openPayModal = () => {
        setModalPayVisible(true);
      };

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
              <DatePicker
                onSelectedChange={(date) => setSelectedDate(date)}
                mode="calendar"
                options={{
                  backgroundColor: "#fafafa",
                  mainColor: "#06782F",
                }}
                style={{
                  borderRadius: 10,
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
              <DatePicker
                onSelectedChange={(date) => setSelectedDate(date)}
                mode="calendar"
                options={{
                  backgroundColor: "#fafafa",
                  mainColor: "#06782F",
                }}
                style={{
                  borderRadius: 10,
                }}
              />
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: RFValue(15),
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
              onPress={openPayModal}
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
      </Modal>
      <PayForApartment modalPayVisible={modalPayVisible} closePayModal={closePayModal} />
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
