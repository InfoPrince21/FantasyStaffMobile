import MainComponent from "./screens/MainComponent";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store} from "./redux/store";
import { PaperProvider } from "react-native-paper";
// import Loading from "./components/LoadingComponent";
console.disableYellowBox = true;

const App = () => {
  return (
    
        <Provider store={store}>
          <NavigationContainer>
            <PaperProvider>
              <MainComponent />
            </PaperProvider>
          </NavigationContainer>
        </Provider>
    
  );
};

export default App;
