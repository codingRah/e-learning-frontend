import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { createCourse , fetchCourseCategory, getUsersAllCourse, updateCourse } from "../../../services/courseService";

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


export const fetchUsersCourse = createAsyncThunk(
  "fetch/users/courses",
  async(access, thunkAPI) => {
    try{  
      return await getUsersAllCourse(access)
    }catch(error){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const editCourse = createAsyncThunk(
  "course/updated", 
  async (data, thunkAPI) => {
    try{
      return await updateCourse(data)
    }catch(error){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const fetchCategory = createAsyncThunk(
  "category/fetched", 
  async(access, thunkAPI) => {
    try{
      return await fetchCourseCategory(access)
    }catch(error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const initialState = {
  course: "",
  courses: [],
  course_categories : [],
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
      })


      // fetch category

      .addCase(fetchCategory.pending, state => {
        state.status = "loading"
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.course_categories = action.payload
        state.status = "succeeded"
      }).addCase(fetchCategory.rejected, (state, action) => {
        state.error = action.payload
        state.status = "failed"
      })

      // fetch users course
      .addCase(fetchUsersCourse.pending, state => {
        state.status = "loading"
      })
      .addCase(fetchUsersCourse.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.courses = action.payload
      })
      .addCase(fetchUsersCourse.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })

      // update course
      .addCase(editCourse.pending, (state) => {
        state.status = "loading"
      })
      .addCase(editCourse.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.course = action.payload
      })
      .addCase(editCourse.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
  },
});

export default courseSlice.reducer;
