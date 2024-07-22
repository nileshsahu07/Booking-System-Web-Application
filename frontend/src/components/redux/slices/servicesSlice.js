import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
        `${import.meta.env.VITE_API_URL}/get_allservices`
      );
      // console.log(data.data.services)
      return data.data.services;
    } catch (error) {
      rejectWithValue(error.data.message);
    }
  }
);

const serviceSlice = createSlice({
  name: "service",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchService.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchService.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
        // console.log(state.services)
      })
      .addCase(fetchService.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default serviceSlice.reducer;
