// MainComponent.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import FirebaseApp  from "../screens/Firebase";
import SignInScreen  from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import NewPasswordScreen from "./NewPasswordScreen";
import ConfirmEmailScreen from "./ConfirmEmailScreen";
import TeamStatsComponent from "../components/TeamStatsComponent";

const Stack = createStackNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#040a2e" },
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="FantasyStaff Home" component={FirebaseApp} />
    </Stack.Navigator>
  );
}

const LoginNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
      <Stack.Screen
        name="Login"
        component={SignInScreen}
      />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen} />
      <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
      <Stack.Screen name="New Password" component={NewPasswordScreen} />
    </Stack.Navigator>
  );
};

const StatsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Team Rankings"
        component={TeamStatsComponent}
      />
    </Stack.Navigator>
  );
};

// Drawer Navigator setup
const Drawer = createDrawerNavigator();

function MainComponent() {
  return (
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen name="Home Screen" component={HomeNavigator} />
      <Drawer.Screen name="Sign In" component={LoginNavigator} />
      <Drawer.Screen name="Stats" component={StatsNavigator}/>
      {/* Add more screens or navigators as Drawer.Screen components here */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: "#040a2e",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
});


export default MainComponent;
