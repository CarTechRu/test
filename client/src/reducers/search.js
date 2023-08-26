import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiBasePath = process.env.CONFIG.API_BASEPATH;

const initialState = {
  auctions: [],
  status: "idle",
  error: null,
};

export const search = createAsyncThunk(
  "auctions/search",
  async (query, thunkAPI) => {
    try {
      const res = await axios.get(
        apiBasePath + "/filterAuctions?search=" + query
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(search.fulfilled, (state, action) => {
        state.status = "successful";
        state.auctions = action.payload.auctions;
      })
      .addCase(search.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
