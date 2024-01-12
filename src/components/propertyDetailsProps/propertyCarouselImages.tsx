import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function PropertyCarouselImages() {
  return (
    <View>
      <View>
        <Image
          resizeMode="contain"
          source={require("../../assets/images/bedroomarea.png")}
          style={{
            height: RFValue(280),
            width: "100%",
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            top: RFValue(30),
            right: RFValue(12),
            paddingVertical: RFValue(8),
            paddingHorizontal: RFValue(22),
            backgroundColor: "#ECFFF452",
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: "outfit-bold",
              color: "#06782F",
            }}
          >
            Apartment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: RFValue(20),
            left: RFValue(-10),
            paddingVertical: RFValue(8),
            paddingHorizontal: RFValue(22),
            borderRadius: 12,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/images/arrow-left-icon.png")}
            style={{
              height: RFValue(40),
              width: RFValue(40),
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: RFValue(30),
            right: RFValue(45),
            paddingVertical: RFValue(8),
            paddingHorizontal: RFValue(22),
            borderRadius: 12,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/images/download.png")}
            style={{
              height: RFValue(40),
              width: RFValue(40),
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: RFValue(30),
            right: RFValue(-10),
            paddingVertical: RFValue(8),
            paddingHorizontal: RFValue(22),
            borderRadius: 12,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/images/like.png")}
            style={{
              height: RFValue(40),
              width: RFValue(40),
            }}
          />
        </TouchableOpacity>
      </View>
          <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "scroll",
          gap: 15,
          marginTop: RFValue(10),
          marginBottom: RFValue(-40),
          paddingHorizontal: RFValue(20),
          height: RFValue(220),
        }}
      >
        <TouchableOpacity style={{}}>
          <Image
            resizeMode="cover"
            source={require("../../assets/images/bedroomarea.png")}
            style={{
              height: RFValue(80),
              width: RFValue(130),
              borderRadius: 15,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{}}>
          <Image
            resizeMode="cover"
            source={require("../../assets/images/bedroomarea.png")}
            style={{
              height: RFValue(80),
              width: RFValue(130),
              borderRadius: 15,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{}}>
          <Image
            resizeMode="cover"
            source={require("../../assets/images/bedroomarea.png")}
            style={{
              height: RFValue(80),
              width: RFValue(130),
              borderRadius: 15,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{}}>
          <Image
            resizeMode="cover"
            source={require("../../assets/images/bedroomarea.png")}
            style={{
              height: RFValue(80),
              width: RFValue(130),
              borderRadius: 15,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            top: RFValue(10),
            right: RFValue(300),
            borderRadius: 50,
            backgroundColor: "#ECFFF452",
            zIndex: 999,
            padding: RFValue(10),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(14),
              fontFamily: "outfit-bold",
              color: "#fff",
            }}
          >
            +20
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
