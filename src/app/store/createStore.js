import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";

export const createStore = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice
    },
    devTools: true
});
