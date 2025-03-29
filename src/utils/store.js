import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";

const store = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        GPT : gptReducer
    }
})

export default store;