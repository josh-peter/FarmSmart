import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Platform
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Modal from "react-native-modal";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { ImageGallery } from "../Data/imageGallery";
const { width, height } = Dimensions.get("window");

const ExploringAi = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image:any) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };


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
          <TouchableOpacity onPress={() => openModal(item.image)}>
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
            {selectedImage && (
              <View>
                <Image style={styles.popupImages} source={selectedImage} />
                <Text
                  style={{
                    fontSize: RFValue(14),
                    fontFamily: "plusjakarta-regular",
                    color: "#414141",
                    textAlign: "center"
                  }}
                >
                  {
                    ImageGallery.find((item) => item.image === selectedImage)
                      ?.name
                  }
                </Text>
              </View>
            )}
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
    width: Platform.OS==="ios"? RFValue(170):RFValue(164),
    height: RFValue(280),
    marginVertical: RFValue(1),
    
  },
  popup: {
    width: width,
height: responsiveScreenHeight(70),
    alignItems: "center",
  },
  popupImages: {
    width: width,
    height: responsiveScreenHeight(75),
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
