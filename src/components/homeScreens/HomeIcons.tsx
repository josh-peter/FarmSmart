import { StyleSheet, Text, View, TouchableOpacity,} from "react-native";
import React, { memo, useState } from "react";
import { HomeIconsData } from "../../Data/homeIconsData";
import { RFValue } from "react-native-responsive-fontsize";
import { Image } from "expo-image";

const HomeIcons = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleIconPress = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: RFValue(20),
        marginBottom: RFValue(20),
      }}
    >
      {HomeIconsData?.map((icon, index: number) => (
        <TouchableOpacity
          onPress={() => handleIconPress(index)}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={icon.id}
        >
          <Image
            contentFit="contain"
            source={icon.img}
            style={{
              height: RFValue(22),
              width: RFValue(22),
            }}
          />
          <Text
            style={{
              fontSize: RFValue(12),
              fontFamily: "plusjakarta-regular",
              lineHeight: RFValue(17),
              marginTop: RFValue(3),
              color: activeIndex === index ? "#06782F" : "#414141",
              borderBottomWidth: activeIndex === index ? 2 : 0,
              borderBottomColor:
                activeIndex === index ? "#06782F" : "transparent",
            }}
          >
            {icon.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default memo(HomeIcons);

const styles = StyleSheet.create({});
