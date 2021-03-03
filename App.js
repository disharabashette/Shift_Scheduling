import React from "react";
import NavigationContainer from "./src/shared/NavigationContainer";
import 'react-native-gesture-handler';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/store/Store';


console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer/>
        </PersistGate>
      </ReduxProvider>
    );
  }
}