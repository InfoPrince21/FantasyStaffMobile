import React, { useEffect } from "react";
import { Button, View, Text, ActivityIndicator, Alert } from "react-native";
import { initializeApp, firebase } from "firebase/app";
import "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

import { getAuth, onAuthStateChanged, signOut, indexedDBLocalPersistence } from 'firebase/auth';


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVnua4Gn_xBXqjvA0EddDy8jihrIi_jSo",
  authDomain: "staffdraft.firebaseapp.com",
  projectId: "staffdraft",
  storageBucket: "staffdraft.appspot.com",
  messagingSenderId: "363200078121",
  appId: "1:363200078121:web:52ee21722d258be8de5738",
  measurementId: "G-EBD2KWXXZY",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase only once
const auth = getAuth(app, {
  persistence: indexedDBLocalPersistence,
  popupRedirectResolver: undefined,
  errorFactory: undefined,
});

const app = initializeApp(firebaseConfig);
const db = firebase.firestore();

const FireBaseHome = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, can add additional logic here
        console.log("User is logged in");
      } else {
        // User is not signed in, redirect to sign in page
        navigation.navigate("SignInScreen");
      }
    });

    return () => unsubscribe(); // Remember to unsubscribe on component unmount
  }, [navigation]);

  const handlePress = () => {
    navigation.navigate("SignInScreen");
  };

  const handlePress2 = () => {
    navigation.navigate("SignUpScreen");
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Alert.alert("Logged Out", "You have been successfully logged out.");
      })
      .catch((error) => {
        // An error happened.
        Alert.alert("Error", "Failed to log out: " + error.message);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <Text>Checking authentication status...</Text>
      <Text>Try Signing In Here...</Text>
      <Button title="Sign In" onPress={handlePress} />
      <Button title="Create An Account" onPress={handlePress2} />
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

export default FireBaseHome;
