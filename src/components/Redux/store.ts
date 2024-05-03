import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice';
import productReducer from './features/productSlice';
import LoadingReducer from './features/loadingSlice';

export const store = configureStore({
    reducer: {
        cartReducer,
        productReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;