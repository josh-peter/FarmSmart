import React, { memo, useEffect, useRef, useState } from "react";
import { PropertiesData } from "../../Data/propertiesData";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Platform,
} from "react-native";
import { Link, Stack, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import Carousel from "pinar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import colors from "../../constants/Colors";
const { width, height } = Dimensions.get("window");

interface PropertyListProps {
  selectedType: "Rental" | "Sales";
}

const PropertyList: React.FC<PropertyListProps> = ({ selectedType }) => {
     const [activeIndex, setActiveIndex] = useState<number | null>(null);
     const [isHeartClicked, setIsHeartClicked] = useState(false);
     const [wishlist, setWishlist] = useState<any>([]);


     useEffect(() => {
       const getWishList = async () => {
         try {
           const res = await AsyncStorage.getItem("@wishlist");
           if (res) {
             const parsedRes = JSON.parse(res);
             setWishlist(parsedRes);
           }
         } catch (error) {
           console.error("Error fetching wishlist:", error);
         }
       };
       getWishList();
     }, []);

     const toggleHeart = async (property: any) => {
       setIsHeartClicked(!isHeartClicked);
       const existingWishlist = [...wishlist];
       const isExist = existingWishlist.find(
         (item: any) => item.id === property.id
       );
       if (!isExist) {
         existingWishlist.push(property);
         setWishlist(existingWishlist);
         await AsyncStorage.setItem(
           "@wishlist",
           JSON.stringify(existingWishlist)
         );
       }
     };
    
    
  const filteredData = PropertiesData.filter(
    (item) => item.type === selectedType
    );
    
    const renderPropertyItem = ({ item }: { item: any }) => (
      <View>
        <View
          style={{
            width: responsiveScreenWidth(100),
            marginBottom: RFValue(40),
            position: "relative",
            overflow: "hidden",
          }}
        >
          <View
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  position: "absolute",
                  top: RFValue(28),
                  left: RFValue(22),
                  paddingVertical: RFValue(8),
                  paddingHorizontal: RFValue(22),
                  backgroundColor: "#ECFFF452",
                  borderRadius: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(13),
                    fontFamily: "outfit-bold",
                    color: colors.green,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleHeart(item)}>
              <View
                style={{
                  position: "absolute",
                  top: RFValue(24),
                  right: RFValue(50),
                  paddingVertical: RFValue(8),
                  paddingHorizontal: RFValue(10),
                  backgroundColor: "#ECFFF452",
                  borderRadius: 30,
                }}
              >
                <Image
                  contentFit="contain"
                  source={
                    isHeartClicked
                      ? require("../../assets/images/heartclicked.png")
                      : require("../../assets/images/heart.png")
                  }
                  style={{
                    height: RFValue(28),
                    width: RFValue(28),
                  }}
                />
              </View>
            </TouchableOpacity>
            <Carousel
              showsControls={false}
              dotStyle={styles.dot}
              activeDotStyle={styles.activeDot}
              autoplay={true}
              autoplayInterval={3000}
              style={{
                height: RFValue(270),
                marginBottom: RFValue(5),
                zIndex: -999,
              }}
            >
              {[
                item.img,
                item.img1,
                item.img2,
                item.img3,
                item.img4,
                item.img5,
                item.img6,
              ].map((img, index) => (
                <Image
                  contentFit="cover"
                  key={index}
                  source={img}
                  style={{
                    width: width,
                    maxWidth:
                      Platform.OS === "ios" ? RFValue(325) : RFValue(301),
                    height: RFValue(270),
                    borderRadius:  Platform.OS === "ios" ? 15 :10,
                  }}
                />
              ))}
            </Carousel>
            <TouchableOpacity onPress={() => router.push("/property-details")}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: RFValue(0),
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
                    marginRight: RFValue(25),
                    borderRadius: RFValue(10),
                    backgroundColor: colors.warm,
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "outfit-medium",
                      color: colors.green,
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
                    color: colors.green,
                  }}
                >
                  {item.price}{" "}
                  <Text
                    style={{
                      fontSize: RFValue(14),
                      fontFamily: "urbanist-regular",
                      color: colors.onboardingText,
                    }}
                  >
                    {item.type === "Rental" ? item.rent : ""}
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: RFValue(3),
                  gap: 5,
                }}
              >
                <Image
                  contentFit="contain"
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
                    color: colors.onboardingText,
                  }}
                >
                  {item.location}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );

  return (
    <View
     style={{flex:1, height:height, marginBottom:RFValue(-20)}}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData}
        renderItem={renderPropertyItem}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
      />
    </View>
  );
};

export default memo(PropertyList);

const styles = StyleSheet.create({
  dot: {
    width: RFValue(18),
    height: RFValue(4),
    borderRadius: 30,
    backgroundColor: "#D9D9D9",
    marginHorizontal: RFValue(2),
  },
  activeDot: {
    width: RFValue(18),
    height: RFValue(4),
    borderRadius: 30,
    backgroundColor: colors.green,
    marginHorizontal: RFValue(2),
  },
  activeButton: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: colors.background,
    fontSize: RFValue(14),
  },
  activeBtn: {
    backgroundColor: colors.primary,
    marginTop: RFValue(10),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
});
