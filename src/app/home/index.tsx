import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
  FlatList,
  Dimensions,
  Animated
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
import SearchInputField from "../../components/inputs/searchInputField";
import { HomeIconsData } from "../../Data/homeIconsData";
import { BlurView } from "expo-blur";
import { PropertiesData } from "../../Data/propertiesData";
const { width, height } = Dimensions.get("window");
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHeartClicked, setHeartClicked] = useState(false);
  const [selectedType, setSelectedType] = useState<"Rental" | "Sales">("Rental");
  const [text, setText] = useState('')
  const [wishlist, setWishlist] = useState<any>()
  console.log(text, "hsdhshshsh")
  // const wishList = await AsyncStorage.getItem('wishlist')

  const searchHandler = (value: string) => {
    console.log(value, "hehehehehehe")
    if (value === '') return;

    // router.push(`/search`)
    router.push({
      pathname: `/search`,
      params: { search: value },
    });
  }
  
  // console.log(wishlist, "the wisisisi");

  useEffect(() => {

    const getWishList = async () => {
      try {
        
        const res = await AsyncStorage.getItem("@wishlist");
        if (res == null) return setWishlist([]);
        let parsedRes = JSON.parse(res!);
        setWishlist(parsedRes);
        await   AsyncStorage.clear()
      } catch (e) {
        console.log(e, "WISHKSSISISIIS")
      }
    }

  }, [])
  


  const toggleHeart = async (property:any) => {
    console.log(property, "the selected")
    setHeartClicked(!isHeartClicked);
    let existingWislist = wishlist
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

    setWishlist([...wishlist, property])
  };

  const handleIconPress = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const filteredData = PropertiesData.filter(
    (item) => item.type === selectedType
  );

  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true, // Add this line
    }).start();
  }, [fadeAnim]);

  
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
      <View style={styles.container}>
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
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "#E6E6E6",
              width: 56,
              height: 56,
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
          </View>
        </View>
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
                  resizeMode="contain"
                  source={item.img}
                  style={{
                    width: RFValue(300),
                    height: RFValue(270),
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
                  top: RFValue(240),
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
            </Animated.View>
          )}
        />
      </View>
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
    paddingVertical: RFValue(3),
    paddingLeft: RFValue(32),
    paddingRight: RFValue(15),
  },
  eyeIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
});
