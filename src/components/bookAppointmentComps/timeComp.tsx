import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { timeData } from '../../Data/timeData';
import colors from '../../constants/Colors';
import { Image } from 'expo-image';

export default function TimeComp({ setAppointmentTime }:any) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleIconPress = (id: number) => {
    setActiveIndex((prevIndex) => (prevIndex === id ? null : id));
  };
  return (
    <View>
      <View>
      
        <View
          style={{
            marginTop: RFValue(20),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(18),
              fontFamily: "outfit-bold",
              color: "#161917",
              lineHeight: RFValue(40),
            }}
          >
            Choose time
          </Text>
          <View>
            <View
              style={{
                flexDirection: "row",
                gap: RFValue(5),
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: RFValue(10),
              }}
            >
              {timeData?.map((time) => (
                <TouchableOpacity
                  onPress={() => {
                    handleIconPress(time.id);
                    setAppointmentTime(time.value);
                  }}
                  key={time.id}
                  style={{
                    backgroundColor:
                      activeIndex === time.id ? colors.primary : colors.warm,
                    padding: RFValue(10),
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(11),
                      fontFamily: "outfit-medium",
                      color: activeIndex === time.id ? colors.background : colors.primary,
                    }}
                  >
                    {time.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
