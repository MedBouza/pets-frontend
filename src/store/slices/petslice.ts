import { IPet } from "@/models/IPet";
import { createSlice } from "@reduxjs/toolkit";
import { getpet } from "../actions/petActions";

export interface PetState {
  pets?: IPet[];
  isLoading: boolean;
}
const initialState: PetState = {
  pets: undefined,
  isLoading: false,
};

const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getpet.fulfilled, (state, action) => {
      state.pets = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getpet.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getpet.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default petSlice.reducer;
