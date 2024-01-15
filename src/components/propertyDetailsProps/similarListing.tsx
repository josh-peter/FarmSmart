import { PropertiesData } from "../../Data/propertiesData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");

export default function Similarlisting() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHeartClicked, setHeartClicked] = useState(false);
  const [selectedType, setSelectedType] = useState<"Rental" | "Sales">(
    "Rental"
  );
  const [text, setText] = useState("");
  const [wishlist, setWishlist] = useState<any>();
  console.log(text, "hsdhshshsh");
  // const wishList = await AsyncStorage.getItem('wishlist')

  const searchHandler = (value: string) => {
    console.log(value, "hehehehehehe");
    if (value === "") return;

    // router.push(`/search`)
    router.push({
      pathname: `/search`,
      params: { search: value },
    });
  };

  // console.log(wishlist, "the wisisisi");

  const toggleHeart = async (property: any) => {
    console.log(property, "the selected");
    setHeartClicked(!isHeartClicked);
    let existingWislist = wishlist;
    if (!existingWislist) {
      existingWislist = [property];
      await AsyncStorage.setItem("@wishlist", JSON.stringify(wishlist));

      return setWishlist([property]);
    } else {
      const isExxist = existingWislist?.find(
        (item: any) => item.id === property.id
      );
      console.log(isExxist, "rersrsrsrsrsrsrsrsrsr");
      if (isExxist) {
        console.log("i dege already");
        return;
      }
    }

    setWishlist([...wishlist, property]);
  };

  const handleIconPress = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <View
      style={{
        height: RFValue(390),
        width: width,
        paddingHorizontal: RFValue(20),
      }}
    >
      <Text
        style={{
          fontSize: RFValue(16),
          fontFamily: "outfit-bold",
          color: "#161917",
          lineHeight: RFValue(30),
          marginTop: RFValue(20),
        }}
      >
        Similar listing
      </Text>
      <FlatList
        data={PropertiesData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
        style={{ width: width }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push("/property-details")}
            style={{
              marginBottom: RFValue(20),
              marginRight: RFValue(15),
            }}
          >
            <View
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                resizeMode="cover"
                source={item.img}
                style={{
                  width: RFValue(250),
                  height: RFValue(200),
                  zIndex: -999,
                  borderRadius: 20,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: RFValue(10),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(18),
                  fontFamily: "outfit-bold",
                }}
              >
                {item.description}
              </Text>
              <TouchableOpacity
                style={{
                  paddingVertical: RFValue(7),
                  paddingHorizontal: RFValue(20),
                  borderRadius: RFValue(5),
                  backgroundColor: "#ECFFF4",
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-medium",
                    color: "#06782F",
                  }}
                >
                  {item.type}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  fontSize: RFValue(18),
                  fontFamily: "outfit-bold",
                  color: "#06782F",
                }}
              >
                {item.price}{" "}
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "plusjakarta-regular",
                    color: "#414141",
                  }}
                >
                  {item.type === "Rental" ? item.rent : ""}
                </Text>
              </Text>
            </View>
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
                  width: RFValue(20),
                  height: RFValue(20),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "plusjakarta-regular",
                  color: "#414141",
                }}
              >
                {item.location}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity>
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: "outfit-regular",
            color: "#06782F",
            lineHeight: RFValue(40),
            marginTop: RFValue(4),
          }}
        >
          See all +1K similar listing
        </Text>
      </TouchableOpacity>
    </View>
  );
}
