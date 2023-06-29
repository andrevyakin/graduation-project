import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../constants/baseUrl";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/products`);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        filtered: [],
        // related: []
        isLoading: false
    },
    reducers: {
        filterByCondition: (state, {payload}) => {
            console.log("payload", payload);
            state.filtered = null;
            /* switch (payload) {
                case payload.sortByPriceOrName.

            } */
            // state.filtered = state.list.filter(({price}) => price < payload);
        }
        /* getRelatedProducts: (state, { payload }) => {
             const list = state.list.filter(
                 ({ category: { id } }) => id === payload
             );
             state.related = shuffle(list);
         } */
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = false;
        });
        builder.addCase(getProducts.fulfilled, (state, {payload}) => {
            state.list = payload;
            state.isLoading = true;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        });
    }
});

export const {filterByCondition} = productsSlice.actions;

export default productsSlice.reducer;
