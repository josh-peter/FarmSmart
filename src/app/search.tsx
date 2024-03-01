import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  FlatList,
  Modal,
  Platform,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Link,router, SearchParams, useSearchParams } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import { PropertiesData } from "../Data/propertiesData";
import ModalPicker from "../components/common/modalPicker";
import FilterModal from "../components/common/modals/filterModal";
import Carousel from "pinar";
import colors from "../constants/Colors";
import { Image } from "expo-image";
import { responsiveScreenWidth } from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get("window");

interface SearchItem {
  id: number;
  search: string;
}

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<SearchItem[]>([]);
  const [isHeartClicked, setHeartClicked] = useState(false);
  const [chooseData, setChooseData] = useState("All location");
  const [isModdalVisible, setisModdalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [propertyResult, setPropertyResult] = useState<any>()

  const closeModal = () => {
    setModalVisible(false);
  };

    const openModal = () => {
        setModalVisible(true)
    }

  const Searchresults: SearchItem[] = [
    { id: 1, search: "Land" },
    { id: 2, search: "Landmark hotel" },
    { id: 3, search: "Land nuet" },
    { id: 4, search: "Mainland apartment" },
    { id: 5, search: "Anambra" },
    { id: 6, search: "Onitcha, anambra" },
    { id: 7, search: "Oba, anambra" },
    { id: 8, search: "Nnewi, anambra" },
  ];

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = Searchresults.filter((item) =>
      item.search.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredResults(filtered);
  };

  const locationSelectedHandler = (query: string) => {
    setSearchQuery(query); 
    const filteredProperties = PropertiesData.filter((property) => {
      return property.location.toLowerCase().includes(query.toLowerCase())  || property.name.toLowerCase().includes(query.toLowerCase())
    })
    setPropertyResult(filteredProperties)
  }

  const handleClearSearch = () => {
    setSearchQuery("");
    setFilteredResults(Searchresults);
    setPropertyResult([])
  };

  const toggleHeart = () => {
    setHeartClicked(!isHeartClicked);
  };

  const changeModalVisibility = (bool: any) => {
    setisModdalVisible(bool);
  };

  const setData = (option: any) => {
    setChooseData(option);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
          marginTop: RFValue(23),
        }}
      >
        <Link href={"/home/"} asChild>
          <TouchableOpacity
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: colors.border2,
              width: 56,
              height: 56,
              borderRadius: 30,
            }}
          >
            <Image
              contentFit="contain"
              source={require("../assets/images/arrow-left.png")}
              style={{
                height: RFValue(28),
                width: RFValue(28),
              }}
            />
          </TouchableOpacity>
        </Link>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.border2,
            padding: RFValue(6),
            backgroundColor: colors.background,
          }}
        >
          <TouchableOpacity style={styles.eyeIcon}>
            <Image
              contentFit="contain"
              source={require("../assets/images/search-normal.png")}
              style={{
                height: RFValue(23),
                width: RFValue(23),
              }}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Any property or location"
            style={styles.inputbox}
            placeholderTextColor={colors.onboardingText}
            onChangeText={handleSearch}
            value={searchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              onPress={handleClearSearch}
              style={styles.clearIcon}
            >
              <MaterialIcons name="clear" size={14} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {propertyResult?.length > 0 && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: RFValue(23),
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() => changeModalVisibility(true)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#E4E4E7",
                paddingVertical: RFValue(12),
                paddingHorizontal: RFValue(10),
                backgroundColor: "#Fdfdfd",
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "urbanist-regular",
                }}
              >
                {chooseData}
              </Text>
              <Image
              contentFit="contain"
                source={require("../assets/images/arrow-down.png")}
                style={{
                  height: RFValue(23),
                  width: RFValue(17),
                }}
              />
            </TouchableOpacity>
            <Modal
              transparent={true}
              animationType="fade"
              visible={isModdalVisible}
              onRequestClose={() => changeModalVisibility(false)}
            >
              <ModalPicker
                changeModalVisibility={changeModalVisibility}
                setData={setData}
              />
            </Modal>
          </View>
          <TouchableOpacity
            onPress={openModal}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: colors.border2,
              width: 56,
              height: 56,
              borderRadius: 12,
            }}
          >
            <Image
              contentFit="contain"
              source={require("../assets/images/filter-edit.png")}
              style={{
                height: RFValue(28),
                width: RFValue(28),
              }}
            />
          </TouchableOpacity>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
          overflow: "hidden",
          paddingVertical: RFValue(10),
        }}
      >
        {searchQuery.length > 0 && !propertyResult
          ? filteredResults.map((search: any) => (
              <TouchableOpacity
                onPress={() => locationSelectedHandler(search.search)}
                style={{
                  backgroundColor: colors.warm,
                  paddingHorizontal: RFValue(13),
                  paddingVertical: RFValue(10),
                  borderRadius: 25,
                }}
                key={search.id}
              >
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-bold",
                    lineHeight: RFValue(20.16),
                    color: colors.green,
                  }}
                >
                  {search.search}
                </Text>
              </TouchableOpacity>
            ))
          : null}
      </View>

      <FlatList
        data={propertyResult}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        renderItem={({ item }) => (
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
              <TouchableOpacity onPress={() => toggleHeart()}>
                <View
                  style={{
                    position: "absolute",
                    top: RFValue(24),
                    right: RFValue(40),
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
                        ? require("../assets/images/heartclicked.png")
                        : require("../assets/images/heart.png")
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
                  width: width,
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
                    contentFit="cover"
                    key={index}
                    source={img}
                    style={{
                      width: width,
                      maxWidth:
                        Platform.OS === "ios" ? RFValue(315) : RFValue(301),
                      height: RFValue(260),
                      borderRadius: 15,
                    }}
                  />
                ))}
              </Carousel>
              <TouchableOpacity
                onPress={() => router.push("/property-details")}
              >
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
                  }}
                >
                  <Image
                    contentFit="contain"
                    source={require("../assets/images/location.png")}
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
            </View>
          </View>
        )}
      />
      <FilterModal modalVisible={isModalVisible} closeModal={closeModal} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(6),
  },
  inputbox: {
    width: RFValue(230),
    backgroundColor: "transparent",
    fontSize: RFValue(14),
    paddingVertical: Platform.OS === "android" ? RFValue(3) : RFValue(7),
    paddingLeft: RFValue(32),
    paddingRight: RFValue(15),
    fontFamily: "urbanist-regular",
  },
  selectbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(3),
  },
  eyeIcon: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  clearIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: "#fff",
    padding: RFValue(5),
    borderRadius: 20,
  },
  dropdown: {
    width: 150,
    margin: 16,
    height: 56,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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
    backgroundColor: colors.green,
    marginHorizontal: RFValue(2),
  },
});
