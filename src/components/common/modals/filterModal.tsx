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
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import PasswordInputField from "../../inputs/passwordInputField";
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Checkbox from "expo-checkbox";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function FilterModal({ modalVisible, closeModal }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeBtn, setActiveBtn] = useState<number | null>(null);
  const [isChecked, setChecked] = useState(false);
  const [activeComp, setActiveComp] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleIconPress = (id: number) => {
    setActiveIndex((prevIndex) => (prevIndex === id ? null : id));

    setActiveComp(id);
    setShowDetails((prev) => !prev);
  };

  const handleNumberPress = (index: number) => {
    setActiveBtn((prevIndex) => (prevIndex === index ? null : index));
  };


  const propertyType = [
    {
      id: 1,
      icon: "building",
      type: "Apartment",
    },
    {
      id: 2,
      icon: "home",
      type: "Home",
    },
    {
      id: 3,
      icon: "store",
      type: "Shop space",
    },
    {
      id: 4,
      icon: "hat-cowboy-side",
      type: "Land",
    },
    {
      id: 5,
      icon: "hotel",
      type: "Hotel",
    },
    {
      id: 6,
      icon: "landmark",
      type: "Shortlet",
    },
    {
      id: 7,
      icon: "hospital",
      type: "Office Space",
    },
    {
      id: 8,
      icon: "bed",
      type: "Rooms",
    },
  ];

  const reviewData = [
    {
      id: 1,
      result: "1.0 (300 results)",
    },
    {
      id: 2,
      result: "2.0 (50 results)",
    },
    {
      id: 3,
      result: "3.0 (800 results)",
    },
    {
      id: 4,
      result: "4.0 (2K results)",
    },
    {
      id: 5,
      result: "5.0 (1K+ results)",
    },
  ];

  const roomData = [
    "Any",
    "1",
    "2",
    ...Array.from({ length: 8 }, (_, i) => (i + 3).toString()),
  ];

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
              marginTop: RFValue(25),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(18),
                fontFamily: "outfit-bold",
                textTransform: "uppercase",
                lineHeight: RFValue(30),
              }}
            >
              Filters
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
              <MaterialIcons name="clear" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: RFValue(15),
              paddingVertical: RFValue(20),
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-bold",
                  lineHeight: RFValue(30),
                }}
              >
                Price range
              </Text>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "plusjakarta-regular",
                }}
              >
                Type in your desired price range that best fits your budget
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: "outfit-bold",
                    fontSize: RFValue(14),
                    marginTop: RFValue(15),
                    color: "#5f5f5f",
                  }}
                >
                  Minimum
                </Text>
                <View
                  style={{
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#E4E4E7",
                    padding: RFValue(8),
                    marginTop: RFValue(5),
                  }}
                >
                  <TextInput
                    placeholder="Type here"
                    style={styles.inputbox}
                    placeholderTextColor="#5f5f5f"
                  />
                  <TouchableOpacity style={styles.eyeIcon}>
                    <Image
                      resizeMode="contain"
                      source={require("../../../assets/images/naira.png")}
                      style={{
                        width: RFValue(15),
                        height: RFValue(15),
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  width: 20,
                  height: 3,
                  backgroundColor: "#E4E4E7",
                  marginTop: RFValue(40),
                }}
              />
              <View>
                <Text
                  style={{
                    fontFamily: "outfit-bold",
                    fontSize: RFValue(14),
                    marginTop: RFValue(15),
                    color: "#5f5f5f",
                  }}
                >
                  Maximum
                </Text>
                <View
                  style={{
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#E4E4E7",
                    padding: RFValue(8),
                    marginTop: RFValue(5),
                  }}
                >
                  <TextInput
                    placeholder="Type here"
                    style={styles.inputbox}
                    placeholderTextColor="#5f5f5f"
                  />
                  <TouchableOpacity style={styles.eyeIcon}>
                    <Image
                      resizeMode="contain"
                      source={require("../../../assets/images/naira.png")}
                      style={{
                        width: RFValue(15),
                        height: RFValue(15),
                      }}
                    />
                  </TouchableOpacity>
                </View>
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
                paddingVertical: RFValue(8),
                marginTop: RFValue(35),
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
                  fontSize: RFValue(12),
                  fontFamily: "plusjakarta-regular",
                  color: "#306AFF",
                }}
              >
                Pick property type to load more filter option
              </Text>
            </View>
            <View>
              
            </View>
            <View>
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-bold",
                  lineHeight: RFValue(30),
                  marginBottom: RFValue(6),
                  marginTop: RFValue(6),
                }}
              >
                Property type
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: RFValue(7),
                  flexWrap: "wrap",
                }}
              >
                {propertyType?.map((item, id: number) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handleIconPress(item.id)}
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        activeIndex === item.id ? "#06782F" : "#FAFAFA",
                      width: RFValue(70),
                      height: RFValue(65),
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#fff",
                        padding: RFValue(8),
                        borderRadius: 30,
                        marginBottom: RFValue(3),
                      }}
                    >
                      <Icon
                        name={item.icon}
                        size={20}
                        color={activeIndex === item.id ? "#06782F" : "#414141"}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: RFValue(9),
                        fontFamily: "plusjakarta-regular",
                        color: activeIndex === item.id ? "#fff" : "#414141",
                      }}
                    >
                      {item.type}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            {showDetails && (
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(16),
                      fontFamily: "outfit-bold",
                      lineHeight: RFValue(30),
                      marginBottom: RFValue(10),
                      marginTop: RFValue(30),
                    }}
                  >
                    Rooms and bed
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontFamily: "outfit-bold",
                        fontSize: RFValue(14),
                        marginTop: RFValue(3),
                        color: "#414141",
                      }}
                    >
                      Bedrooms
                    </Text>
                    <ScrollView
                      showsHorizontalScrollIndicator={false}
                      horizontal
                      contentContainerStyle={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: RFValue(7),
                      }}
                    >
                      {roomData?.map((room, index: number) => (
                        <TouchableOpacity
                          style={{
                            backgroundColor: "#06782F",
                            paddingHorizontal: RFValue(20),
                            paddingVertical: RFValue(8),
                            borderRadius: 50,
                            marginTop: RFValue(10),
                          }}
                          key={index}
                        >
                          <Text
                            style={{
                              fontSize: RFValue(16),
                              fontFamily: "plusjakarta-regular",
                              color: "#fff",
                            }}
                          >
                            {room}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                  <View
                    style={{
                      marginTop: RFValue(20),
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "outfit-bold",
                        fontSize: RFValue(14),
                        marginTop: RFValue(3),
                        color: "#414141",
                      }}
                    >
                      Kitchen
                    </Text>
                    <ScrollView
                      showsHorizontalScrollIndicator={false}
                      horizontal
                      contentContainerStyle={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: RFValue(7),
                      }}
                    >
                      {roomData?.map((room, index: number) => (
                        <TouchableOpacity
                          style={{
                            backgroundColor: "#06782F",
                            paddingHorizontal: RFValue(20),
                            paddingVertical: RFValue(8),
                            borderRadius: 50,
                            marginTop: RFValue(10),
                          }}
                          key={index}
                        >
                          <Text
                            style={{
                              fontSize: RFValue(16),
                              fontFamily: "plusjakarta-regular",
                              color: "#fff",
                            }}
                          >
                            {room}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                  <View
                    style={{
                      marginTop: RFValue(20),
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "outfit-bold",
                        fontSize: RFValue(14),
                        marginTop: RFValue(3),
                        color: "#414141",
                      }}
                    >
                      Bathroom
                    </Text>
                    <ScrollView
                      showsHorizontalScrollIndicator={false}
                      horizontal
                      contentContainerStyle={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: RFValue(7),
                      }}
                    >
                      {roomData?.map((room, index: number) => (
                        <TouchableOpacity
                          onPress={() => handleNumberPress(index)}
                          style={{
                            backgroundColor:
                              activeBtn === index ? "#06782F" : "#F8FFFB",
                            paddingHorizontal: RFValue(20),
                            paddingVertical: RFValue(8),
                            borderRadius: 50,
                            marginTop: RFValue(10),
                          }}
                          key={index}
                        >
                          <Text
                            style={{
                              fontSize: RFValue(16),
                              fontFamily: "plusjakarta-regular",
                              color: activeBtn === index ? "#fff" : "#06782F",
                            }}
                          >
                            {room}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(16),
                      fontFamily: "outfit-bold",
                      lineHeight: RFValue(30),
                      marginBottom: RFValue(10),
                      marginTop: RFValue(30),
                    }}
                  >
                    Rating
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: RFValue(6),
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../../assets/images/Vector.png")}
                      style={{
                        width: RFValue(20),
                        height: RFValue(20),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "plusjakarta-regular",
                      }}
                    >
                      Find based on ratings by other users
                    </Text>
                  </View>
                </View>
                <View>
                  {reviewData?.map((review) => (
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
                          transform: [
                            {
                              scaleX: review.result ? 1 : 0,
                            },
                          ],
                          borderRadius: RFValue(3),
                        }}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? "#06782F" : "#e1e1e1"}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "plusjakarta-regular",
                        }}
                      >
                        {review.result}
                      </Text>
                    </View>
                  ))}
                </View>
                <TouchableOpacity style={styles.startBtn}>
                  <Text style={styles.startText}>Apply filter</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
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
})
