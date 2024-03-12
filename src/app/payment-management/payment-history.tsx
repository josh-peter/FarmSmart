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
import { Stack, router } from "expo-router";
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
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          title: "Payment management",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <AppBar title="Payment history" onPress={() => router.push("/payment-management/")} />
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
              marginBottom: RFValue(20),
            }}
            variant="default"
            disableIndicator
            buttonStyle={(active) => ({
              backgroundColor: active ? "#fff" : undefined,
              borderRadius: 10,
            })}>
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
                }}>
                <TouchableOpacity
                  style={{
                    position: "relative",
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(12),
                    marginTop: RFValue(15),
                    marginBottom: RFValue(10),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 2,
                    shadowColor: "#d1d5db",
                  }}>
                  <View
                    style={{
                      zIndex: 20,
                      paddingVertical: RFValue(5),
                      paddingHorizontal: RFValue(8),
                      borderRadius: RFValue(10),
                      backgroundColor: "#FDFDFD",
                      width: RFValue(100),
                      height: RFValue(28),
                      position: "absolute",
                      top: RFValue(-14),
                      left: RFValue(0),
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(9),
                        fontFamily: "outfit-semibold",
                        color: "#00AE31",
                      }}>
                      Paid with ****8356
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}>
                    <View>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(95),
                          width: RFValue(90),
                          marginTop: RFValue(-7),
                        }}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(15),
                          fontFamily: "outfit-bold",
                        }}>
                        One bedroom flat
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          marginTop: RFValue(3),
                        }}>
                        <Image
                          resizeMode="contain"
                          source={require("../../assets/images/location.png")}
                          style={{
                            width: RFValue(15),
                            height: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(12),
                            color: "#414141",
                            fontFamily: "urbanist-medium",
                          }}>
                          Lekki phase 1, Lagos, Nigeria
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingVertical: RFValue(5),
                          paddingHorizontal: RFValue(12),
                          borderRadius: RFValue(8),
                          backgroundColor: "#F5F5F5",
                          width: RFValue(82),
                          marginTop: RFValue(5),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-semibold",
                            color: "#00AE31",
                          }}>
                          Apartment
                        </Text>
                      </View>
                      <View
                        style={{
                          marginTop: RFValue(5),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(14),
                            fontFamily: "outfit-bold",
                            color: "#00AE31",
                          }}>
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(11),
                              color: "#414141",
                              fontFamily: "urbanist-medium",
                            }}>
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: "relative",
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(12),
                    marginTop: RFValue(15),
                    marginBottom: RFValue(10),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 2,
                    shadowColor: "#d1d5db",
                  }}>
                  <View
                    style={{
                      zIndex: 20,
                      paddingVertical: RFValue(5),
                      paddingHorizontal: RFValue(8),
                      borderRadius: RFValue(10),
                      backgroundColor: "#FDFDFD",
                      width: RFValue(100),
                      height: RFValue(28),
                      position: "absolute",
                      top: RFValue(-14),
                      left: RFValue(0),
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(9),
                        fontFamily: "outfit-semibold",
                        color: "#00AE31",
                      }}>
                      Paid with ****8356
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}>
                    <View>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(95),
                          width: RFValue(90),
                          marginTop: RFValue(-7),
                        }}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(15),
                          fontFamily: "outfit-bold",
                        }}>
                        One bedroom flat
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          marginTop: RFValue(3),
                        }}>
                        <Image
                          resizeMode="contain"
                          source={require("../../assets/images/location.png")}
                          style={{
                            width: RFValue(15),
                            height: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(12),
                            color: "#414141",
                            fontFamily: "urbanist-medium",
                          }}>
                          Lekki phase 1, Lagos, Nigeria
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingVertical: RFValue(5),
                          paddingHorizontal: RFValue(12),
                          borderRadius: RFValue(8),
                          backgroundColor: "#F5F5F5",
                          width: RFValue(82),
                          marginTop: RFValue(5),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-semibold",
                            color: "#00AE31",
                          }}>
                          Apartment
                        </Text>
                      </View>
                      <View
                        style={{
                          marginTop: RFValue(5),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(14),
                            fontFamily: "outfit-bold",
                            color: "#00AE31",
                          }}>
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(11),
                              color: "#414141",
                              fontFamily: "urbanist-medium",
                            }}>
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: "relative",
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(12),
                    marginTop: RFValue(15),
                    marginBottom: RFValue(10),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 2,
                    shadowColor: "#d1d5db",
                  }}>
                  <View
                    style={{
                      zIndex: 20,
                      paddingVertical: RFValue(5),
                      paddingHorizontal: RFValue(8),
                      borderRadius: RFValue(10),
                      backgroundColor: "#FDFDFD",
                      width: RFValue(100),
                      height: RFValue(28),
                      position: "absolute",
                      top: RFValue(-14),
                      left: RFValue(0),
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(9),
                        fontFamily: "outfit-semibold",
                        color: "#00AE31",
                      }}>
                      Paid with ****8356
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}>
                    <View>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(95),
                          width: RFValue(90),
                          marginTop: RFValue(-7),
                        }}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(15),
                          fontFamily: "outfit-bold",
                        }}>
                        One bedroom flat
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          marginTop: RFValue(3),
                        }}>
                        <Image
                          resizeMode="contain"
                          source={require("../../assets/images/location.png")}
                          style={{
                            width: RFValue(15),
                            height: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(12),
                            color: "#414141",
                            fontFamily: "urbanist-medium",
                          }}>
                          Lekki phase 1, Lagos, Nigeria
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingVertical: RFValue(5),
                          paddingHorizontal: RFValue(12),
                          borderRadius: RFValue(8),
                          backgroundColor: "#F5F5F5",
                          width: RFValue(82),
                          marginTop: RFValue(5),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-semibold",
                            color: "#00AE31",
                          }}>
                          Apartment
                        </Text>
                      </View>
                      <View
                        style={{
                          marginTop: RFValue(5),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(14),
                            fontFamily: "outfit-bold",
                            color: "#00AE31",
                          }}>
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(11),
                              color: "#414141",
                              fontFamily: "urbanist-medium",
                            }}>
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </TabView.Item>
            <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: RFValue(15),
                }}>
                <TouchableOpacity
                  style={{
                    position: "relative",
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(12),
                    marginTop: RFValue(15),
                    marginBottom: RFValue(10),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 2,
                    shadowColor: "#d1d5db",
                  }}>
                  <View
                    style={{
                      zIndex: 20,
                      paddingVertical: RFValue(5),
                      paddingHorizontal: RFValue(8),
                      borderRadius: RFValue(10),
                      backgroundColor: "#FDFDFD",
                      width: RFValue(50),
                      height: RFValue(28),
                      position: "absolute",
                      top: RFValue(-14),
                      left: RFValue(0),
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(9),
                        fontFamily: "outfit-semibold",
                        color: "#FA5C47",
                      }}>
                      Failed
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}>
                    <View>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(95),
                          width: RFValue(90),
                          marginTop: RFValue(-7),
                        }}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(15),
                          fontFamily: "outfit-bold",
                        }}>
                        One bedroom flat
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          marginTop: RFValue(3),
                        }}>
                        <Image
                          resizeMode="contain"
                          source={require("../../assets/images/location.png")}
                          style={{
                            width: RFValue(15),
                            height: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(12),
                            color: "#414141",
                            fontFamily: "urbanist-medium",
                          }}>
                          Lekki phase 1, Lagos, Nigeria
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingVertical: RFValue(5),
                          paddingHorizontal: RFValue(12),
                          borderRadius: RFValue(8),
                          backgroundColor: "#F5F5F5",
                          width: RFValue(82),
                          marginTop: RFValue(5),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-semibold",
                            color: "#00AE31",
                          }}>
                          Apartment
                        </Text>
                      </View>
                      <View
                        style={{
                          marginTop: RFValue(5),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(14),
                            fontFamily: "outfit-bold",
                            color: "#00AE31",
                          }}>
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(11),
                              color: "#414141",
                              fontFamily: "urbanist-medium",
                            }}>
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: "relative",
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(12),
                    marginTop: RFValue(15),
                    marginBottom: RFValue(10),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 2,
                    shadowColor: "#d1d5db",
                  }}>
                  <View
                    style={{
                      zIndex: 20,
                      paddingVertical: RFValue(5),
                      paddingHorizontal: RFValue(8),
                      borderRadius: RFValue(10),
                      backgroundColor: "#FDFDFD",
                      width: RFValue(50),
                      height: RFValue(28),
                      position: "absolute",
                      top: RFValue(-14),
                      left: RFValue(0),
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(9),
                        fontFamily: "outfit-semibold",
                        color: "#FA5C47",
                      }}>
                      Failed
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}>
                    <View>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(95),
                          width: RFValue(90),
                          marginTop: RFValue(-7),
                        }}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(15),
                          fontFamily: "outfit-bold",
                        }}>
                        One bedroom flat
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          marginTop: RFValue(3),
                        }}>
                        <Image
                          resizeMode="contain"
                          source={require("../../assets/images/location.png")}
                          style={{
                            width: RFValue(15),
                            height: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(12),
                            color: "#414141",
                            fontFamily: "urbanist-medium",
                          }}>
                          Lekki phase 1, Lagos, Nigeria
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingVertical: RFValue(5),
                          paddingHorizontal: RFValue(12),
                          borderRadius: RFValue(8),
                          backgroundColor: "#F5F5F5",
                          width: RFValue(82),
                          marginTop: RFValue(5),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-semibold",
                            color: "#00AE31",
                          }}>
                          Apartment
                        </Text>
                      </View>
                      <View
                        style={{
                          marginTop: RFValue(5),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(14),
                            fontFamily: "outfit-bold",
                            color: "#00AE31",
                          }}>
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(11),
                              color: "#414141",
                              fontFamily: "urbanist-medium",
                            }}>
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: "relative",
                    borderWidth: 1,
                    borderColor: "#f3f4f6",
                    paddingHorizontal: RFValue(10),
                    paddingVertical: RFValue(10),
                    backgroundColor: "#fff",
                    borderRadius: RFValue(12),
                    marginTop: RFValue(15),
                    marginBottom: RFValue(10),
                    shadowOffset: { width: 2, height: 2 },
                    shadowRadius: 20,
                    elevation: 2,
                    shadowColor: "#d1d5db",
                  }}>
                  <View
                    style={{
                      zIndex: 20,
                      paddingVertical: RFValue(5),
                      paddingHorizontal: RFValue(8),
                      borderRadius: RFValue(10),
                      backgroundColor: "#FDFDFD",
                      width: RFValue(50),
                      height: RFValue(28),
                      position: "absolute",
                      top: RFValue(-14),
                      left: RFValue(0),
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(9),
                        fontFamily: "outfit-semibold",
                        color: "#FA5C47",
                      }}>
                      Failed
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}>
                    <View>
                      <Image
                        resizeMode="contain"
                        source={require("../../assets/images/bedroom.png")}
                        style={{
                          height: RFValue(95),
                          width: RFValue(90),
                          marginTop: RFValue(-7),
                        }}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: RFValue(15),
                          fontFamily: "outfit-bold",
                        }}>
                        One bedroom flat
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          marginTop: RFValue(3),
                        }}>
                        <Image
                          resizeMode="contain"
                          source={require("../../assets/images/location.png")}
                          style={{
                            width: RFValue(15),
                            height: RFValue(15),
                          }}
                        />
                        <Text
                          style={{
                            fontSize: RFValue(12),
                            color: "#414141",
                            fontFamily: "urbanist-medium",
                          }}>
                          Lekki phase 1, Lagos, Nigeria
                        </Text>
                      </View>
                      <View
                        style={{
                          paddingVertical: RFValue(5),
                          paddingHorizontal: RFValue(12),
                          borderRadius: RFValue(8),
                          backgroundColor: "#F5F5F5",
                          width: RFValue(82),
                          marginTop: RFValue(5),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(11),
                            fontFamily: "outfit-semibold",
                            color: "#00AE31",
                          }}>
                          Apartment
                        </Text>
                      </View>
                      <View
                        style={{
                          marginTop: RFValue(5),
                        }}>
                        <Text
                          style={{
                            fontSize: RFValue(14),
                            fontFamily: "outfit-bold",
                            color: "#00AE31",
                          }}>
                          ₦60,000{" "}
                          <Text
                            style={{
                              fontSize: RFValue(11),
                              color: "#414141",
                              fontFamily: "urbanist-medium",
                            }}>
                            /2 night
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </TabView.Item>
          </TabView>
        </View>
      </Animated.View>
    </>
  );
}
