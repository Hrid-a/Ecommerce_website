import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { req } from "../../../utils/axios";
import { selectUserToken } from "../User/userSlice";


export const createOrder = createAsyncThunk("order/createOrder", async (buyerInfo, { rejectWithValue, getState }) => {
    const token = selectUserToken(getState());
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            // Other headers and data
        },
    }
    console.log(config);
    try {
        const { data } = await req.post("/order/create", buyerInfo, config);
        return data;
    } catch (error) {
        const errorMessage = error.response.data.message || "Something went wrong";
        return rejectWithValue(errorMessage);
    }
});

export const updateOrder = createAsyncThunk("order/updateOrder", async ({ _id, ...rest }, { rejectWithValue, getState }) => {
    const token = selectUserToken(getState());
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            // Other headers and data
        },
    }
    try {
        const { data } = await req.put(`/admin/order/${_id}`, rest, config);
        return data;
    } catch (error) {
        const errorMessage = error.response.data.message;
        return rejectWithValue(errorMessage);
    }
});

export const deleteOrder = createAsyncThunk("order/deleteOrder", async (id, { rejectWithValue, getState }) => {
    const token = selectUserToken(getState());
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            // Other headers and data
        },
    }
    try {
        const { data } = await req.delete(`/admin/order/${id}`, config);
        return data;
    } catch (error) {
        const errorMessage = error.response.data.message || "something Went Wrong please try again";
        return rejectWithValue(errorMessage);
    }
})

const initialState = {
    loading: false,
    error: "",
    message: "",
    isSuccess: false,
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        handleorderError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.loading = true;
                state.error = "";
                state.message = "";
                state.isSuccess = false;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.isSuccess = false;
                state.message = "";
            })
            .addCase(updateOrder.pending, (state) => {
                state.loading = true;
                state.error = "";
                state.message = "";
                state.isSuccess = false;
            })
            .addCase(updateOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(updateOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.isSuccess = false;
                state.message = "";
            })
            .addCase(deleteOrder.pending, (state) => {
                state.loading = true;
                state.error = "";
                state.message = "";
                state.isSuccess = false;
            })
            .addCase(deleteOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(deleteOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.isSuccess = false;
                state.message = "";
            })
    }
})

export const { handleorderError } = orderSlice.actions;

export default orderSlice.reducer;