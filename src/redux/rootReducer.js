import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // it provides the access to localstorage.
import appReducer from "./slices/app";
import authReducer from "./slices/auth";
import sidebarReducer from "./slices/sidebar"
const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  sidebarToggle: sidebarReducer,
});
export { rootPersistConfig, rootReducer };
