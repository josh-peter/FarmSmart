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

const LanguageModalPicker = (props: any) => {
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
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const option = OPTIONS.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.option}
      onPress={() => onPressItem(item)}
    >
      <Checkbox
        style={{
          borderRadius: RFValue(4),
        }}
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? "#06782F" : "#e1e1e1"}
      />
      <Text
        style={[
          activeLanguages === item
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
      <View style={[styles.modal, { width: WIDTH - 20, height: RFValue(180) }]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
        >
          {option}
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export default LanguageModalPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveScreenHeight(60),
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
    gap:RFValue(6),
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
