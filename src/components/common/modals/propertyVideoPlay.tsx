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

export default function PropertyVideoPlay({
  modalVideoVisible,
  closeVideoModal,
}) {
  const [isMute, setIsMute] = useState(false);
  const refVideo2 = useRef<any>(null);
  const [inFullscreen, setInFullsreen] = useState(false);

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
            <TouchableOpacity
              onPress={closeVideoModal}
              style={styles.clearIcon}
            >
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
              position: "absolute",
              bottom: RFValue(0),
              top: RFValue(220),
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
              // playbackCallback={status => setStatus(() => status)}
              // defaultControlsVisible={true}
              mute={{
                enterMute: () => setIsMute(!isMute),
                exitMute: () => setIsMute(!isMute),
                isMute,
              }}
              fullscreen={{
                inFullscreen: inFullscreen,
                enterFullscreen: async () => {
                  setStatusBarHidden(true, "fade");
                  setInFullsreen(!inFullscreen);
                  //   await ScreenOrientation.lockAsync(
                  //     ScreenOrientation.OrientationLock.LANDSCAPE
                  //   );
                  refVideo2.current.setStatusAsync({
                    shouldPlay: true,
                  });
                },
                exitFullscreen: async () => {
                  setStatusBarHidden(false, "fade");
                  setInFullsreen(!inFullscreen);
                  //   await ScreenOrientation.lockAsync(
                  //     ScreenOrientation.OrientationLock.DEFAULT
                  //   );
                },
              }}
              //   icon={{
              //     play: (
              //       <Image
              //         resizeMode="contain"
              //         source={require("@/assets/images/play.png")}
              //         style={{
              //           width: RFValue(60),
              //         }}
              //       />
              //     ),
              //     pause: (
              //       <Image
              //         resizeMode="contain"
              //         source={require("@/assets/images/pause.png")}
              //         style={{
              //           width: RFValue(60),
              //         }}
              //       />
              //     ),
              //   }}
              style={videoContainerStyles}
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
});
