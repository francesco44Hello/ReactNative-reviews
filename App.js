// import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import ReviewDetails from "./screens/reviewDetails";
import Header from "./shared/header";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        options={{
          headerStyle: { backgroundColor: "yellow" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          // style={styles.headerComponent}
          name="Home"
          component={Home}
          options={{
            title: 'GamerZone',
            headerTitleAlign: "center",
            // headerBackground: () => (
            //  <ImageHeader />
            // )
          }}
        />
        <Stack.Screen
          name="Details"
          component={ReviewDetails}
          options={{
            title: "Review Details",
            headerStyle: { backgroundColor: "#eee", height: "60" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    // headerComponent: {
    //   height: 300,
    //   backgroundColor: 'red'
    // }
})

