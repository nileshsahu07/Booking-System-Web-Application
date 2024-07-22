import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users :[],
    loading : false,
    error:null
}

const fetchUsers = createAsyncThunk('/fetchusers' , async(_ ,{rejectWithValue})=>{
    try{
        const token = localStorage.getItem('token')
        const data = axios.get('',{
            Authorization : `Bearer${token}`
        })
        return data
    }
    catch(error){
        rejectWithValue(error.data.message)
    }
   
})