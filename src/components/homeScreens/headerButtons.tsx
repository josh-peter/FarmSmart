import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../constants/Colors";

interface HeaderButtonsProps {
  selectedType: "Rental" | "Sales";
  setSelectedType: (type: "Rental" | "Sales") => void;
}

const HeaderButtons: React.FC<HeaderButtonsProps> = ({
  selectedType,
  setSelectedType,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: RFValue(20),
        }}
      >
        <Text
          style={{
            fontSize: RFValue(18),
            fontFamily: "outfit-bold",
            lineHeight: RFValue(30),
          }}
        >
          Properties
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            backgroundColor: colors.btnbackground,
            padding: RFValue(2),
            borderRadius: RFValue(7),
            borderWidth: 2,
            borderColor: "#E4E4E7",
          }}
        >
          <TouchableOpacity
            onPress={() => setSelectedType("Rental")}
            style={{
              paddingVertical: RFValue(7),
              paddingHorizontal: RFValue(20),
              borderRadius: RFValue(5),
              backgroundColor:
                selectedType === "Rental"
                  ? colors.background
                  : colors.btnbackground,
            }}
          >
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "urbanist-regular",
              }}
            >
              Rent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedType("Sales")}
            style={{
              paddingVertical: RFValue(7),
              paddingHorizontal: RFValue(20),
              borderRadius: RFValue(5),
              backgroundColor:
                selectedType === "Sales"
                  ? colors.background
                  : colors.btnbackground,
            }}
          >
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "urbanist-regular",
              }}
            >
              Buy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(HeaderButtons);

const styles = StyleSheet.create({});
