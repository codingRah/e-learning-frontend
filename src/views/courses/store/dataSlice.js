import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { createCourse } from "../../../services/courseService";

export const newCourse = createAsyncThunk(
  "courses/added",
  async (data, thunkAPI) => {
    try {
      return await createCourse(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  course: "",
  courses: [],
  status: "idle",
  error: null,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newCourse.pending, (state) => {
        state.status = "loading";
      })

      .addCase(newCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.course = action.payload;
      })
      .addCase(newCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default courseSlice.reducer;
