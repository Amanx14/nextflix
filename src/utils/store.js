import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const store = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        GPT : gptReducer,
        appConfig : configReducer
    }
})

export default store;