import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createEducation } from "./educationService";

export const addEducation = createAsyncThunk(
  "education/created",
  async (eduData, thunkAPI) => {
    try {
      return await createEducation(eduData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  education: "",
  status: "idle",
  error: null,
  completed: false,
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addEducation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addEducation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.education = action.payload;
      })
      .addCase(addEducation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default educationSlice.reducer;
