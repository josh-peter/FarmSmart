import React, {useEffect, useState} from "react";
import MapView, { Callout } from 'react-native-maps';
import { StyleSheet, View, Text, TextInput, Platform, Dimensions} from "react-native";
import { Stack } from "expo-router";
import apartments from "../../Data/apartments.json"
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomMarker from "../../components/mapProps/customMarker";
import ApartmentsListItem from "../../components/mapProps/ApartmentsListItem";
import GrantAccessLocations from "../../components/common/modals/grantLocationAccess";
import colors from "../../constants/Colors";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";

export default function Explore() {
  const [selectedApartment, setSelectedApartment] = useState<any>(null)
const [modalVisible, setModalVisible] = useState<boolean>(true);
    const [selectedType, setSelectedType] = useState<"Rental" | "Sales">(
      "Rental"
    );

  const openModal = () => {
    setModalVisible(true);
  };

   const handleGrantLocationAccess = () => {
     setModalVisible(false);
   };

 const closeModal = () => {
   setModalVisible(false);
 };
  const handleCloseNavigationApartment = () => {
    setSelectedApartment(null);
  }
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <MapView
          style={styles.map}
          provider="google"
          initialRegion={{
            latitude: 6.5244,
            longitude: 3.3792,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {apartments?.map((apartment) => (
            <CustomMarker
              key={apartment.id}
              apartment={apartment}
              onPress={() => setSelectedApartment(apartment)}
            />
          ))}
        </MapView>
        {selectedApartment && (
          <ApartmentsListItem
            apartment={selectedApartment}
            handleCloseNavigationApartment={() =>
              handleCloseNavigationApartment()
            }
          />
        )}
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            backgroundColor: colors.background,
            paddingHorizontal: RFValue(20),
            paddingVertical: RFValue(15),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: RFValue(-10),
            }}
          >
            <Text
              style={{
                fontSize: RFValue(18),
                fontFamily: "outfit-bold",
                lineHeight: RFValue(30),
              }}
            >
              View
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
                  Price label
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
                  Markers
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
              alignItems: "center",
              marginTop: RFValue(23),
            }}
          >
            <View
              style={{
                flex: 1,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.border2,
                padding: RFValue(6),
                backgroundColor: colors.background,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <TouchableOpacity style={styles.eyeIcon}>
                <Image
                  contentFit="contain"
                  source={require("../../assets/images/search-normal.png")}
                  style={{
                    height: RFValue(23),
                    width: RFValue(23),
                  }}
                />
              </TouchableOpacity>
              <TextInput
                placeholder="Search location"
                style={styles.inputbox}
                placeholderTextColor={colors.onboardingText}
              />
            </View>
            <TouchableOpacity
              onPress={openModal}
              style={{
                backgroundColor: colors.background,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: colors.border2,
                width: 56,
                height: 56,
                borderRadius: 50,
              }}
            >
              <Image
                contentFit="contain"
                source={require("../../assets/images/filter-edit.png")}
                style={{
                  height: RFValue(28),
                  width: RFValue(28),
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 7,
              marginTop: RFValue(10),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                borderWidth: 1,
                borderColor: colors.border2,
                padding: 7,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "urbanist-regular",
                  color: "#414141",
                }}
              >
                Rental
              </Text>
              <TouchableOpacity>
                <MaterialIcons name="cancel" size={24} color={colors.primary} />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                borderWidth: 1,
                borderColor: colors.border2,
                padding: 7,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(12),
                  fontFamily: "urbanist-regular",
                  color: "#414141",
                }}
              >
                Land
              </Text>
              <TouchableOpacity>
                <MaterialIcons name="cancel" size={24} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <GrantAccessLocations
          modalVisible={modalVisible}
          closeModal={closeModal}
          handleGrantLocationAccess={handleGrantLocationAccess}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  inputbox: {
    width: RFValue(230),
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(14),
    paddingVertical: Platform.OS === "android" ? RFValue(3) : RFValue(8),
    paddingLeft: RFValue(32),
    paddingRight: RFValue(15),
  },
  eyeIcon: {
    position: "absolute",
    left: 2,
    top: "60%",
    transform: [{ translateY: RFValue(3.0) }],
    zIndex: 10,
  },
});
