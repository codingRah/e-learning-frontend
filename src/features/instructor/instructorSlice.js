import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createInstructor, getSingleInstructor } from "./instructorService";

export const addInstructor = createAsyncThunk(
  "instructor/added",
  async (data, thunkAPI) => {
    try {
      return await createInstructor(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getInstructor = createAsyncThunk(
  "instructor/retrieve",
  async ({ access, id }, thunkAPI) => {
    try {
      return await getSingleInstructor(access, id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  instructor: "",
  status: "",
  error: null,
  completed: false,
};

const instructorSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addInstructor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addInstructor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.instructor = action.payload;
        state.completed = true;
        state.error = null;
      })
      .addCase(addInstructor.rejected, (state, action) => {
        state.status = "failed";

        state.error = action.payload;
        state.completed = false;
      })

      .addCase(getInstructor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getInstructor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.instructor = action.payload;
      })
      .addCase(getInstructor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default instructorSlice.reducer;
