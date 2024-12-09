import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

const initialState = {
    Registrations:[],
    loading : false,
    error:null,
}

export const SignUp = createAsyncThunk("/signup", async (formData, {rejectWithValue})=>{
    try{
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/signup`,{
            ...formData
        }
        )
        return res
    }
    catch(error){
       return rejectWithValue(error)
    }
})

const signupSlice = createSlice({
    name:"signUp",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder
        .addCase(SignUp.pending,(state)=>{
            state.loading = true;
        })
        .addCase(SignUp.fulfilled,(state,action)=>{
            state.loading = false;
            state.Registrations = action.payload;
            console.log(action.payload)
            toast.success("Successfully Registered")
        })
        .addCase(SignUp.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default signupSlice.reducer