
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { version } from "os";
import { persistReducer, persistStore } from "redux-persist";
// import createCompressEncryptor from "redux-persist-transform-compress-encrypt";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "../slices/rootReducer";




const storeName = `store-$${process.env.NEXT_APP_PROJECT_NAME}`
const REACT_APP_ENCRYPTION_KEY = `wts#232TEST&%@#*@`;

const persistConfig = {
    key: storeName,
    storage,
    version: 1
}

const _combined = combineReducers(rootReducer)

const persistedReducer = persistReducer(
    persistConfig,
    _combined
) as unknown as typeof _combined

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: process.env.NODE_ENV === 'development'
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch