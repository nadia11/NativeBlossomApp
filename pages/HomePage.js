// import React, { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { View, ImageBackground, StyleSheet, Text } from "react-native";
// import { Appbar } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";
// import { useFocusEffect } from "@react-navigation/native";
// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   //codes for nvigation to another page after timeout
//   // useEffect(() => {
//   //   console.log("HomePage");
//   //   const timer = setTimeout(() => {
//   //     navigation.navigate("Login"); // Redirect to the Login screen after 3 seconds
//   //   }, 1000);
//
//   //   return () => clearTimeout(timer); // Clear the timer if the component unmounts
//   // }, [navigation]);
//   useFocusEffect(
//     React.useCallback(() => {
//       const fetchData = async () => {
//         try {
//           const storedUsername = await AsyncStorage.getItem("username");
//           const storedEmail = await AsyncStorage.getItem("email");
//
//           if (storedUsername && storedEmail) {
//             setUsername(storedUsername);
//             setEmail(storedEmail);
//           }
//         } catch (error) {
//           console.error("Error fetching data from AsyncStorage:", error);
//         }
//       };
//
//       fetchData();
//     }, []) // The empty dependency array ensures this effect runs when the Home screen comes into focus
//   );
//
//   return (
//     <View style={styles.overlay}>
//       <Appbar.Header style={styles.customHeaderStyle} statusBarHeight={0}>
//         <Appbar.BackAction onPress={() => {}} />
//         <Appbar.Content title="Title" />
//         <Appbar.Action icon="calendar" onPress={() => {}} />
//         <Appbar.Action icon="magnify" onPress={() => {}} />
//       </Appbar.Header>
//       <View style={styles.content}>
//         <View>
//           <Text>Welcome, {username}!</Text>
//           <Text>Email: {email}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//   },
//   overlay: {
//     flex: 1,
//     //backgroundColor: 'rgba(128, 0, 128, 0.6)', // Purple background color with opacity
//   },
//   content: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   customHeaderStyle: {
//     // Change the background color to your desired color
//     elevation: 5,
//   },
// });
//
// export default HomeScreen;
import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Explore</Text>
          <TouchableOpacity style={styles.tryButton}>
            <Text style={styles.tryButtonText}>Try for free</Text>
          </TouchableOpacity>
        </View>

        {/* Categories Carousel */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {/* Repeat this View for each category */}
          <View style={styles.categoryItem}>
            <Image source={{ uri: 'https://placehold.co/100x100' }} style={styles.categoryImage} />
          </View>
          {/* ... other categories */}
        </ScrollView>

        {/* Tabs */}
        <View style={styles.tabs}>
          <Text style={styles.tabItem}>All</Text>
          <Text style={styles.tabItem}>Saved</Text>
          <Text style={styles.tabItem}>Video</Text>
          <Text style={styles.tabItem}>Plant care basics</Text>
        </View>

        {/* Tips Section */}
        <ScrollView style={styles.tipsSection}>
          {/* Repeat this View for each tip */}
          <View style={styles.tipItem}>
            <Text style={styles.tipTitle}>How to Prepare Your Garden for Fall</Text>
            <Text style={styles.tipDescription}>Here's a guide to help you ready your garden for fall</Text>
            <Image source={{ uri: 'https://placehold.co/300x200' }} style={styles.tipImage} />
          </View>
          {/* ... other tips */}
        </ScrollView>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebfbee',
  },
  tabBar:{
    backgroundColor: '#c5e1a5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#c5e1a5',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tryButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  tryButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  carousel: {
    paddingVertical: 16,
  },
  categoryItem: {
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#c5e1a5',
    borderRadius: 50,
    padding: 4,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#c5e1a5',
  },
  tabItem: {
    color: '#388e3c',
    fontWeight: 'bold',
  },
  tipsSection: {
    padding: 16,
  },
  tipItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  tipTitle: {
    color: '#388e3c',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  tipDescription: {
    color: '#757575',
    fontSize: 14,
    marginBottom: 16,
  },
  tipImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
});

export default HomeScreen;
