import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DatePicker from "react-native-modern-datepicker";


export default function CalendarComponent({ setAppointmentDate }:any) {
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <View>
      <View
      >
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
            locale: "en-US",
            format: "MMM DD YYYY HH:mm A",
            backgroundColor: "#fafafa",
            mainColor: "#06782F",
          }}
          style={{
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}
