// 0. install @redux/toolkit, react-redux, redux-persist,redux

// 1. to install redux, remember to use @ symbol before the name, package-manager i @reduxjs/toolkit.
// 2. import configureStore from @reduxjs/toolkit
import {
      configureStore
} from "@reduxjs/toolkit"

// 3. import useDispatch and useSelector  from react-redux, this library contains the implementation redux for react.
// note: with the help of "as" keyword we can change the name of import
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";

// import {
//       persistStore, persistReducer
// } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

import {
      rootPersistConfig, rootReducer
} from "./rootReducer";
// creating a store.

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck:false, 
      imumtableCheck:false,
  })
});

const persistStor = persistStore(store);
const {dispatch} = store;
const useSelector = useAppSelector;
const useDispatch = ()=>useAppDispatch();
export  { store, persistStor, dispatch, useSelector, useDispatch };