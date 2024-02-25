import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import SearchDropDown from "../searchDropDown";
import BankListPicker from "../common/modals/bankListPicker";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

export default function SearchInput() {
  const [chooseData, setChooseData] = useState("Select bank");
  const [isModdalVisible, setIsModalVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(true);

    const handlePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

  const changeModalVisibility = (p0: boolean) => {
    setIsModalVisible(true);
  };

  const setData = (option: any) => {
    setChooseData(option);
  };


  return (
    <View
      style={{
        marginTop: RFValue(10),
      }}
    >
      <Text
        style={{
          fontSize: RFValue(14),
          fontFamily: "outfit-bold",
          color: "#1A1A1AB2",
          lineHeight: RFValue(30),
        }}
      >
        Select bank
      </Text>
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
            fontFamily: "plusjakarta-regular",
          }}
        >
          {chooseData}
        </Text>
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={handlePasswordVisibility}
        >
          <SimpleLineIcons
            name={passwordVisible ? "arrow-down" : "arrow-up"}
            size={24}
            color="#5f5f5f"
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModdalVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <BankListPicker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(16),
    paddingVertical: RFValue(5),
  },
  eyeIcon: {
    position: "absolute",
    top: 12,
    right: 19,
    zIndex: 1,
  },
});