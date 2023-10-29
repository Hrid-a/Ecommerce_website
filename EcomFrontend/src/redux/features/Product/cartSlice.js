import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product) {
                const qty = product.qty + action.payload.qty;
                state.products = state.products.map(product => product.id === action.payload.id ? { ...product, qty } : product);
            } else {
                state.products = [...state.products, action.payload];
            }
        },
        removeItem: (state, action) => {
            const index = state.products.findIndex(item => item.id === action.payload.id);
            state.products.splice(index, 1);
        },
        resetCart: (state) => {
            state.products.length = 0;
        }


    }

})

export const { addToCart, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;