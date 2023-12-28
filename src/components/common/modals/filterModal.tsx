import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
}

export default function FilterModal({ modalVisible, closeModal }:Props){
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
              height: responsiveScreenHeight(10),
              marginTop: RFValue(25),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(18),
                              fontFamily: "outfit-bold",
                textTransform:"uppercase",
                lineHeight: RFValue(30),
              }}
            >
              Filters
            </Text>
            <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
              <MaterialIcons name="clear" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text>Good</Text>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
        borderRadius: 50,
        position: "absolute",
    right: RFValue(15)
  },
});