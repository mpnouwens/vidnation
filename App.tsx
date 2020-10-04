import React from "react";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import "redux";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./navigation";
import { AppearanceProvider } from "react-native-appearance";
import { StatusBar } from "./components";

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <AppearanceProvider>
        <Provider store={store}>
          <NavigationContainer>
            <StatusBar/>
            <Routes />
          </NavigationContainer>
        </Provider>
      </AppearanceProvider>
    );
  }

  async _cacheResourcesAsync() {
    const images = [
      require("./assets/icon.png"),
      require("./assets/logo.png"),
      require("./assets/movies.png"),
      require("./assets/series.png"),
      require("./assets/moviesDark.png"),
      require("./assets/seriesDark.png"),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}
