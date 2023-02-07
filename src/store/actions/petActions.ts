import axiosClient from "@/api";
import { IPet } from "@/models/IPet";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getpet = createAsyncThunk(
  "pets",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get<IPet[]>("pets");
      return response.data;
    } catch (error) {
      toast(error.message);
      return rejectWithValue(error);
    }
  }
);
