import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { req } from "../../../utils/axios";

export const addReview = createAsyncThunk("review/addReview", async (reviewData, { rejectWithValue }) => {
    try {
        const { data } = await req.post("/review", reviewData);
        return data;
    } catch (error) {
        const errorMessage = error.response.data.message;
        return rejectWithValue(errorMessage);
    }
})
const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        loading: false,
        isSuccess: false,
        error: "",
        message: "",
    },
    reducers: {
        handleReviewError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(addReview.pending, (state) => {
                    state.loading = true;
                    state.isSuccess = false;
                    state.error = "";
                    state.message = "";
                })
                .addCase(addReview.fulfilled, (state, action) => {
                    state.loading = false;
                    state.isSuccess = true;
                    state.message = action.payload.message;
                    state.error = "";
                })
                .addCase(addReview.rejected, (state, action) => {
                    state.loading = false;
                    state.isSuccess = false;
                    state.message = "";
                    state.error = action.payload;
                })
        }


})

export const { handleReviewError } = reviewSlice.actions;
export default reviewSlice.reducer;