import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import tweetreducer from "./tweetreducer";
import { logger } from "redux-logger";

const persistConfig = {
  key: "redux-crud",
  storage
};

const persistedReducer = persistReducer(persistConfig, tweetreducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  let persistor = persistStore(store);
  return { store, persistor };
};
