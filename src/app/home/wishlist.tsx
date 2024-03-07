import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View,TextInput, Platform, Dimensions } from 'react-native'
import React,{useEffect, useState} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RFValue } from 'react-native-responsive-fontsize';
import { PropertiesData } from "../../Data/propertiesData";
import { Link } from 'expo-router';
import Carousel from "pinar";
import { Image } from 'expo-image';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import colors from '../../constants/Colors';
const { width, height } = Dimensions.get("window");


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
  
  const renderPropertyItem = ({ item }: { item: any }) => (
    <Animated.View
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
        <TouchableOpacity onPress={toggleHeart}>
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
              key={index}
              source={img}
              contentFit='contain'
              style={{
                width: width,
                maxWidth: Platform.OS === "ios" ? RFValue(315) : RFValue(301),
                height: RFValue(280),
                borderRadius: 25,
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
    </Animated.View>
  );
  
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: RFValue(20),
          fontFamily: "outfit-bold",
          lineHeight: RFValue(30),
        }}
      >
        Wishlist
      </Text>
      <View
        style={{
          width: responsiveScreenWidth(91),
          borderRadius: 10,
          borderWidth: 1,
          borderColor: colors.border2,
          padding: RFValue(6),
          backgroundColor: colors.background,
          marginTop: RFValue(13),
          marginBottom: RFValue(23),
        }}
      >
        <TouchableOpacity style={styles.eyeIcon}>
          <Image
            contentFit="contain"
            source={require("../../assets/images/search-normal.png")}
            style={{
              height: RFValue(23),
              width: RFValue(23),
            }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search wishlist"
          style={styles.inputbox}
          placeholderTextColor="#5f5f5f"
        />
      </View>

      <View style={{ flex: 1, height: height, marginBottom: RFValue(-20) }}>
        <FlatList
          data={PropertiesData}
          showsVerticalScrollIndicator={false}
          renderItem={renderPropertyItem}
          keyExtractor={(item) => item.id.toString()}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          windowSize={5}
        />
      </View>
    </View>
  );
}

export default Wishlist

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(30),
    overflow: "hidden",
backgroundColor:colors.background
  },
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "urbanist-regular",
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