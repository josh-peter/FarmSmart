import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, SafeAreaView, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
import { RFValue } from 'react-native-responsive-fontsize';
const image1 = require("../../assets/images/bedroomarea.png");
const image2 = require("../../assets/images/bedroomarea.png");
const image3 = require("../../assets/images/bedroomarea.png");
const image4 = require("../../assets/images/bedroomarea.png");
const image5 = require("../../assets/images/bedroomarea.png");
const image6 = require("../../assets/images/bedspace.png");
const image7 = require("../../assets/images/dinningroom.png");
const image8 = require("../../assets/images/sittingroom.png");

export default function PropertyCarouselImages() {
  const [selectIndex, setSelectIndex] = useState(0);
  const [selectedRooms, setSelectedRooms] = useState(0);

    const [data, setData] = useState([
      {
        items: [image1, image2, image3, image4],
      },
      {
        items: [image5, image6, image7, image8],
      },
    ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <StatusBar style="dark" />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(e) => {
            setSelectIndex(
              parseInt((e.nativeEvent.contentOffset.x / width).toFixed(0))
            );
          }}
          data={data[0].items}
          renderItem={({ item, index }) => {
            return (
              <Image
                resizeMode="contain"
                source={require("../../assets/images/bedroomarea.png")}
                style={{
                  height: RFValue(290),
                  width: width,
                  marginTop: RFValue(-10),
                }}
              />
            );
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
          onPress={() => router.back()}
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
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        pinchGestureEnabled={false}
        style={{
          marginLeft: RFValue(25),
        }}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              gap: 15,
              marginTop: RFValue(10),
              marginBottom: RFValue(-40),

              paddingHorizontal: RFValue(5),
              height: RFValue(220),
              overflow: "hidden",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setSelectIndex(index);
            }}
            >
              <Image
                resizeMode="cover"
                source={item.items[0]}
                style={{
                  height: RFValue(80),
                  width: RFValue(130),
                  borderRadius: 15,
                }}
              />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => router.push("/property-images")}
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: RFValue(310),
          right: RFValue(10),
          borderRadius: 50,
          backgroundColor: "#ECFFF452",
          zIndex: 999,
          width: RFValue(40),
          height: RFValue(40),
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
      </TouchableOpacity>
    </SafeAreaView>
  );
}
