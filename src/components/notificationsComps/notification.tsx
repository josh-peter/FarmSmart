import React from 'react';
import { View, Text, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function NotificationComponents () {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#FAFAFA",
          padding: RFValue(15),
          marginHorizontal: RFValue(15),
          marginVertical: RFValue(20),
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: RFValue(13),
            fontFamily: "plusjakarta-regular",
          }}
        >
          Today
        </Text>
        <View
          style={{
            backgroundColor: "#fff",
            padding: RFValue(12),
            marginTop: RFValue(10),
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#E6E6E6",
          }}
        >
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: "plusjakarta-regular",
              color: "#414141",
            }}
          >
            New card has been added!
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginTop: RFValue(11),
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/clock.png")}
              style={{
                height: RFValue(18),
                width: RFValue(18),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: "plusjakarta-regular",
                color: "#414141",
              }}
            >
              6:30 PM
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            padding: RFValue(12),
            marginTop: RFValue(10),
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#E6E6E6",
          }}
        >
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: "plusjakarta-regular",
              color: "#414141",
            }}
          >
            You <Text style={{ color: "#FB382C" }}>cancelled</Text> your
            appointment with{" "}
            <Text style={{ fontFamily: "plusjakarta-semibold" }}>
              Beatrice James
            </Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginTop: RFValue(11),
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/clock.png")}
              style={{
                height: RFValue(18),
                width: RFValue(18),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: "plusjakarta-regular",
                color: "#414141",
              }}
            >
              6:30 PM
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#FAFAFA",
          padding: RFValue(15),
          marginHorizontal: RFValue(15),
          marginVertical: RFValue(5),
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: RFValue(13),
            fontFamily: "plusjakarta-regular",
          }}
        >
          Yesterday
        </Text>
        <View
          style={{
            backgroundColor: "#fff",
            padding: RFValue(12),
            marginTop: RFValue(10),
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#E6E6E6",
          }}
        >
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: "plusjakarta-regular",
              color: "#414141",
            }}
          >
            <Text style={{ fontFamily: "plusjakarta-semibold" }}>
              John Okafor
            </Text>{" "}
            is on the call now
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginTop: RFValue(11),
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/clock.png")}
              style={{
                height: RFValue(18),
                width: RFValue(18),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: "plusjakarta-regular",
                color: "#414141",
              }}
            >
              6:30 PM
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            padding: RFValue(12),
            marginTop: RFValue(10),
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#E6E6E6",
          }}
        >
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: "plusjakarta-regular",
              color: "#414141",
            }}
          >
            Your appointment with{" "}
            <Text style={{ fontFamily: "plusjakarta-semibold" }}>
              John Okafor
            </Text>{" "}
            is in 30 minutes
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginTop: RFValue(11),
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/clock.png")}
              style={{
                height: RFValue(18),
                width: RFValue(18),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: "plusjakarta-regular",
                color: "#414141",
              }}
            >
              6:30 PM
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            padding: RFValue(12),
            marginTop: RFValue(10),
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#E6E6E6",
          }}
        >
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: "plusjakarta-regular",
              color: "#414141",
            }}
          >
            You <Text style={{ color: "#FB382C" }}>cancelled</Text> your
            appointment with{" "}
            <Text style={{ fontFamily: "plusjakarta-semibold" }}>
              Beatrice James
            </Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginTop: RFValue(11),
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/clock.png")}
              style={{
                height: RFValue(18),
                width: RFValue(18),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: "plusjakarta-regular",
                color: "#414141",
              }}
            >
              6:30 PM
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#FAFAFA",
          padding: RFValue(15),
          marginHorizontal: RFValue(15),
          marginVertical: RFValue(20),
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: RFValue(13),
            fontFamily: "plusjakarta-regular",
          }}
        >
          11 Apr 2023
        </Text>
        <View
          style={{
            backgroundColor: "#fff",
            padding: RFValue(12),
            marginTop: RFValue(10),
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#E6E6E6",
          }}
        >
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: "plusjakarta-regular",
              color: "#414141",
            }}
          >
            You <Text style={{ color: "#06782F" }}>Successfully</Text> booked
            appointment with{" "}
            <Text style={{ fontFamily: "plusjakarta-semibold" }}>
              Beatrice James
            </Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              marginTop: RFValue(11),
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/clock.png")}
              style={{
                height: RFValue(18),
                width: RFValue(18),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(13),
                fontFamily: "plusjakarta-regular",
                color: "#414141",
              }}
            >
              6:30 PM
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
