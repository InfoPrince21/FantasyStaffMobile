import MainComponent from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store} from "./redux/store";
// import { PaperProvider } from "react-native-paper";

console.disableYellowBox = true;

const App = () => {
  return (
    
        <Provider store={store}>
          <NavigationContainer>
            {/* <PaperProvider> */}
              <MainComponent />
            {/* </PaperProvider> */}
          </NavigationContainer>
        </Provider>
    
  );
};

export default App;
