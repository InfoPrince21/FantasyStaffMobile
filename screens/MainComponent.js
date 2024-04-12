// MainComponent.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import FireBaseHome  from "./FireBaseHome";
import SignInScreen  from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import AwardsScreen from "./AwardsScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import NewPasswordScreen from "./NewPasswordScreen";
import ConfirmEmailScreen from "./ConfirmEmailScreen";
import TeamStatsComponent from "../components/TeamStatsComponent";
import ChatScreen from "./ChatScreen";
import DraftComponent from "../components/DraftComponent";
import StudyFoodComponent from "../components/StudyFoodComponent";
import StatsComponent from "../components/StatsComponent";
import StaffScreen from "./StaffScreen";
import PrizesComponent from "../components/PrizesComponent";
import TeamsScreen from "./TeamsScreen";
import TeamDetialScreen from "./TeamDetialScreen";
import QuizComponent from "../components/QuizComponenet";
import FireBaseUsers from "./FireBaseUsers";


const Stack = createStackNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#040a2e" },
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="FantasyStaff Home" component={FireBaseHome} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen} />
      <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
      <Stack.Screen name="New Password" component={NewPasswordScreen} />
      <Stack.Screen name="FireBaseUsers" component={FireBaseUsers} />
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

const TeamsNavigator = () => {
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
const TeamStatsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Teams" component={TeamsScreen} />
      <Stack.Screen name="Team Detial" component={TeamDetialScreen} />
    </Stack.Navigator>
  );
};

const AwardsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Awards Stack" component={AwardsScreen} />
    </Stack.Navigator>
  );
};

const ChatNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Chat Room Stack" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const DraftNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Draft Room Stack" component={DraftComponent} />
    </Stack.Navigator>
  );
};

const StudyFoodNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Study Food Stack" component={StudyFoodComponent} />
    </Stack.Navigator>
  );
};

const RankingsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Rankings Stack" component={StatsComponent} />
    </Stack.Navigator>
  );
};

const QuizNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Quiz Stack" component={QuizComponent} />
    </Stack.Navigator>
  );
};

const PrizesNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Prizes Stack" component={PrizesComponent} />
    </Stack.Navigator>
  );
};

const StaffNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Staff Stack" component={StaffScreen} />
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
      <Drawer.Screen name="Team Stats" component={TeamStatsNavigator} />
      <Drawer.Screen name="Awards" component={AwardsNavigator} />
      <Drawer.Screen name="Chat Room" component={ChatNavigator} />
      <Drawer.Screen name="Draft Room" component={DraftNavigator} />
      <Drawer.Screen name="Study Food" component={StudyFoodNavigator} />
      <Drawer.Screen name="Rankings" component={RankingsNavigator} />
      <Drawer.Screen name="Quiz" component={QuizNavigator} />
      <Drawer.Screen name="Staff" component={StaffNavigator} />
      <Drawer.Screen name="Prizes" component={PrizesNavigator} />
      <Drawer.Screen name="Teams" component={TeamsNavigator} />
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
