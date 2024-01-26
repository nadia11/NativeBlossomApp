import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  //codes for nvigation to another page after timeout
  // useEffect(() => {
  //   console.log("HomePage");
  //   const timer = setTimeout(() => {
  //     navigation.navigate("Login"); // Redirect to the Login screen after 3 seconds
  //   }, 1000);

  //   return () => clearTimeout(timer); // Clear the timer if the component unmounts
  // }, [navigation]);
  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const storedUsername = await AsyncStorage.getItem("username");
          const storedEmail = await AsyncStorage.getItem("email");

          if (storedUsername && storedEmail) {
            setUsername(storedUsername);
            setEmail(storedEmail);
          }
        } catch (error) {
          console.error("Error fetching data from AsyncStorage:", error);
        }
      };

      fetchData();
    }, []) // The empty dependency array ensures this effect runs when the Home screen comes into focus
  );

  return (
    <View style={styles.overlay}>
      <Appbar.Header style={styles.customHeaderStyle} statusBarHeight={0}>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <View style={styles.content}>
        <View>
          <Text>Welcome, {username}!</Text>
          <Text>Email: {email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    //backgroundColor: 'rgba(128, 0, 128, 0.6)', // Purple background color with opacity
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customHeaderStyle: {
    // Change the background color to your desired color
    elevation: 5,
  },
});

export default HomeScreen;
