import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import {
    persistReducer,
    persistStore,
    REGISTER,
    REHYDRATE,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
} from 'redux-persist';
import rootReducer from './Reducers';

const persistConfig = {
    key: '@shift:root',
    storage: AsyncStorage,
    whitelist: ['user'],
};
//Connecting redux with persist store

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});
export const persistor = persistStore(store);

export default store;
