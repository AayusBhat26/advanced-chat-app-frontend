// 0. install @redux/toolkit, react-redux, redux-persist

// 1. to install redux, remember to use @ symbol before the name, package-manager i @reduxjs/toolkit.
// 2. import configureStore from @reduxjs/toolkit
import {
      configureStore
} from "@reduxjs/toolkit"

// 3. import useDispatch and useSelector  from @reduxjs/toolkit
// note: with the help of "as" keyword we can change the name of import
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from "react-redux";

import {
      persistStore, persistReducer
} from "redux-persist"
