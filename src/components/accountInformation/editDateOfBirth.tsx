import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
    SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { router } from "expo-router";
import InputField from "../inputs/inputField";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";

interface Props {
  modalDOBVisible: boolean;
  closeDOBModal: () => void;
}

export default function EditDateOfBirth({
  modalDOBVisible,
  closeDOBModal,
}: Readonly<Props>) {
  const handleUserLogin = (values: any, setSubmitting: any) => {
    router.push("/home/");
    setSubmitting(false);
    };
    
      const [selectedDate, setSelectedDate] = useState("");
    const [propertyResult, setPropertyResult] = useState<any>();
      const [passwordVisible, setPasswordVisible] = useState(true);
 const [modalVisible, setModalVisible] = useState(false);
 const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);

  const changeModalVisibility = (visible: boolean) => {
    setModalVisible(visible);
  };

const handleDateSelect = (date: Date) => {
  setDateOfBirth(date);
  changeModalVisibility(false); 
};


  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={modalDOBVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={closeDOBModal}
        onBackButtonPress={closeDOBModal}
        backdropOpacity={0.5}
        backdropColor="#000"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          position: "absolute",
          margin: 0,
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(100),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fafafa",
              width: responsiveScreenWidth(100),
              height: responsiveScreenWidth(22),
              marginTop: RFValue(20),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Edit date of birth
            </Text>
            <TouchableOpacity onPress={closeDOBModal} style={styles.clearIcon}>
              <Image
                resizeMode="contain"
                source={require("../../assets/images/arrow-left.png")}
                style={{
                  height: RFValue(15),
                  width: RFValue(15),
                }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: RFValue(15),
              paddingVertical: RFValue(10),
            }}
          >
            <View>
              <View>
                <View
                  style={{
                    marginTop: RFValue(10),
                  }}
                >
                  <Text
                    style={{
                      fontSize: RFValue(16),
                      fontFamily: "outfit-regular",
                      color: "#1A1A1AB2",
                      lineHeight: RFValue(30),
                    }}
                  >
                    Date of Birth (optional)
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
                    <TouchableOpacity style={styles.calendar}>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/calendar.png")}
                        style={{
                          height: RFValue(15),
                          width: RFValue(15),
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        fontFamily: "plusjakarta-regular",
                        paddingLeft: RFValue(25),
                      }}
                    >
                      {dateOfBirth
                        ? dateOfBirth.toLocaleDateString()
                        : "Select Date of Birth"}{" "}
                     
                    </Text>
                    <TouchableOpacity style={styles.eyeIcon}>
                      <SimpleLineIcons
                        name={passwordVisible ? "arrow-down" : "arrow-up"}
                        size={24}
                        color="#5f5f5f"
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => changeModalVisibility(false)}
                  >
                    {modalVisible && (
                      <DatePicker
                        onSelectedChange={(date: any) => {
                          handleDateSelect(date);
                        }}
                        mode="calendar"
                        options={{
                          backgroundColor: "#fafafa",
                          mainColor: "#06782F",
                        }}
                        style={{
                          borderRadius: 10,
                          marginTop: RFValue(20),
                        }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startText}>Update</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 10,
    position: "absolute",
    left: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  inputbox: {
    width: responsiveScreenWidth(33),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(5),
    paddingLeft: RFValue(15),
  },
  eyeIcon: {
    position: "absolute",
    top: RFValue(10),
    right: RFValue(12),
    zIndex: 1,
  },
  calendar: {
    position: "absolute",
    top: RFValue(15),
    left: RFValue(12),
    zIndex: 1,
  },
  startBtn: {
    backgroundColor: "#06782F",
    padding: Platform.OS === "ios" ? 15 : 14,
    borderRadius: 10,
    marginTop: RFValue(30),
    marginHorizontal: RFValue(10),
    marginVertical: RFValue(30),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
});
