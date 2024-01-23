import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
  Dimensions,
  Button,
} from "react-native";
import React, { useRef, useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import VideoPlayer from "expo-video-player";
import { setStatusBarHidden } from "expo-status-bar";
import {
  Video,
  AVPlaybackStatus,
  VideoFullscreenUpdateEvent,
  ResizeMode,
} from "expo-av";

interface Props {
  modalVideoVisible: boolean;
  closeVideoModal: () => void;
}

export default function ThreeDTourModal({
  modalTourVisible,
  closeTourModal,
}:Props) {
  const [isMute, setIsMute] = useState(false);
  const refVideo2 = useRef<any>(null);
  const [inFullscreen, setInFullsreen] = useState(false);

  const videoContainerStyles = inFullscreen
    ? styles.fullscreenContainer
    : styles.videoContainer;
  return (
    <View>
      <Modal
        isVisible={modalTourVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={closeTourModal}
        onBackButtonPress={closeTourModal}
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
              height: responsiveScreenHeight(12),
            }}
          >
            <TouchableOpacity onPress={closeTourModal} style={styles.clearIcon}>
              <Image
                resizeMode="contain"
                source={require("../../../assets/images/arrow-left.png")}
                style={{
                  height: RFValue(22),
                  width: RFValue(22),
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: RFValue(15),
              paddingHorizontal: RFValue(15),
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: RFValue(16),
                    fontFamily: "outfit-regular",
                    color: "#414141",
                    lineHeight: RFValue(25),
                  }}
                >
                  Swipe to see more
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(16),
                    fontFamily: "outfit-regular",
                    color: "#414141",
                    lineHeight: RFValue(25),
                  }}
                >
                  1/4
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={[
                    styles.indicator,
                    {
                      backgroundColor: "#06782F",
                    },
                  ]}
                />
                <View
                  style={[
                    styles.indicator,
                    {
                      backgroundColor: "#06782F",
                    },
                  ]}
                />
                <View
                  style={[
                    styles.indicator,
                    {
                      backgroundColor: "#06782F",
                    },
                  ]}
                />
                <View
                  style={[
                    styles.indicator,
                    {
                      backgroundColor: "#06782F",
                    },
                  ]}
                />
              </View>
              <Text
                style={{
                  fontSize: RFValue(16),
                  fontFamily: "outfit-bold",
                  color: "#161917",
                  lineHeight: RFValue(60),
                }}
              >
                Sitting room
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={require("../../../assets/images/full-frame.png")}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 10,
    position: "absolute",
    left: RFValue(15),
    top: RFValue(35),
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
  videoSize: {
    height: "100%",
    width: "100%",
  },
  fullscreenContainer: {
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "0deg" }],
    width: Dimensions.get("window").height,
    height: Dimensions.get("window").width,
  },
  bgtransparent: {
    marginTop: 0,
    flex: 1,
  },
  videoContainer: {
    width: Dimensions.get("window").width,
    height: 0.35 * Dimensions.get("window").height,
  },
  play: {
    backgroundColor: "#fff",
    borderRadius: Platform.OS == "android" ? 1000 : 28,
    padding: 5,
    shadowColor: "#000",
    shadowOpacity: 0.9,
  },
  videoCategory: {
    paddingHorizontal: RFValue(20),
    height: responsiveScreenHeight(8),
  },
  categoryText: {
    fontFamily: "satoshi-medium",
    fontSize: RFValue(14),
  },
  videoTitle: {
    fontFamily: "satoshi-medium",
    fontSize: RFValue(22),
    lineHeight: RFValue(26),
  },
  duration: {
    fontFamily: "satoshi-regular",
    fontSize: RFValue(14),
    paddingTop: 10,
  },
  indicator: {
    height: RFValue(3),
    width: RFValue(68),
    backgroundColor: "#d9d9d9",
    marginHorizontal: RFValue(2),
    marginTop: RFValue(0),
  },
});
