import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./slices/LoginSlice";
import serviceReducer from "./slices/servicesSlice"

const store = configureStore({
    reducer:{
        login:LoginReducer,
        service:serviceReducer
    }
})

export default store;
