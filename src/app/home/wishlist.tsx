import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View,Image, TextInput, Platform } from 'react-native'
import React,{useEffect, useState} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RFValue } from 'react-native-responsive-fontsize';
import { PropertiesData } from "../../Data/propertiesData";
import { Link } from 'expo-router';
import Carousel from "pinar";


const Wishlist = () => {
  const [wishlist, setWishlist] = useState<any>();

  useEffect(() => {
    const getWishList = async () => {
      try {
        const res = await AsyncStorage.getItem("@wishlist");
        if (res == null) return setWishlist([]);
        let parsedRes = JSON.parse(res!);
        setWishlist(parsedRes);
      
      } catch (e) {
       
      }
    };

    getWishList();
  }, []);

  const [isHeartClicked, setHeartClicked] = useState(true);


    const toggleHeart = async (property: any) => {
      console.log(property, "the selected");
      setHeartClicked(!isHeartClicked);
      setWishlist([...wishlist, property]);
      await AsyncStorage.setItem("@wishlist", JSON.stringify(wishlist));
    };

  
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: RFValue(23),
          fontFamily: "outfit-bold",
          lineHeight: RFValue(30),
        }}
      >
        Wishlist
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
          marginTop: RFValue(13),
          marginBottom: RFValue(23),
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
          />
        </View>
        <Link href={"/search"} asChild>
          <TouchableOpacity
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#E6E6E6",
              width: 56,
              height: 56,
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
      <FlatList
        data={PropertiesData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        renderItem={({ item }) => (
          <Animated.View
            style={{
              marginBottom: RFValue(20),
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
              <TouchableOpacity onPress={toggleHeart}>
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
                    resizeMode="contain"
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
                      width:
                        Platform.OS === "ios" ? RFValue(310) : RFValue(300),
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
                  marginTop: RFValue(10),
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
          </Animated.View>
        )}
      />
    </View>
  );
}

export default Wishlist

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(30),
  },
  inputbox: {
    width: Platform.OS === "android" ? RFValue(230) : RFValue(245),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: Platform.OS === "android" ? RFValue(3) : RFValue(8),
    paddingLeft: RFValue(32),
    paddingRight: RFValue(15),
  },
  eyeIcon: {
    position: "absolute",
    top: RFValue(10),
    left: RFValue(10),
    zIndex: 1,
  },
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