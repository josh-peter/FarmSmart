import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AboutPropertyModal from '../common/modals/aboutPropertyModal';
import { router } from 'expo-router';
import MapView from 'react-native-maps';
const { width, height } = Dimensions.get("window");
import CustomMarker from "../../components/mapProps/customMarker";
import ApartmentsListItem from "../../components/mapProps/ApartmentsListItem";
import SingleApartment from "../../Data/singleApartment.json"; 
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

export default function AboutProperty() {
      const [modalVisible, setModalVisible] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
    const [selectedApartment, setSelectedApartment] = useState<any>(null);

      const openModal = () => {
        setModalVisible(true);
      };

      const closeModal = () => {
        setModalVisible(false);
  };
  
       const openBookModal = () => {
         setModalIsVisible(true);
       };

       const closeBookModal = () => {
         setModalIsVisible(false);
       };
  return (
    <View
      style={{
        height: RFValue(830),
        width: width,
        paddingHorizontal: RFValue(20),
      }}
    >
      <Text
        style={{
          fontSize: RFValue(16),
          fontFamily: "outfit-bold",
          color: "#161917",
          lineHeight: RFValue(40),
          marginTop: RFValue(40),
        }}
      >
        About apartment
      </Text>
      <Text
        style={{
          fontSize: RFValue(14),
          fontFamily: "outfit-regular",
          color: "#414141",
        }}
      >
        Welcome to this charming two-bedroom apartment nestled in a peaceful
        residential neighborhood. This spacious and bright apartment offers a
        comfortable
      </Text>
      <TouchableOpacity onPress={openModal}>
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: "outfit-regular",
            color: "#06782F",
            lineHeight: RFValue(40),
          }}
        >
          See all details
        </Text>
      </TouchableOpacity>
      <View style={{}}>
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: "outfit-bold",
            color: "#161917",
            lineHeight: RFValue(30),
            marginTop: RFValue(20),
          }}
        >
          Apartment Rules
        </Text>
        <Text
          style={{
            fontSize: RFValue(14),
            fontFamily: "outfit-regular",
            color: "#414141",
            lineHeight: RFValue(30),
          }}
        >
          Check-In From: 9am-10pm
        </Text>
        <Text
          style={{
            fontSize: RFValue(14),
            fontFamily: "outfit-regular",
            color: "#414141",
          }}
        >
          Check-out before: 9am
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-regular",
              color: "#06782F",
              lineHeight: RFValue(40),
            }}
          >
            See all details
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: "outfit-bold",
            color: "#161917",
            lineHeight: RFValue(30),
            marginTop: RFValue(20),
          }}
        >
          Location
        </Text>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#E6E6E6",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                marginTop: RFValue(3),
                marginBottom: RFValue(5),
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/images/location.png")}
                style={{
                  width: RFValue(20),
                  height: RFValue(20),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "plusjakarta-regular",
                  color: "#414141",
                }}
              >
                Lekki phase 1, Lagos, Nigeria
              </Text>
            </View>
            <MapView
              style={{
                width: "100%",
                height: RFValue(150),
              }}
              provider="google"
              initialRegion={{
                latitude: 9.05785,
                longitude: 7.49508,
                latitudeDelta: 10.0,
                longitudeDelta: 10.0,
              }}
            >
              {SingleApartment.map((apartment) => (
                <CustomMarker
                  key={apartment.id}
                  apartment={apartment}
                  onPress={() => setSelectedApartment(apartment)}
                />
              ))}
            </MapView>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#ECFFF4",
              padding: Platform.OS === "ios" ? 18 : 17,
              borderRadius: 10,
              marginTop: RFValue(10),
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/direction.png")}
              style={{
                width: RFValue(20),
                height: RFValue(20),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-regular",
                color: "#06782F",
              }}
            >
              Get Direction
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: responsiveScreenHeight(2) }}>
        <Text
          style={{
            fontSize: RFValue(16),
            fontFamily: "outfit-bold",
            color: "#161917",
            lineHeight: RFValue(30),
            marginTop: RFValue(20),
          }}
        >
          About Host
        </Text>
        <View>
          <Image
            resizeMode="contain"
            source={require("../../assets/images/agentprofile.png")}
            style={{
              height: RFValue(75),
              width: RFValue(65),
            }}
          />
          <Image
            resizeMode="contain"
            source={require("../../assets/images/tag.png")}
            style={{
              height: RFValue(45),
              width: RFValue(45),
              position: "absolute",
              top: 50,
              left: 10,
              right: 0,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: RFValue(13),
              fontFamily: "outfit-bold",
              color: "#161917",
              lineHeight: RFValue(30),
              marginTop: RFValue(5),
            }}
          >
            Angella Okoro
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../../assets/images/icon-star.png")}
              style={{
                height: RFValue(20),
                width: RFValue(20),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(12),
                fontFamily: "outfit-regular",
                color: "#414141",
              }}
            >
              5.0
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: RFValue(14),
            fontFamily: "outfit-regular",
            color: "#414141",
          }}
        >
          I am a realtor with over 2 years in real estates, I have sold over
          ₦400M property and I have helped client find their dream homes.
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            marginTop: RFValue(8),
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/images/square.png")}
            style={{
              height: RFValue(20),
              width: RFValue(20),
            }}
          />
          <Text
            style={{
              fontSize: RFValue(14),
              fontFamily: "outfit-regular",
              color: "#414141",
            }}
          >
            English, Yoruba and Ibibio
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            marginTop: RFValue(8),
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/images/location.png")}
            style={{
              height: RFValue(20),
              width: RFValue(20),
            }}
          />
          <Text
            style={{
              fontSize: RFValue(14),
              fontFamily: "outfit-regular",
              color: "#414141",
            }}
          >
            Lagos, Nigeria
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/book-appointment")}
          style={{
            backgroundColor: "#ECFFF4",
            padding: Platform.OS === "ios" ? 18 : 17,
            borderRadius: 10,
            marginTop: RFValue(15),
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-regular",
              color: "#06782F",
              textAlign: "center",
            }}
          >
            Book appointment
          </Text>
        </TouchableOpacity>
      </View>
      <AboutPropertyModal modalVisible={modalVisible} closeModal={closeModal} />
    </View>
  );
}
