import React, { useState, useEffect, useRef } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "expo-status-bar";
import colors from "../constants/Colors";
import FeedbackModal from "../components/common/modals/feedbackModal";

const { width, height } = Dimensions.get("window");

export default function Helpcenter() {
  const [modalPopVisible, setModalPopVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (text: string) => {
    setMessage(text);
  };

  const openPopModal = () => {
    setModalPopVisible(true);
  };

  const closePopModal = () => {
    setModalPopVisible(false);
  };

  const handleSubmit = () => {
    console.log("Feedback submitted:");
    openPopModal();
  };

const slideIn = useSharedValue(0);
const fadeIn = useSharedValue(0);
useEffect(() => {
  const timer = setTimeout(() => {
    slideIn.value = withTiming(1, {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    fadeIn.value = withTiming(1, {
      duration: 600,
      easing: Easing.linear,
    });
  }, 200);

  return () => clearTimeout(timer);
}, []);
const animatedStyle = useAnimatedStyle(() => {
  const translateY = 0.3 * width * (1 - slideIn.value);
  return {
    opacity: fadeIn.value,
    transform: [{ translateY }],
  };
});

  return (
    <>
      <StatusBar style="dark" />
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={{ flex: 1, paddingHorizontal: RFValue(20) }}>
          <View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#F5F5F5",
                padding: RFValue(9),
                borderRadius: 15,
                marginTop: RFValue(25),
              }}>
              <Text
                style={{
                  fontSize: RFValue(14),
                  fontFamily: "outfit-bold",
                  lineHeight: RFValue(30),
                }}>
                Feedback
              </Text>
              <Text style={styles.inputFieldbox}>
                Let us know how to do better
              </Text>
              <TextInput
                placeholder="Send us a message describing your challenge on the app."
                style={[styles.inputbox, { textAlignVertical: "top" }]}
                placeholderTextColor="#414141"
                keyboardType="default"
                multiline
                numberOfLines={7}
                returnKeyType="done"
                onChangeText={handleInputChange}
              />
            </View>
            <View>
              {message.length < 1 ? (
                <TouchableOpacity style={styles.disableBtn}>
                  <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => handleSubmit()}
                  style={styles.startBtn}>
                  <Text style={styles.startText}>Submit</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <FeedbackModal
          modalPopVisible={modalPopVisible}
          closePopModal={closePopModal}
        />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "#fff",
    position: "relative",
  },
  inputbox: {
    backgroundColor: "#F9FAFA",
    color: "#5f5f5f",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
    borderRadius: 10,
    height: Platform.OS === "ios" ? RFValue(170) : RFValue(170),
  },
  inputFieldbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(10),
    borderBottomWidth: 1,
    borderBottomColor: "#E7E7E7",
    marginBottom: RFValue(10),
  },
  button: {
    fontFamily: "outfit-semibold",
    textAlign: "center",
    color: colors.buttontext,
    fontSize: RFValue(14),
  },
  startBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
    marginTop: RFValue(10),
  },
  disableBtn: {
    backgroundColor: colors.button,
    marginTop: RFValue(10),
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(12),
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
  },
  startText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "outfit-semibold",
    textAlign: "center",
  },
});
