import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductList = createAsyncThunk(
  "fetchProductList",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
  }
);

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductList.rejected, (state, action) => {
      console.log("error", action.payload);
      state.isError = true;
    });
  },
});
export default todoSlice.reducer;
