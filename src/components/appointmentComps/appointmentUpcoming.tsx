import { Platform, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { Link } from 'expo-router';

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
          borderWidth: 1,
          borderColor: "#E6E6E6",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View>
            <Image
              resizeMode="contain"
              source={require("../../assets/images/agentprofile.png")}
              style={{
                height: RFValue(45),
                width: RFValue(45),
              }}
            />
            <Image
              resizeMode="contain"
              source={require("../../assets/images/tag.png")}
              style={{
                height: RFValue(35),
                width: RFValue(35),
                position: "absolute",
                top: 30,
                left: 5,
                right: 0,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-bold",
              }}
            >
              Beatrice James
            </Text>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-medium",
                lineHeight: RFValue(20),
              }}
            >
              Appointment Details
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 7,
                marginTop: RFValue(2),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <Image
                  resizeMode="contain"
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
                  resizeMode="contain"
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
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(20),
                color: "#06782F",
              }}
            >
              See property
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFF8F8",
            padding: Platform.OS === "ios" ? 16 : 15,
            borderRadius: 10,
            marginTop: RFValue(15),
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
            Cancel
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
          marginVertical: RFValue(25),
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#E6E6E6",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View>
            <Image
              resizeMode="contain"
              source={require("../../assets/images/agentprofile.png")}
              style={{
                height: RFValue(45),
                width: RFValue(45),
              }}
            />
            <Image
              resizeMode="contain"
              source={require("../../assets/images/tag.png")}
              style={{
                height: RFValue(35),
                width: RFValue(35),
                position: "absolute",
                top: 30,
                left: 5,
                right: 0,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-bold",
              }}
            >
              Beatrice James
            </Text>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-medium",
                lineHeight: RFValue(20),
              }}
            >
              Appointment Details
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 7,
                marginTop: RFValue(2),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                <Image
                  resizeMode="contain"
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
                  resizeMode="contain"
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
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(20),
                color: "#06782F",
              }}
            >
              See property
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFF8F8",
            padding: Platform.OS === "ios" ? 16 : 15,
            borderRadius: 10,
            marginTop: RFValue(15),
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
            Cancel
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
          borderWidth: 1,
          borderColor: "#E6E6E6",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View>
            <Image
              resizeMode="contain"
              source={require("../../assets/images/agentprofile.png")}
              style={{
                height: RFValue(45),
                width: RFValue(45),
              }}
            />
            <Image
              resizeMode="contain"
              source={require("../../assets/images/tag.png")}
              style={{
                height: RFValue(35),
                width: RFValue(35),
                position: "absolute",
                top: 30,
                left: 5,
                right: 0,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-bold",
              }}
            >
              Beatrice James
            </Text>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-medium",
                lineHeight: RFValue(20),
              }}
            >
              Appointment Details
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 7,
                marginTop: RFValue(2),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(11),
                  fontFamily: "outfit-medium",
                  lineHeight: RFValue(20),
                  color: "#FA5C47",
                }}
              >
                NOW
              </Text>
            </View>
            <Text
              style={{
                fontSize: RFValue(11),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(20),
                color: "#06782F",
              }}
            >
              See property
            </Text>
          </View>
        </View>
        <Link href={"/incomingcall"} asChild>
          <TouchableOpacity
            style={{
              backgroundColor: "#06782F",
              padding: Platform.OS === "ios" ? 16 : 15,
              borderRadius: 10,
              marginTop: RFValue(15),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(14),
                color: "#fff",
                fontFamily: "outfit-medium",
                textAlign: "center",
              }}
            >
              Join Call
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

export default AppointmentUpcoming

const styles = StyleSheet.create({})