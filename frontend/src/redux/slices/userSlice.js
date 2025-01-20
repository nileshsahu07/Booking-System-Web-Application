import { createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users :[],
    loading : false,
    error:null
}

 const fetchUsers = createAsyncThunk('users/fetchUsers' , async(_ ,{rejectWithValue})=>{
    try{
        const token = localStorage.getItem('token')
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/all_users`,
                {
                    headers:{
                    Authorization:  `Bearer ${token}`
                    }
                }
        )
        return response.data.users;
    }
    catch(error){
        if (!error.response) {
            throw error;
          }
          return rejectWithValue(error.response ? error.response.data : error.message);
    }
   
})

export const DeactivateUser = createAsyncThunk('/users/deactivateUser',async(id, {rejectWithValue})=>{
    try{
        const token = localStorage.getItem('token')
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/deactivate_user/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    }catch(error){
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
})


export const activateUser = createAsyncThunk('/users/activateUser', async(id, {rejectWithValue})=>{
    try{
    const token = localStorage.getItem('token');
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/activate_user/${id}`, {
      headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    }catch(error){
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
  })


const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending , (state)=>{
            state.loading = true;
            state.error = null;

        })
        .addCase(fetchUsers.fulfilled, (state,action)=>{
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})


export default userSlice.reducer;
export{fetchUsers};