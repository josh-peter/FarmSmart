import { Stack } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
  StyleSheet,
  FlatList,
} from "react-native";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
import { Avatar, Icon, ListItem, Tab, TabView } from "@rneui/themed";
import FeaturesAndAmenities from "../common/modals/featuresAndAmenities";
import PropertyVideoPlay from "../common/modals/propertyVideoPlay";
import ThreeDTourModal from "../common/modals/ThirddTourModal";
import { Image } from "expo-image";
import colors from "../../constants/Colors";
const image1 = require("../../assets/images/videobg.png");
const image2 = require("../../assets/images/videobg.png");
const image3 = require("../../assets/images/videobg.png");
const image4 = require("../../assets/images/videobg.png");

export default function PropertyFeatureComp() {
  const [index, setIndex] = useState(1);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectIndex, setSelectIndex] = useState(0);

    const [modalVideoVisible, setModalVideoVisible] = useState(false);
    const [modalTourVisible, setModalTourVisible] = useState(false);
  const totalNumberOfPages = 4;
  const roomOptions = [
    "Sitting room",
    "Bedroom",
    "Dining room",
    "Swimming pool",
  ];
  const [data, setData] = useState([
    {
      items: [image1, image2, image3, image4],
    },
  ]);

   const getCurrentRoomOption = () => {
     return roomOptions[selectIndex];
  };
  
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };



  const openVideoModal = () => {
    setModalVideoVisible(true);
  };

  const closeVideoModal = () => {
    setModalVideoVisible(false);
  };

  const openTourModal = () => {
    setModalTourVisible(true);
  };

  const closeTourModal = () => {
    setModalTourVisible(false);
  };



  const amenities = [
    {
      id: 1,
      number: 1,
      amenity: "Kitchen",
    },
    {
      id: 2,
      number: 2,
      amenity: "Bathroom",
    },
    {
      id: 3,
      number: 1,
      amenity: "Garage",
    },
    {
      id: 4,
      number: 1,
      amenity: "Bedroom",
    },
  ];

  return (
    <View
      style={{
        height: RFValue(570),
        marginTop: RFValue(-110),
      }}
    >
      <View
        style={{
          paddingHorizontal: RFValue(20),
          marginTop: RFValue(20),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            contentFit="contain"
            source={require("../../assets/images/trusted.png")}
            style={{
              height: RFValue(40),
              width: RFValue(100),
            }}
          />
          <TouchableOpacity
            style={{
              paddingVertical: RFValue(7),
              paddingHorizontal: RFValue(20),
              borderRadius: RFValue(8),
              backgroundColor: colors.warm,
            }}
          >
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-medium",
                color: colors.green,
              }}
            >
              Rental
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: RFValue(18),
            fontFamily: "outfit-bold",
          }}
        >
          One bedroom flat
        </Text>
        <View>
          <Text
            style={{
              fontSize: RFValue(18),
              fontFamily: "outfit-bold",
              color: colors.green,
            }}
          >
            ₦30,000{" "}
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "urbanist-regular",
                color: colors.onboardingText,
              }}
            >
              /night
            </Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginTop: RFValue(3),
          }}
        >
          <Image
            contentFit="contain"
            source={require("../../assets/images/location.png")}
            style={{
              width: RFValue(20),
              height: RFValue(20),
            }}
          />
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: "urbanist-regular",
              color: colors.onboardingText,
            }}
          >
            Lekki phase 1, Lagos, Nigeria
          </Text>
        </View>
        <View
          style={{
            marginTop: RFValue(20),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-bold",
              color: colors.dark,
              marginBottom: RFValue(5),
            }}
          >
            Features & amenities
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: "row",
              alignContent: "center",
              gap: 10,
            }}
          >
            {amenities.map((amenity) => (
              <View
                key={amenities.indexOf(amenity)}
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: colors.warm,
                  width: RFValue(100),
                  paddingHorizontal: RFValue(10),
                  paddingVertical: RFValue(15),
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 9,
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(11),
                    fontFamily: "outfit-bold",
                    color: colors.onboardingText,
                    textAlign: "center",
                  }}
                >
                  {amenity.number}
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "outfit-bold",
                    color: colors.onboardingText,
                    textAlign: "center",
                  }}
                >
                  {amenity.amenity}
                </Text>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity onPress={openModal}>
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                color: colors.primary,
                textDecorationLine: "underline",
              }}
            >
              See amenities
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        style={{
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderBottomColor: "#DBDBDB",
          marginTop: RFValue(30),
        }}
        indicatorStyle={{
          backgroundColor: colors.primary,
          height: 3,
        }}
        variant="default"
      >
        <Tab.Item
          title="Video"
          titleStyle={{
            fontSize: 15,
            color: index === 0 ? colors.primary : colors.tabColor,
          }}
        />

        <Tab.Item
          title="3D Tour"
          titleStyle={{
            fontSize: 15,
            color: index === 1 ? colors.primary : colors.tabColor,
          }}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            paddingHorizontal: RFValue(16),
            marginTop: RFValue(15),
          }}
        >
          <View style={{}}>
            <View>
              <Image
                contentFit="cover"
                source={require("../../assets/images/videobg.png")}
                style={{
                  width: "100%",
                  height: RFValue(240),
                  borderRadius: 20,
                }}
              />
              <TouchableOpacity
                onPress={openVideoModal}
                style={{
                  position: "absolute",
                  top: RFValue(90),
                  right: 0,
                  left: RFValue(130),
                }}
              >
                <Image
                  contentFit="contain"
                  source={require("../../assets/images/play.png")}
                  style={{
                    width: RFValue(50),
                    height: RFValue(50),
                  }}
                />
              </TouchableOpacity>
              <Image
                contentFit="contain"
                source={require("../../assets/images/fullview.png")}
                style={{
                  width: RFValue(35),
                  height: RFValue(35),
                  position: "absolute",
                  top: RFValue(15),
                  right: 10,
                }}
              />
            </View>
          </View>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <View>
            <View
              style={{
                marginTop: RFValue(5),
              }}
            >
              <View
                style={{
                  paddingHorizontal: RFValue(20),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(16),
                      fontFamily: "outfit-regular",
                      color: colors.onboardingText,
                      lineHeight: RFValue(25),
                    }}
                  >
                    Swipe to see more
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(16),
                      fontFamily: "outfit-regular",
                      color: colors.onboardingText,
                      lineHeight: RFValue(25),
                    }}
                  >
                    {`${selectIndex + 1}/${totalNumberOfPages}`}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {data[0].items.map((item, index) => (
                    <View
                      key={index}
                      style={[
                        styles.indicator,
                        {
                          backgroundColor:
                            selectIndex === index ? colors.primary : colors.indicator,
                        },
                      ]}
                    />
                  ))}
                </View>
                <Text
                  style={{
                    fontSize: RFValue(16),
                    fontFamily: "outfit-bold",
                    color: colors.primary,
                    lineHeight: RFValue(40),
                  }}
                >
                  {getCurrentRoomOption()}
                </Text>
              </View>

              <View
                
              >
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  onScroll={(e) => {
                    setSelectIndex(
                      parseInt(
                        (e.nativeEvent.contentOffset.x / width).toFixed(0)
                      )
                    );
                  }}
                  data={data[0].items}
                  renderItem={({ item, index }) => {
                    return (
                      <View>
                        <Image
                          contentFit="contain"
                          source={item}
                          style={{
                        width: width,
                            height: RFValue(210),
                          }}
                        />
                        <TouchableOpacity
                          onPress={openTourModal}
                          style={{
                            position: "absolute",
                            top: RFValue(70),
                            right: 0,
                            left: RFValue(130),
                          }}
                        >
                          <Image
                            contentFit="contain"
                            source={require("../../assets/images/play.png")}
                            style={{
                              width: RFValue(50),
                              height: RFValue(50),
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </TabView.Item>
      </TabView>
      <FeaturesAndAmenities
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
      <PropertyVideoPlay
        modalVideoVisible={modalVideoVisible}
        closeVideoModal={closeVideoModal}
      />
      <ThreeDTourModal
        modalTourVisible={modalTourVisible}
        closeTourModal={closeTourModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 200,
    borderRadius: 30,
    marginTop: RFValue(10),
  },
  indicator: {
    height: RFValue(3),
    width: RFValue(68),
    backgroundColor: colors.primary,
    marginHorizontal: RFValue(2),
    marginTop: RFValue(0),
  },
});
