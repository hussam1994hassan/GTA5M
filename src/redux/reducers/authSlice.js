import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../functions/axiosClient";

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await axiosClient.post(`/login`, { email, password });
            const { token } = res.data;
            localStorage.setItem("token", token); // تخزين التوكن
            return token;
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Login failed"
            );
        }
    }
);

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("No token");

            const res = await axiosClient.get("/me");

            return res.data;
        } catch (err) {
            return rejectWithValue(
                err.response?.data?.message || "Unauthorized"
            );
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: null,
        notifications: [],
        token: null,
        status: "loading",
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.notifications = [];
            state.status = "success";
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder

            // 🟢 تسجيل الدخول
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload;
                state.loading = false;
                state.isAuthenticated = true;
                state.status = "succeeded";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // 🟢 التحقق من المستخدم
            .addCase(checkAuth.pending, (state) => {
                state.status = "loading";
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.isAuthenticated = true;
                state.token = action.payload.token;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.status = "failed";
                state.isAuthenticated = false;
                state.user = null;
                state.token = null;
                state.notifications = [];
                localStorage.removeItem("token");
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
