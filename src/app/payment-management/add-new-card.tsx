import {
  View,
  ScrollView,
  Text,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Stack, router } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "expo-status-bar";
import AppBar from "../../components/appBar";
const { width, height } = Dimensions.get("window");
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import colors from "../../constants/Colors";
import Checkbox from "expo-checkbox";
import { TextInput } from "react-native-paper";

export default function CardPayment() {
  const fade = useRef(new Animated.Value(0)).current;
  const [isChecked, setIsChecked] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [showArrow, setShowArrow] = useState(false);
  const [showCardImage, setShowCardImage] = useState(false);

  const expiryInputRef = useRef<any>(null);
  const cvvInputRef = useRef<any>(null);

  const handleCardNumberChange = (text: string) => {
    const cleanedText = text.replace(/\D/g, "").substring(0, 16);
    const formattedText = cleanedText.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(formattedText);
    setShowArrow(formattedText.length > 0);
    setShowCardImage(formattedText.length >= 8);

    if (formattedText.replace(/\s/g, "").length === 16) {
      expiryInputRef.current?.focus();
    }
  };

  const handleExpiryDateChange = (text: string) => {
    const cleanedText = text.replace(/\D/g, "").substring(0, 4);
    const formattedText =
      cleanedText.length >= 3
        ? cleanedText.substring(0, 2) + "/" + cleanedText.substring(2)
        : cleanedText;
    setExpiryDate(formattedText);
    if (formattedText.length === 5) {
      cvvInputRef.current?.focus();
    }
  };

  const handleCvvChange = (text: string) => {
    const formattedText = text.replace(/\D/g, "").substring(0, 3);
    setCvv(formattedText);
  };

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
      <Stack.Screen
        options={{
          title: "Add new card",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar
        title="Add new card"
        onPress={() => router.push("/payment-management/card-payment")}
      />
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
        }}>
        <View
          style={{
            backgroundColor: "#fff",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(100),
          }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: RFValue(10),
              marginHorizontal: RFValue(15),
            }}>
            <View
              style={{
                padding: RFValue(10),
                borderWidth: 1,
                borderColor: "#f3f4f6",
                backgroundColor: "#fff",
                borderRadius: RFValue(15),
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 20,
                elevation: 2,
                shadowColor: "#d1d5db",
              }}>
              <Text
                style={{
                  fontSize: RFValue(15),
                  fontFamily: "outfit-bold",
                  color: "#161917",
                  lineHeight: RFValue(30),
                }}>
                Pay with card
              </Text>
              <View
                style={{
                  marginTop: RFValue(10),
                }}>
                <TextInput
                  placeholder="Card number"
                  keyboardType="numeric"
                  placeholderTextColor={"#808080"}
                  returnKeyType="done"
                  style={{
                    backgroundColor: "#F2F2F2",
                    paddingLeft: RFValue(32),
                  }}
                  onChangeText={handleCardNumberChange}
                  value={cardNumber}
                  underlineColor="transparent"
                  activeUnderlineColor="transparent"
                />
                <TouchableOpacity style={styles.eyeIcon}>
                  <Image
                    resizeMode="contain"
                    source={
                      showCardImage
                        ? require("../../assets/images/Mastercard.png")
                        : require("../../assets/images/card.png")
                    }
                    style={{
                      width: RFValue(30),
                      height: RFValue(30),
                    }}
                  />
                </TouchableOpacity>
                {showArrow && (
                  <TouchableOpacity style={styles.arrowIcon}>
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/images/regularright.png")}
                      style={{
                        width: RFValue(20),
                        height: RFValue(20),
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",

                  marginTop: RFValue(15),
                }}>
                <TextInput
                  ref={expiryInputRef}
                  placeholder="MM/YY"
                  keyboardType="numeric"
                  placeholderTextColor={"#808080"}
                  returnKeyType="done"
                  style={{
                    backgroundColor: "#F2F2F2",
                    width: responsiveScreenWidth(38),
                  }}
                  onChangeText={handleExpiryDateChange}
                  value={expiryDate}
                  underlineColor="transparent"
                  activeUnderlineColor="transparent"
                />
                <TextInput
                  ref={cvvInputRef}
                  placeholder="CVV"
                  keyboardType="numeric"
                  placeholderTextColor={"#808080"}
                  returnKeyType="done"
                  style={{
                    backgroundColor: "#F2F2F2",
                    width: responsiveScreenWidth(38),
                  }}
                  onChangeText={handleCvvChange}
                  value={cvv}
                  underlineColor="transparent"
                  activeUnderlineColor="transparent"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: RFValue(5),
                  marginTop: RFValue(15),
                }}>
                <Checkbox
                  style={{
                    borderRadius: RFValue(4),
                  }}
                  value={isChecked}
                  onValueChange={setIsChecked}
                  color={isChecked ? colors.primary : "#e1e1e1"}
                />
                <Text
                  style={{
                    fontSize: RFValue(12),
                    fontFamily: "plusjakarta-regular",
                  }}>
                  Save my card
                </Text>
              </View>
            </View>
            <View>
              {cardNumber && expiryDate && cvv ? (
                <TouchableOpacity
                  onPress={() =>
                    router.push("/payment-management/card-payment")
                  }
                  style={styles.startBtn}>
                  <Text style={styles.startText}>Add card</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.disableBtn}>
                  <Text style={styles.button}>Add card</Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    fontFamily: "outfit-semibold",
    textAlign: "center",
    color: colors.buttontext,
    fontSize: RFValue(14),
  },
  disableBtn: {
    backgroundColor: colors.button,
    padding: Platform.OS === "ios" ? 15 : 14,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
    marginTop: RFValue(30),
  },
  startBtn: {
    backgroundColor: colors.primary,
    padding: Platform.OS === "ios" ? 15 : 14,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    justifyContent: "center",
    marginTop: RFValue(30),
  },
  startText: {
    fontSize: RFValue(16),
    color: "#fff",
    fontFamily: "outfit-semibold",
    textAlign: "center",
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 10,
    position: "absolute",
    left: RFValue(15),
    top: RFValue(20),
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
    top: RFValue(8),
    left: RFValue(11),
    zIndex: 1,
  },
  arrowIcon: {
    position: "absolute",
    top: RFValue(12),
    right: RFValue(11),
    zIndex: 1,
  },
  bgtransparent: {
    marginTop: 0,
    flex: 1,
  },
});
