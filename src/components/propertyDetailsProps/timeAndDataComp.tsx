import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Image } from 'expo-image';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../constants/Colors';

export default function TimeAndDataComp ({ appointmentDate, appointmentTime }: any){
  return (
    <View>
      <Text
        style={{
          fontSize: RFValue(14),
          fontFamily: "outfit-bold",
          color: colors.onboardingText,
          marginTop: RFValue(1),
          marginBottom: RFValue(7),
        }}
      >
        Appointment Details
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 18,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          {appointmentDate && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,

                marginBottom: RFValue(8),
              }}
            >
              <Image
                contentFit="contain"
                source={require("../../assets/images/calendar.png")}
                style={{
                  height: RFValue(15),
                  width: RFValue(15),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "outfit-regular",
                  color: colors.onboardingText,
                }}
              >
                {appointmentDate}
              </Text>
            </View>
          )}
        </View>
        {appointmentTime && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              borderLeftWidth: 1,
              borderLeftColor: colors.border2,
              marginBottom: RFValue(8),
              paddingLeft: RFValue(8),
            }}
          >
            <Image
              contentFit="contain"
              source={require("../../assets/images/clock.png")}
              style={{
                height: RFValue(15),
                width: RFValue(15),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "outfit-regular",
                color: colors.onboardingText,
              }}
            >
              {/* Aug 23, 2023 */}
              {appointmentTime}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};



const styles = StyleSheet.create({})