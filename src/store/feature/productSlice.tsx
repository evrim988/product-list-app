/**
 * 1- state
 * 2- fetch
 * 3- slice
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialProductState = {
    productList: [], 
    isProductListLoading: false 
}

export const fetchFindllProducts = createAsyncThunk(
    'product/fetchFindllProducts',
    async(searchTerm: string) => {
        return await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
        .then(res => res.json())
        .then(data => data);
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchFindllProducts.pending, (state) => {
            
            //fetch tetiklendiğinde devam ediyor olarak işaretle
            state.isProductListLoading = true;

        });
        build.addCase(fetchFindllProducts.fulfilled, (state, action) => {
            state.isProductListLoading = false;
            state.productList = action.payload.products; //ürünleri productListesinin içerisine aktarıyoruz.
        });
    }
})

export default productSlice.reducer