import {
	configureStore,
	createSerializableStateInvariantMiddleware,
} from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import logger, { createLogger } from "redux-logger";
import goalsSlice from "./store/goalsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};
const rootReducer = combineReducers({
	goals: goalsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 	import.meta.env.MODE !== "product"
// 		? getDefaultMiddleware().concat(logger)
// 		: getDefaultMiddleware();

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleWare) =>
		getDefaultMiddleWare({
			serializableCheck: false,
		}),
	// middleware,
	// devTools: import.meta.env.Mode != "product",
});

export default store;
