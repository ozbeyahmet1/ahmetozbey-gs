import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or another storage method

import productWidgetReducer from "./store/slices/productWidgetSlice";

const persistConfig = {
  key: "root",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  storage,
};

const persistedReducer = persistReducer(persistConfig, productWidgetReducer);

export const store = configureStore({
  reducer: {
    productWidgetReducer: persistedReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const ProductWidgetState = (state: RootState) => state.productWidgetReducer.products;
