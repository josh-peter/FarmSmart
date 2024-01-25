import React from 'react';
import { View, Text, Image,TouchableOpacity, ScrollView, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default function Account() {

  const accountData = [
    {
      id: 1,
      name: "Account",
      img: require("../../assets/images/account.png"),
      info: "Account Information",
      entails: "Email, date of birth and phone number",
    },
    {
      id: 2,
      name: "My Bookings",
      img: require("../../assets/images/booking.png"),
      info: "Booking",
      entails: "Manage all paid bookings",
    },
    {
      id: 3,
      name: "Payment",
      img: require("../../assets/images/payment.png"),
      info: "Payment management",
      entails: "Manage your card payment and history",
    },
    {
      id: 4,
      name: "Notification",
      img: require("../../assets/images/notifi.png"),
      info: "Notification setting",
      entails: "Manage all notification settings",
    },
    {
      id: 5,
      name: "Security",
      img: require("../../assets/images/security.png"),
      info: "Security",
      entails: "Manage all your securities and passwords",
    },
  ];

    const additionalData = [
      {
        id: 1,
        img: require("../../assets/images/help.png"),
        info: "Help center",
        entails: "FAQs, Contact support",
      },
      {
        id: 2,
        img: require("../../assets/images/privacy.png"),
        info: "Privacy Policy",
        entails: "Terms and condition",
      },
      {
        id: 3,
        img: require("../../assets/images/rate.png"),
        info: "Rate App",
        entails: "Help us serve you better",
      },
    ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: "#fff",
        paddingVertical: RFValue(40),
        paddingHorizontal: RFValue(15),
      }}
    >
      <View>
        <Text
          style={{
            fontSize: RFValue(15),
            fontFamily: "outfit-bold",
            lineHeight: RFValue(40),
            color: "#BABBBC",
          }}
        >
          Profile
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#f9fafa",
            padding: RFValue(10),
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: RFValue(8),
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/userProfile.png")}
              style={{
                height: RFValue(60),
                width: RFValue(50),
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "plusjakarta-semibold",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
                Daniel Israel
              </Text>
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "plusjakarta-regular",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
                Show profile
              </Text>
            </View>
          </View>
          <Image
            resizeMode="contain"
            source={require("../../assets/images/arrow-right.png")}
            style={{
              height: RFValue(22),
              width: RFValue(22),
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        {accountData?.map((item) => (
          <View
            key={item.id}
            style={{
              marginTop: RFValue(10),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(15),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(40),
                color: "#BABBBC",
              }}
            >
              {item.name}
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#f9fafa",
                padding: RFValue(10),
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: RFValue(8),
                }}
              >
                <Image
                  resizeMode="contain"
                  source={item.img}
                  style={{
                    height: RFValue(60),
                    width: RFValue(50),
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(12),
                      fontFamily: "plusjakarta-semibold",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}
                  >
                    {item.info}
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(10),
                      fontFamily: "plusjakarta-regular",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}
                  >
                    {item.entails}
                  </Text>
                </View>
              </View>
              <Image
                resizeMode="contain"
                source={require("../../assets/images/arrow-right.png")}
                style={{
                  height: RFValue(22),
                  width: RFValue(22),
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View>
        <Text
          style={{
            fontSize: RFValue(15),
            fontFamily: "outfit-bold",
            lineHeight: RFValue(40),
            color: "#BABBBC",
          }}
        >
          Location
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#f9fafa",
            padding: RFValue(10),
            borderRadius: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "plusjakarta-regular",
                lineHeight: RFValue(20),
                color: "#1A1A1A",
              }}
            >
              Give location to get nearby property suggestion
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "plusjakarta-regular",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
                Grant location access
              </Text>
              <Image
                resizeMode="contain"
                source={require("../../assets/images/switch.png")}
                style={{
                  height: RFValue(32),
                  width: RFValue(32),
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        {additionalData?.map((item) => (
          <View
            key={item.id}
            style={{
              marginTop: RFValue(20),
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#f9fafa",
                padding: RFValue(10),
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: RFValue(8),
                }}
              >
                <Image
                  resizeMode="contain"
                  source={item.img}
                  style={{
                    height: RFValue(60),
                    width: RFValue(50),
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: RFValue(12),
                      fontFamily: "plusjakarta-semibold",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}
                  >
                    {item.info}
                  </Text>
                  <Text
                    style={{
                      fontSize: RFValue(10),
                      fontFamily: "plusjakarta-regular",
                      lineHeight: RFValue(20),
                      color: "#1A1A1A",
                    }}
                  >
                    {item.entails}
                  </Text>
                </View>
              </View>
              <Image
                resizeMode="contain"
                source={require("../../assets/images/arrow-right.png")}
                style={{
                  height: RFValue(22),
                  width: RFValue(22),
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View
        style={{
          marginTop: RFValue(20),
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#f9fafa",
            padding: RFValue(10),
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: RFValue(8),
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/logout.png")}
              style={{
                height: RFValue(60),
                width: RFValue(50),
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: RFValue(15),
                  fontFamily: "plusjakarta-regular",
                  lineHeight: RFValue(20),
                  color: "#1A1A1A",
                }}
              >
                Logout
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#ECFFF4",
          padding: Platform.OS === "ios" ? 18 : 17,
          borderRadius: 10,
          marginTop: RFValue(25),
         
        }}
      >
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: "outfit-regular",
            color: "#06782F",
            textAlign: "center",
          }}
        >
          Switch to agent account mode
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
