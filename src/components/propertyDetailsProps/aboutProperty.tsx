import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Platform, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AboutPropertyModal from '../common/modals/aboutPropertyModal';
import { router } from 'expo-router';
import MapView from 'react-native-maps';
const { width, height } = Dimensions.get("window");
import CustomMarker from "../../components/mapProps/customMarker";
import ApartmentsListItem from "../../components/mapProps/ApartmentsListItem";
import SingleApartment from "../../Data/singleApartment.json"; 
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import colors from '../../constants/Colors';
import { Image } from 'expo-image';
import CustomButton from '../common/customButton';

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
          marginTop: RFValue(80),
        }}
      >
        About apartment
      </Text>
      <Text
        style={{
          fontSize: RFValue(14),
          fontFamily: "outfit-regular",
          color: colors.onboardingText,
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
            fontFamily: "outfit-bold",
            color: colors.primary,
            textDecorationLine: "underline",
            marginTop: RFValue(10),
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
            marginTop: RFValue(40),
          }}
        >
          Apartment Rules
        </Text>
        <Text
          style={{
            fontSize: RFValue(14),
            fontFamily: "outfit-regular",
            color: colors.onboardingText,
            lineHeight: RFValue(20),
          }}
        >
          Check-In From: 9am-10pm
        </Text>
        <Text
          style={{
            fontSize: RFValue(14),
            fontFamily: "outfit-regular",
            color: colors.onboardingText,
          }}
        >
          Check-out before: 9am
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: RFValue(16),
              fontFamily: "outfit-bold",
              color: colors.primary,
              textDecorationLine: "underline",
              marginTop: RFValue(5),
            }}
          >
            See all rules
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text
          style={{
            fontSize: RFValue(17),
            fontFamily: "outfit-bold",
            color: colors.primary,
            lineHeight: RFValue(30),
            marginTop: RFValue(40),
          }}
        >
          Location
        </Text>

        <View
          style={{
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
                contentFit="contain"
                source={require("../../assets/images/location.png")}
                style={{
                  width: RFValue(20),
                  height: RFValue(20),
                }}
              />
              <Text
                style={{
                  fontSize: RFValue(13),
                  fontFamily: "urbanist-regular",
                  color: colors.onboardingText,
                }}
              >
                Lekki phase 1, Lagos, Nigeria
              </Text>
            </View>
            <MapView
              style={{
                width: "100%",
                height: RFValue(170),
                marginTop: RFValue(10),
                overflow: "hidden",
                borderRadius: 20,
              }}
              provider="google"
              initialRegion={{
                latitude: 6.5244,
                longitude: 3.3792,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
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
              backgroundColor: colors.warm,
              padding: Platform.OS === "ios" ? 18 : 17,
              borderRadius: 10,
              marginTop: RFValue(10),
              borderWidth: 1,
              borderColor: colors.border2,
            }}
          >
            <Image
              contentFit="contain"
              source={require("../../assets/images/direction.png")}
              style={{
                width: RFValue(25),
                height: RFValue(25),
              }}
            />
            <Text
              style={{
                fontSize: RFValue(16),
                fontFamily: "outfit-medium",
                color: colors.primary,
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
            fontSize: RFValue(17),
            fontFamily: "outfit-bold",
            color: colors.primary,
            lineHeight: RFValue(30),
            marginTop: RFValue(15),
          }}
        >
          About Host
        </Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/agent-profile");
          }}
        >
          <Image
            contentFit="contain"
            source={require("../../assets/images/agentprofile.png")}
            style={{
              height: RFValue(75),
              width: RFValue(65),
            }}
          />
          <Image
            contentFit="contain"
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
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: RFValue(16),
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
              contentFit="contain"
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
                color: colors.onboardingText,
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
            color: colors.onboardingText,
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
            contentFit="contain"
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
              color: colors.onboardingText,
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
            contentFit="contain"
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
              color: colors.onboardingText,
            }}
          >
            Lagos, Nigeria
          </Text>
        </View>
        <CustomButton
          buttonText={"Book appointment"}
          buttonColor={colors.warm}
          onPress={() => router.push("/book-appointment")}
          buttonTextColor={colors.primary}
          disabled={false}
          marginTop={RFValue(15)}
        />
      </View>
      <AboutPropertyModal modalVisible={modalVisible} closeModal={closeModal} />
    </View>
  );
}
