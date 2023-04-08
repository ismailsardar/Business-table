import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";
import settingsReducer from "../slice/settingsSlice";
export default configureStore({
    reducer:{
        settings:settingsReducer,
        product:productReducer,
    }
})