import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { toast } from "sonner";

const initialState = {
    Bookings:[],
    loading : false,
    error: null
}

export const getBooking = createAsyncThunk("/getBookings" , async(_, {rejectWithValue})=>{
    try{
        const token = localStorage.getItem('token')
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/bookings`,
            {
                headers:{
                  Authorization:  `Bearer ${token}`
                }
            }
        )
        return res.data
    }catch(error){
        rejectWithValue(error)
    }
});

export const createBooking = createAsyncThunk("/createBooking", async (formData,{rejectWithValue})=>{
    try{
         const res = await axios.post(`${import.meta.env.VITE_API_URL}/create_booking`,
          formData ,{
            headers:{
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
      ) 
      console.log(res)
      return res;   
    }
    catch(error){
        rejectWithValue(error)
    }
})


const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder
        .addCase(getBooking.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getBooking.fulfilled,(state,action)=>{
            state.loading = false;
            console.log(action.payload.booking)
            state.Bookings = action.payload.booking
            toast.success(action.payload.message,{
                position:"top-center",
                duration:"1500"
           })
        })
        .addCase(getBooking.rejected,(state,action)=>{
            state.loading  = false;
            state.error = action.payload
            toast.error(action.payload.message,{
                position:"top-center",
                duration:"1500"
           })
        })
        .addCase(createBooking.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(createBooking.fulfilled,(state,action)=>{
            state.loading = false;
            toast.success(action.payload.data.message,{
                position:"top-center",
                duration:"1500"
           })
        })
        .addCase(createBooking.rejected,(state,action)=>{
            state.loading  = false;
            state.error = action.payload
            toast.error(action.payload.data.message,{
                position:"top-center",
                duration:"1500"
           })
        })
    }
})

export default bookingSlice.reducer;

