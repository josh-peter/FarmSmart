import React, { memo, useMemo, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBarComponent: React.FC<SearchBarProps> = ({ onSearch }: any) => {
  const text = useMemo(() => "", []);

  const searchHandler = (value: string) => {
    if (value === "") return;
    router.push({
      pathname: `/search`,
      params: { search: value },
    });
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: RFValue(22),
            fontFamily: "outfit-bold",
            lineHeight: RFValue(30),
          }}
        >
          Welcome, Daniel
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "#E6E6E6",
            width: RFValue(46),
            height: RFValue(46),
            borderRadius: 12,
          }}
        >
          <View
            style={{
              position: "absolute",
              top: RFValue(9),
              left: RFValue(23),
              borderRadius: 30,
              width: 10,
              height: 10,
              backgroundColor: "#F71313",
              zIndex: 999,
            }}
          />
          <Ionicons name="notifications-outline" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: Platform.OS === "android" ? 13 : 24,
          alignItems: "center",
          marginTop: RFValue(23),
        }}
      >
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#E4E4E7",
            padding: RFValue(6),
            backgroundColor: "#Fdfdfd",
          }}
        >
          <TouchableOpacity style={styles.eyeIcon}>
            <Image
              resizeMode="contain"
              source={require("../../assets/images/search-normal.png")}
              style={{
                height: RFValue(23),
                width: RFValue(23),
              }}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Any property or location"
            style={styles.inputbox}
            placeholderTextColor="#5f5f5f"
            value=""
            onChangeText={(newText: string) => searchHandler(newText)}
            defaultValue={text}
          />
        </View>

        <Link href={"/search"} asChild>
          <TouchableOpacity
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#E6E6E6",
              width: RFValue(46),
              height: RFValue(50),
              borderRadius: 12,
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/filter-edit.png")}
              style={{
                height: RFValue(28),
                width: RFValue(28),
              }}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: Platform.OS === "android" ? 13 : 24,
    alignItems: "center",
    marginTop: RFValue(23),
  },
  inputbox: {
    width: RFValue(230),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: Platform.OS === "android" ? RFValue(6) : RFValue(8),
    paddingLeft: RFValue(32),
    paddingRight: RFValue(15),
  },
  eyeIcon: {
    position: "absolute",
    top: RFValue(10),
    left: RFValue(10),
    zIndex: 1,
  },
});

export default memo(SearchBarComponent);
