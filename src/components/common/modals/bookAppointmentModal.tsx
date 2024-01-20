import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar, setStatusBarHidden } from "expo-status-bar";
import DatePicker from "react-native-modern-datepicker";
import BookApartmentProps from "../../../components/propertyDetailsProps/bookApartmentProps";
import { TextInput } from "react-native-paper";
import Checkbox from "expo-checkbox";

interface Props {
  modalVideoVisible: boolean;
  closeBookModal: () => void;
}

export default function BookAppointmentModal({
  modalIsVisible,
  closeBookModal,
}) {
  const [selectedDate, setSelectedDate] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isChecked, setChecked] = useState(false);
  
    const handleIconPress = (id: number) => {
      setActiveIndex((prevIndex) => (prevIndex === id ? null : id));
    };

  const timeData = [
    {
      id: 1,
      value: "8am - 8:30am",
    },
    {
      id: 2,
      value: "9am - 9:30am",
    },
    {
      id: 3,
      value: "10am - 11:30am",
    },
    {
      id: 4,
      value: "11:50am - 1:00pm",
    },
    {
      id: 5,
      value: "1:30pm - 2:30pm",
    },
    {
      id: 6,
      value: "3pm - 3:30pm",
    },
    {
      id: 7,
      value: "4pm - 4:30pm",
    },
    {
      id: 8,
      value: "5pm - 5:30pm",
    },
    {
      id: 9,
      value: "6pm - 6:30pm",
    },
  ];

  return (
    <>
      <StatusBar style="auto" />
      <View>
        <Modal
          isVisible={modalIsVisible}
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
              <TouchableOpacity
                onPress={closeBookModal}
                style={styles.clearIcon}
              >
                <Image
                  resizeMode="contain"
                  source={require("../../../assets/images/arrow-left.png")}
                  style={{
                    height: RFValue(22),
                    width: RFValue(22),
                  }}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              contentContainerStyle={{
                height: RFValue(5000),
              }}
            >
              <BookApartmentProps />
              <View
                style={{
                  paddingHorizontal: RFValue(20),
                  marginTop: RFValue(20),
                }}
              >
                <ScrollView>

                </ScrollView>
                <View
                  style={{
                    marginTop: RFValue(10),
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
                    Choose a day
                  </Text>
                  <DatePicker
                    onSelectedChange={(date) => setSelectedDate(date)}
                    mode="calendar"
                    options={{
                      locale: "en-US",
                      format: "MMM DD YYYY HH:mm A",
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
                    marginTop: RFValue(20),
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
                    Choose time
                  </Text>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: RFValue(5),
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      {timeData?.map((time) => (
                        <TouchableOpacity
                          onPress={() => handleIconPress(time.id)}
                          key={time.id}
                          style={{
                            backgroundColor:
                              activeIndex === time.id ? "#06782F" : "#ECFFF4",
                            padding: RFValue(10),
                            borderRadius: 20,
                          }}
                        >
                          <Text
                            style={{
                              fontSize: RFValue(11),
                              fontFamily: "outfit-medium",
                              color:
                                activeIndex === time.id ? "#fff" : "#06782F",
                            }}
                          >
                            {time.value}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    marginTop: RFValue(20),
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
                        secureTextEntry
                        style={{
                          backgroundColor: "#F2F2F2",
                          paddingLeft: RFValue(32),
                        }}
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                      />
                      <TouchableOpacity style={styles.eyeIcon}>
                        <Image
                          resizeMode="contain"
                          source={require("../../../assets/images/card.png")}
                          style={{
                            width: RFValue(30),
                            height: RFValue(30),
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.arrowIcon}>
                        <Image
                          resizeMode="contain"
                          source={require("../../../assets/images/regularright.png")}
                          style={{
                            width: RFValue(20),
                            height: RFValue(20),
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",

                        marginTop: RFValue(15),
                      }}
                    >
                      <TextInput
                        placeholder="MM/YY"
                        keyboardType="numeric"
                        placeholderTextColor={"#808080"}
                        returnKeyType="done"
                        secureTextEntry
                        style={{
                          backgroundColor: "#F2F2F2",
                          width: responsiveScreenWidth(38),
                        }}
                        underlineColor="transparent"
                        activeUnderlineColor="transparent"
                      />
                      <TextInput
                        placeholder="CVV"
                        keyboardType="numeric"
                        placeholderTextColor={"#808080"}
                        returnKeyType="done"
                        secureTextEntry
                        style={{
                          backgroundColor: "#F2F2F2",
                          width: responsiveScreenWidth(38),
                        }}
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
                        onValueChange={setChecked}
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
                  <TouchableOpacity
                    disabled={!activeIndex}
                    style={{
                      backgroundColor: activeIndex ? "#06782F" : "#83bb97",
                      padding: Platform.OS === "ios" ? 15 : 14,
                      borderRadius: 10,
                      marginTop: RFValue(30),
                    }}
                  >
                    <Text style={styles.startText}>
                      Book appointment for ₦1,500
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
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
    top: RFValue(35),
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
