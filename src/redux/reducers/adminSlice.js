import { createSlice } from "@reduxjs/toolkit";
import Admin from "../../models/Admin";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        users: [],
        status: "loading",
    },
    reducers: {},
});

export default adminSlice.reducer;
