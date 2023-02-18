import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userTypes } from "./typeService";

export const fetchUserType = createAsyncThunk(
  "userType/fetched",
  async (thunkAPI) => {
    try {
      return await userTypes();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user_types: [],
  status: "idle",
  error: null,
};

const typeSlice = createSlice({
  name: "userType",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserType.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserType.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user_types = action.payload;
      })
      .addCase(fetchUserType.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default typeSlice.reducer;
