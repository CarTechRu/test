import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiBasePath = process.env.CONFIG.API_BASEPATH;

const initialState = {
  car: null,
  status: "idle",
  error: null,
};

export const searchId = createAsyncThunk(
  "auctions/searchId",
  async (auctionId, thunkAPI) => {
    try {
      const res = await axios.get(apiBasePath + "/auction/:" + auctionId);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

const searchIdSlice = createSlice({
  name: "searchId",
  initialState,
  reducers: {
    clear(state) {
      state.car = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchId.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(searchId.fulfilled, (state, action) => {
        state.status = "successful";
        state.car = action.payload.auction;
      })
      .addCase(searchId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = searchIdSlice;

export const { clear } = actions;
export default reducer;
