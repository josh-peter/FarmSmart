import { Platform, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { Link, router } from 'expo-router';
import colors from '../../constants/Colors';
import { Image } from 'expo-image';

const AppointmentUpcoming = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "column",
          gap: 4,
          paddingHorizontal: RFValue(10),
          paddingVertical: RFValue(14),
          marginHorizontal: RFValue(15),
          marginVertical: RFValue(5),
          overflow: "hidden",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: colors.filterbg,
              paddingHorizontal: RFValue(20),
              paddingVertical: RFValue(10),
            }}
          >
            <Image
              contentFit="contain"
              source={require("../../assets/images/agentpro.png")}
              style={{
                height: RFValue(65),
                width: RFValue(65),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-medium",
                backgroundColor: colors.background,
                padding: RFValue(6),
                borderWidth: 1,
                borderColor: colors.warmBtn,
                borderRadius: 7,
                marginTop: RFValue(8),
              }}
            >
              View property
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-medium",
                backgroundColor: colors.warm,
                padding: RFValue(4),
                borderWidth: 1,
                borderColor: colors.warmBtn,
                borderRadius: 20,
                color: colors.green,
                width: RFValue(80),
              }}
            >
              Verified agent
            </Text>
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: "outfit-medium",
                lineHeight: RFValue(25),
              }}
            >
              Declan Ubong
            </Text>
            <View
              style={{
                flexDirection: "column",
                gap: 7,
                marginTop: RFValue(2),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "outfit-regular",
                }}
              >
                Schedule
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <Image
                  contentFit="contain"
                  source={require("../../assets/images/calendar.png")}
                  style={{
                    height: RFValue(13),
                    width: RFValue(13),
                  }}
                />
                <Text
                  style={{
                    fontSize: RFValue(11),
                    fontFamily: "outfit-regular",
                  }}
                >
                  Aug 23, 2023
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
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
                    fontSize: RFValue(11),
                    fontFamily: "outfit-regular",
                  }}
                >
                  2:00 PM - 6:30 PM
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.push("/incomingcall");
          }}
          style={{
            backgroundColor: colors.primary,
            padding: Platform.OS === "ios" ? 16 : 15,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            marginTop: RFValue(10),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(14),
              color: colors.background,
              fontFamily: "outfit-medium",
              textAlign: "center",
            }}
          >
            Join call
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "column",
          gap: 4,
          paddingHorizontal: RFValue(10),
          paddingVertical: RFValue(14),
          marginHorizontal: RFValue(15),
          marginVertical: RFValue(10),
          overflow: "hidden",

          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: colors.filterbg,
              paddingHorizontal: RFValue(20),
              paddingVertical: RFValue(10),
            }}
          >
            <Image
              contentFit="contain"
              source={require("../../assets/images/agentprofile.png")}
              style={{
                height: RFValue(65),
                width: RFValue(65),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-medium",
                backgroundColor: colors.background,
                padding: RFValue(6),
                borderWidth: 1,
                borderColor: colors.warmBtn,
                borderRadius: 7,
                marginTop: RFValue(8),
              }}
            >
              View property
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-medium",
                backgroundColor: colors.warm,
                padding: RFValue(4),
                borderWidth: 1,
                borderColor: colors.warmBtn,
                borderRadius: 20,
                color: colors.green,
                width: RFValue(80),
              }}
            >
              Verified agent
            </Text>
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: "outfit-medium",
                lineHeight: RFValue(25),
              }}
            >
              Beatrice James
            </Text>
            <View
              style={{
                flexDirection: "column",
                gap: 7,
                marginTop: RFValue(2),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "outfit-regular",
                }}
              >
                Schedule
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <Image
                  contentFit="contain"
                  source={require("../../assets/images/calendar.png")}
                  style={{
                    height: RFValue(13),
                    width: RFValue(13),
                  }}
                />
                <Text
                  style={{
                    fontSize: RFValue(11),
                    fontFamily: "outfit-regular",
                  }}
                >
                  Aug 23, 2023
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
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
                    fontSize: RFValue(11),
                    fontFamily: "outfit-regular",
                  }}
                >
                  2:00 PM - 6:30 PM
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.warm,
            padding: Platform.OS === "ios" ? 16 : 15,
            borderRadius: 10,
            marginTop: RFValue(15),
            borderWidth: 2,
            borderColor: colors.border2,
          }}
        >
          <Text
            style={{
              fontSize: RFValue(14),
              color: "#FA5C47",
              fontFamily: "outfit-medium",
              textAlign: "center",
            }}
          >
            Cancel appointment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AppointmentUpcoming

const styles = StyleSheet.create({})