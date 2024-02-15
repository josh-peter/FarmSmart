import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  Dimensions,
  VirtualizedList
} from "react-native";
const { width, height } = Dimensions.get("window");
import { RFValue } from "react-native-responsive-fontsize";
import { dataImages } from "../../Data/dataImages";

export default function PropertyCarouselImages() {
  const [selectIndex, setSelectIndex] = useState(0);
  const [viewableIndex, setViewableIndex] = useState(0);


 
  useEffect(() => {
    const prefetchImages = async () => {
      const promises = dataImages.map((item) => Image.prefetch(item.image));
      await Promise.all(promises);
    };
    prefetchImages();
  }, [dataImages]);

  const flatListRef1 = useRef<FlatList | null>(null);
  const flatListRef2 = useRef<FlatList | null>(null);

  const scrollImageToIndex = (index: number) => {
    flatListRef1.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  };

  const paginatorToIndex = (index: number) => {
    flatListRef2.current?.scrollToIndex({
      animated: true,
      index: index,
      viewPosition: 0.5,
    });
  };

  const onViewableItemsChanged = ({ viewableItems }: any) => {
      scrollImageToIndex(viewableItems[0].index);
    setViewableIndex(viewableItems[0].index);
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold: 50,
      },
      onViewableItemsChanged,
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <StatusBar style="dark" />

        <FlatList
          ref={flatListRef1}
          snapToAlignment="start"
          decelerationRate="fast"
          scrollEventThrottle={16}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          data={dataImages}
          renderItem={({ item, index }) => {
            return (
              <Image
                resizeMode="contain"
                source={item.image}
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
        ref={flatListRef2}
        decelerationRate="fast"
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataImages}
        pinchGestureEnabled={false}
        style={{
          marginLeft: RFValue(25),
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              paginatorToIndex(index); 
              scrollImageToIndex(index); 
            }}
            style={{
              gap: 15,
              marginTop: RFValue(10),
              marginBottom: RFValue(-40),
              paddingHorizontal: RFValue(5),
              height: RFValue(220),
              overflow: "hidden",
            }}
          >
            <Image
              resizeMode="cover"
              source={item.image}
              style={{
                height: RFValue(80),
                width: RFValue(130),
                borderRadius: 15,
              }}
            />
          </TouchableOpacity>
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
