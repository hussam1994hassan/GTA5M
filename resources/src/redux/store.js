import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import discordSlice from "./reducers/discordSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        discord: discordSlice,
    },
});

export default store;
export * from "./reducers/authSlice";
export * from "./reducers/discordSlice";
