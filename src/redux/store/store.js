import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../user/userSlice";
import productReducer from "../addProducts/addProductsSlice";
import usersListReducer from "../adduser/addUserSlice";
const rootReducer = combineReducers({
  user: userReducer,
  items: productReducer,
  usersList: usersListReducer,
});
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  //   reducer: {
  //     // Add the generated reducer as a specific top-level slice
  //     user: userReducer,
  //   },

  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export default store;
