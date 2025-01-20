import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {jwtDecode} from "jwt-decode"
import { toast } from "sonner";

const initialState = {
    loading: false,
    token:null,
    role:null,
    error:null,
    name:null,
}


export const login = createAsyncThunk('/login',async ( formData, {rejectWithValue})=>{
    try{
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/login` ,{
            ...formData
        })
        return res.data;
    }catch(error){
        return rejectWithValue(error)
    }
})

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        logout:(state)=>{
            state.loading = 'true',
            state.token = null ,
            state.role = null,
            state.name = null,
            localStorage.removeItem('token')
            localStorage.removeItem('role')         
        }
    }, 
    extraReducers:(builder)=>{
        builder.addCase(login.pending, (state)=>{
            state.loading = true

        }).addCase(login.fulfilled,(state,action)=>{
            const data = action.payload
            // console.log(action.payload.data)
            const token = data.token;
            state.loading = false;
            state.token = token;
           
            const decoded = jwtDecode(token)
            console.log(decoded)
            const {role,name,id} = decoded
            state.name = name
            // console.log(role)
            state.role = role

            localStorage.setItem('name',name)
            localStorage.setItem('token',token)
            localStorage.setItem('role',role)
            localStorage.setItem('userId',id)

            toast.success(action.payload.message,{
                position:"top-center",
                duration:"1000",
            })

        }).addCase(login.rejected,(state,action)=>{
            // state.error = action.payload 
            state.loading = false
            toast.error(action.payload.response.error,{
                 position:"top-center",
                 duration:"1500"
            })
        })
    }
})

export const {logout} = loginSlice.actions
export default loginSlice.reducer