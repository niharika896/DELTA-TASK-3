import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { combineReducers } from "redux";

import City from "../features/City"
import Name from "../features/Name";
import Email from "../features/Email";
import Image from "../features/Image";
import Wallet from "../features/Wallet";
import isLoggedIn from "../features/isLoggedIn";
import Type from "../features/ProfileType";
import vendorId from "../features/vendorId";

const rootReducer = combineReducers({
  City,
  Name,
  Email,
  Image,
  Wallet,
  isLoggedIn,
  Type,
  vendorId
});

// Persist config
const persistConfig = {
  key: "root",
  storage,
  blacklist:['Wallet']
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist action types that include non-serializables
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
