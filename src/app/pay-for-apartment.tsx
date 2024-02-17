import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { TextInput } from "react-native-paper";
import SummaryAndConfirmation from "../components/common/modals/summaryAndConfirmation";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function PayForApartment() {
  const [isChecked, setIsChecked] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [showArrow, setShowArrow] = useState(false);
  const [showCardImage, setShowCardImage] = useState(false);
  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);

  const openConfirmModal = () => {
    setModalConfirmVisible(true);
  };

  const closeConfirmModal = () => {
    setModalConfirmVisible(false);
  };

  const expiryInputRef = useRef<any>(null);
  const cvvInputRef = useRef<any>(null);

  const handleCardNumberChange = (text: string) => {
    const cleanedText = text.replace(/\D/g, "").substring(0, 16);
    const formattedText = cleanedText.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(formattedText);
    setShowArrow(formattedText.length > 0);
    setShowCardImage(formattedText.length >= 8);

    if (formattedText.replace(/\s/g, "").length === 16) {
      expiryInputRef.current?.focus();
    }
  };

  const handleExpiryDateChange = (text: string) => {
    const cleanedText = text.replace(/\D/g, "").substring(0, 4);
    const formattedText =
      cleanedText.length >= 3
        ? cleanedText.substring(0, 2) + "/" + cleanedText.substring(2)
        : cleanedText;
    setExpiryDate(formattedText);
    if (formattedText.length === 5) {
      cvvInputRef.current?.focus();
    }
  };

  const handleCvvChange = (text: string) => {
    const formattedText = text.replace(/\D/g, "").substring(0, 3);
    setCvv(formattedText);
  };

  return (
    <>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          title: "PPay for apartment",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
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
            Pay for apartment
          </Text>
          <TouchableOpacity style={styles.clearIcon}>
            <MaterialIcons name="clear" size={24} color="black" />
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
              gap: 10,
              paddingHorizontal: RFValue(10),
              paddingVertical: RFValue(10),
              backgroundColor: "#fff",
              borderRadius: RFValue(10),
              marginTop: RFValue(25),
              marginBottom: RFValue(10),
              borderWidth: 1,
              borderColor: "#d5d0dd",
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../assets/images/bedroom.png")}
              style={{
                height: RFValue(80),
                width: RFValue(80),
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-bold",
                }}
              >
                One bedroom flat
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                  marginTop: RFValue(3),
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/location.png")}
                  style={{
                    width: RFValue(15),
                    height: RFValue(15),
                  }}
                />
                <Text
                  style={{
                    fontSize: RFValue(11),
                    fontFamily: "plusjakarta-regular",
                    color: "#414141",
                  }}
                >
                  Lekki phase 1, Lagos, Nigeria
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  paddingVertical: RFValue(5),
                  paddingHorizontal: RFValue(12),
                  borderRadius: RFValue(5),
                  backgroundColor: "#ECFFF4",
                  width: RFValue(60),
                  marginTop: RFValue(3),
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(11),
                    fontFamily: "outfit-medium",
                    color: "#06782F",
                  }}
                >
                  Rental
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  marginTop: RFValue(3),
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-bold",
                    color: "#06782F",
                  }}
                >
                  ₦1,500,000{" "}
                  <Text
                    style={{
                      fontSize: RFValue(9),
                      fontFamily: "plusjakarta-regular",
                      color: "#414141",
                    }}
                  >
                    yearly
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: RFValue(15),
              paddingVertical: RFValue(20),
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-bold",
                }}
              >
                Check-In details
              </Text>
              <View
                style={{
                  flexDirection: "column",
                  gap: RFValue(10),
                }}
              >
                <View>
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
                        gap: 8,
                        marginBottom: RFValue(8),
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/calendar.png")}
                        style={{
                          height: RFValue(20),
                          width: RFValue(20),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-regular",
                          color: "#414141",
                        }}
                      >
                        Wed, Aug 23, 2023
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
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-bold",
                    }}
                  >
                    Check-out details
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
                        gap: 8,

                        marginBottom: RFValue(8),
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/calendar.png")}
                        style={{
                          height: RFValue(20),
                          width: RFValue(20),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-regular",
                          color: "#414141",
                        }}
                      >
                        Wed, Aug 23, 2023
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
            </View>
          </View>
          <View
            style={{
              marginTop: RFValue(10),
            }}
          >
            <View
              style={{
                backgroundColor: "#FAFAFA",
                padding: RFValue(10),
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(18),
                  fontFamily: "outfit-bold",
                  color: "#161917",
                  lineHeight: RFValue(30),
                }}
              >
                Pay with card
              </Text>
              <View
                style={{
                  marginTop: RFValue(10),
                }}
              >
                <TextInput
                  placeholder="Card number"
                  keyboardType="numeric"
                  placeholderTextColor={"#808080"}
                  returnKeyType="done"
                  style={{
                    backgroundColor: "#F2F2F2",
                    paddingLeft: RFValue(32),
                  }}
                  onChangeText={handleCardNumberChange}
                  value={cardNumber}
                  underlineColor="transparent"
                  activeUnderlineColor="transparent"
                />
                <TouchableOpacity style={styles.eyeIcon}>
                  <Image
                    resizeMode="contain"
                    source={
                      showCardImage
                        ? require("../assets/images/Mastercard.png")
                        : require("../assets/images/card.png")
                    }
                    style={{
                      width: RFValue(30),
                      height: RFValue(30),
                    }}
                  />
                </TouchableOpacity>
                {showArrow && (
                  <TouchableOpacity style={styles.arrowIcon}>
                    <Image
                      resizeMode="contain"
                      source={require("../assets/images/regularright.png")}
                      style={{
                        width: RFValue(20),
                        height: RFValue(20),
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",

                  marginTop: RFValue(15),
                }}
              >
                <TextInput
                  ref={expiryInputRef}
                  placeholder="MM/YY"
                  keyboardType="numeric"
                  placeholderTextColor={"#808080"}
                  returnKeyType="done"
                  style={{
                    backgroundColor: "#F2F2F2",
                    width: responsiveScreenWidth(38),
                  }}
                  onChangeText={handleExpiryDateChange}
                  value={expiryDate}
                  underlineColor="transparent"
                  activeUnderlineColor="transparent"
                />
                <TextInput
                  ref={cvvInputRef}
                  placeholder="CVV"
                  keyboardType="numeric"
                  placeholderTextColor={"#808080"}
                  returnKeyType="done"
                  style={{
                    backgroundColor: "#F2F2F2",
                    width: responsiveScreenWidth(38),
                  }}
                  onChangeText={handleCvvChange}
                  value={cvv}
                  underlineColor="transparent"
                  activeUnderlineColor="transparent"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: RFValue(5),
                  marginTop: RFValue(15),
                }}
              >
                <Checkbox
                  style={{
                    borderRadius: RFValue(4),
                  }}
                  value={isChecked}
                  onValueChange={setIsChecked}
                  color={isChecked ? "#06782F" : "#e1e1e1"}
                />
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: "plusjakarta-regular",
                  }}
                >
                  Save my card
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            position: "absolute",
            bottom: RFValue(40),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: RFValue(15),
              position: "relative",
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
              onPress={openConfirmModal}
              style={{
                backgroundColor:
                  cardNumber && expiryDate && cvv ? "#06782F" : "#83bb97",
                padding: Platform.OS === "ios" ? 15 : 14,
                borderRadius: 10,
                width: RFValue(100),
                marginLeft: RFValue(20),
              }}
            >
              <Text style={styles.startText}>Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <SummaryAndConfirmation
        modalConfirmVisible={modalConfirmVisible}
        closeConfirmModal={closeConfirmModal}
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
    borderWidth: 1,
    borderColor: "#E6E6E6",
    top: RFValue(20),
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
  arrowIcon: {
    position: "absolute",
    top: RFValue(12),
    right: RFValue(11),
    zIndex: 1,
  },
});
