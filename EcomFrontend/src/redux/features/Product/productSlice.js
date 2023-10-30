import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { req } from "../../../utils/axios";
import { selectUserToken } from "../User/userSlice";

export const addProduct = createAsyncThunk("product/addProduct", async (productData, { rejectWithValue, getState }) => {
    const token = selectUserToken(getState());
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            // Other headers and data
        },
    }
    try {
        const { data } = await req.post('/products/add', productData, config);
        return data;
    } catch (error) {
        const errorMessage = error.response.data.message || "Something went wrong";
        return rejectWithValue(errorMessage);
    }
});

export const updateTheProduct = createAsyncThunk("product/updateTheProduct", async (data, { rejectWithValue, getState }) => {
    const { id, productData } = data;
    const token = selectUserToken(getState());
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            // Other headers and data
        },
    }
    try {
        console.log(id)
        const { data } = await req.put(`/admin/product/${id}`, productData, config);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.response.data);
    }
});

export const removeProduct = createAsyncThunk("porduct/removeProduct", async (productId, { rejectWithValue, getState }) => {
    const token = selectUserToken(getState());
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            // Other headers and data
        },
    }
    try {
        return await req.delete(`/admin/product/${productId}`, config);
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'An error occurred.';
        return rejectWithValue(errorMessage);
    }
})



const initialState = {
    products: [],
    totalProducts: 0,
    loading: false,
    isSuccess: false,
    error: "",
    message: "",
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        handleProductError: (state, action) => {
            state.error = action.payload;
        },
        addToProducts: (state, action) => {
            state.products = [...action.payload];
            // state.totalProducts = action.payload;
        }

    },
    extraReducers:
        (builder) => {
            builder
                .addCase(addProduct.pending, (state) => {
                    state.loading = true;
                    state.error = "";
                    state.message = "";
                    state.isSuccess = false;
                })
                .addCase(addProduct.fulfilled, (state, action) => {
                    state.loading = false;
                    state.error = "";
                    state.isSuccess = true;
                    state.message = action.payload.message;
                })
                .addCase(addProduct.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                    state.isSuccess = false;
                    state.message = "";
                })
                .addCase(updateTheProduct.pending, (state) => {
                    state.loading = true;
                    state.error = "";
                    state.message = "";
                    state.isSuccess = false;
                })
                .addCase(updateTheProduct.fulfilled, (state, action) => {
                    state.loading = false;
                    state.error = "";
                    state.isSuccess = true;
                    state.message = action.payload.message;
                })
                .addCase(updateTheProduct.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                    state.isSuccess = false;
                    state.message = "";
                })
                .addCase(removeProduct.pending, (state) => {
                    state.loading = true;
                    state.error = "";
                    state.message = "";
                    state.isSuccess = false;
                })
                .addCase(removeProduct.fulfilled, (state, action) => {
                    state.loading = false;
                    state.error = "";
                    state.isSuccess = true;
                    state.message = action.payload.data.message;
                })
                .addCase(removeProduct.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                    state.isSuccess = false;
                    state.message = "";
                })
        }
})


export const { handleProductError, addToProducts } = productSlice.actions;
export default productSlice.reducer;