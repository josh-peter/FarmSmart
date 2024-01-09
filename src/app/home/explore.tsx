import React, {useState} from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import { Stack } from "expo-router";
import apartments from "../../Data/apartments.json"
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomMarker from "../../components/mapProps/customMarker";
import ApartmentsListItem from "../../components/mapProps/ApartmentsListItem";
import GrantAccessLocations from "../../components/common/modals/grantLocationAccess";

export default function Explore() {
  const [selectedApartment, setSelectedApartment] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);



  const openModal = () => {
    setModalVisible(true);
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
          latitude: 9.05785,
          longitude: 7.49508,
          latitudeDelta: 10.0,
          longitudeDelta: 10.0,
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
          handleCloseNavigationApartment={() => handleCloseNavigationApartment()}
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
              borderWidth: 1,
              borderColor: "#E4E4E7",
              padding: RFValue(6),
              backgroundColor: "#Fdfdfd",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <TouchableOpacity style={styles.eyeIcon}>
              <Image
                resizeMode="contain"
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
              placeholderTextColor="#5f5f5f"
            />
          </View>
          <TouchableOpacity
            onPress={openModal}
            style={{
              backgroundColor:"#fff",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#E6E6E6",
              width: 56,
              height: 56,
              borderRadius: 12,
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/filter-edit.png")}
              style={{
                height: RFValue(28),
                width: RFValue(28),
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <GrantAccessLocations modalVisible={modalVisible} closeModal={closeModal}/>
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
    paddingVertical: RFValue(3),
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
