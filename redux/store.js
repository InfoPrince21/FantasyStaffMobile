import {
  configureStore,
  getDefaultMiddleware,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistCombineReducers } from "redux-persist";
import {teamsReducer} from "../slices/teamsSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  debug: true,
};

const rootReducer = persistCombineReducers(persistConfig, {
  teams: teamsReducer,
  // Add other reducers here if needed
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }),
});

export const persistor = persistStore(store);
