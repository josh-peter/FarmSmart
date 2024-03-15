import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import Checkbox from "expo-checkbox";
import colors from "../../../constants/Colors";
import { Image } from "expo-image";
import { propertyType } from "../../../Data/propertyType";
import { reviewSetData } from "../../../Data/reviewsSetData";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function FilterModal({ modalVisible, closeModal }: Props) {
  const [activeIndex, setActiveIndex] = useState<any>(null);
  const [activeBtn, setActiveBtn] = useState<number | null>(null);
  const [activeRoomBtn, setActiveRoomBtn] = useState<number | null>(null);
  const [activeKitchenBtn, setActiveKitchenBtn] = useState<number | null>(null);
  const [activeLandBtn, setActiveLandBtn] = useState<number | null>(null);
  const [activeComp, setActiveComp] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

const handleIconPress = (id: number) => {
  setActiveIndex((prevIndex: number | null) => (prevIndex === id ? null : id));
  setActiveComp(id);
  setShowDetails((prev) => !prev);
};

  const handleNumberPress = (index: number) => {
    setActiveBtn((prevIndex) => (prevIndex === index ? null : index));
  };

   const handleRoomPress = (index: number) => {
     setActiveRoomBtn((prevIndex) => (prevIndex === index ? null : index));
  };
  
   const handleKitchenPress = (index: number) => {
     setActiveKitchenBtn((prevIndex) => (prevIndex === index ? null : index));
  };
    
   const handleLandPress = (index: number) => {
     setActiveLandBtn((prevIndex) => (prevIndex === index ? null : index));
   };



  const [isChecked, setChecked] = useState<boolean[]>(
    Array(reviewSetData.length).fill(false)
  );

  const roomData = [
    "Any",
    "1",
    "2",
    ...Array.from({ length: 8 }, (_, i) => (i + 3).toString()),
  ];

  const landData = ["Any", "1100 ht", "1100 ht", "1100 ht", "1100 ht", "1100 ht", "1100 ht", "1100 ht"];

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
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Filters
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
              <MaterialIcons name="clear" size={20} color="black" />
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
                  fontSize: RFValue(13),
                  fontFamily: "urbanist-regular",
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
                    marginTop: RFValue(8),
                  }}
                >
                  <TextInput
                    placeholder="Type here"
                    style={styles.inputbox}
                    placeholderTextColor={colors.onboardingText}
                  />
                  <TouchableOpacity style={styles.eyeIcon}>
                    <Image
                      contentFit="contain"
                      source={require("../../../assets/images/₦.png")}
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
                      contentFit="contain"
                      source={require("../../../assets/images/₦.png")}
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
                backgroundColor: colors.warm,
                paddingHorizontal: RFValue(12),
                paddingVertical: RFValue(8),
                marginTop: RFValue(35),
                borderRadius: RFValue(8),
              }}
            >
              <Image
                contentFit="contain"
                source={require("../../../assets/images/danger.png")}
                style={{
                  width: RFValue(20),
                  height: RFValue(20),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "urbanist-regular",
                  color: colors.green,
                }}
              >
                Pick property type to load more filter option
              </Text>
            </View>
            <View></View>
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
                  gap: Platform.OS === "android" ? RFValue(7) : RFValue(7.5),
                  flexWrap: "wrap",
                }}
              >
                {propertyType?.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handleIconPress(item.id)}
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        activeIndex === item.id
                          ? colors.green
                          : colors.filterbg,
                      width:
                        Platform.OS === "android" ? RFValue(70) : RFValue(72),
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
                      <Image
                        contentFit="contain"
                        source={activeIndex === item.id ? item.img2 : item.img}
                        style={{
                          height: RFValue(22),
                          width: RFValue(22),
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: RFValue(10),
                        fontFamily: "urbanist-regular",
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
                {activeIndex !== "land" && (
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
                        {roomData?.map((room, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => handleRoomPress(index)}
                            style={{
                              backgroundColor:
                                activeRoomBtn === index
                                  ? colors.green
                                  : colors.warm,
                              paddingHorizontal: RFValue(20),
                              paddingVertical: RFValue(8),
                              borderRadius: 50,
                              marginTop: RFValue(10),
                            }}
                          >
                            <Text
                              style={{
                                fontSize: RFValue(16),
                                fontFamily: "urbanist-regular",
                                color:
                                  activeRoomBtn === index
                                    ? colors.background
                                    : colors.green,
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
                            onPress={() => handleKitchenPress(index)}
                            style={{
                              backgroundColor:
                                activeRoomBtn === index
                                  ? colors.green
                                  : colors.warm,
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
                                fontFamily: "urbanist-regular",
                                color:
                                  activeRoomBtn === index
                                    ? colors.background
                                    : colors.green,
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
                                activeRoomBtn === index
                                  ? colors.green
                                  : colors.warm,
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
                                fontFamily: "urbanist-regular",
                                color:
                                  activeRoomBtn === index
                                    ? colors.background
                                    : colors.green,
                              }}
                            >
                              {room}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                )}
                {activeIndex == "Land" && (
                  <>
                    <Text
                      style={{
                        fontFamily: "outfit-bold",
                        fontSize: RFValue(14),
                        marginTop: RFValue(3),
                        color: "#414141",
                      }}
                    >
                      Land size
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
                      {landData?.map((room, index: number) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() => handleLandPress(index)}
                          style={{
                            backgroundColor:
                              activeRoomBtn === index
                                ? colors.green
                                : colors.warm,
                            paddingHorizontal: RFValue(20),
                            paddingVertical: RFValue(8),
                            borderRadius: 50,
                            marginTop: RFValue(10),
                          }}
                        >
                          <Text
                            style={{
                              fontSize: RFValue(16),
                              textAlign: "center",
                              fontFamily: "urbanist-regular",
                              color:
                                activeRoomBtn === index
                                  ? colors.background
                                  : colors.green,
                            }}
                          >
                            {room}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </>
                )}
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
                      contentFit="contain"
                      source={require("../../../assets/images/star.png")}
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
                  {reviewSetData?.map((review) => (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: RFValue(5),
                        marginTop: RFValue(15),
                      }}
                    >
                      <Checkbox
                        key={review.id}
                        style={{
                          transform: [
                            {
                              scaleX: review.result ? 1 : 0,
                            },
                          ],
                          borderRadius: RFValue(3),
                        }}
                        value={isChecked[review.id]}
                        onValueChange={(newValue: boolean) => {
                          const newCheckedState: boolean[] = isChecked.map(
                            (value: boolean, i: number) =>
                              i === review.id ? newValue : value
                          );
                          setChecked(newCheckedState);
                        }}
                        color={isChecked[review.id] ? colors.green : "#e1e1e1"}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "urbanist-regular",
                        }}
                      >
                        {review.result}
                      </Text>
                    </View>
                  ))}
                </View>
                <TouchableOpacity style={styles.activeBtn}>
                  <Text style={styles.activeButton}>Apply filter</Text>
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
    backgroundColor: colors.background,
    padding: RFValue(10),
    borderRadius: 50,
    position: "absolute",
    right: RFValue(15),
    borderWidth: 1,
    borderColor: colors.border2
  },
  inputbox: {
    width: responsiveScreenWidth(33),
    backgroundColor: "transparent",
    fontFamily: "urbanist-regular",
    fontSize: RFValue(14),
    paddingVertical: RFValue(5),
    paddingLeft: RFValue(15),
  },
  eyeIcon: {
    position: "absolute",
    top: Platform.OS === "android" ? 20 : 16,
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
  activeButton: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: colors.background,
    fontSize: RFValue(14),
  },
  activeBtn: {
    backgroundColor: colors.primary,
    marginTop: RFValue(20),
    marginBottom: RFValue(20),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
});
