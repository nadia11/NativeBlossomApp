import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Appbar,
  TextInput as PaperTextInput,
  Button as PaperButton,
  IconButton,
  Checkbox as PaperCheckbox,
  Snackbar,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {vw} from "react-native-expo-viewport-units";
const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [agreeToTermsError, setAgreeToTermsError] = useState("");
  const [isToastVisible, setToastVisible] = useState(false);
  const toggleToast = () => {
    setToastVisible(!isToastVisible);
    // navigation.navigate('Login');
  };
  const validateUsername = () => {
    if (!username) {
      setUsernameError("Please enter your username");
    } else {
      setUsernameError("");
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
  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

    if (!email) {
      setEmailError("Please enter your Email");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = async () => {
    validateUsername();
    validatePassword();
    validateEmail();
    if (!agreeToTerms) {
      setAgreeToTermsError("Please agree to the terms and services");
      return;
    } else {
      setAgreeToTermsError("");
    }

    if (!usernameError && !passwordError && !agreeToTermsError && !emailError) {
      try {
        await AsyncStorage.setItem("username", username);
        await AsyncStorage.setItem("password", password);
        await AsyncStorage.setItem("email", email);
        toggleToast();
      } catch (error) {
        console.error("Error saving data in AsyncStorage:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* <Appbar.Header>
        <Appbar.Content title="Register" />
      </Appbar.Header> */}
      <View>
        <PaperTextInput
          label="Username"
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
          onBlur={validateUsername}
        />
        {usernameError ? (
          <Text style={styles.errorText}>{usernameError}</Text>
        ) : null}

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

        <PaperTextInput
          label="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          onBlur={validateEmail}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <PaperCheckbox.Item
          label="I agree to the terms and services"
          status={agreeToTerms ? "checked" : "unchecked"}
          onPress={() => setAgreeToTerms(!agreeToTerms)}
        />
        {agreeToTermsError ? (
          <Text style={styles.errorText}>{agreeToTermsError}</Text>
        ) : null}
        <PaperButton
          mode="contained"
          style={styles.button}
          onPress={handleRegister}
        >
          Register
        </PaperButton>
        <Snackbar
          visible={isToastVisible}
          onDismiss={toggleToast}
          duration={3000} // Adjust the duration as needed
          action={{
            label: "OK",
            onPress: () => {
              navigation.navigate("Home"); // Navigate to the login page when the toast is pressed
            },
          }}
        >
          Registration successful!
        </Snackbar>
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
    color: "blue",
    fontSize: 24,
  },
});

export default RegisterScreen;
