import MainComponent from "./screens/MainComponent";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { Provider } from "react-redux";
// import { store, persistor } from "./redux/store";
// import { Provider as PaperProvider } from "react-native-paper";
// import Loading from "./components/LoadingComponent";
console.disableYellowBox = true;

const App = () => {
  return (
    // <Provider store={store}>
    //   <PaperProvider>
    <>
      <NavigationContainer>
        <MainComponent />
      </NavigationContainer>
    </>
    //   </PaperProvider>
    // </Provider>
  );
};

export default App;
