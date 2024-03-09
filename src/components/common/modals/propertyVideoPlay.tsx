import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Dimensions,
  Button,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
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
import colors from "../../../constants/Colors";
import { Image } from "expo-image";
import * as Progress from "react-native-progress";

interface Props {
  modalVideoVisible: boolean;
  closeVideoModal: () => void;
}

export default function PropertyVideoPlay({
  modalVideoVisible,
  closeVideoModal,
}:any) {
  const [isMute, setIsMute] = useState(false);
  const refVideo2 = useRef<any>(null);
  const [inFullscreen, setInFullsreen] = useState(false);
  const [click, setClick] = useState(false);

  const videoContainerStyles = inFullscreen
    ? styles.fullscreenContainer
    : styles.videoContainer;


  return (
    <View>
      <Modal
        isVisible={modalVideoVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={closeVideoModal}
        onBackButtonPress={closeVideoModal}
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
            backgroundColor: colors.background,
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(100),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.background,
              width: responsiveScreenWidth(100),
              height: responsiveScreenHeight(12),
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
            }}
          >
            <TouchableOpacity
              onPress={closeVideoModal}
              style={styles.clearIcon}
            >
              <Image
                contentFit="contain"
                source={require("../../../assets/images/arrow-left.png")}
                style={{
                  height: RFValue(22),
                  width: RFValue(22),
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              setClick(true);
            }}
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              position: "relative",
            }}
          >
            <VideoPlayer
              videoProps={{
                shouldPlay: false,
                resizeMode: ResizeMode.COVER,
                source: {
                  uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                },
                isMuted: isMute,
              }}
              defaultControlsVisible={false}
              style={videoContainerStyles}
            />
            {/* {click && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  zIndex:999,
                }}
              >
                <Image
                  contentFit="contain"
                  source={require("../../../assets/images/vidvolume.png")}
                  style={{
                    height: RFValue(20),
                    width: RFValue(20),
                  }}
                />
                <View>
                  <Progress.Bar progress={0.3} width={200} />
                </View>
                <Text>1:06 / 4:21</Text>
                <TouchableOpacity
                  onPress={() => {
                    // Handle custom play/pause action here
                  }}
                >
                  <Image
                    contentFit="contain"
                    source={require("../../../assets/images/vidplay.png")}
                    style={{
                      height: RFValue(20),
                      width: RFValue(20),
                    }}
                  />
                </TouchableOpacity>
              </View>
            )} */}
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 30,
    position: "absolute",
    left: RFValue(15),
    top: RFValue(35),
    borderWidth: 1,
    borderColor: colors.border2,
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
  bar: {
    height: 20,
    backgroundColor: "#333",
    borderRadius: 10,
  },
});
