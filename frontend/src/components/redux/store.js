import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./slices/LoginSlice";
import serviceReducer from "./slices/servicesSlice"
import UsersReducer from "./slices/userSlice"

const store = configureStore({
    reducer:{
        login:LoginReducer,
        service:serviceReducer,
        users: UsersReducer
    }
})

export default store;
