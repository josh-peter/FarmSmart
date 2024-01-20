import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Alert,
  Dimensions,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");

const ExploringAi = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };
  const ImageGallery = [
    {
      id: 1,
      image: require("../assets/images/roomViews/view1.png"),
    },
    {
      id: 2,
      image: require("../assets/images/roomViews/view2.png"),
    },
    {
      id: 3,
      image: require("../assets/images/roomViews/view3.png"),
    },
    {
      id: 4,
      image: require("../assets/images/roomViews/view4.png"),
    },
    {
      id: 5,
      image: require("../assets/images/roomViews/view5.png"),
    },
    {
      id: 6,
      image: require("../assets/images/roomViews/view6.png"),
    },
    {
      id: 7,
      image: require("../assets/images/roomViews/view7.png"),
    },
    {
      id: 8,
      image: require("../assets/images/roomViews/view8.png"),
    },
    {
      id: 9,
      image: require("../assets/images/roomViews/view9.png"),
    },
  ];

  return (
    <View style={styles.imageContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fafafa",
          width: responsiveScreenWidth(100),
          height: responsiveScreenHeight(10),
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          style={styles.clearIcon}
        >
          <Image
            resizeMode="contain"
            source={require("../assets/images/arrow-left.png")}
            style={{
              height: RFValue(22),
              width: RFValue(22),
            }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={ImageGallery}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Image style={styles.image} source={item.image} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
      <Modal
        isVisible={modalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        backdropOpacity={0.5}
        style={{
          bottom: 0,
          margin: 0,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#fafafa",
              width: responsiveScreenWidth(100),
              height: responsiveScreenHeight(10),
              position: "absolute",
              top: responsiveScreenHeight(0),
            }}
          >
            <TouchableOpacity onPress={closeModal} style={styles.clearIcon}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/arrow-left.png")}
                style={{
                  height: RFValue(22),
                  width: RFValue(22),
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.popup}>
            {ImageGallery.filter((item) => item.id === 1).map((item) => (
              <Image
                key={item.id}
                style={styles.popupImages}
                source={item.image}
              />
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ExploringAi;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
  },
  image: {
    width: RFValue(164),
    height: RFValue(280),
    margin: 1,
  },
  popup: {
    width: "100%",
    height: "50%",
    alignItems: "center",
  },
  popupImages: {
    width: "100%",
    height: "70%",
    margin: 1,
  },
  columnWrapperStyle: {
    justifyContent: "space-around",
  },
  clearIcon: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderRadius: 10,
    position: "absolute",
    left: RFValue(15),
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
});
