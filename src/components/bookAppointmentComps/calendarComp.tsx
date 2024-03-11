import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DatePicker from "react-native-modern-datepicker";
import colors from '../../constants/Colors';


export default function CalendarComponent({ setAppointmentDate }:any) {
  const [selectedDate, setSelectedDate] = useState("");
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
          Choose a day
        </Text>
        <DatePicker
          onSelectedChange={(date: any) => setAppointmentDate(date)}
          mode="calendar"
          options={{
            backgroundColor: colors.background,
            mainColor: colors.primary,
          }}
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.border2,
          }}
        />
      </View>
    </View>
  );
}
