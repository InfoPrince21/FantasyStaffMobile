// MainComponent.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

// Example screens
const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text onPress={() => navigation.navigate("Details")}>Home Screen</Text>
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Details Screen</Text>
  </View>
);

// Stack Navigator setup
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// Drawer Navigator setup
const Drawer = createDrawerNavigator();

function MainComponent() {
  return (
      <Drawer.Navigator initialRouteName="Stack">
        <Drawer.Screen name="Stack" component={StackNavigator} />
        {/* Add more screens or navigators as Drawer.Screen components here */}
      </Drawer.Navigator>
  );
}

export default MainComponent;
