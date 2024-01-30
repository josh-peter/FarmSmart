import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { router } from "expo-router";
import InputField from "../inputs/inputField";
import Checkbox from "expo-checkbox";

interface Props {
  modalBookVisible: boolean;
  closeBookModal: () => void;
}

export default function BookingDetails({
  modalBookVisible,
  closeBookModal,
}: Readonly<Props>) {


  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={modalBookVisible}
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
            height: responsiveScreenHeight(90),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fafafa",
              width: responsiveScreenWidth(100),
              height: responsiveScreenWidth(22),
              marginTop: RFValue(20),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Booking details
            </Text>
            <TouchableOpacity onPress={closeBookModal} style={styles.clearIcon}>
              <Image
                resizeMode="contain"
                source={require("../../assets/images/arrow-left.png")}
                style={{
                  height: RFValue(15),
                  width: RFValue(15),
                }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: RFValue(15),
              paddingVertical: RFValue(10),
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/approval.png")}
              style={{
                height: RFValue(30),
                width: RFValue(100),
              }}
            />
            <TouchableOpacity
              style={{
                marginBottom: RFValue(20),
              }}
            >
              <View
                style={{
                  position: "relative",
                  overflow: "hidden",
                  marginTop: RFValue(10),
                }}
              >
                <Image
                  source={require("../../assets/images/flat.png")}
                  style={{
                    width: RFValue(300),
                    height: RFValue(200),
                    borderRadius: 20,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "center",
                    position: "absolute",
                    top: RFValue(170),
                    left: RFValue(48),
                  }}
                >
                  <View
                    style={{
                      width: RFValue(18),
                      height: RFValue(4),
                      borderRadius: 30,
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  <View
                    style={{
                      width: RFValue(18),
                      height: RFValue(4),
                      borderRadius: 30,
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  <View
                    style={{
                      width: RFValue(18),
                      height: RFValue(4),
                      borderRadius: 30,
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  <View
                    style={{
                      width: RFValue(18),
                      height: RFValue(4),
                      borderRadius: 30,
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  <View
                    style={{
                      width: RFValue(18),
                      height: RFValue(4),
                      borderRadius: 30,
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  <View
                    style={{
                      width: RFValue(18),
                      height: RFValue(4),
                      borderRadius: 30,
                      backgroundColor: "#06782F",
                    }}
                  />
                  <View
                    style={{
                      width: RFValue(18),
                      height: RFValue(4),
                      borderRadius: 30,
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  <View
                    style={{
                      width: RFValue(18),
                      height: RFValue(4),
                      borderRadius: 30,
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  <View
                    style={{
                      width: RFValue(18),
                      height: RFValue(4),
                      borderRadius: 30,
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  <View
                    style={{
                      width: RFValue(18),
                      height: RFValue(4),
                      borderRadius: 30,
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: RFValue(18),
                    fontFamily: "outfit-bold",
                    lineHeight: RFValue(40),
                  }}
                >
                  One bedroom flat
                </Text>
                <TouchableOpacity
                  style={{
                    paddingVertical: RFValue(5),
                    paddingHorizontal: RFValue(12),
                    borderRadius: RFValue(5),
                    backgroundColor: "#ECFFF4",
                    width: RFValue(95),
                    marginTop: RFValue(3),
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-medium",
                      color: "#06782F",
                    }}
                  >
                    Apartment
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    marginTop: RFValue(10),
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(18),
                      fontFamily: "outfit-bold",
                      color: "#06782F",
                    }}
                  >
                    ₦60,000{" "}
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "plusjakarta-regular",
                        color: "#414141",
                      }}
                    >
                      / night
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "center",
                    marginTop: RFValue(7),
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/images/location.png")}
                    style={{
                      width: RFValue(20),
                      height: RFValue(20),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "plusjakarta-regular",
                      color: "#414141",
                    }}
                  >
                    Lekki phase 1, Lagos, Nigeria
                  </Text>
                </View>
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
                        marginTop: RFValue(10),
                      }}
                    >
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
                            source={require("../../assets/images/calendar.png")}
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
                            source={require("../../assets/images/calendar.png")}
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
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: RFValue(16),
                        fontFamily: "outfit-regular",
                        color: "#06782F",
                        lineHeight: RFValue(20),
                      }}
                    >
                      See all rules
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginTop: RFValue(10),
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
                        fontSize: RFValue(16),
                        fontFamily: "outfit-regular",
                        color: "#06782F",
                        lineHeight: RFValue(40),
                      }}
                    >
                      See all rules
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginTop: RFValue(15),
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "outfit-bold",
                    color: "#161917",
                    lineHeight: RFValue(20),
                  }}
                >
                  Total paid (2 nights)
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
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 10,
    position: "absolute",
    left: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
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
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(30),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
});
