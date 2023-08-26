import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiBasePath = process.env.CONFIG.API_BASEPATH;

const initialState = {
  auctions: [],
  status: "idle",
  error: null,
};

export const update = createAsyncThunk(
  "auctions/update",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(apiBasePath + "/filterAuctions");
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(update.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(update.fulfilled, (state, action) => {
        state.status = "successful";
        state.auctions = action.payload.auctions;
      })
      .addCase(update.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default updateSlice.reducer;
