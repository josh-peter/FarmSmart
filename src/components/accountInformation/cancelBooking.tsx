import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";
import {
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import BookingCancelledSuccessfully from "../common/modals/bookingCancelledSuccessfully";
import colors from "../../constants/Colors";

interface Props {
  modalCancelVisible: any;
  closeCancelModal: () => void;
}

const checkboxes = [
  { id: 1, label: "I changed my mind about the apartment" },
  { id: 2, label: "Something else came up" },
  { id: 3, label: "Host asked me to cancel" },
  { id: 4, label: "I am no longer available" },
];

export default function CancelBooking({
  modalCancelVisible,
  closeCancelModal,
}: Readonly<Props>) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [otherReason, setOtherReason] = useState("");
  const [otherReasonClick, setOtherReasonClick] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [modalPopVisible, setModalPopVisible] = useState(false);

  const openPopModal = () => {
    setModalPopVisible(true);
  };

  const closePopModal = () => {
    setModalPopVisible(false);
  };

  const handleOtherReasonClick = () => {
    setOtherReasonClick(!otherReasonClick);
    setCheckedItems([]);
  };

  const handleCheckboxChange = (label: string) => {
    if (checkedItems.includes(label)) {
      setCheckedItems(checkedItems.filter((item) => item !== label));
    } else {
      setCheckedItems([...checkedItems, label]);
    }
  };

  const handleInputChange = (text: string) => {
    setOtherReason(text);
    setIsButtonEnabled(text.trim().length > 0);
    console.log(text);
  };

  useEffect(() => {
    setOtherReasonClick(false);
  }, [closeCancelModal]);

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={modalCancelVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={closeCancelModal}
        onBackButtonPress={closeCancelModal}
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
              Cancel booking
            </Text>
            <TouchableOpacity
              onPress={closeCancelModal}
              style={styles.clearIcon}>
              <MaterialIcons name="clear" size={18} color="#1A1A1A" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: RFValue(15),
              paddingBottom: RFValue(25),
            }}>
            {!otherReasonClick ? (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    overflow: "hidden",
                    gap: RFValue(6),
                    backgroundColor: "#F5F5F5",
                    paddingHorizontal: RFValue(12),
                    paddingVertical: RFValue(10),
                    marginTop: RFValue(20),
                    marginBottom: RFValue(20),
                    borderRadius: RFValue(8),
                  }}>
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/images/danger.png")}
                    style={{
                      width: RFValue(20),
                      height: RFValue(20),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "urbanist-medium",
                      color: "#000000",
                      flexShrink: 1,
                    }}>
                    If you are cancelling within 24hrs of booking you will
                    receive total refund of your payment, otherwise you may get
                    a partial refund. If the cancellation is on the check in
                    date you will receive no refund!
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: "outfit-semibold",
                      color: "#000000",
                    }}>
                    Why do you want to cancel your booking?
                  </Text>
                  <View
                    style={{
                      flexDirection: "column",
                      gap: RFValue(25),
                      marginTop: RFValue(10),
                    }}>
                    {checkboxes.map((checkbox, index) => (
                      <View
                        key={index}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: RFValue(8),
                        }}>
                        <Checkbox
                          style={{
                            borderRadius: RFValue(4),
                          }}
                          value={checkedItems.includes(checkbox.label)}
                          onValueChange={() =>
                            handleCheckboxChange(checkbox.label)
                          }
                          color={
                            checkedItems.includes(checkbox.label)
                              ? colors.primary
                              : "#e1e1e1"
                          }
                        />
                        <Text
                          style={{
                            fontSize: RFValue(13),
                            fontFamily: "urbanist-medium",
                          }}>
                          {checkbox.label}
                        </Text>
                      </View>
                    ))}
                    <TouchableOpacity
                      onPress={handleOtherReasonClick}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: RFValue(10),
                        borderRadius: 10,
                      }}>
                      <Text
                        style={{
                          lineHeight: RFValue(20),
                          fontSize: RFValue(13),
                          fontFamily: "urbanist-medium",
                        }}>
                        Other reason
                      </Text>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/arrow-right.png")}
                        style={{
                          height: RFValue(22),
                          width: RFValue(22),
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : (
              <>
                <View
                  style={{
                    padding: RFValue(10),
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: "outfit-semibold",
                      color: "#000000",
                      lineHeight: RFValue(20),
                    }}>
                    Other reason
                  </Text>
                  <View
                    style={{
                      marginTop: RFValue(10),
                    }}>
                    <TextInput
                      placeholder="Send us a message describing your challenge on the app."
                      style={[styles.inputbox, { textAlignVertical: "top" }]}
                      placeholderTextColor="#999999"
                      keyboardType="default"
                      multiline
                      numberOfLines={1}
                      returnKeyType="done"
                      value={otherReason}
                      onChangeText={handleInputChange}
                    />
                  </View>
                </View>
              </>
            )}
            {isButtonEnabled || checkedItems.length > 0 ? (
              <TouchableOpacity onPress={openPopModal} style={styles.startBtn}>
                <Text style={styles.startText}>Cancel</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.disableBtn}>
                <Text style={styles.button}>Cancel</Text>
              </TouchableOpacity>
            )}
          </View>
          <BookingCancelledSuccessfully
            modalPopVisible={modalPopVisible}
            closePopModal={closePopModal}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  button: {
    fontFamily: "outfit-semibold",
    textAlign: "center",
    color: colors.buttontext,
    fontSize: RFValue(14),
  },
  startBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginTop: RFValue(40),
  },
  disableBtn: {
    backgroundColor: colors.button,
    marginTop: RFValue(40),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-semibold",
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
  inputbox: {
    backgroundColor: "#F5F5F5",
    fontFamily: "urbanist-medium",
    fontSize: RFValue(14),
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
    borderRadius: 10,
  },
});
