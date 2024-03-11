import {
  StyleSheet,
  Text,
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
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../constants/Colors";

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
        }}>
        <View
          style={{
            backgroundColor: "#fff",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(90),
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
              Booking details
            </Text>
            <TouchableOpacity onPress={closeBookModal} style={styles.clearIcon}>
              <MaterialIcons name="clear" size={18} color="#1A1A1A" />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: RFValue(15),
              paddingVertical: RFValue(10),
            }}>
            <View
              style={{
                zIndex: 20,
                paddingVertical: RFValue(5),
                paddingHorizontal: RFValue(12),
                borderRadius: RFValue(12),
                backgroundColor: "#FDFBF7",
                width: RFValue(115),
                height: RFValue(28),
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Text
                style={{
                  fontSize: RFValue(11),
                  fontFamily: "outfit-semibold",
                  color: "#E8AE2E",
                }}>
                Pending approval
              </Text>
            </View>
            <View
              style={{
                marginBottom: RFValue(20),
              }}>
              <View
                style={{
                  position: "relative",
                  overflow: "hidden",
                  marginTop: RFValue(10),
                }}>
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
                    position: "absolute",
                    left: 20,
                    top: 20,
                    elevation: 10,
                  }}>
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/images/agentprofile.png")}
                    style={{
                      height: RFValue(55),
                      width: RFValue(55),
                      borderWidth: 1,
                      borderColor: "#fff",
                      borderRadius: RFValue(50),
                    }}
                  />
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/images/agentTag.png")}
                    style={{
                      height: RFValue(45),
                      width: RFValue(35),
                      position: "absolute",
                      top: 40,
                      left: 10,
                      right: 0,
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 5,
                    alignItems: "center",
                    position: "absolute",
                    top: RFValue(170),
                    left: RFValue(48),
                  }}>
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
                  }}>
                  One bedroom flat
                </Text>
                <TouchableOpacity
                  style={{
                    paddingVertical: RFValue(5),
                    paddingHorizontal: RFValue(12),
                    borderRadius: RFValue(10),
                    backgroundColor: "#F5F5F5",
                    width: RFValue(95),
                    marginTop: RFValue(3),
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-medium",
                      color: "#00AE31",
                    }}>
                    Apartment
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    marginTop: RFValue(10),
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(18),
                      fontFamily: "outfit-bold",
                      color: "#00AE31",
                    }}>
                    ₦30,000{" "}
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        fontFamily: "plusjakarta-regular",
                        color: "#414141",
                      }}>
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
                  }}>
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
                      fontFamily: "urbanist-medium",
                      color: "#000000",
                    }}>
                    Lekki phase 1, Lagos, Nigeria
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: RFValue(10),
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          fontFamily: "urbanist-medium",
                          lineHeight: RFValue(30),
                          color: "#414141",
                        }}>
                        Check-in details
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,

                            marginBottom: RFValue(8),
                          }}>
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
                              fontFamily: "urbanist-medium",
                              color: "#000000",
                            }}>
                            Wed, Aug 23, 2023
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          fontFamily: "urbanist-medium",
                          lineHeight: RFValue(30),
                          color: "#414141",
                        }}>
                        Check-out details
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: RFValue(8),
                          }}>
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
                              fontFamily: "urbanist-medium",
                              color: "#000000",
                            }}>
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
                        fontFamily: "outfit-semibold",
                        lineHeight: RFValue(40),
                        color: colors.primary,
                        textDecorationLine: "underline",
                      }}>
                      Property details
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginTop: RFValue(10),
                    backgroundColor: "#FFFFFF",
                    padding: RFValue(10),
                    position: "relative",
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    borderRadius: RFValue(10),
                    marginBottom: RFValue(10),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 2,
                    shadowColor: "#d1d5db",
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: "outfit-bold",
                      color: "#161917",
                      lineHeight: RFValue(30),
                    }}>
                    Apartment Rules
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-regular",
                      color: "#414141",
                      lineHeight: RFValue(30),
                    }}>
                    Check-In From: 9am-10pm
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-regular",
                      color: "#414141",
                    }}>
                    Check-out before: 9am
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: RFValue(16),
                        fontFamily: "outfit-semibold",
                        lineHeight: RFValue(40),
                        color: colors.primary,
                        textDecorationLine: "underline",
                      }}>
                      See all rules
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginTop: RFValue(15),
                }}>
                <Text
                  style={{
                    fontSize: RFValue(15),
                    fontFamily: "outfit-bold",
                    color: "#161917",
                    lineHeight: RFValue(20),
                  }}>
                  Total paid (2 nights)
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(18),
                    fontFamily: "outfit-bold",
                    color: "#00AE31",
                    lineHeight: RFValue(30),
                  }}>
                  ₦60,000
                </Text>
              </View>
            </View>
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
    padding: RFValue(6),
    borderRadius: 50,
    position: "absolute",
    right: RFValue(15),
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
