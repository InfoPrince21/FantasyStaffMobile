import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {

   const navigation = useNavigation(); 

   return (
     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
       <Text>Sign In Screen</Text>
       <Text>
         <Button
           onPress={() => {
             navigation.navigate("Login");
           }}
         >
           Login
         </Button>
         <Button
           onPress={() => {
             navigation.navigate("Sign Up");
           }}
         >
           Sign Up
         </Button>
         <Button
           onPress={() => {
             navigation.navigate("Confirm Email");
           }}
         >
           Confirm Email
         </Button>
         <Button
           onPress={() => {
             navigation.navigate("Forgot Password");
           }}
         >
           Forgot Password
         </Button>
         <Button
           onPress={() => {
             navigation.navigate("New Password");
           }}
         >
           New Password
         </Button>
       </Text>
     </View>
   );
};

export default SignInScreen;
