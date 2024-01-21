import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function BookApartmentProps({ appointmentDate, appointmentTime }:any) {
  return (
    <View
      style={{
        paddingHorizontal: RFValue(10),
        paddingVertical: RFValue(10),
        backgroundColor: "#fafafa",
        marginHorizontal: RFValue(20),
        marginVertical: RFValue(10),
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: RFValue(12),
            fontFamily: "outfit-bold",
            color: "#161917",
            lineHeight: RFValue(10),
          }}
        >
          Appointment Details
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 24,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              marginTop: RFValue(8),
              marginBottom: RFValue(8),
            }}
          >
            <Image
              resizeMode="contain"
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
                color: "#414141",
              }}
            >
              {/* Aug 23, 2023 */}
              {appointmentDate}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              marginTop: RFValue(8),
              marginBottom: RFValue(8),
            }}
          >
            <Image
              resizeMode="contain"
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
                color: "#414141",
              }}
            >
              {/* Aug 23, 2023 */}
              {appointmentTime}
            </Text>
          </View>
        </View>
        <View>
          <Image
            resizeMode="contain"
            source={require("../../assets/images/agentprofile.png")}
            style={{
              height: RFValue(75),
              width: RFValue(65),
            }}
          />
          <Image
            resizeMode="contain"
            source={require("../../assets/images/tag.png")}
            style={{
              height: RFValue(45),
              width: RFValue(45),
              position: "absolute",
              top: 48,
              left: 12,
              right: 0,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: RFValue(12),
            fontFamily: "outfit-bold",
            color: "#161917",
            lineHeight: RFValue(20),
          }}
        >
          Beatrice James
        </Text>
      </View>
      <View
        style={{
          marginTop: RFValue(10),
        }}
      >
        <Text
          style={{
            fontSize: RFValue(12),
            fontFamily: "outfit-bold",
            color: "#161917",
            lineHeight: RFValue(20),
          }}
        >
          Property Details
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: RFValue(10),
            paddingVertical: RFValue(10),
            backgroundColor: "#fff",
            borderRadius: RFValue(10),
            marginTop: RFValue(5),
            marginBottom: RFValue(10),
            borderWidth: 1,
            borderColor: "#d5d0dd",
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/images/bedroom.png")}
            style={{
              height: RFValue(80),
              width: RFValue(80),
            }}
          />
          <View>
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-bold",
              }}
            >
              One bedroom flat
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                marginTop: RFValue(3),
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/images/location.png")}
                style={{
                  width: RFValue(15),
                  height: RFValue(15),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(11),
                  fontFamily: "plusjakarta-regular",
                  color: "#414141",
                }}
              >
                Lekki phase 1, Lagos, Nigeria
              </Text>
            </View>
            <TouchableOpacity
              style={{
                paddingVertical: RFValue(5),
                paddingHorizontal: RFValue(12),
                borderRadius: RFValue(5),
                backgroundColor: "#ECFFF4",
                width: RFValue(60),
                marginTop: RFValue(3),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(11),
                  fontFamily: "outfit-medium",
                  color: "#06782F",
                }}
              >
                Rental
              </Text>
            </TouchableOpacity>
            <View
              style={{
                marginTop: RFValue(3),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-bold",
                  color: "#06782F",
                }}
              >
                ₦1,500,000{" "}
                <Text
                  style={{
                    fontSize: RFValue(9),
                    fontFamily: "plusjakarta-regular",
                    color: "#414141",
                  }}
                >
                  yearly
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      {!appointmentDate && !appointmentTime && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            overflow: "hidden",
            gap: RFValue(6),
            backgroundColor: "#F1F5FF",
            paddingHorizontal: RFValue(12),
            paddingVertical: RFValue(10),
            marginTop: RFValue(5),
            borderRadius: RFValue(8),
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/images/danger.png")}
            style={{
              width: RFValue(20),
              height: RFValue(20),
            }}
          />
          <Text
            style={{
              fontSize: RFValue(12),
              fontFamily: "plusjakarta-regular",
              color: "#306AFF",
              flexShrink: 1,
            }}
          >
            Please note that you will be charged a non-refundable fee of ₦1,500
            to book appointment with this agent, this helps us compensate for
            agents time and also make sure only serious clients schedule an
            appointment. Thank you for understanding!
          </Text>
        </View>
      )}
    </View>
  );
}
