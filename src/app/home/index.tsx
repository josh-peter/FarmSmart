import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  Animated,
  Platform
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
import { HomeIconsData } from "../../Data/homeIconsData";
import { PropertiesData } from "../../Data/propertiesData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Skeleton } from "moti/skeleton";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get("window");

const Index = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [selectedType, setSelectedType] = useState<"Rental" | "Sales">(
    "Rental"
  );
  const [text, setText] = useState("");
  const [wishlist, setWishlist] = useState<any>();
  const [loading, setLoading] = useState(false);
  

  const searchHandler = (value: string) => {
    if (value === "") return;

    router.push({
      pathname: `/search`,
      params: { search: value },
    });
  };

  useEffect(() => {
    const getWishList = async () => {
      try {
        const res = await AsyncStorage.getItem("@wishlist");
        if (res == null) return setWishlist([]);
        let parsedRes = JSON.parse(res!);
        setWishlist(parsedRes);
        await AsyncStorage.clear();
      } catch (e) {}
    };
  }, []);

  const toggleHeart = async (property: any) => {
    setIsHeartClicked(!isHeartClicked);
    let existingWislist = wishlist;
    if (!existingWislist) {
      existingWislist = [property];
      await AsyncStorage.setItem("@wishlist", JSON.stringify(wishlist));

      return setWishlist([property]);
    } else {
      const isExxist = existingWislist?.find(
        (item: any) => item.id === property.id
      );
      if (isExxist) {
        return;
      }
    }

    setWishlist([...wishlist, property]);
  };

  const handleIconPress = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const filteredData = PropertiesData.filter(
    (item) => item.type === selectedType
  );

  const fade = useRef(new Animated.Value(0)).current;

  const animation = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation();
  }, []);

    const colorMode: "light" | "dark" = "light";

  return (
    <>
      <Stack.Screen
        options={{
          title: "Home",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <StatusBar style="dark" />
      <Animated.View
        style={[
          styles.container,
          {
            opacity: fade,
            transform: [
              {
                translateY: fade.interpolate({
                  inputRange: [0, 1],
                  outputRange: [150, 0],
                }),
              },
            ],
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Skeleton colorMode={colorMode} width={"70%"} height={30}>
            {loading ? null : (
              <Text
                style={{
                  fontSize: RFValue(22),
                  fontFamily: "outfit-bold",
                  lineHeight: RFValue(30),
                }}
              >
                Welcome, Daniel
              </Text>
            )}
          </Skeleton>

          <Skeleton colorMode={colorMode} width={RFValue(50)} height={56}>
            {loading ? null : (
              <Link href={"/notification"} asChild>
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
                  <Image
                    resizeMode="contain"
                    source={require("../../assets/images/notification.png")}
                    style={{
                      height: RFValue(28),
                      width: RFValue(28),
                    }}
                  />
                </TouchableOpacity>
              </Link>
            )}
          </Skeleton>
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
              onChangeText={(newText) => searchHandler(newText)}
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: RFValue(20),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(18),
              fontFamily: "outfit-bold",
              lineHeight: RFValue(30),
            }}
          >
            Properties
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              backgroundColor: "#E4E4E7",
              padding: RFValue(3),
              borderRadius: RFValue(7),
            }}
          >
            <TouchableOpacity
              onPress={() => setSelectedType("Rental")}
              style={{
                paddingVertical: RFValue(7),
                paddingHorizontal: RFValue(20),
                borderRadius: RFValue(5),
                backgroundColor: selectedType === "Rental" ? "#fff" : "#E4E4E7",
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "plusjakarta-regular",
                }}
              >
                Rent
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedType("Sales")}
              style={{
                paddingVertical: RFValue(7),
                paddingHorizontal: RFValue(20),
                borderRadius: RFValue(5),
                backgroundColor: selectedType === "Sales" ? "#fff" : "#E4E4E7",
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "plusjakarta-regular",
                }}
              >
                Buy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: RFValue(20),
            marginBottom: RFValue(20),
          }}
        >
          {HomeIconsData?.map((icon, index: number) => (
            <TouchableOpacity
              onPress={() => handleIconPress(index)}
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={icon.id}
            >
              <Image
                resizeMode="contain"
                source={icon.img}
                style={{
                  height: RFValue(22),
                  width: RFValue(22),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "plusjakarta-regular",
                  lineHeight: RFValue(17),
                  marginTop: RFValue(3),
                  color: activeIndex === index ? "#06782F" : "#414141",
                  borderBottomWidth: activeIndex === index ? 2 : 0,
                  borderBottomColor:
                    activeIndex === index ? "#06782F" : "transparent",
                }}
              >
                {icon.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={filteredData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push("/property-details")}
              style={{
                marginBottom: RFValue(20),
                position: "relative",
                overflow:"hidden"
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
                <Image
                  resizeMode="cover"
                  source={item.img}
                  style={{
                    width: Platform.OS === "ios" ? RFValue(310) : RFValue(300),
                    height: RFValue(220),
                    borderRadius: 15,
                     marginBottom:RFValue(15),
                    zIndex: -999,
                  }}
                />
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
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                  position: "absolute",
                  top: RFValue(200),
                  left: RFValue(48),
                 
                }}
              >
                <View
                  style={{
                    width: RFValue(18),
                    height: RFValue(4),
                    borderRadius: 30,
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <View
                  style={{
                    width: RFValue(18),
                    height: RFValue(4),
                    borderRadius: 30,
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <View
                  style={{
                    width: RFValue(18),
                    height: RFValue(4),
                    borderRadius: 30,
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <View
                  style={{
                    width: RFValue(18),
                    height: RFValue(4),
                    borderRadius: 30,
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <View
                  style={{
                    width: RFValue(18),
                    height: RFValue(4),
                    borderRadius: 30,
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <View
                  style={{
                    width: RFValue(18),
                    height: RFValue(4),
                    borderRadius: 30,
                    backgroundColor: "#06782F",
                  }}
                />
                <View
                  style={{
                    width: RFValue(18),
                    height: RFValue(4),
                    borderRadius: 30,
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <View
                  style={{
                    width: RFValue(18),
                    height: RFValue(4),
                    borderRadius: 30,
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <View
                  style={{
                    width: RFValue(18),
                    height: RFValue(4),
                    borderRadius: 30,
                    backgroundColor: "#D9D9D9",
                  }}
                />
                <View
                  style={{
                    width: RFValue(18),
                    height: RFValue(4),
                    borderRadius: 30,
                    backgroundColor: "#D9D9D9",
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(30),
  },
  inputbox: {
    width: RFValue(230),
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
});
