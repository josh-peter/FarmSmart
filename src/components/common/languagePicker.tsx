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
import Checkbox from "expo-checkbox";
import colors from "../../constants/Colors";

const LanguagePicker = (props: any) => {
  const [activeLanguages, setActiveLanguages] = useState("English");
  const [isChecked, setIsChecked] = useState(false);
  const OPTIONS = [
    "English",
    "Yoruba",
    "Hausa",
    "Ibibio",
    "Igbo",
    "French",
    "Spanish",
    "Italian",
    "Dutch",
  ];

  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;

  const onPressItem = (option: any) => {
    setActiveLanguages(option);
    props.changeModalLangVisibility(false);
    props.setData(option);
  };

  const option = OPTIONS.map((item, index) => (
    <View
      key={index}
      style={styles.option}>
      <Checkbox
        style={{
          borderRadius: RFValue(4),
        }}
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? colors.primary : "#e1e1e1"}
      />
      <Text
        style={{
          fontSize: RFValue(14),
          fontFamily: "urbanist-medium",
        }}>
        {item}
      </Text>
    </View>
  ));
  return (
    <View
      style={styles.container}>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}>
          {option}
        </ScrollView>
      </View>
    </View>
  );
};

export default LanguagePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  modal: {
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 9.66 / 2,
    elevation: 12,
    overflow: "hidden",
  },
  text: {
    fontSize: RFValue(17),
    fontFamily: "plusjakarta-regular",
    backgroundColor: "#F8FFFB",
    minWidth: RFValue(288),
    padding: RFValue(15),
    borderWidth: 1,
    borderColor: "#06782F",
    borderRadius: 8,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: RFValue(6),
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(8),
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
