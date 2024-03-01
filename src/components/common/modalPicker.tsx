import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
  Image,
  Platform
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../constants/Colors";

const ModalPicker = (props: any) => {
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

  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;

    const onPressItem = (option: any) => {
      setActiveItem(option);
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const option = OPTIONS.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.option}
      onPress={() => onPressItem(item)}
    >
     
      <Text
        style={[
          activeItem === item
            ? styles.text
            : {
                fontSize: RFValue(17),
                fontFamily: "plusjakarta-regular",
              },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  ));
  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 20, height: RFValue(320) }]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
        >
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor:colors.border2,
              padding: RFValue(10),
              backgroundColor: colors.background,
              marginHorizontal: RFValue(15),
              marginVertical: RFValue(8),
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
              placeholder="location"
              style={styles.inputbox}
              placeholderTextColor={colors.onboardingText}
            />
          </View>
          {option}
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export default ModalPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:
      Platform.OS === "android"
        ? responsiveScreenHeight(-10)
        : responsiveScreenHeight(-5),
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.24,
    shadowRadius: 9.66 / 2,
    elevation: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border2,
  },
  text: {
    fontSize: RFValue(17),
    fontFamily: "urbanist-regular",
    backgroundColor: "#F8FFFB",
    minWidth: RFValue(288),
    padding: RFValue(15),
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 8,
  },
  option: {
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(8),
    marginTop: RFValue(3),
    alignItems: "flex-start",
  },
  inputbox: {
    width: RFValue(230),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(17),
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
