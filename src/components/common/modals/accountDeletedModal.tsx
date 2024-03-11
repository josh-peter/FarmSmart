import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  BackHandler,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { router } from "expo-router";
import colors from "../../../constants/Colors";

interface Props {
  modalPopVisible: boolean;
  closePopModal: () => void;
}

export default function AccountDeletedModal({
  modalPopVisible,
  closePopModal,
}: any) {
  const handleDoneButtonPress = () => {
    closePopModal();
    BackHandler.exitApp();
  };

  return (
    <View>
      <Modal
        isVisible={modalPopVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={closePopModal}
        onBackButtonPress={closePopModal}
        backdropOpacity={0.5}
        backdropColor="#000"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          position: "absolute",
          margin: 0,
        }}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(100),
          }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: RFValue(9),
            }}>
            <Text
              style={{
                fontSize: RFValue(24),
                fontFamily: "outfit-bold",
                color: "#161917",
                lineHeight: RFValue(40),
              }}>
              Account deleted
            </Text>
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-regular",
                color: "#161917",
                lineHeight: RFValue(15),
                textAlign: "center",
              }}>
              We are sad ☹️ to see you go! We wish to see you return. Please
              help us improve, tell us why you decided to delete your account,
              we are ready to work on our flaws to keep our users.
            </Text>
            <View
              style={{
                marginHorizontal: RFValue(20),
                marginTop: RFValue(15),
              }}>
              <TouchableOpacity
                onPress={() => router.push("/feedback")}
                style={{
                  backgroundColor: colors.primary,
                  padding: Platform.OS === "ios" ? 15 : 14,
                  borderRadius: 10,
                  borderBottomRightRadius: 0,
                  width: responsiveScreenWidth(90),
                }}>
                <Text style={styles.startText}>Give feedback</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDoneButtonPress}
                style={{
                  backgroundColor: "#FDFDFD",
                  borderRadius: 10,
                  borderBottomRightRadius: 0,
                  borderWidth: RFValue(1),
                  borderColor: "#F0F4FF",
                  padding: Platform.OS === "ios" ? 15 : 14,
                  width: responsiveScreenWidth(90),
                  marginTop: RFValue(15),
                }}>
                <Text
                  style={{
                    fontSize: RFValue(14),
                    color: colors.primary,
                    fontFamily: "outfit-semibold",
                    textAlign: "center",
                  }}>
                  Close app
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-semibold",
    textAlign: "center",
  },
});
