import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import {
  Appbar,
  TextInput as PaperTextInput,
  Button as PaperButton,
  IconButton,
  ActivityIndicator,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import defaultTheme from "@react-navigation/native/src/theming/DefaultTheme";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    if (!email) {
      setEmailError("Please enter your email");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
    if (!password) {
      setPasswordError("Please enter your password");
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be 6-10 characters with at least one number and one special character"
      );
    } else {
      setPasswordError("");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    validateEmail();
    validatePassword();

    if (!emailError && !passwordError) {
      try {
        // await AsyncStorage.setItem("username", username);
        await AsyncStorage.setItem("email", email);
        setLoading(true);

        // Simulate a delay of 2 seconds (2000 milliseconds)
        setTimeout(() => {
          setLoading(false); // Hide the Activity Indicator after 2 seconds
          navigation.navigate("Home");
        }, 2000);
        //toggleToast();
      } catch (error) {
        console.error("Error saving data in AsyncStorage:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* <Appbar.Header>
        <Appbar.Content title="Login" />
      </Appbar.Header> */}
      <View>
        <PaperTextInput
          label="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          onBlur={validateEmail}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <PaperTextInput
          label="Password"
          value={password}
          style={styles.input}
          secureTextEntry={!passwordVisible}
          onChangeText={(text) => setPassword(text)}
          onBlur={validatePassword}
          right={
            <PaperTextInput.Icon
              name={passwordVisible ? "eye-off" : "eye"}
              icon="eye"
              onPress={togglePasswordVisibility}
              style={styles.iconStyle}
            />
          }
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
        <PaperButton
          mode="contained"
          style={styles.button}
          onPress={handleLogin}
        >
          Login
        </PaperButton>
        {loading && (
          <ActivityIndicator
            animating={true}
            size="default"
            style={styles.activityIndicator}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the container fill the entire screen
    justifyContent: 'center', // This centers children vertically in the container
    alignItems: 'center', // This centers children horizontally in the container
  },
  input: {
    backgroundColor:'#c5e1a5',
    height: 60,
    margin: 12,
    width: vw(80),
  },
  activityIndicator: {
    marginTop: 20,
  },
  button: {
    width: "50%",
    alignSelf: "center",
    marginTop: 20,
  },
  errorText: {
    color: "red",
    marginLeft: 16,
    marginTop: 4,
  },
  iconStyle: {
    color: "blue", // Add your desired color here
    fontSize: 24, // Add your desired font size here
  },
});

export default LoginScreen;
