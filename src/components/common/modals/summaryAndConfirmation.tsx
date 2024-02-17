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
import PaymentSuccessful from "./paymentSuccessful";
import { router } from "expo-router";

interface Props {
  modalConfirmVisible: boolean;
  closeConfirmModal: () => void;
}

export default function SummaryAndConfirmation({
  modalConfirmVisible,
  closeConfirmModal,
}: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const [modalPopVisible, setModalPopVisible] = useState(false);

  const openPopModal = () => {
    setModalPopVisible(true);
  };

  const closePopModal = () => {
    setModalPopVisible(false);
  };
  return (
    <View>
      <Modal
        isVisible={modalConfirmVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={closeConfirmModal}
        onBackButtonPress={closeConfirmModal}
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
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
                textAlign: "center",
                marginTop: RFValue(30),
              }}
            >
              Pay for apartment
            </Text>
            <TouchableOpacity
              onPress={closeConfirmModal}
              style={styles.clearIcon}
            >
              <MaterialIcons name="clear" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              height: RFValue(760),
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
                marginTop: RFValue(5),
                marginBottom: RFValue(10),
                borderWidth: 1,
                borderColor: "#d5d0dd",
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../../assets/images/bedroom.png")}
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
                    source={require("../../../assets/images/location.png")}
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
                marginTop: RFValue(5),
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
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "outfit-medium",
                        lineHeight: RFValue(30),
                      }}
                    >
                      Check-in details
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
                          source={require("../../../assets/images/calendar.png")}
                          style={{
                            height: RFValue(18),
                            width: RFValue(18),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(13),
                            fontFamily: "outfit-regular",
                            color: "#414141",
                          }}
                        >
                          Wed, Aug 23, 2023
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        fontFamily: "outfit-medium",
                        lineHeight: RFValue(30),
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
                          source={require("../../../assets/images/calendar.png")}
                          style={{
                            height: RFValue(18),
                            width: RFValue(18),
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
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: RFValue(20),
                backgroundColor: "#FEFEFE",
                padding: RFValue(10),
                borderWidth: 1,
                borderColor: "#E6E6E6",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(15),
                  fontFamily: "outfit-bold",
                  color: "#161917",
                  lineHeight: RFValue(30),
                }}
              >
                Apartment Rules
              </Text>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-regular",
                  color: "#414141",
                  lineHeight: RFValue(30),
                }}
              >
                Check-In From: 9am-10pm
              </Text>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-regular",
                  color: "#414141",
                }}
              >
                Check-out before: 9am
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-regular",
                    color: "#06782F",
                    lineHeight: RFValue(40),
                  }}
                >
                  See all rules
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: RFValue(5),
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
                    fontSize: RFValue(13),
                    fontFamily: "plusjakarta-regular",
                  }}
                >
                  I agree to follow Host apartment rules
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: RFValue(20),
                backgroundColor: "#FEFEFE",
                padding: RFValue(10),
                borderWidth: 1,
                borderColor: "#E6E6E6",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(15),
                  fontFamily: "outfit-bold",
                  color: "#161917",
                  lineHeight: RFValue(30),
                }}
              >
                Cancellation policy
              </Text>
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "outfit-regular",
                  color: "#414141",
                }}
              >
                Free cancellation before Aug 22, cancel before Aug 23 to get
                partial refund. Learn more
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: RFValue(5),
                  marginTop: RFValue(10),
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
                    fontSize: RFValue(13),
                    fontFamily: "plusjakarta-regular",
                  }}
                >
                  I agree to follow Host apartment rules
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                overflow: "hidden",
                gap: RFValue(6),
                backgroundColor: "#F1F5FF",
                paddingHorizontal: RFValue(12),
                paddingVertical: RFValue(10),
                marginTop: RFValue(20),
                borderRadius: RFValue(8),
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../../assets/images/danger.png")}
                style={{
                  width: RFValue(20),
                  height: RFValue(20),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "plusjakarta-regular",
                  color: "#306AFF",
                  flexShrink: 1,
                }}
              >
                Please note that upon payment approval, your payment will be
                escrowed to Easyfynd until host accept your booking request
                (within 24hours) if host does not accept your booking you will
                receive full refund of your payment!
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              backgroundColor: "#fff",
              position: "absolute",
              bottom: 0,
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
                onPress={() => {
                  router.push("/payment-successful")
                }}
                style={{
                  backgroundColor: "#06782F",
                  paddingVertical: RFValue(10),
                  paddingHorizontal: RFValue(10),
                  borderRadius: 10,
                  marginLeft: RFValue(10),
                }}
              >
                <Text style={styles.startText}>Approve payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <PaymentSuccessful
        modalPopVisible={modalPopVisible}
        closePopModal={closePopModal}
      />
    </View>
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
    top: RFValue(40),
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
    fontSize: RFValue(13),
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
