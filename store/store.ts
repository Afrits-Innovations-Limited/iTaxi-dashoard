import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore,
} from 'redux-persist';
import adminReducer from './adminSlice'
import userReducer from "./userSlice";
import toggleReducer from "./toggleSlice";
import cardReducer from "./cardSlice";
import carReducer from "./carSlice";
import currentCarReducer from "./currentCarSlice"


const persistConfig = {
    key: 'counter',
    storage,
};

const reducers = combineReducers({
    admin: adminReducer,
    user: userReducer,
    toggle: toggleReducer,
    card: cardReducer,
    car: carReducer,
    currentCar: currentCarReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch