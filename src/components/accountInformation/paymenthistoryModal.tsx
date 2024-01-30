import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, Icon, ListItem, Tab, TabView } from "@rneui/themed";
import { Link, Stack } from "expo-router";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
import { Switch } from "react-native-switch";
import BookingDetails from "../../components/accountInformation/bookingDetails";
import CancelBooking from "../../components/accountInformation/cancelBooking";
import Modal from "react-native-modal";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function PaymentHistoryModal({
  modalVisible,
  closeModal,
}: Readonly<Props>) {
  const fade = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

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
              Features & amenities
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
              <MaterialIcons name="clear" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            style={{
              backgroundColor: "#E4E4E7",
              marginTop: RFValue(20),
              paddingHorizontal: RFValue(3),
              paddingVertical: RFValue(3),
              marginHorizontal: RFValue(15),
              borderRadius: 10,
            }}
            variant="default"
            disableIndicator
            buttonStyle={(active) => ({
              backgroundColor: active ? "#fff" : undefined,
              borderRadius: 10,
            })}
          >
            <Tab.Item
              title="Completed"
              titleStyle={{
                fontSize: 13,
                color: index === 1 ? "black" : "#1A1A1AB2",
                borderRadius: 10,
              }}
            />
            <Tab.Item
              title="Cancelled"
              titleStyle={{
                fontSize: 13,
                color: index === 2 ? "black" : "#1A1A1AB2",
                borderRadius: 10,
              }}
            />
          </Tab>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: RFValue(15),
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#d5d0dd",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(10),
                    marginTop: RFValue(25),
                    marginBottom: RFValue(10),
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View style={{}}>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(80),
                          width: RFValue(80),
                        }}
                      />
                      <View
                        style={{
                          backgroundColor: "#ECFFF4",
                          padding: RFValue(8),
                          width: RFValue(90),
                          borderRadius: 30,
                          position: "absolute",
                          top: RFValue(-10),
                          left: RFValue(-5),
                          right: RFValue(0),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(8),
                            fontFamily: "outfit-medium",
                            color: "#06782F",
                          }}
                        >
                          Paid with ****8356
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
                          source={require("../../assets/images/location.png")}
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
                          width: RFValue(79),
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
                          Apartment
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
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(9),
                              fontFamily: "plusjakarta-regular",
                              color: "#414141",
                            }}
                          >
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#d5d0dd",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(10),
                    marginTop: RFValue(5),
                    marginBottom: RFValue(10),
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View style={{}}>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(80),
                          width: RFValue(80),
                        }}
                      />
                      <View
                        style={{
                          backgroundColor: "#ECFFF4",
                          padding: RFValue(8),
                          width: RFValue(90),
                          borderRadius: 30,
                          position: "absolute",
                          top: RFValue(-10),
                          left: RFValue(-5),
                          right: RFValue(0),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(8),
                            fontFamily: "outfit-medium",
                            color: "#06782F",
                          }}
                        >
                          Paid with ****8356
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
                          source={require("../../assets/images/location.png")}
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
                          width: RFValue(79),
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
                          Apartment
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
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(9),
                              fontFamily: "plusjakarta-regular",
                              color: "#414141",
                            }}
                          >
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#d5d0dd",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(10),
                    marginTop: RFValue(5),
                    marginBottom: RFValue(10),
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View style={{}}>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(80),
                          width: RFValue(80),
                        }}
                      />
                      <View
                        style={{
                          backgroundColor: "#ECFFF4",
                          padding: RFValue(8),
                          width: RFValue(90),
                          borderRadius: 30,
                          position: "absolute",
                          top: RFValue(-10),
                          left: RFValue(-5),
                          right: RFValue(0),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(8),
                            fontFamily: "outfit-medium",
                            color: "#06782F",
                          }}
                        >
                          Paid with ****8356
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
                          source={require("../../assets/images/location.png")}
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
                          width: RFValue(79),
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
                          Apartment
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
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(9),
                              fontFamily: "plusjakarta-regular",
                              color: "#414141",
                            }}
                          >
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: RFValue(15),
                }}
              >
               
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#d5d0dd",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(10),
                    marginTop: RFValue(25),
                    marginBottom: RFValue(10),
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View style={{ position: "relative" }}>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(80),
                          width: RFValue(80),
                        }}
                      />

                      <View
                        style={{
                          backgroundColor: "#FFF1F2",
                          padding: RFValue(5),
                          width: RFValue(50),
                          borderRadius: 30,
                          position: "absolute",
                          top: RFValue(-10),
                          left: RFValue(-5),
                          right: RFValue(0),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(10),
                            fontFamily: "outfit-medium",
                            color: "#9C0000",
                            textAlign: "center",
                          }}
                        >
                          Failed
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
                          source={require("../../assets/images/location.png")}
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
                          width: RFValue(79),
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
                          Apartment
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
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(9),
                              fontFamily: "plusjakarta-regular",
                              color: "#414141",
                            }}
                          >
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                 
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#d5d0dd",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(10),
                    marginTop: RFValue(20),
                    marginBottom: RFValue(10),
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View style={{ position: "relative" }}>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(80),
                          width: RFValue(80),
                        }}
                      />
                      <View
                        style={{
                          backgroundColor: "#FFF1F2",
                          padding: RFValue(5),
                          width: RFValue(50),
                          borderRadius: 30,
                          position: "absolute",
                          top: RFValue(-10),
                          left: RFValue(-5),
                          right: RFValue(0),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(10),
                            fontFamily: "outfit-medium",
                            color: "#9C0000",
                            textAlign: "center",
                          }}
                        >
                          Failed
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
                          source={require("../../assets/images/location.png")}
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
                          width: RFValue(79),
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
                          Apartment
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
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(9),
                              fontFamily: "plusjakarta-regular",
                              color: "#414141",
                            }}
                          >
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                
                </View>
              </ScrollView>
            </TabView.Item>
          </TabView>
        </View>
      </Modal>
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
