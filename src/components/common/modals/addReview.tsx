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
import { MaterialIcons } from "@expo/vector-icons";
import AddNewCard from "./addNewCard";
import StarRating from "react-native-star-rating-widget";
import InputField from "../../inputs/inputField";

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function AddReview({ modalVisible, closeModal }: Readonly<Props>) {
  const [modalCardVisible, setModalCardVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const openCardModal = () => {
    setModalCardVisible(true);
  };

  const closeCardModal = () => {
    setModalCardVisible(false);
  };

  return (
    <SafeAreaView  style={{ }}>
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
          top: 120,
         
          margin: 0,
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(70),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fafafa",
              width: responsiveScreenWidth(100),
              height: responsiveScreenHeight(10),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Add review
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
              <MaterialIcons name="clear" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: RFValue(15),
              paddingVertical: RFValue(20),
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-medium",
                  lineHeight: RFValue(30),
                  color: "#BABBBC",
                }}
              >
                How will you rate this agent
              </Text>
              <View
                style={{
                  backgroundColor: "#fafafa",
                  padding: RFValue(10),
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-medium",
                    lineHeight: RFValue(30),
                  }}
                >
                  Your overall rating of this product
                </Text>
                <StarRating
                  rating={rating}
                  onChange={setRating}
                  starSize={55}
                  color="#06782F"
                  emptyColor="#BABBBC"
                />
              </View>
            </View>
            <View
              style={{
                marginTop: RFValue(25),
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-medium",
                  lineHeight: RFValue(30),
                  color: "#BABBBC",
                }}
              >
                Write a review
              </Text>
              <View
                style={{
                  backgroundColor: "#fafafa",
                  padding: RFValue(10),
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "outfit-medium",
                    lineHeight: RFValue(30),
                  }}
                >
                  Add detailed review
                </Text>
                <View
                  style={{
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#E4E4E7",
                    padding: RFValue(8),
                    marginTop: RFValue(10),
                  }}
                >
                  <TextInput
                    placeholder="Type Here"
                    style={[styles.inputbox, { textAlignVertical: "top" }]}
                    placeholderTextColor="#5f5f5f"
                    keyboardType="default"
                    multiline={true}
                    numberOfLines={3}
                    returnKeyType="done"
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: RFValue(15),
                position: "relative",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#06782F",
                  padding: Platform.OS === "ios" ? 15 : 14,
                  borderRadius: 10,
                  width: responsiveScreenWidth(90),
                }}
              >
                <Text style={styles.startText}>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <AddNewCard
        modalCardVisible={modalCardVisible}
        closeCardModal={closeCardModal}
      />
    </SafeAreaView>
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
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(5),
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
