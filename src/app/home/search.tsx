import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import { PropertiesData } from "../../Data/propertiesData";
import SelectDropdown from "react-native-select-dropdown";

interface SearchItem {
  id: number;
  search: string;
}

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<SearchItem[]>([]);

  const Searchresults: SearchItem[] = [
    { id: 1, search: "Lands" },
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
    
    const handleClearSearch = () => {
    setSearchQuery('');
    // Optionally reset filtered results as well
    setFilteredResults(Searchresults);
    };
    
      const [activeIndex, setActiveIndex] = useState<number | null>(null);
      const [isHeartClicked, setHeartClicked] = useState(false);
      const [selectedType, setSelectedType] = useState<"Rental" | "Sales">(
        "Rental"
      );

      const toggleHeart = () => {
        setHeartClicked(!isHeartClicked);
      };

      const handleIconPress = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
      };

      const filteredData = PropertiesData.filter(
        (item) => item.type === selectedType
      );

      const [fadeAnim] = useState(new Animated.Value(0));

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
        <Link href={"/home/search"} asChild>
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
              source={require("../../assets/images/arrow-left.png")}
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
      <View
        style={{
          flexDirection: "row",
          justifyContent:"space-between",
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
          <TextInput
            placeholder="Any property or location"
            style={styles.selectbox}
            placeholderTextColor="#5f5f5f"
          />
        </View>
        <Link href={"/home/search"} asChild>
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
          gap: 10,
          flexWrap: "wrap",
          overflow: "hidden",
          paddingVertical: RFValue(20),
        }}
      >
        {searchQuery.length > 0
          ? filteredResults.map((search) => (
              <TouchableOpacity
                style={{
                  backgroundColor: "#f8fffb",
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
                    color: "#06782F",
                  }}
                >
                  {search.search}
                </Text>
              </TouchableOpacity>
            ))
          : null}
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
              <Image
                resizeMode="cover"
                source={item.img}
                style={{
                  width: RFValue(300),
                  height: RFValue(270),
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
  );
}
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
});
