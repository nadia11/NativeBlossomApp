import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, TextInput as PaperTextInput, Button as PaperButton, IconButton } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validateUsername = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  if (!username) {
    setUsernameError('Please enter your username');
  } else if (!emailRegex.test(username)) {
    setUsernameError('Invalid email address');
  } else {
    setUsernameError('');
  }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
  if (!password) {
      setPasswordError('Please enter your password');
  }
    else if (!passwordRegex.test(password)) {
      setPasswordError('Password must be 6-10 characters with at least one number and one special character');
    } else {
      setPasswordError('');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    validateUsername();
    validatePassword();

    if (!usernameError && !passwordError) {
      // Implement your login logic here
      console.log('Login button clicked');
    }
  };

  return (
    <View>
      {/* <Appbar.Header>
        <Appbar.Content title="Login" />
      </Appbar.Header> */}
      <View>
        <PaperTextInput
          label="Username"
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
          onBlur={validateUsername}
        />
        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

        <PaperTextInput
          label="Password"
          value={password}
          style={styles.input}
          secureTextEntry={!passwordVisible}
          onChangeText={(text) => setPassword(text)}
          onBlur={validatePassword}
          right={
            <PaperTextInput.Icon
              name={passwordVisible ? 'eye-off' : 'eye'}
              icon="eye"   
              onPress={togglePasswordVisibility}
               style={styles.iconStyle} 
            />
          }
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        <PaperButton
          mode="contained"
          style={styles.button}
          onPress={handleLogin}
        >
          Login
        </PaperButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
  },
  button: {
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    marginLeft: 16,
    marginTop: 4,
  },
   iconStyle: {
    color: 'blue', // Add your desired color here
    fontSize: 24, // Add your desired font size here
  },
});

export default LoginScreen;
