import { reviewsData } from "../../Data/reviewsData";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
    Dimensions,
  ScrollView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AgentReviews from "../common/modals/agentRviews";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get("window");

export default function HostReviews() {
      const [modalVisible, setModalVisible] = useState(false);
      const openModal = () => {
        setModalVisible(true);
      };

      const closeModal = () => {
        setModalVisible(false);
      };

  
  return (
    <View style={{marginTop:responsiveScreenHeight(25)}}>
      <View
        style={{
          paddingHorizontal: RFValue(20),
        }}
      >
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: "outfit-bold",
            color: "#161917",
            lineHeight: RFValue(30),
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
        <TouchableOpacity onPress={openModal}>
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
      <AgentReviews modalVisible={modalVisible} closeModal={closeModal} />
    </View>
  );
}
