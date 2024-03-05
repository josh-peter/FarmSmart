import React, {useState} from "react";
import MapView, { Callout } from 'react-native-maps';
import { StyleSheet, View, Text, TextInput, Platform } from "react-native";
import { Stack } from "expo-router";
import apartments from "../../Data/apartments.json"
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomMarker from "../../components/mapProps/customMarker";
import ApartmentsListItem from "../../components/mapProps/ApartmentsListItem";
import GrantAccessLocations from "../../components/common/modals/grantLocationAccess";
import colors from "../../constants/Colors";
import { Image } from "expo-image";

export default function Explore() {
  const [selectedApartment, setSelectedApartment] = useState<any>(null)
const [modalVisible, setModalVisible] = useState<boolean>(true);



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
          top: 10,
          right: 20,
          left: 20,
        }}
      >
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
              elevation: 5,
              shadowColor: "#000",
              shadowOpacity: 0.8,
              shadowOffset: { width: 4, height: 4 },
              shadowRadius: 6,
              padding: RFValue(6),
              backgroundColor: "#Fdfdfd",
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
              backgroundColor: "#fff",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              elevation: 5,
              shadowOffset: { width: 2, height: 2 },
              shadowRadius: 6,
              width: 56,
              height: 56,
              borderRadius: 12,
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
      </View>
      <GrantAccessLocations
        modalVisible={modalVisible}
        closeModal={closeModal}
        handleGrantLocationAccess={handleGrantLocationAccess}
      />
    </View>
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
