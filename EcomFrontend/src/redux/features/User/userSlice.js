import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { req } from "../../../utils/axios";

export const userSignUp = createAsyncThunk("auth/userSignUp", async (userData, { rejectWithValue }) => {
    try {
        const { data } = await req.post("/signup", userData);
        return data;
    } catch (error) {
        const errorMessage = error.response.data.message || "Something Went Wrong Please try again";
        return rejectWithValue(errorMessage);
    }
})

export const userLogin = createAsyncThunk("auth/userLogin", async (userData, { rejectWithValue }) => {

    try {
        const { data } = await req.post("/login", userData);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export const userLogOut = createAsyncThunk("auth/userLogOut", async (_, { rejectWithValue }) => {

    try {
        await req.get("/logout");

    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});


export const updateUser = createAsyncThunk("user/updateUser", async (formData, { rejectWithValue }) => {
    try {
        const { data } = await req.put("/user/update", formData);
        return data;
    } catch (error) {
        const errorMessage = error.response.data.message || "something went Wrong";
        return rejectWithValue(errorMessage);
    }
})

export const forgotPass = createAsyncThunk("user/forgotPass", async (emailData, { rejectWithValue }) => {
    try {
        const { data } = await req.post("/forgotPassword", emailData);
        return data;
    } catch (error) {
        const errorMessage = error.response.data.message || "something went Wrong";
        return rejectWithValue(errorMessage);
    }
})

export const changePassword = createAsyncThunk("user/changePassword", async (userData, { rejectWithValue }) => {
    try {
        const { data } = await req.put("/password/update", userData);
        return data;
    } catch (error) {
        const errorMessage = error.response.data.message;
        return rejectWithValue(errorMessage);
    }
})

const initialState = {
    user: null,
    token: null,
    loading: false,
    isSuccess: false,
    error: "",
    message: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers:
        (builder) => {
            builder
                .addCase(userSignUp.pending, (state) => {
                    state.loading = true;
                })
                .addCase(userSignUp.fulfilled, (state) => {
                    state.loading = false;
                    state.isSuccess = true;
                    state.error = "";
                })
                .addCase(userSignUp.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                    state.isSuccess = false;
                }).addCase(userLogin.pending, (state) => {
                    state.loading = true;
                }).addCase(userLogin.fulfilled, (state, action) => {
                    state.loading = false;
                    state.isSuccess = true;
                    state.error = "";
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                }).addCase(userLogin.rejected, (state, action) => {
                    state.loading = false;
                    state.isSuccess = false;
                    state.error = action.payload;

                })
                .addCase(userLogOut.fulfilled, (state) => {
                    state.loading = false;
                    state.isSuccess = false;
                    state.error = "";
                    state.message = "";
                    state.token = null;
                    state.user = null;
                })
                .addCase(forgotPass.pending, (state) => {
                    state.message = "";
                    state.loading = true;
                    state.isSuccess = false;
                    state.error = "";
                })
                .addCase(forgotPass.fulfilled, (state, action) => {
                    state.message = action.payload.message;
                    state.loading = false;
                    state.isSuccess = true;
                    state.error = "";
                })
                .addCase(forgotPass.rejected, (state, action) => {
                    state.message = "";
                    state.loading = false;
                    state.isSuccess = false;
                    state.error = action.payload;
                })
                .addCase(updateUser.pending, (state) => {
                    state.message = "";
                    state.loading = true;
                    state.isSuccess = false;
                    state.error = "";
                })
                .addCase(updateUser.fulfilled, (state, action) => {
                    state.message = action.payload.message;
                    state.loading = false;
                    state.isSuccess = true;
                    state.error = "";
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                    localStorage.setItem('user', JSON.stringify(action.payload.user));
                })
                .addCase(updateUser.rejected, (state, action) => {
                    state.message = "";
                    state.loading = false;
                    state.isSuccess = false;
                    state.error = action.payload;
                })
                .addCase(changePassword.pending, (state) => {
                    state.message = "";
                    state.loading = true;
                    state.isSuccess = false;
                    state.error = "";
                })
                .addCase(changePassword.fulfilled, (state, action) => {
                    state.message = action.payload.message;
                    state.loading = false;
                    state.isSuccess = true;
                })
                .addCase(changePassword.rejected, (state, action) => {
                    state.message = "";
                    state.loading = false;
                    state.isSuccess = false;
                    state.error = action.payload;
                })

        }
});

export default authSlice.reducer;

