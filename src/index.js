import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import storeFunc from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = storeFunc();
console.log(storeFunc());
ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<h1>PersistorLoading .....</h1>}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
