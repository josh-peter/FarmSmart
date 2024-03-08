import {
    View,
    ScrollView,
    Text,
    Animated,
    Dimensions,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React, { useEffect, useRef, useState } from "react";
  import { Stack } from "expo-router";
  import {
    responsiveScreenHeight,
    responsiveScreenWidth,
  } from "react-native-responsive-dimensions";
  import { RFValue } from "react-native-responsive-fontsize";
  import { StatusBar } from "expo-status-bar";
  import AppBar from "../../components/appBar";
  const { width, height } = Dimensions.get("window");
  import { Tab, TabView } from "@rneui/themed";
  
  export default function PaymentHistory() {
    const fade = useRef(new Animated.Value(0)).current;
    const [index, setIndex] = useState(0);
  
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
        <StatusBar style="dark"/>
        <Stack.Screen
          options={{
            title: "Payment management",
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <AppBar title="Payment history" returnRoute={"/payment-management"}/>
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
         <View
          style={{
            backgroundColor: "#fff",
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(100),
            marginTop: RFValue(15),
          }}
        >
          <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            style={{
              backgroundColor: "#E4E4E7",
              marginTop: RFValue(20),
              paddingHorizontal: RFValue(3),
              paddingVertical: RFValue(3),
              marginHorizontal: RFValue(15),
              borderRadius: 10,
            }}
            variant="default"
            disableIndicator
            buttonStyle={(active) => ({
              backgroundColor: active ? "#fff" : undefined,
              borderRadius: 10,
            })}
          >
            <Tab.Item
              title="Completed"
              titleStyle={{
                fontSize: 13,
                color: index === 1 ? "black" : "#1A1A1AB2",
                borderRadius: 10,
              }}
            />
            <Tab.Item
              title="Failed"
              titleStyle={{
                fontSize: 13,
                color: index === 2 ? "black" : "#1A1A1AB2",
                borderRadius: 10,
              }}
            />
          </Tab>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: RFValue(15),
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(10),
                    marginTop: RFValue(25),
                    marginBottom: RFValue(15),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 4,
                    shadowColor: "#d1d5db",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View style={{}}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(80),
                          width: RFValue(80),
                        }}
                      />
                      <View
                        style={{
                          backgroundColor: "#ECFFF4",
                          padding: RFValue(8),
                          width: RFValue(90),
                          borderRadius: 30,
                          position: "absolute",
                          top: RFValue(-10),
                          left: RFValue(-5),
                          right: RFValue(0),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(8),
                            fontFamily: "outfit-medium",
                            color: "#06782F",
                          }}
                        >
                          Paid with ****8356
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                        }}
                      >
                        One bedroom flat
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          marginTop: RFValue(3),
                        }}
                      >
                        <Image
                          resizeMode="contain"
                          source={require("../assets/images/location.png")}
                          style={{
                            width: RFValue(15),
                            height: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "plusjakarta-regular",
                            color: "#414141",
                          }}
                        >
                          Lekki phase 1, Lagos, Nigeria
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          paddingVertical: RFValue(5),
                          paddingHorizontal: RFValue(12),
                          borderRadius: RFValue(5),
                          backgroundColor: "#ECFFF4",
                          width: RFValue(79),
                          marginTop: RFValue(3),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-medium",
                            color: "#06782F",
                          }}
                        >
                          Apartment
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          marginTop: RFValue(3),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(14),
                            fontFamily: "outfit-bold",
                            color: "#06782F",
                          }}
                        >
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(9),
                              fontFamily: "plusjakarta-regular",
                              color: "#414141",
                            }}
                          >
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(10),
                    marginTop: RFValue(10),
                    marginBottom: RFValue(15),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 4,
                    shadowColor: "#d1d5db",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View style={{}}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(80),
                          width: RFValue(80),
                        }}
                      />
                      <View
                        style={{
                          backgroundColor: "#ECFFF4",
                          padding: RFValue(8),
                          width: RFValue(90),
                          borderRadius: 30,
                          position: "absolute",
                          top: RFValue(-10),
                          left: RFValue(-5),
                          right: RFValue(0),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(8),
                            fontFamily: "outfit-medium",
                            color: "#06782F",
                          }}
                        >
                          Paid with ****8356
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                        }}
                      >
                        One bedroom flat
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          marginTop: RFValue(3),
                        }}
                      >
                        <Image
                          resizeMode="contain"
                          source={require("../assets/images/location.png")}
                          style={{
                            width: RFValue(15),
                            height: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "plusjakarta-regular",
                            color: "#414141",
                          }}
                        >
                          Lekki phase 1, Lagos, Nigeria
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          paddingVertical: RFValue(5),
                          paddingHorizontal: RFValue(12),
                          borderRadius: RFValue(5),
                          backgroundColor: "#ECFFF4",
                          width: RFValue(79),
                          marginTop: RFValue(3),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-medium",
                            color: "#06782F",
                          }}
                        >
                          Apartment
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          marginTop: RFValue(3),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(14),
                            fontFamily: "outfit-bold",
                            color: "#06782F",
                          }}
                        >
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(9),
                              fontFamily: "plusjakarta-regular",
                              color: "#414141",
                            }}
                          >
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(10),
                    marginTop: RFValue(10),
                    marginBottom: RFValue(15),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 4,
                    shadowColor: "#d1d5db",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View style={{}}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(80),
                          width: RFValue(80),
                        }}
                      />
                      <View
                        style={{
                          backgroundColor: "#ECFFF4",
                          padding: RFValue(8),
                          width: RFValue(90),
                          borderRadius: 30,
                          position: "absolute",
                          top: RFValue(-10),
                          left: RFValue(-5),
                          right: RFValue(0),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(8),
                            fontFamily: "outfit-medium",
                            color: "#06782F",
                          }}
                        >
                          Paid with ****8356
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                        }}
                      >
                        One bedroom flat
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          marginTop: RFValue(3),
                        }}
                      >
                        <Image
                          resizeMode="contain"
                          source={require("../assets/images/location.png")}
                          style={{
                            width: RFValue(15),
                            height: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "plusjakarta-regular",
                            color: "#414141",
                          }}
                        >
                          Lekki phase 1, Lagos, Nigeria
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          paddingVertical: RFValue(5),
                          paddingHorizontal: RFValue(12),
                          borderRadius: RFValue(5),
                          backgroundColor: "#ECFFF4",
                          width: RFValue(79),
                          marginTop: RFValue(3),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-medium",
                            color: "#06782F",
                          }}
                        >
                          Apartment
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          marginTop: RFValue(3),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(14),
                            fontFamily: "outfit-bold",
                            color: "#06782F",
                          }}
                        >
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(9),
                              fontFamily: "plusjakarta-regular",
                              color: "#414141",
                            }}
                          >
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: RFValue(15),
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(10),
                    marginTop: RFValue(25),
                    marginBottom: RFValue(15),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 4,
                    shadowColor: "#d1d5db",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View style={{ position: "relative" }}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(80),
                          width: RFValue(80),
                        }}
                      />

                      <View
                        style={{
                          backgroundColor: "#FFF1F2",
                          padding: RFValue(5),
                          width: RFValue(50),
                          borderRadius: 30,
                          position: "absolute",
                          top: RFValue(-10),
                          left: RFValue(-5),
                          right: RFValue(0),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(10),
                            fontFamily: "outfit-medium",
                            color: "#9C0000",
                            textAlign: "center",
                          }}
                        >
                          Failed
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                        }}
                      >
                        One bedroom flat
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          marginTop: RFValue(3),
                        }}
                      >
                        <Image
                          resizeMode="contain"
                          source={require("../assets/images/location.png")}
                          style={{
                            width: RFValue(15),
                            height: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "plusjakarta-regular",
                            color: "#414141",
                          }}
                        >
                          Lekki phase 1, Lagos, Nigeria
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          paddingVertical: RFValue(5),
                          paddingHorizontal: RFValue(12),
                          borderRadius: RFValue(5),
                          backgroundColor: "#ECFFF4",
                          width: RFValue(79),
                          marginTop: RFValue(3),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-medium",
                            color: "#06782F",
                          }}
                        >
                          Apartment
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          marginTop: RFValue(3),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(14),
                            fontFamily: "outfit-bold",
                            color: "#06782F",
                          }}
                        >
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(9),
                              fontFamily: "plusjakarta-regular",
                              color: "#414141",
                            }}
                          >
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(10),
                    marginTop: RFValue(10),
                    marginBottom: RFValue(15),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 4,
                    shadowColor: "#d1d5db",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View style={{ position: "relative" }}>
                      <Image
                        resizeMode="contain"
                        source={require("../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(80),
                          width: RFValue(80),
                        }}
                      />
                      <View
                        style={{
                          backgroundColor: "#FFF1F2",
                          padding: RFValue(5),
                          width: RFValue(50),
                          borderRadius: 30,
                          position: "absolute",
                          top: RFValue(-10),
                          left: RFValue(-5),
                          right: RFValue(0),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(10),
                            fontFamily: "outfit-medium",
                            color: "#9C0000",
                            textAlign: "center",
                          }}
                        >
                          Failed
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(14),
                          fontFamily: "outfit-bold",
                        }}
                      >
                        One bedroom flat
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          marginTop: RFValue(3),
                        }}
                      >
                        <Image
                          resizeMode="contain"
                          source={require("../assets/images/location.png")}
                          style={{
                            width: RFValue(15),
                            height: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "plusjakarta-regular",
                            color: "#414141",
                          }}
                        >
                          Lekki phase 1, Lagos, Nigeria
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          paddingVertical: RFValue(5),
                          paddingHorizontal: RFValue(12),
                          borderRadius: RFValue(5),
                          backgroundColor: "#ECFFF4",
                          width: RFValue(79),
                          marginTop: RFValue(3),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-medium",
                            color: "#06782F",
                          }}
                        >
                          Apartment
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          marginTop: RFValue(3),
                        }}
                      >
                        <Text
                          style={{
                            fontSize: RFValue(14),
                            fontFamily: "outfit-bold",
                            color: "#06782F",
                          }}
                        >
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(9),
                              fontFamily: "plusjakarta-regular",
                              color: "#414141",
                            }}
                          >
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </TabView.Item>
          </TabView>
        </View>
        </Animated.View>
      </>
    );
  };
  