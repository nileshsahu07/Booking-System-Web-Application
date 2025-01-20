import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

const initialState = {
  services: [],
  loading: false,
  error: null,
};


export const fetchService = createAsyncThunk(
  "/fetchservice",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/get_allServices`
      );

      return data.data.services;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const createServices = createAsyncThunk("/createServices",async(fromData,{rejectWithValue})=>{
  try{
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/create_services`,
          fromData ,{
            headers:{
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
      )
      return res;   
  }
  catch(error){
     return rejectWithValue(error.response ? error.response.data : error.message);
  }
})

export const deleteService =  createAsyncThunk("/deleteService", async(id, {rejectWithValue})=>{
  try{
     await axios.delete(`${import.meta.env.VITE_API_URL}/delete_service/${id}`,
      {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    )
  }catch(error){
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
})

export const updateService = createAsyncThunk("/updateService" , async({id,data} , {rejectWithValue})=>{
    try{
        await axios.put(`${import.meta.env.VITE_API_URL}/update_services/${id}`,
            data,
          {
            headers:{
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        )
    }catch(error){
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
})

const serviceSlice = createSlice({
  name: "service",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchService.pending, (state) => {
        state.loading = true;
        toast.success("continue....",{
          duration:"1000"
        })
      })
      .addCase(fetchService.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
      })
      .addCase(fetchService.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(createServices.pending,(state)=>{
        state.loading = true;
      })
      .addCase(createServices.fulfilled,(state)=>{
        state.loading = false;
        toast.success("New service successfully created")
      })
      .addCase(createServices.rejected , (state,action)=>{
        state.loading = false;
        state.error = action.payload;
        toast.error("failed to create new service")
      })
      .addCase(updateService.pending,(state)=>{
        state.loading = true;
      })
      .addCase(updateService.fulfilled,(state,action)=>{
          state.loading = false;
          console.log(action.payload)
        toast.success("Service Updated Successfully")
      })
      .addCase(updateService.rejected , (state,action)=>{
        state.loading = false;
        state.error = action.payload;
        toast.error("failed to update service")
      })
      .addCase(deleteService.pending,(state)=>{
        state.loading = true;
      })
      .addCase(deleteService.fulfilled,(state)=>{
        state.loading = false;
        toast.success("Service deleted successfully")
      })
      .addCase(deleteService.rejected , (state,action)=>{
        state.loading = false;
        state.error = action.payload;
        toast.error("failed to delete service")
      })
  },
});

export default serviceSlice.reducer;
