import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createIDCart } from "./IdCartService";

export const addIDCart = createAsyncThunk(
  "IDCart/added",
  async (IDdata, thunkAPI) => {
    try {
      return await createIDCart(IDdata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  idCart: "",
  status: "idle",
  error: null,
};

const IdCartSlice = createSlice({
  name: "IDCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addIDCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addIDCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.idCart = action.payload;
      })
      .addCase(addIDCart.rejected, (state, action) => {
        state.status = "failed";
        state.idCart = "";
        state.error = action.payload;
      });
  },
});

export default IdCartSlice.reducer;
