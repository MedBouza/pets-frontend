import { IUser } from "@/models/IUser";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, signUp, updateUser } from "../actions/userActions";

export interface UserState {
  currentUser?: IUser;
  isLoading: boolean;
  isConnected: boolean;
}

const initialState: UserState = {
  isLoading: false,
  currentUser: undefined,
  isConnected: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //LOCAL reducer function
    setUser: (state, action: PayloadAction<IUser>) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    //async function
    //async function
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.isConnected = true;
    });
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.isConnected = true;
    });
    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload) {
        state.currentUser = action.payload;
        state.isLoading = false;
        state.isConnected = true;
        console.log(state.currentUser);
      }
    });
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isConnected = false;
      state.currentUser = undefined;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.currentUser = undefined;
      state.isLoading = false;
      state.isConnected = false;
    });
    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.isConnected = true;
    });
  },
});

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: UserState }) => state.user;

// Exports all actions
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
