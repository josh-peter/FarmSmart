import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Platform} from 'react-native'
import React, { useState } from "react";
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { Toast } from '../../hooks/toast';

export default function LoginComp() {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [firstName, setFirstName] = useState(""),
    [lastName, setLastName] = useState(""),
    [disableButton, setDisableButton] = useState(true),
    [passwordVisible, setPasswordVisible] = useState(true),
    [phoneNumber, setPhoneNumber] = useState("");
    
  const handleLastName = (lastName: React.SetStateAction<string>) => {
    setLastName(lastName);
    if (
      lastName == "" ||
      firstName == "" ||
      phoneNumber == "" ||
      password == ""
    )
      setDisableButton(true);
    else setDisableButton(false);
  };

      const handlePassword = (password: React.SetStateAction<string>) => {
        setPassword(password);
        if (
          password == "" ||
          firstName == "" ||
          lastName == "" ||
          phoneNumber == ""
        )
          setDisableButton(true);
        else setDisableButton(false);
  };
  
    const handlePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
  };
  
      const signupUserPrompt = () => {
        if (!email || !password )
          Toast.error("Please fill in the fields");
        else {
          router.push("/auth/login")
        }
      };

  return (
    <>
      <Stack.Screen
        options={{
          title: "login",
          headerShown: false,
        }}
      />
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View>
          <Image
            resizeMode="contain"
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>
            Please sign in your account by filling in your login details
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: RFValue(14),
                marginTop: RFValue(30),
                color: "#5f5f5f",
              }}
            >
              Email/Phone
            </Text>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#E4E4E7",
                padding: RFValue(8),
                marginTop: RFValue(10),
              }}
            >
              <TextInput
                placeholder="E.g myfreshpass@gmail.com"
                value={email}
                style={styles.inputbox}
                onChangeText={(text) => handleLastName(text)}
                placeholderTextColor="#5f5f5f"
                keyboardType="email-address"
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: RFValue(14),
                marginTop: RFValue(30),
                color: "#5f5f5f",
              }}
            >
              Password
            </Text>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#E4E4E7",
                padding: RFValue(8),
                marginTop: RFValue(10),
              }}
            >
              <TextInput
                placeholder="**********"
                value={password}
                style={styles.inputbox}
                onChangeText={(text) => handlePassword(text)}
                placeholderTextColor="#5f5f5f"
                secureTextEntry={passwordVisible}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={handlePasswordVisibility}
              >
                <Ionicons
                  name={passwordVisible ? "eye-outline" : "eye-off-outline"}
                  size={34}
                  color="#5f5f5f"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.passText}>Forgot password</Text>
            </TouchableOpacity>
          </View>
          <View>
            {disableButton ? (
              <TouchableOpacity
                style={{
                  backgroundColor: "#06782f",
                  marginTop: RFValue(10),
                  paddingHorizontal: RFValue(14),
                  paddingVertical: RFValue(12),
                  borderRadius: Platform.OS == "android" ? 15 : 15,
                  borderWidth: 1,
                  borderColor: "#4A9CDA",
                  justifyContent: "center",
                  opacity: 0.2,
                }}
              >
                <Text style={styles.button}>Sign in</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => signupUserPrompt()}
                style={{
                  backgroundColor: "#06782f",
                  marginTop: RFValue(10),
                  paddingHorizontal: RFValue(14),
                  paddingVertical: RFValue(12),
                  borderRadius: Platform.OS == "android" ? 15 : 15,
                  borderWidth: 1,
                  borderColor: "#4A9CDA",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.button}>Sign in</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: RFValue(20),
  },
  logo: {
    height: RFValue(70),
    width: RFValue(70),
    alignSelf: "center",
    marginTop: RFValue(30),
  },
  title: {
    textAlign: "center",
    fontSize: RFValue(20),
    fontFamily: "outfit-bold",
    color: "#32264D",
    marginTop: 9,
  },
  subtitle: {
    textAlign: "center",
    fontSize: RFValue(13),
    fontWeight: "normal",
    fontFamily: "outfit-regular",
    color: "#8E8C84",
    marginVertical: RFValue(7),
  },
  inputbox: {
    backgroundColor: "transparent",
    fontFamily: "outfit-light",
    fontSize: RFValue(16),
    paddingVertical: RFValue(5),
  },
  errorText: {
    fontFamily: "outfit-medium",
    fontSize: RFValue(10),
    color: "red",
  },
  eyeIcon: {
    position: "absolute",
    top: 10,
    right: 19,
    zIndex: 1,
  },
  passText: {
    fontSize: RFValue(15),
    fontWeight: "normal",
    fontFamily: "outfit-regular",
    color: "#06782f",
    marginVertical: RFValue(13),
  },
  button: {
    fontFamily: "outfit-medium",
    textAlign: "center",
    color: "#fff",
    fontSize: RFValue(14),
  },
});