/**
 * Created by InspireUI on 18/02/2017.
 *
 * @format
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import store from "@store/configureStore";
import Router from "./Router";
import { ReduxNetworkProvider } from 'react-native-offline';


export default class ReduxWrapper extends Component {

render() {
    const per = persistStore(store);

    return (
      <Provider store={store}>
        <PersistGate persistor={per}>
          <ReduxNetworkProvider>
            <Router/>
          </ReduxNetworkProvider>
         </PersistGate>
      </Provider>
    );
  }
}
