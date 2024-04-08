import * as React from "react";
import { Button, View, StyleSheet, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FirebaseApp from "./Firebase";
import SignInScreen from "./SignInScreen";

// Create Drawer navigator
const Drawer = createDrawerNavigator();

// Create the stack navigator
const Stack = createStackNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#040a2e" },
};
const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="HomeStack"
        component={FirebaseApp}
        options={({ navigation }) => ({
          title: "HomeStack",
        //   headerLeft: () => (
        //     <Icon
        //       name="home"
        //       //type="font-awesome"
        //       //iconStyle={styles.stackIcon}
        //       onPress={() => navigation.toggleDrawer()}
        //     />
        //   ),
        })}
      />
    </Stack.Navigator>
  );
};

const LoginNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
      <Stack.Screen
        name="Login"
        component={SignInScreen}
        options={({ navigation }) => ({
        //   headerLeft: () => (
        //     <Icon
        //       name="login"
        //       type="material-community"
        //       iconStyle={styles.stackIcon}
        //       onPress={() => navigation.toggleDrawer()}
        //     />
        //   ),
        })}
      />

    </Stack.Navigator>
  );
};

// const CustomDrawerContent = (props) => (
//   <DrawerContentScrollView {...props}>
//     <View style={styles.drawerHeader}>
//       {/* <View style={{ flex: 1 }}>
//                 <Image source={logo} style={styles.drawerImage} />
//             </View> */}
//       <View style={{ alignItems: "center", flex: 2 }}>
//         <Text style={styles.drawerHeaderText}>Staff Draft</Text>
//       </View>
//     </View>
//     <DrawerItemList {...props} labelStyle={{ fontWeight: "bold" }} />
//   </DrawerContentScrollView>
// );

const Main = () => {
  return (
    <View
    //   style={{
    //     flex: 1,
    //     paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    //   }}
    >
      <Drawer.Navigator
        initialRouteName="HomeDrawer"
        // drawerContent={CustomDrawerContent}
        drawerStyle={{ backgroundColor: "#d8d9d1" }}
      >
        <Drawer.Screen
          name="Login"
          component={LoginNavigator}
          options={{
            // drawerIcon: ({ color }) => (
            //   <Icon
            //     name="login"
            //     type="material-community"
            //     size={24}
            //     iconStyle={{ width: 24 }}
            //     color="#040a2e"
            //   />
            // ),
          }}
        />
        <Drawer.Screen
          name="HomeDrawer"
          component={HomeNavigator}
          options={{
            title: "HomeDrawer",
            // drawerIcon: ({ color }) => (
            //   <Icon
            //     name="home"
            //     type="font-awesome"
            //     size={24}
            //     iconStyle={{ width: 24 }}
            //     color="#040a2e"
            //   />
            // ),
          }}
        />
      </Drawer.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#040a2e',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;
