import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { toast } from "sonner";

const initialState = {
    UserBookings:[],
    loading : false,
    error: null
}

export const getUserBooking = createAsyncThunk("/UserOwnBookings", async(_,{rejectWithValue})=>{
    try {
        const token = localStorage.getItem('token')
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/getUserBooking`,
            {
                headers:{
                  Authorization:  `Bearer ${token}`
                }
            }
        )
        return res.data
        
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data : error.message);

    }
})

const userBookingSlice = createSlice({
    name:"userBookings",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder
        .addCase(getUserBooking.pending,(state)=>{
            state.loading = true
            state.error = null;
        })
        .addCase(getUserBooking.fulfilled,(state,action)=>{
            state.loading = false;
            console.log(action.payload)
            state.UserBookings = action.payload;
            toast.success(action.payload.message,{
                position:"top-center",
                duration:"1000",
            })
        })
        .addCase(getUserBooking.rejected,(state,action)=>{
            state.loading  = false;
            toast.error(action.payload.message || "Error fetching bookings", {
                position: "top-center",
                duration: 1000,
            });
        })
    }
})

export default userBookingSlice.reducer;