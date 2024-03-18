import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import colors from "../../constants/Colors";

const AddressPicker = (props: any) => {
  const [activeItem, setActiveItem] = useState("All location");
  const OPTIONS = [
    "All location",
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>(OPTIONS);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = OPTIONS.filter((option) =>
      option.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;

  const onPressItem = (option: any) => {
    setActiveItem(option);
    props.changeVisibility(false);
    props.setData(option);
  };

  const option = filteredOptions.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={activeItem === item ? styles.text : styles.option}
      onPress={() => onPressItem(item)}>
      <Text
        style={{
          fontSize: RFValue(14),
          fontFamily: "urbanist-medium",
        }}>
        {item}
      </Text>
    </TouchableOpacity>
  ));
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#F0F4FF",
            padding: RFValue(6),
            backgroundColor: "FDFDFD",
            position: "relative",
            overflow: "hidden",
          }}>
          <TouchableOpacity style={styles.eyeIcon}>
            <Image
              resizeMode="contain"
              source={require("../../assets/images/search-normal.png")}
              style={{
                height: RFValue(20),
                width: RFValue(20),
              }}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="location"
            style={styles.inputbox}
            placeholderTextColor="#5f5f5f"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
        {option}
        {filteredOptions.length === 0 && (
          <Text
            style={{
              textAlign: "center",
              color: "#5f5f5f",
              fontSize: RFValue(16),
              fontFamily: "urbanist-medium",
              marginTop: RFValue(15)
            }}>
            No match found
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default AddressPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    minHeighteight: RFValue(40),
    maxHeight: RFValue(380),
    padding: RFValue(15),
    borderRadius: 10,
    borderWidth: RFValue(1),
    borderColor: "#F0F4FF",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 20,
    elevation: 4,
    shadowColor: "#d1d5db",
    marginTop: RFValue(15),
  },
  text: {
    fontSize: RFValue(14),
    fontFamily: "urbanist-medium",
    backgroundColor: "#FDFDFD",
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(10),
    marginTop: RFValue(3),
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
  },
  option: {
    padding: RFValue(10),
    marginTop: RFValue(3),
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
});
