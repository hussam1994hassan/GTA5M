import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../functions/axiosClient";

export const discordCheck = createAsyncThunk(
    "discord/check",
    async (_, { rejectWithValue }) => {
        try {
            const secret = localStorage.getItem("secret");
            const res = await axiosClient.post(`/discord/check`, {
                secret,
            });
            const { user } = res.data;
            return user;
        } catch (err) {
            // return rejectWithValue(
            //     err.response?.data?.message || "User creation failed!"
            // );
        }
    }
);

const discordSlice = createSlice({
    name: "discord",
    initialState: {
        isAuthenticated: false,
        user: null,
        notifications: [],
        secret: null,
        status: "loading",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(discordCheck.pending, (state) => {
                state.status = "loading";
            })
            .addCase(discordCheck.fulfilled, (state, action) => {
                if (localStorage.getItem("secret")) {
                    state.status = "succeeded";
                    state.isAuthenticated = true;
                    state.user = action.payload;
                }
            })
            .addCase(discordCheck.rejected, (state) => {
                state.status = "failed";
                state.isAuthenticated = false;
                state.user = null;
                state.secret = null;
                localStorage.removeItem("secret");
            });
    },
});

export default discordSlice.reducer;
