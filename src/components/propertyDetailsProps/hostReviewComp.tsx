import { reviewsData } from "../../Data/reviewsData";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
    Dimensions,
  ScrollView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AgentReviews from "../common/modals/agentRviews";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get("window");
import { Image } from "expo-image";
import colors from "../../constants/Colors";

export default function HostReviews() {
      const [modalVisible, setModalVisible] = useState(false);
      const openModal = () => {
        setModalVisible(true);
      };

      const closeModal = () => {
        setModalVisible(false);
      };

  
  return (
    <View style={{ marginTop: responsiveScreenHeight(35) }}>
      <View
        style={{
          paddingHorizontal: RFValue(10),
          paddingVertical: RFValue(10),
          borderWidth: 1,
          borderColor: colors.warmBtn,
          marginHorizontal: RFValue(20),
          marginTop: RFValue(50),
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontSize: RFValue(17),
            fontFamily: "outfit-bold",
            color: colors.primary,
            lineHeight: RFValue(30),
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
            marginTop: RFValue(10),
          }}
        >
          {reviewsData?.map((review) => (
            <View
              key={review.id}
              style={{
                width: "auto",
                maxWidth: width * 0.7,
                borderWidth: 1,
                borderColor: colors.warmBtn,
                paddingHorizontal: RFValue(10),
                marginBottom: RFValue(20),
                borderRadius: 10,
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
                  contentFit="contain"
                  source={require("../../assets/images/calendar.png")}
                  style={{
                    height: RFValue(20),
                    width: RFValue(20),
                  }}
                />
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-regular",
                    color: colors.onboardingText,
                  }}
                >
                  {review.date}
                </Text>
              </View>
              <View>
                <Image
                  contentFit="contain"
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
                    contentFit="contain"
                    source={require("../../assets/images/icon-star.png")}
                    style={{
                      height: RFValue(20),
                      width: RFValue(20),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: RFValue(13),
                      fontFamily: "outfit-bold",
                      color: colors.onboardingText,
                    }}
                  >
                    {review.rating}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "outfit-regular",
                  color: colors.onboardingText,
                  textAlign: "justify",
                }}
              >
                {review.review}
              </Text>
            </View>
          ))}
        </ScrollView>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom:RFValue(7)
        }}>
          <TouchableOpacity onPress={openModal}>
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                color: colors.primary,
                textDecorationLine: "underline",
              }}
            >
              See all 40 reviews
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              contentFit="contain"
              source={require("../../assets/images/arrow-right.png")}
              style={{
                height: RFValue(25),
                width: RFValue(25),
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <AgentReviews modalVisible={modalVisible} closeModal={closeModal} />
    </View>
  );
}
