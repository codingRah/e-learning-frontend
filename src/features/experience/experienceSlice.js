import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createExp } from "./experienceService";

export const addExp = createAsyncThunk(
  "experience/added",
  async (expData, thunkAPI) => {
    console.log(expData);
    try {
      return await createExp(expData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  experience: "",
  status: "idle",
  error: null,
};

const experienceSlice = createSlice({
  name: "experiece",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addExp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addExp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.experience = action.payload;
        state.error = null;
      })
      .addCase(addExp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default experienceSlice.reducer;
