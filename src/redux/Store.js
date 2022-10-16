import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        movies: moviesSlice,
        user: userSlice
    }
})

export default store;
