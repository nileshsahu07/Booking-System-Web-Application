import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./slices/LoginSlice";
import serviceReducer from "./slices/servicesSlice"
import UsersReducer from "./slices/userSlice"
import BookingReducer from "./slices/BookingSlice"
import SignupReducer from "./slices/SignupSlice"

const store = configureStore({
    reducer:{
        login:LoginReducer,
        service:serviceReducer,
        users: UsersReducer,
        bookings:BookingReducer,
        registrations:SignupReducer,
    }
})

export default store;
