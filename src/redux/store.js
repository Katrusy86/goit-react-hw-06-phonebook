import {createStore} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';
import {configureStore, getDefaultMiddleware,} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, reducer)
  // export const store = createStore(persistedReducer, devToolsEnhancer())

  
  //  ====================Toolkit============
  
  export const store = configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  })
// =======================================

  export const persistore = persistStore(store);


export default store;
