import React, { memo, useEffect, useRef, useState } from "react";
import { PropertiesData } from "../../Data/propertiesData";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Link, Stack, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import Carousel from "pinar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";

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
      <TouchableOpacity onPress={() => router.push("/property-details")}>
        <View
          style={{
            marginBottom: RFValue(20),
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
                    color: "#06782F",
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
                  right: RFValue(20),
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
                height: RFValue(260),
                marginBottom: RFValue(15),
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
                  key={index}
                  source={img}
                  style={{
                    width: RFValue(310),
                    height: RFValue(260),
                    borderRadius: 15,
                  }}
                />
              ))}
            </Carousel>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: RFValue(20),
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: RFValue(3),
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
                color: "#414141",
              }}
            >
              {item.location}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );

  return (
    <View>
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
    backgroundColor: "#06782F",
    marginHorizontal: RFValue(2),
  },
});
