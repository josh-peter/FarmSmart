import { Stack } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
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
import MapView, { Marker } from "react-native-maps";
import apartments from "../../Data/apartments.json";
import CustomMarker from "../mapProps/customMarker";
import ApartmentsListItem from "../mapProps/ApartmentsListItem";
import Singleapartment from "../../Data/singleApartment.json";
import { reviewsData } from "../../Data/reviewsData";

export default function PropertyFeatureComp() {
  const fade = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(1);

  const animation = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation();
  }, []);

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

  const [selectedApartment, setSelectedApartment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleCloseNavigationApartment = () => {
    setSelectedApartment(null);
  };

  return (
    <View>
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
            resizeMode="contain"
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
              borderRadius: RFValue(5),
              backgroundColor: "#ECFFF4",
            }}
          >
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-medium",
                color: "#06782F",
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
              color: "#06782F",
            }}
          >
            ₦30,000{" "}
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "plusjakarta-regular",
                color: "#414141",
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
            resizeMode="contain"
            source={require("../../assets/images/location.png")}
            style={{
              width: RFValue(20),
              height: RFValue(20),
            }}
          />
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: "plusjakarta-regular",
              color: "#414141",
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
              color: "#161917",
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
                  backgroundColor: "#F5F5F5",
                  width: RFValue(120),
                  paddingHorizontal: RFValue(20),
                  paddingVertical: RFValue(15),
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "outfit-bold",
                    color: "#161917",
                    textAlign: "center",
                  }}
                >
                  {amenity.number}
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "outfit-bold",
                    color: "#161917",
                    textAlign: "center",
                  }}
                >
                  {amenity.amenity}
                </Text>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                color: "#06782F",
              }}
            >
              See all 8 features & amenities
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
          marginHorizontal: RFValue(20),
        }}
        indicatorStyle={{
          backgroundColor: "#06782F",
          height: 3,
        }}
        variant="default"
      >
        <Tab.Item
          title="Video"
          titleStyle={{
            fontSize: 15,
            color: index === 1 ? "#06782F" : "black",
          }}
        />

        <Tab.Item
          title="3D Tour"
          titleStyle={{
            fontSize: 15,
            color: index === 2 ? "#06782F" : "black",
          }}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            paddingHorizontal: RFValue(20),
            marginTop: RFValue(10),
          }}
        >
          <View style={{}}>
            <View>
              <Image
                resizeMode="contain"
                source={require("../../assets/images/videobg.png")}
                style={{
                  width: "100%",
                  height: RFValue(200),
                }}
              />
              <Image
                resizeMode="contain"
                source={require("../../assets/images/play.png")}
                style={{
                  width: RFValue(50),
                  height: RFValue(50),
                  position: "absolute",
                  top: RFValue(70),
                  right: 0,
                  left: 140,
                }}
              />
              <Image
                resizeMode="contain"
                source={require("../../assets/images/fullview.png")}
                style={{
                  width: RFValue(50),
                  height: RFValue(50),
                  position: "absolute",
                  top: RFValue(15),
                  right: 10,
                }}
              />
              <View
                style={{
                  height: height,
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(16),
                    fontFamily: "outfit-bold",
                    color: "#161917",
                    lineHeight: RFValue(40),
                    marginTop: RFValue(30),
                  }}
                >
                  About apartment
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-regular",
                    color: "#414141",
                  }}
                >
                  Welcome to this charming two-bedroom apartment nestled in a
                  peaceful residential neighborhood. This spacious and bright
                  apartment offers a comfortable
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
                    See all details
                  </Text>
                </TouchableOpacity>
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: RFValue(16),
                      fontFamily: "outfit-bold",
                      color: "#161917",
                      lineHeight: RFValue(30),
                      marginTop: RFValue(20),
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
                      See all details
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: RFValue(16),
                      fontFamily: "outfit-bold",
                      color: "#161917",
                      lineHeight: RFValue(30),
                      marginTop: RFValue(20),
                    }}
                  >
                    Location
                  </Text>

                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#E6E6E6",
                      padding: 20,
                      borderRadius: 20,
                    }}
                  >
                    <View>
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
                            width: RFValue(20),
                            height: RFValue(20),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(13),
                            fontFamily: "plusjakarta-regular",
                            color: "#414141",
                          }}
                        >
                          Lekki phase 1, Lagos, Nigeria
                        </Text>
                      </View>
                      {/* <MapView
                        style={styles.map}
                        provider="google"
                        initialRegion={{
                          latitude: 9.05785,
                          longitude: 7.49508,
                          latitudeDelta: 10.0,
                          longitudeDelta: 10.0,
                        }}
                      >
                        {Singleapartment.map((apartment) => (
                          <CustomMarker
                            key={apartment.id}
                            apartment={apartment}
                            onPress={() => setSelectedApartment(apartment)}
                          />
                        ))}
                      </MapView> */}
                    </View>
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        backgroundColor: "#ECFFF4",
                        padding: Platform.OS === "ios" ? 18 : 17,
                        borderRadius: 10,
                        marginTop: RFValue(10),
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/direction.png")}
                        style={{
                          width: RFValue(20),
                          height: RFValue(20),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(16),
                          fontFamily: "outfit-regular",
                          color: "#06782F",
                        }}
                      >
                        Get Direction
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(16),
                      fontFamily: "outfit-bold",
                      color: "#161917",
                      lineHeight: RFValue(30),
                      marginTop: RFValue(20),
                    }}
                  >
                    About Host
                  </Text>
                  <View>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/images/agentprofile.png")}
                      style={{
                        height: RFValue(75),
                        width: RFValue(65),
                      }}
                    />
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/images/tag.png")}
                      style={{
                        height: RFValue(45),
                        width: RFValue(45),
                        position: "absolute",
                        top: 50,
                        left: 10,
                        right: 0,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        fontFamily: "outfit-bold",
                        color: "#161917",
                        lineHeight: RFValue(30),
                        marginTop: RFValue(5),
                      }}
                    >
                      Angella Okoro
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/icon-star.png")}
                        style={{
                          height: RFValue(20),
                          width: RFValue(20),
                        }}
                      />
                      <Text
                        style={{
                          fontSize: RFValue(12),
                          fontFamily: "outfit-regular",
                          color: "#414141",
                        }}
                      >
                        5.0
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-regular",
                      color: "#414141",
                    }}
                  >
                    I am a realtor with over 2 years in real estates, I have
                    sold over ₦400M property and I have helped client find their
                    dream homes.
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 4,
                      marginTop: RFValue(8),
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/images/square.png")}
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
                      English, Yoruba and Ibibio
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 4,
                      marginTop: RFValue(8),
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/images/location.png")}
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
                      Lagos, Nigeria
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#ECFFF4",
                      padding: Platform.OS === "ios" ? 18 : 17,
                      borderRadius: 10,
                      marginTop: RFValue(15),
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RFValue(16),
                        fontFamily: "outfit-regular",
                        color: "#06782F",
                        textAlign: "center",
                      }}
                    >
                      Book appointment
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <View></View>
        </TabView.Item>
      </TabView>
     
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
});
