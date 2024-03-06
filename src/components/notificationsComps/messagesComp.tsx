import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import colors from '../../constants/Colors';
const { width, height } = Dimensions.get("window");

export default function MessagesComp() {
  return (
    <View style={{
      flex: 1, 
      width:width,
    }}>
      <View
        style={{
          paddingHorizontal: RFValue(15),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            alignItems: "center",
            marginTop: RFValue(23),
          }}
        >
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: colors.border2,
              padding: RFValue(6),
              backgroundColor: colors.background,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <TouchableOpacity style={styles.eyeIcon}>
              <Image
                resizeMode="contain"
                source={require("../../assets/images/search-normal-brown.png")}
                style={{
                  height: RFValue(23),
                  width: RFValue(23),
                }}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Search"
              style={styles.inputbox}
              placeholderTextColor={colors.onboardingText}
            />
          </View>
        </View>
      </View>
      <Link href={"/chatbox"} asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            overflow: "hidden",
            paddingHorizontal: RFValue(15),
            paddingVertical: RFValue(15),
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/images/avartars/avatar1.png")}
            style={{
              height: RFValue(55),
              width: RFValue(55),
            }}
          />
          <View>
            <Text
              style={{
                fontSize: RFValue(15),
                fontFamily: "outfit-bold",
                color: colors.onboardingText,
              }}
            >
              Abigail Williams
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/images/read.png")}
                style={{
                  height: RFValue(15),
                  width: RFValue(15),
                }}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "urbanist-regular",
                  color: colors.onboardingText,
                  width: RFValue(190),
                }}
              >
                I don’t think I will be able to make it. I really love
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: RFValue(12),
              fontFamily: "urbanist-regular",
              color: colors.onboardingText,
              marginRight: RFValue(7),
            }}
          >
            12:18
          </Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          paddingHorizontal: RFValue(15),
          paddingVertical: RFValue(2),
        }}
      >
        <Image
          resizeMode="contain"
          source={require("../../assets/images/avartars/avatar2.png")}
          style={{
            height: RFValue(55),
            width: RFValue(55),
          }}
        />
        <View>
          <Text
            style={{
              fontSize: RFValue(15),
              fontFamily: "outfit-bold",
              color: colors.onboardingText,
            }}
          >
            Abigail Williams
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/unread.png")}
              style={{
                height: RFValue(15),
                width: RFValue(15),
              }}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                fontSize: RFValue(12),
                fontFamily: "urbanist-regular",
                color: colors.onboardingText,
                width: RFValue(160),
              }}
            >
              I don’t think I will be able to make it.
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: RFValue(12),
            fontFamily: "urbanist-regular",
            color: colors.onboardingText,
          }}
        >
          Yesterday
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          paddingHorizontal: RFValue(15),
          paddingVertical: RFValue(15),
        }}
      >
        <Image
          resizeMode="contain"
          source={require("../../assets/images/avartars/avatar3.png")}
          style={{
            height: RFValue(55),
            width: RFValue(55),
          }}
        />
        <View>
          <Text
            style={{
              fontSize: RFValue(15),
              fontFamily: "outfit-bold",
              color: colors.onboardingText,
            }}
          >
            Abigail Williams
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontSize: RFValue(12),
              fontFamily: "outfit-bold",
              color: colors.green,
              width: RFValue(185),
            }}
          >
            I don’t think I will be able to make it.
          </Text>
        </View>
        <Text
          style={{
            fontSize: RFValue(12),
            fontFamily: "urbanist-regular",
            color: colors.onboardingText,
          }}
        >
          Monday
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          paddingHorizontal: RFValue(15),
          paddingVertical: RFValue(15),
        }}
      >
        <Image
          resizeMode="contain"
          source={require("../../assets/images/avartars/avatar4.png")}
          style={{
            height: RFValue(55),
            width: RFValue(55),
          }}
        />
        <View>
          <Text
            style={{
              fontSize: RFValue(15),
              fontFamily: "outfit-bold",
              color: colors.onboardingText,
            }}
          >
            Abigail Williams
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontSize: RFValue(12),
              fontFamily: "urbanist-regular",
              color: colors.onboardingText,
              width: RFValue(165),
            }}
          >
            I don’t think I will be able to make it.
          </Text>
        </View>
        <Text
          style={{
            fontSize: RFValue(12),
            fontFamily: "urbanist-regular",
            color: colors.onboardingText,
          }}
        >
          28/03/2023
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  inputbox: {
    width: RFValue(230),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(16),
    paddingVertical: RFValue(3),
    paddingLeft: RFValue(32),
    paddingRight: RFValue(15),
  },
  eyeIcon: {
    position: "absolute",
    left: 6,
    top: "20%",
    transform: [{ translateY: RFValue(3.0) }],
    zIndex: 10,
  },
});