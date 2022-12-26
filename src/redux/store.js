import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE
} from "redux-persist";
import storage from "redux-persist/lib/storage";
//reducers
import { contactsReducer } from './contacts/contacts-slice';
import filterReducer from "./filter/filter-slice";
import { authReducer } from "./auth/auth-slice";

//Persisting token field from outh slice to localstorage
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }), 
});

export const persistor = persistStore(store);


// const contactsPersistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['filter']
// }

// const reducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer
// });

// const persistedContactReducer = persistReducer(contactsPersistConfig, reducer)

// export const store = configureStore({
//     reducer: persistedContactReducer, 
//     middleware: getDefaultMiddleware => 
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });

// export const persistor = persistStore(store);    



