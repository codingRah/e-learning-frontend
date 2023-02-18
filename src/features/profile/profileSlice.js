import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProfile,
  createProfile,
  updateProfile,
  uploadProfilePic,
  updateProfilePic,
  getProfilePic,
} from "./profileService";

const initialState = {
  profile: "",
  image_url: "",
  status: "idle",
  error: null,
};

export const getUserProfile = createAsyncThunk(
  "profile/get",
  async (data, thunkAPI) => {
    try {
      return await getProfile(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProfileImageUrl = createAsyncThunk(
  "profile/image/get",
  async ({ id, access }, thunkAPI) => {
    try {
      return await getProfilePic(id, access);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createUserProfile = createAsyncThunk(
  "profile/create",
  async (profileData, thunkAPI) => {
    try {
      return await createProfile(profileData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateUserProfile = createAsyncThunk(
  "profile/updated",
  async (updatedData, thunkAPI) => {
    try {
      return await updateProfile(updatedData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadPic = createAsyncThunk(
  "profile/image/uploaded",
  async (uploadData, thunkAPI) => {
    try {
      return await uploadProfilePic(uploadData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateImage = createAsyncThunk(
  "profile/image/updated",
  async (picData, thunkAPI) => {
    try {
      return await updateProfilePic(picData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: JSON.parse(localStorage.getItem("profile")) ?? "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(createUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(createUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(updateUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(getProfileImageUrl.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProfileImageUrl.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.image_url = action.payload;
      })
      .addCase(getProfileImageUrl.rejected, (state, action) => {
        state.status = "failed";
        state.image_url = "";
        state.error = action.payload;
      })

      .addCase(uploadPic.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadPic.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.image_url = action.payload;
      })
      .addCase(uploadPic.rejected, (state, action) => {
        state.status = "failed";

        state.error = action.payload;
      })

      .addCase(updateImage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateImage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.image_url = action.payload;
      })
      .addCase(updateImage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
