import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { timeData } from '../../Data/timeData';

export default function TimeComp({ setAppointmentTime }:any) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleIconPress = (id: number) => {
    setActiveIndex((prevIndex) => (prevIndex === id ? null : id));
  };
  return (
    <View>
      <View>
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
            }}
          >
            {timeData?.map((time) => (
              <TouchableOpacity
                    onPress={() => {
                        handleIconPress(time.id)
                        setAppointmentTime(time.value)
                    }}
                key={time.id}
                style={{
                  backgroundColor:
                    activeIndex === time.id ? "#06782F" : "#ECFFF4",
                  padding: RFValue(10),
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(11),
                    fontFamily: "outfit-medium",
                    color: activeIndex === time.id ? "#fff" : "#06782F",
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
  );
}
