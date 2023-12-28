import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

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
      <View style={[styles.modal, { width: WIDTH - 20, height: RFValue(380),  }]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            
          }}
        >
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
  },
  modal: {
    marginTop: RFValue(20),
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
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(8),
    marginTop: RFValue(6),
    alignItems: "flex-start",
  },
});
