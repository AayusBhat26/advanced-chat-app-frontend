// before import and using, install redux library.
// it will take all the slices and it will combine all the reducers.
// reducers are just simple function in js.

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // it provides the access to localstorage.
import appReducer from "./slices/app";
import authReducer from "./slices/auth";
import sidebarReducer from "./slices/sidebar"

// nslices.

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-", //
  // whiteList:[], // list of names, whose data would be saved .
  // blackList:[], // list of names, whose data would not be saved
};
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  sidebarToggle: sidebarReducer,
});
export { rootPersistConfig, rootReducer };
