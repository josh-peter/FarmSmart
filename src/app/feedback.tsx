import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Platform, Animated, Dimensions} from "react-native";
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
    openPopModal()
  };

  const fade = useRef(new Animated.Value(0)).current;

  const animation = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <Animated.View
        style={{
          flex: 1,
          width: width,
          backgroundColor: "#fff",
          position: "relative",
          opacity: fade,
          transform: [
            {
              translateY: fade.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0],
              }),
            },
          ],
        }}
      >
        <View style={{ flex: 1, paddingHorizontal: RFValue(20) }}>
        <View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#F5F5F5",
              padding: RFValue(9),
              borderRadius: 15,
              marginTop: RFValue(25),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(14),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              Feedback
            </Text>
            <Text
              style={styles.inputFieldbox}
            >
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
      <FeedbackModal modalPopVisible={modalPopVisible} closePopModal={closePopModal} />
      </Animated.View>
    </>
  );
}


const styles = StyleSheet.create({
  inputbox: {
    backgroundColor: "#F9FAFA",
    color: "#5f5f5f",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
    borderRadius: 10,
    height:Platform.OS=== "ios" ? RFValue(170) : RFValue(170)
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
