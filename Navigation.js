import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import HomePage from "./pages/HomePage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {FontAwesome} from "@expo/vector-icons";
import {StyleSheet} from "react-native"; // Import your desired icon library
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Register"
      // Shifting is for shifting tab bar style (recommended for 3 or more tabs)
      barStyle={{ backgroundColor: "#ffffff" }} // Change the background color of the tab bar
      activeColor="#4caf50"
    >
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          tabBarLabel: "Register",
            tabBarActiveBackgroundColor:'#ffffff',
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons
            //   name="account-plus"
            //   color={color}
            //   size={26}
            // />
              <FontAwesome name="search" size={24} color="#4caf50" />
          ),

            tabBarColor: "#ffffff",
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="login" color={color} size={26} />
              <FontAwesome name="heart" size={24} color="#4caf50" />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
              <FontAwesome name="compass" size={24} color="#4caf50" />
          ),
        }}
      />
        <Tab.Screen
            name="Home2"
            component={HomePage}
            options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="leaf" size={24} color="#4caf50" />
                ),
            }}
        />
    </Tab.Navigator>
  );
};
const customTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary:"#4caf50",
        secondaryContainer: '#c5e1a5', // Set your desired color
        secondary:'#c5e1a5',
        tertiary:'#c5e1a5',
        placeholder:"#4caf50",

    },
};
const AppNavigation = () => {
  const colorScheme = "light"; // Change to 'dark' for dark theme

  return (
    <PaperProvider theme={colorScheme === "dark" ? DarkTheme : customTheme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="App" component={TabNavigator} />
          <Drawer.Screen name="TApp" component={RegisterScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNavigation;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebfbee',
    },
    tabBar:{
        backgroundColor: '#c5e1a5',
        color:"#c5e1a5"
    }})
