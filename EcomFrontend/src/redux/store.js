import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import userReducer from "./features/User/userSlice";
import productReducer from "./features/Product/productSlice";
import cartReducer from "./features/Product/cartSlice";
import reviewReducer from "./features/Product/reviewsSlice";
import orderReducer from "./features/orders/orderSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['user', 'cart'],
}

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    review: reviewReducer,
    order: orderReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: false,
})
export const persistor = persistStore(store)
export default store;




