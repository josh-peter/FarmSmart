import { StyleSheet, Text, View, TouchableOpacity, ScrollView,} from "react-native";
import React, { memo, useState } from "react";
import { HomeIconsData } from "../../Data/homeIconsData";
import { RFValue } from "react-native-responsive-fontsize";
import { Image } from "expo-image";
import colors from "../../constants/Colors";

const HomeIcons = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); 
  const handleIconPress = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
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
              paddingHorizontal: RFValue(10),
            }}
            key={icon.id}
          >
            <Image
              contentFit="contain"
              source={activeIndex === index ? icon.img2 : icon.img}
              style={{
                height: RFValue(22),
                width: RFValue(22),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "urbanist-medium",
                lineHeight: RFValue(17),
                marginTop: RFValue(3),
                color: activeIndex === index ? colors.green : colors.onboardingText,
             
              }}
            >
              {icon.title}
            </Text>
            {activeIndex === index && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default memo(HomeIcons);

const styles = StyleSheet.create({
  underline: {
    width: "100%",
    height: RFValue(2),
    backgroundColor: colors.green,
    marginTop: RFValue(2),
  },
});
