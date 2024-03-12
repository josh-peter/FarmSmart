import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import AddNewCard from "./addNewCard";
import AppBar from "../../appBar";
import colors from "../../../constants/Colors";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function EditPayment({
  modalVisible,
  closeModal,
}: Readonly<Props>) {

  const [modalCardVisible, setModalCardVisible] = useState(false);
  
        const openCardModal = () => {
          setModalCardVisible(true);
        };

        const closeCardModal = () => {
          setModalCardVisible(false);
        };

  return (
    <View>
      <Modal
        isVisible={modalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
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
          backgroundColor:colors.background,
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(38),
          }}
        >
          <AppBar title={"Edit payment method"} onPress={undefined} />
          <View
            style={{
              paddingHorizontal: RFValue(15),
              paddingVertical: RFValue(20),
             
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "column",
                  gap: RFValue(25),
                  marginTop: RFValue(10),
                  
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: RFValue(5),
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../../assets/images/Mastercard.png")}
                      style={{
                        width: RFValue(30),
                        height: RFValue(30),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "outfit-regular",
                        color: colors.onboardingText,
                      }}
                    >
                      **** 3421
                    </Text>
                  </View>
                  <Image
                    resizeMode="contain"
                    source={require("../../../assets/images/unread.png")}
                    style={{
                      width: RFValue(30),
                      height: RFValue(30),
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: RFValue(5),
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../../assets/images/Mastercard.png")}
                      style={{
                        width: RFValue(30),
                        height: RFValue(30),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: RFValue(14),
                        fontFamily: "outfit-regular",
                        color: colors.onboardingText,
                      }}
                    >
                      **** 3421
                    </Text>
                  </View>
                  <Image
                    resizeMode="contain"
                    source={require("../../../assets/images/unread.png")}
                    style={{
                      width: RFValue(30),
                      height: RFValue(30),
                    }}
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={openCardModal}
                style={{
                  backgroundColor: colors.warm,
                  padding: Platform.OS === "ios" ? 14 : 13,
                  borderRadius: 10,
                  marginTop: RFValue(25),
                  borderWidth: 1,
                  borderColor:colors.border2
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(16),
                    fontFamily: "outfit-medium",
                    color: colors.primary,
                    textAlign: "center",
                  }}
                >
                  Add new card
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <AddNewCard
        modalCardVisible={modalCardVisible}
        closeCardModal={closeCardModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 50,
    position: "absolute",
    right: RFValue(15),
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
    top: 23,
    left: 5,
    zIndex: 1,
  },
  startBtn: {
    backgroundColor: "#06782F",
    padding: Platform.OS === "ios" ? 15 : 14,
    borderRadius: 10,
    marginTop: RFValue(30),
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-medium",
    textAlign: "center",
  },
});
