import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
  Dimensions,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { Stack, router } from "expo-router";
import { reviewsData } from "../Data/reviewsData";
import Morelist from "../components/propertyDetailsProps/moreListing";
import AddReview from "../components/common/modals/addReview";
const { width, height } = Dimensions.get("window");

export default function AgentProfile() {
  const [modalVisible, setModalVisible] = useState(false);
  

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const fade = useRef(new Animated.Value(0)).current;

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
  return (
    <>
      <Stack.Screen
        options={{
          title: "Book Appointment",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(100),
          position: "relative",
          opacity: fade,
          transform: [
            {
              translateY: fade.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0],
              }),
            },
          ],
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fafafa",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(9),
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.clearIcon}
          >
            <Image
              resizeMode="contain"
              source={require("../assets/images/arrow-left.png")}
              style={{
                height: RFValue(22),
                width: RFValue(22),
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: RFValue(18),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(30),
            }}
          >
            Agent profile
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: RFValue(20),
          }}
        >
          <View>
            {/* <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                color: "#161917",
                lineHeight: RFValue(30),
                marginTop: RFValue(20),
              }}
            >
              About Host
            </Text> */}
            <View
              style={{
                marginTop: RFValue(20),
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../assets/images/agentprofile.png")}
                style={{
                  height: RFValue(75),
                  width: RFValue(65),
                }}
              />
              <Image
                resizeMode="contain"
                source={require("../assets/images/tag.png")}
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
                  source={require("../assets/images/icon-star.png")}
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
              I am a realtor with over 2 years in real estates, I have sold over
              ₦400M property and I have helped client find their dream homes.
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
                source={require("../assets/images/square.png")}
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
                source={require("../assets/images/location.png")}
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
              Agent review (40)
            </Text>
            <TouchableOpacity
              onPress={openModal}
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
                Add review
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                color: "#161917",
                lineHeight: RFValue(20),
                marginTop: RFValue(20),
              }}
            >
              Host review (40)
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: "row",
                gap: 30,
                alignItems: "center",
              }}
            >
              {reviewsData?.map((review) => (
                <View
                  key={review.id}
                  style={{
                    width: width * 0.7,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 4,
                      marginTop: RFValue(8),
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
                      {review.date}
                    </Text>
                  </View>
                  <View>
                    <Image
                      resizeMode="contain"
                      source={review.image}
                      style={{
                        height: RFValue(55),
                        width: RFValue(45),
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
                        fontSize: RFValue(15),
                        fontFamily: "outfit-bold",
                        color: "#161917",
                        lineHeight: RFValue(30),
                        marginTop: RFValue(5),
                      }}
                    >
                      {review.name}
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
                        source={require("../assets/images/icon-star.png")}
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
                        {review.rating}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-regular",
                      color: "#414141",
                      textAlign: "justify",
                    }}
                  >
                    {review.review}
                  </Text>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-regular",
                  color: "#06782F",
                  lineHeight: RFValue(30),
                }}
              >
                See all 40 reviews
              </Text>
            </TouchableOpacity>
          </View>
          <Morelist />
          <TouchableOpacity
            onPress={openModal}
            style={{
              backgroundColor: "#06782F",
              padding: Platform.OS === "ios" ? 18 : 17,
              borderRadius: 10,
              marginTop: RFValue(65),
              marginBottom: RFValue(15),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-regular",
                color: "#fff",
                textAlign: "center",
              }}
            >
    Book apartment
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
      <AddReview modalVisible={modalVisible} closeModal={closeModal} />
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
    top: RFValue(10),
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
