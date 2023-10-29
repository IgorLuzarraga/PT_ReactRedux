import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (page: number) => {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=6`,
    );
    return response.data;
  },
);
