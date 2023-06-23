import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";

export const createStore = configureStore({
    reducer: {
        categories: categoriesSlice
    }
});
