import axiosClient from "@/api";
import { SignInData, IUser, SignInResponse, SignUpData } from "@/models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const login = createAsyncThunk(
  "users/login",
  async (data: SignInData, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post<SignInResponse>(
        "users/login",
        data
      );
      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;

      localStorage.setItem("access-token", accessToken);
      localStorage.setItem("refresh-token", refreshToken);

      return { accessToken, refreshToken, ...response.data.user };
    } catch (error) {
      toast(error.message);
      return rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk("users/logout", async () => {
  try {
    localStorage.clear();
  } catch (error) {
    toast(error.message);
  }
});

export const signUp = createAsyncThunk(
  "users/create",
  async (data: SignUpData) => {
    try {
      const response = await axiosClient.post<SignInResponse>(
        "users/create",
        data
      );
      localStorage.setItem("access-token", response.data.accessToken);
      localStorage.setItem("refresh-token", response.data.refreshToken);

      return response.data;
    } catch (error) {
      toast(error.message);
      console.log(error.message);
    }
  }
);
export const updateUser = createAsyncThunk(
  "users/update",
  async (data: IUser) => {
    const response = await axiosClient.patch<IUser>("users/update", data);
    console.log(response.data);
    return response.data;
  }
);
