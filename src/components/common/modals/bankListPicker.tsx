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

const BankListPicker = (props: any) => {
  const [activeLanguages, setActiveLanguages] = useState("");

  const bankData = [
    {
      id: 1,
      img: require("../../../assets/images/banks/gt.png"),
      name: "Guaranty Trust Bank (GTB)",
    },
    {
      id: 2,
      img: require("../../../assets/images/banks/firstbank.png"),
      name: "First Bank Of Nigeria",
    },
    {
      id: 3,
      img: require("../../../assets/images/banks/zenith.png"),
      name: "Zenith Bank",
    },
    {
      id: 4,
      img: require("../../../assets/images/banks/kuda.png"),
      name: "Kuda Bank",
    },
    {
      id: 5,
      img: require("../../../assets/images/banks/fidelity.png"),
      name: "Fidelity Bank",
    },
    {
      id: 6,
      img: require("../../../assets/images/banks/access.png"),
      name: "Access Bank  Plc(Diamond)",
    },
    {
      id: 7,
      img: require("../../../assets/images/banks/opay.png"),
      name: "Opaycom",
    },
  ];

  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;

  const onPressItem = (option: any) => {
    setActiveLanguages(option);
    props.changeModalVisibility(false);
    props.setData(option);
  };


  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 40, height: RFValue(280) }]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
        >
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#E4E4E7",
              padding: RFValue(6),
              backgroundColor: "#Fdfdfd",
              marginHorizontal: RFValue(15),
              marginVertical: RFValue(8),
            }}
          >
            <TouchableOpacity style={styles.eyeIcon}>
              <Image
                resizeMode="contain"
                source={require("../../../assets/images/search-normal.png")}
                style={{
                  height: RFValue(23),
                  width: RFValue(23),
                }}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="location"
              style={styles.inputbox}
              placeholderTextColor="#5f5f5f"
            />
          </View>
          {bankData?.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.option}
              onPress={() => onPressItem(item)}
            >
              <Image
                resizeMode="contain"
                source={item.img}
                style={{
                  height: RFValue(23),
                  width: RFValue(23),
                }}
              />
              <Text
                style={[
                  activeLanguages === item.name
                    ? styles.text
                    : {
                        fontSize: RFValue(17),
                        fontFamily: "plusjakarta-regular",
                      },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export default BankListPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveScreenHeight(37),
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
    paddingHorizontal: RFValue(18),
      paddingVertical: RFValue(8),
    
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
